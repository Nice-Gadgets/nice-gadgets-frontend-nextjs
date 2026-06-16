'use client';

import { translations } from '@/shared/constants/translations';
import { useSettingsStore } from '@/shared/store';

export function useTranslation() {
  const language = useSettingsStore((state) => state.language);

  const t = (key: string) => {
    return translations[language][key] ?? key;
  };

  return { t, language };
}
