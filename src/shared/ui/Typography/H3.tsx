import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/lib/utils';

type H3Props = ComponentPropsWithoutRef<'h3'>;

export const H3 = ({ className, children, ...props }: H3Props) => {
  return (
    <h3
      className={cn(
        'text-[20px] leading-6.5 font-semibold md:text-[22px] md:leading-7.75 md:font-bold',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};
