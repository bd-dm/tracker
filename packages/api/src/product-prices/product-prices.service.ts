import { Injectable } from '@nestjs/common';
import { CreateProductPriceDto } from './dto/create-product-price.dto';
import { UpdateProductPriceDto } from './dto/update-product-price.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductPricesService {
  constructor(private prismaService: PrismaService) {}

  create(createProductPriceDto: CreateProductPriceDto) {
    return this.prismaService.productPrice.create({
      data: createProductPriceDto,
    });
  }

  findAll() {
    return this.prismaService.productPrice.findMany();
  }

  findByProduct(productId: string) {
    return this.prismaService.productPrice.findMany({
      where: { productId },
    });
  }

  findOne(id: string) {
    return this.prismaService.productPrice.findUnique({
      where: { id },
    });
  }

  update(id: string, updateProductPriceDto: UpdateProductPriceDto) {
    return this.prismaService.productPrice.update({
      where: { id },
      data: updateProductPriceDto,
    });
  }

  remove(id: string) {
    return this.prismaService.productPrice.delete({
      where: { id },
    });
  }
}
