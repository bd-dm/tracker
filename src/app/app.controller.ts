import { Controller, Get } from '@nestjs/common';
import { ScrapperService } from '../scrapper/scrapper.service';

@Controller('app')
export class AppController {
  constructor(private readonly scrapperService: ScrapperService) {}

  @Get('run-scrapping')
  runScrapping() {
    return this.scrapperService.scrapeProducts();
  }
}
