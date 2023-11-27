import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ScrapperService } from '../scrapper/scrapper.service';

@Injectable()
export class TasksService {
  constructor(private readonly scrapperService: ScrapperService) {}

  @Cron('*/30 * * * * *')
  async handleCron() {
    await this.scrapperService.scrapeProducts();
  }
}
