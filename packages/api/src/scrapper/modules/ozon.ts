import { ScrapperFn } from './types';

interface OzonPriceState {
  isAvailable: boolean;
  cardPrice: string;
  price: string;
  originalPrice: string;
  showOriginalPrice: boolean;
  link: string;
}

export const ozonScrapper: ScrapperFn = async (page) => {
  const webPriceLocator = page.locator('[id^="state-webPrice-"]');
  await webPriceLocator.waitFor({ state: 'attached', timeout: 30_000 });

  const priceStateText = await webPriceLocator.getAttribute('data-state');
  const priceState = JSON.parse(priceStateText) as OzonPriceState;
  const priceValue = priceState.cardPrice || priceState.price;
  const price = priceValue.replace(/\D/g, '');

  return parseInt(price, 10) ?? null;
};
