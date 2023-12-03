import { Controller, Get, Param } from '@nestjs/common';
import { ProductPricesService } from './product-prices.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EntityProductPrice } from './product-prices.entity';

@ApiTags('product-prices')
@Controller('product-prices')
export class ProductPricesController {
  constructor(private readonly productPricesService: ProductPricesService) {}

  @Get()
  @ApiOkResponse({
    type: [EntityProductPrice],
  })
  findAll() {
    return this.productPricesService.findAll();
  }

  @Get(':productId')
  @ApiOkResponse({
    type: [EntityProductPrice],
  })
  findByProduct(@Param('productId') productId: string) {
    return this.productPricesService.findByProduct(productId);
  }
}
