import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ScrapperModule } from '../scrapper/scrapper.module';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [ScrapperModule, ProductsModule],
  providers: [TasksService],
})
export class TasksModule {}
