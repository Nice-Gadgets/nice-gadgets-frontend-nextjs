'use client';

import { ChangeEvent } from 'react';

import {
  CURRENCIES,
  Currency,
  Language,
  LANGUAGES,
} from '@/shared/constants/settings';
import { cn } from '@/shared/lib/utils';
import { useSettingsStore } from '@/shared/store';

type SettingsControlsProps = {
  className?: string;
};

const selectClassName =
  'h-8 bg-brand-black border border-brand-elements px-2 text-xs font-semibold uppercase text-brand-white outline-none transition-colors hover:border-brand-secondary focus:border-brand-accent';

export function SettingsControls({ className }: SettingsControlsProps) {
  const language = useSettingsStore((state) => state.language);
  const currency = useSettingsStore((state) => state.currency);
  const setLanguage = useSettingsStore((state) => state.setLanguage);
  const setCurrency = useSettingsStore((state) => state.setCurrency);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  const handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value as Currency);
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <select
        aria-label="Select language"
        value={language}
        onChange={handleLanguageChange}
        className={selectClassName}
      >
        {LANGUAGES.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <select
        aria-label="Select currency"
        value={currency}
        onChange={handleCurrencyChange}
        className={selectClassName}
      >
        {CURRENCIES.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
