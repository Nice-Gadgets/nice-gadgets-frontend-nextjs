import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/lib/utils';

type H4Props = ComponentPropsWithoutRef<'h4'>;

export const H4 = ({ className, children, ...props }: H4Props) => {
  return (
    <h4
      className={cn(
        'text-[16px] leading-5 font-semibold md:text-[20px] md:leading-6.5',
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
};
