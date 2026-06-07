interface ButtonColorPickerProps {
  color: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function ButtonColorPicker({
  color,
  isSelected,
  onClick,
}: ButtonColorPickerProps) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isSelected}
      className={`size-8 rounded-full transition-all
        ${
          isSelected
            ? 'shadow-[0_0_0_2px_var(--color-surface-1),0_0_0_4px_var(--color-white)]'
            : 'shadow-[0_0_0_2px_var(--color-surface-1),0_0_0_3px_var(--color-icons)] hover:shadow-[0_0_0_2px_var(--color-surface-1),0_0_0_3px_#75767F]'
        }`}
      style={{ backgroundColor: color }}
    />
  );
}
