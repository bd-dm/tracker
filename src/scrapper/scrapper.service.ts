import { Injectable } from '@nestjs/common';
import { chromium } from 'playwright';
import { ProductsService } from '../products/products.service';
import { scrappers } from './modules';
import { ProductPricesService } from '../product-prices/product-prices.service';

@Injectable()
export class ScrapperService {
  constructor(
    private productsService: ProductsService,
    private productPricesService: ProductPricesService,
  ) {}

  async getProductInfo(productId: string) {
    return this.productsService.findOne(productId);
  }

  async scrapeProducts() {
    const products = await this.productsService.findAll();

    for (const product of products) {
      console.log(`Scrapping product "${product.name}" (id: ${product.id})`);
      const price = await this.scrapeProductPrice(product.id);
      console.log(`Scrapping done. Price: ${price}`);

      if (price !== null) {
        await this.productPricesService.create({
          productId: product.id,
          price,
        });
      }
    }
  }

  async scrapeProductPrice(productId: string): Promise<number | null> {
    const product = await this.getProductInfo(productId);

    if (!product) {
      throw new Error(`Product ${productId} not found`);
    }

    const scrapperName = product.store.scrapper;
    const scrapper = scrappers[scrapperName];

    if (!scrapper) {
      throw new Error(`Scrapper ${scrapperName} not found`);
    }

    const browser = await chromium.launch({
      headless: true,
    });
    const context = await browser.newContext({
      extraHTTPHeaders: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    });
    const page = await context.newPage();

    await page.goto(product.url);

    // Bypass Cloudflare
    {
      await new Promise((resolve) =>
        setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)),
      );
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await new Promise((resolve) =>
        setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)),
      );
    }

    const screnshotPath =
      `data/screenshots/${scrapperName}-${new Date().toISOString()}.png`.replace(
        /:/g,
        '-',
      );
    console.log(`Saving screenshot: ${screnshotPath}`);

    await page.screenshot({
      path: screnshotPath,
    });

    try {
      const price = await scrapper(page);

      await browser.close();
      return price;
    } catch (e) {
      await browser.close();

      return null;
    }
  }
}
