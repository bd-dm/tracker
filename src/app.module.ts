import { Module } from '@nestjs/common';
import { StoresModule } from './stores/stores.module';
import { ProductsModule } from './products/products.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';
import { ScrapperModule } from './scrapper/scrapper.module';
import { ProductPricesModule } from './product-prices/product-prices.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TasksModule,
    StoresModule,
    ProductsModule,
    ScrapperModule,
    ProductPricesModule,
  ],
})
export class AppModule {}
