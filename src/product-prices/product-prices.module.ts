import { Module } from '@nestjs/common';
import { ProductPricesService } from './product-prices.service';
import { ProductPricesController } from './product-prices.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ProductPricesController],
  providers: [ProductPricesService, PrismaService],
  exports: [ProductPricesService],
})
export class ProductPricesModule {}
