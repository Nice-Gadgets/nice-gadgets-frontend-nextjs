import Link from 'next/link';

export const ButtonColorPicker = ({
  color,
  isSelected,
  href,
}: {
  color: string;
  isSelected?: boolean;
  href: string;
}) => {
  return (
    <Link
      href={href}
      aria-label={`Color: ${color}`}
      aria-current={isSelected ? 'true' : undefined}
      className={[
        'size-8 rounded-full block shrink-0 transition-all duration-300',
        isSelected
          ? 'shadow-[0_0_0_2px_var(--color-surface-1),0_0_0_4px_var(--color-white)]'
          : 'shadow-[0_0_0_2px_var(--color-surface-1),0_0_0_3px_var(--color-icons)] hover:shadow-[0_0_0_2px_var(--color-surface-1),0_0_0_3px_#75767F]',
      ].join(' ')}
      style={{ backgroundColor: `var(--color-product-${color})` }}
    />
  );
};
