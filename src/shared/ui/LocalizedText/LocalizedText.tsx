'use client';

import { useTranslation } from '@/shared/hooks';

type LocalizedTextProps = {
  translationKey: string;
};

export function LocalizedText({ translationKey }: LocalizedTextProps) {
  const { t } = useTranslation();

  return <>{t(translationKey)}</>;
}
