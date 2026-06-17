'use client';

import {
  CURRENCIES,
  Currency,
  Language,
  LANGUAGES,
} from '@/shared/constants/settings';
import { cn } from '@/shared/lib/utils';
import { useSettingsStore } from '@/shared/store';
import { AppSelect } from '@/shared/ui/AppSelect';

type SettingsControlsProps = {
  className?: string;
};

export function SettingsControls({ className }: SettingsControlsProps) {
  const language = useSettingsStore((state) => state.language);
  const currency = useSettingsStore((state) => state.currency);
  const setLanguage = useSettingsStore((state) => state.setLanguage);
  const setCurrency = useSettingsStore((state) => state.setCurrency);

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <AppSelect
        ariaLabel="Select language"
        value={language}
        options={LANGUAGES}
        onChange={(value) => {
          if (value) {
            setLanguage(value as Language);
          }
        }}
        className="w-18"
        triggerClassName="h-8 rounded-none border border-brand-elements bg-brand-black px-2 text-xs font-semibold uppercase text-brand-white hover:border-brand-secondary"
      />

      <AppSelect
        ariaLabel="Select currency"
        value={currency}
        options={CURRENCIES}
        onChange={(value) => {
          if (value) {
            setCurrency(value as Currency);
          }
        }}
        className="w-20"
        triggerClassName="h-8 rounded-none border border-brand-elements bg-brand-black px-2 text-xs font-semibold uppercase text-brand-white hover:border-brand-secondary"
      />
    </div>
  );
}
