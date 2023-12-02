import { Page } from 'playwright';

export const saveScreenshot = async (
  page: Page,
  scrapperName: string,
): Promise<void> => {
  const screnshotPath =
    `data/screenshots/${scrapperName}-${new Date().toISOString()}.png`.replace(
      /:/g,
      '-',
    );
  console.log(`Saving screenshot: ${screnshotPath}`);

  await page.screenshot({
    path: screnshotPath,
  });
};
