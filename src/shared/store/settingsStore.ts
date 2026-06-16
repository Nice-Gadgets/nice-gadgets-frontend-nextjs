import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import {
  Currency,
  DEFAULT_CURRENCY,
  DEFAULT_LANGUAGE,
  Language,
} from '@/shared/constants/settings';

type SettingsStore = {
  language: Language;
  currency: Currency;
  setLanguage: (language: Language) => void;
  setCurrency: (currency: Currency) => void;
};

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      language: DEFAULT_LANGUAGE,
      currency: DEFAULT_CURRENCY,

      setLanguage: (language) => set({ language }),
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: 'nice-gadgets-settings',
    },
  ),
);
