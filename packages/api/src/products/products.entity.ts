import { EntityProductPrice } from '../product-prices/product-prices.entity';
import { ApiProperty } from '@nestjs/swagger';
import { EntityStore } from '../stores/stores.entity';

export class EntityProduct {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  url: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  storeId: string;
  store?: EntityStore;
  prices?: EntityProductPrice[];
}
