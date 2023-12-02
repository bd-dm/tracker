import { Controller, Get, Param } from '@nestjs/common';
import { ProductPricesService } from './product-prices.service';

@Controller('product-prices')
export class ProductPricesController {
  constructor(private readonly productPricesService: ProductPricesService) {}

  @Get()
  findAll() {
    return this.productPricesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPricesService.findOne(id);
  }
}
