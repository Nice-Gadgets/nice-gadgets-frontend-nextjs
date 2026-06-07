import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/lib/utils';

type SmallTextProps = ComponentPropsWithoutRef<'p'>;

export const SmallText = ({
  className,
  children,
  ...props
}: SmallTextProps) => {
  return (
    <p
      className={cn('text-[12px] leading-3.75 font-semibold', className)}
      {...props}
    >
      {children}
    </p>
  );
};
