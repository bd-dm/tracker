import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule],
  providers: [AppService, PrismaService],
})
export class AppModule {}
