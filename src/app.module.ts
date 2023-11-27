import { Module } from '@nestjs/common';
import { StoresModule } from './stores/stores.module';
import { ProductsModule } from './products/products.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';
import { ScrapperModule } from './scrapper/scrapper.module';
import { ProductPricesModule } from './product-prices/product-prices.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TasksModule,
    StoresModule,
    ProductsModule,
    ScrapperModule,
    ProductPricesModule,
  ],
})
export class AppModule {}
