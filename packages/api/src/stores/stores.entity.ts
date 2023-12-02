import { Scrapper } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { EntityProduct } from '../products/products.entity';

export class EntityStore {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  scrapper: Scrapper;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  products?: EntityProduct[];
}
