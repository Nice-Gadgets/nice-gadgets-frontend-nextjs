'use client';

import { TranslationKey } from '@/shared/constants/translations';
import { useTranslation } from '@/shared/hooks';

type LocalizedTextProps = {
  translationKey: TranslationKey;
};

export function LocalizedText({ translationKey }: LocalizedTextProps) {
  const { t } = useTranslation();

  return <>{t(translationKey)}</>;
}
