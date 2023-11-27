import { Page } from 'playwright';

export type ScrapperFn = (page: Page) => Promise<number>;
