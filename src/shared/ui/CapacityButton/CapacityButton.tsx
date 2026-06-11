import Link from 'next/link';

import { BodyText } from '../Typography';

export const CapacityButton = ({
  capacity,
  isSelected,
  href,
}: {
  capacity: string;
  isSelected?: boolean;
  href: string;
}) => {
  return (
    <Link
      href={href}
      aria-current={isSelected ? 'true' : undefined}
      className={[
        'inline-flex items-center justify-center px-3 h-8 border transition-colors duration-300',
        isSelected
          ? 'border-brand-white bg-brand-white text-brand-black'
          : 'border-brand-icons bg-transparent text-brand-secondary hover:border-brand-white hover:text-brand-white',
      ].join(' ')}
    >
      <BodyText>{capacity}</BodyText>
    </Link>
  );
};
