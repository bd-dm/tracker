import { ScrapperFn } from './types';
import path from 'node:path';

interface OzonPriceState {
  isAvailable: boolean;
  cardPrice: string;
  price: string;
  originalPrice: string;
  showOriginalPrice: boolean;
  link: string;
}

const screenshotsDir = path.join(
  __dirname,
  '..',
  '..',
  '..',
  'data',
  'screenshots',
);

export const ozonScrapper: ScrapperFn = async (page) => {
  await page.waitForTimeout(10_000);
  await page.screenshot({
    path: path.join(screenshotsDir, 'latest-ozon.png'),
  });

  const webPriceLocator = page.locator('[id^="state-webPrice-"]');
  await webPriceLocator.waitFor({ state: 'attached', timeout: 30_000 });

  const priceStateText = await webPriceLocator.getAttribute('data-state');
  const priceState = JSON.parse(priceStateText) as OzonPriceState;
  const price = priceState.cardPrice.replace(/\D/g, '');

  return parseInt(price, 10);
};
