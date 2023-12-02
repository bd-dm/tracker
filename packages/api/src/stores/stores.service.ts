import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoresService {
  constructor(private prismaService: PrismaService) {}

  create(createStoreDto: CreateStoreDto) {
    return this.prismaService.store.create({
      data: createStoreDto,
    });
  }

  findAll() {
    return this.prismaService.store.findMany();
  }

  findOne(id: string) {
    return this.prismaService.store.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    return this.prismaService.store.update({
      where: {
        id,
      },
      data: updateStoreDto,
    });
  }

  remove(id: string) {
    return this.prismaService.store.delete({
      where: {
        id,
      },
    });
  }
}
