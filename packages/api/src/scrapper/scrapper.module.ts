import { Module } from '@nestjs/common';
import { ScrapperService } from './scrapper.service';
import { ProductPricesModule } from '../product-prices/product-prices.module';
import { ProductsModule } from '../products/products.module';
import { ScrapperController } from './scrapper.controller';

@Module({
  imports: [ProductPricesModule, ProductsModule],
  controllers: [ScrapperController],
  providers: [ScrapperService],
  exports: [ScrapperService],
})
export class ScrapperModule {}
