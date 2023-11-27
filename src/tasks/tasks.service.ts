import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ScrapperService } from '../scrapper/scrapper.service';
import configuration from '../config/configuration';

@Injectable()
export class TasksService {
  constructor(private readonly scrapperService: ScrapperService) {}

  @Cron(configuration().cron)
  async handleCron() {
    await this.scrapperService.scrapeProducts();
  }
}
