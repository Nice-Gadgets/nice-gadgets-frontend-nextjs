import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/lib/utils';

type BodyTextProps = ComponentPropsWithoutRef<'p'>;

export const BodyText = ({ className, children, ...props }: BodyTextProps) => {
  return (
    <p
      className={cn('text-[14px] leading-[21px] font-normal', className)}
      {...props}
    >
      {children}
    </p>
  );
};
