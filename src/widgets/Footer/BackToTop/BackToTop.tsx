'use client';

import { ChevronUpIcon } from '@/shared/ui/icons';
import { SmallText } from '@/shared/ui/Typography';

export const BackToTop = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="group flex items-center gap-4 transition-transform duration-300 hover:scale-110 cursor-pointer"
  >
    <SmallText className="text-brand-secondary group-hover:text-brand-white transition-colors">
      Back to top
    </SmallText>
    <div className="border border-brand-elements p-2 aspect-square cursor-pointer">
      <ChevronUpIcon className="text-brand-secondary group-hover:text-brand-white" />
    </div>
  </button>
);
