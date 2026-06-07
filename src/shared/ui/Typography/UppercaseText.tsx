import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/lib/utils';

type UppercaseTextProps = ComponentPropsWithoutRef<'p'>;

export const UppercaseText = ({
  className,
  children,
  ...props
}: UppercaseTextProps) => {
  return (
    <p
      className={cn(
        'text-[12px] leading-2.75 font-bold uppercase tracking-[0.04em]',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
