import { useEffect, useState } from 'react';

const CURRENCY_STORAGE_KEY = 'fintrack_currency';
const DEFAULT_CURRENCY = 'BRL';

export const SUPPORTED_CURRENCIES = [
  { value: 'BRL', label: 'Brazilian Real (R$)' },
  { value: 'USD', label: 'US Dollar ($)' },
  { value: 'EUR', label: 'Euro (€)' },
  { value: 'GBP', label: 'British Pound (£)' },
  { value: 'JPY', label: 'Japanese Yen (¥)' },
  { value: 'CNY', label: 'Chinese Yuan (¥)' },
] as const;

export type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number]['value'];

export function useCurrency() {
  const [currency, setCurrency] = useState<SupportedCurrency>(() => {
    if (typeof window === 'undefined') return DEFAULT_CURRENCY;
    return (
      (localStorage.getItem(CURRENCY_STORAGE_KEY) as SupportedCurrency) ||
      DEFAULT_CURRENCY
    );
  });

  useEffect(() => {
    localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
  }, [currency]);

  return {
    currency,
    setCurrency,
    currencies: SUPPORTED_CURRENCIES,
  };
}
