import { Controller, Get } from '@nestjs/common';
import { ScrapperService } from './scrapper.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('scrapper')
@Controller('scrapper')
export class ScrapperController {
  constructor(private readonly scrapperService: ScrapperService) {}

  @Get('run')
  run() {
    return this.scrapperService.scrapeProducts();
  }
}
