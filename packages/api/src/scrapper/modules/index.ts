import { Scrapper } from '@prisma/client';
import { ScrapperFn } from './types';
import { ozonScrapper } from './ozon';

export const scrappers: Record<Scrapper, ScrapperFn> = {
  [Scrapper.OZON]: ozonScrapper,
};
