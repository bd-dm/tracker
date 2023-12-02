import { Module } from '@nestjs/common';
import { ScrapperService } from './scrapper.service';
import { ProductPricesModule } from '../product-prices/product-prices.module';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [ProductPricesModule, ProductsModule],
  providers: [ScrapperService],
  exports: [ScrapperService],
})
export class ScrapperModule {}
