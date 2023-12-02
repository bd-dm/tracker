import { ApiProperty } from '@nestjs/swagger';
import { Scrapper } from '@prisma/client';

export class CreateStoreDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  scrapper: Scrapper;
}
