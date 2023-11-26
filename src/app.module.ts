import { Module } from '@nestjs/common';
import { StoresModule } from './stores/stores.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [StoresModule, ProductsModule],
})
export class AppModule {}
