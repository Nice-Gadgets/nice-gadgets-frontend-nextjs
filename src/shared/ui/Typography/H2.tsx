import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/lib/utils';

type H2Props = ComponentPropsWithoutRef<'h2'>;

export const H2 = ({ className, children, ...props }: H2Props) => {
  return (
    <h2
      className={cn(
        'text-[22px] leading-7.75 font-bold sm:text-[32px] sm:leading-10.25 sm:tracking-[-0.01em]',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
