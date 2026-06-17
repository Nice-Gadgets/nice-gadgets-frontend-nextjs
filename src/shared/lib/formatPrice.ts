import { Currency, Language } from '@/shared/constants/settings';

const LOCALES: Record<Language, string> = {
  en: 'en-US',
  ua: 'uk-UA',
};

export function formatPrice(
  price: number,
  currency: Currency,
  currencyRates: Record<Currency, number>,
  language: Language,
) {
  const convertedPrice = price * currencyRates[currency];

  return new Intl.NumberFormat(LOCALES[language], {
    style: 'currency',
    currency: currency.toUpperCase(),
    maximumFractionDigits: 0,
  }).format(convertedPrice);
}
