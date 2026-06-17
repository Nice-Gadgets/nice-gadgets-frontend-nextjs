'use client';

import {
  CURRENCIES,
  Currency,
  Language,
  LANGUAGES,
} from '@/shared/constants/settings';
import { cn } from '@/shared/lib/utils';
import { useSettingsStore } from '@/shared/store';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/Select';

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
      <Select
        value={language}
        onValueChange={(value) => setLanguage(value as Language)}
      >
        <SelectTrigger
          size="sm"
          aria-label="Select language"
          className="w-18 border border-brand-elements bg-brand-black uppercase text-brand-white hover:border-brand-secondary"
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {LANGUAGES.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={currency}
        onValueChange={(value) => setCurrency(value as Currency)}
      >
        <SelectTrigger
          size="sm"
          aria-label="Select currency"
          className="w-20 border border-brand-elements bg-brand-black uppercase text-brand-white hover:border-brand-secondary"
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {CURRENCIES.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
