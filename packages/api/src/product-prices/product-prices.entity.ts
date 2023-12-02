import { EntityProduct } from '../products/products.entity';
import { ApiProperty } from '@nestjs/swagger';

export class EntityProductPrice {
  @ApiProperty()
  id: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  productId: string;
  product?: EntityProduct;
}
