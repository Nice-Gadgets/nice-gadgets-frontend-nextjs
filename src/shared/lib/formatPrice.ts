import {
  Currency,
  CURRENCY_RATES,
  CURRENCY_SYMBOLS,
} from '@/shared/constants/settings';

export function formatPrice(price: number, currency: Currency) {
  const convertedPrice = price * CURRENCY_RATES[currency];
  const roundedPrice = Math.round(convertedPrice);

  return `${CURRENCY_SYMBOLS[currency]}${roundedPrice}`;
}
