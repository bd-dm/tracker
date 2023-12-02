import { Page } from 'playwright';
import { expect } from 'playwright/test';

export const bypassCloudflare = async (page: Page): Promise<void> => {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)),
  );
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)),
  );
  await expect(
    page.locator('*', {
      hasText: 'Checking if the site connection is secure',
    }),
  ).toHaveCount(0);
};
