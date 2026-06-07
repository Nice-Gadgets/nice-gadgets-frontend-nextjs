'use client';

import { Field } from '@base-ui-components/react/field';
import { Select } from '@base-ui-components/react/select';

import { cn } from '@/shared/lib/utils';

interface SelectOption {
  value: string;
  label: string;
}

interface AppSelectProps {
  options: SelectOption[];
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  width?: string | number;
}

export function AppSelect({
  options,
  label,
  placeholder = 'Filter by',
  defaultValue,
  value,
  onChange,
  className,
  width = '100%', // Значення за замовчуванням, якщо ширина не передана
}: AppSelectProps) {
  const handleValueChange = (newValue: string | null) => {
    if (onChange && newValue !== null) {
      onChange(newValue);
    }
  };

  return (
    // Передаємо стиль width у батьківський контейнер Field.Root.
    // Замість max-w-[240px] тепер використовуємо динамічний inline-style.
    <Field.Root
      className="relative flex flex-col gap-1.5 w-full"
      style={{ maxWidth: width }}
    >
      {label && (
        <Field.Label className="text-xs font-bold text-[var(--color-secondary)] select-none tracking-wide text-left block">
          {label}
        </Field.Label>
      )}

      <Select.Root
        defaultValue={defaultValue}
        value={value}
        onValueChange={handleValueChange}
      >
        <Select.Trigger
          className={cn(
            'flex h-11 w-full items-center justify-between bg-[var(--color-elements)] px-4 py-3 text-sm text-[var(--color-white)] transition-all outline-none border-none font-bold',
            'hover:text-[var(--color-secondary)]',
            'focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] data-[popup-open]:ring-1 data-[popup-open]:ring-[var(--color-accent)]',
            className,
          )}
        >
          <Select.Value className="text-[var(--color-white)] text-[14px]">
            {value
              ? options.find((option) => option.value === value)?.label ||
                placeholder
              : placeholder}
          </Select.Value>

          <Select.Icon className="flex items-center justify-center transition-transform duration-200 data-[popup-open]:rotate-180">
            {/* Маскування через CSS: використовує ваш SVG як маску, колір регулюється через bg-current */}
            <span
              className="h-4 w-4 bg-current"
              style={{
                mask: 'url("/icons/Chevron (Arrow Down).svg") no-repeat center / contain',
                WebkitMask:
                  'url("/icons/Chevron (Arrow Down).svg") no-repeat center / contain',
              }}
            />
          </Select.Icon>
        </Select.Trigger>

        <Select.Positioner className="!absolute !top-[calc(100%+2px)] !left-0 w-full z-50 flex flex-col">
          <Select.Popup className="w-full overflow-hidden bg-[var(--color-design-black-700)] p-1 text-[var(--color-white)] ring-1 ring-[var(--color-elements)] shadow-2xl outline-none">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className={cn(
                  'relative flex w-full cursor-default select-none items-center py-2.5 px-3 text-sm text-[var(--color-secondary)] outline-none transition-colors',
                  'data-[highlighted]:bg-[var(--color-surface-2)] data-[highlighted]:text-[var(--color-white)]',
                  'data-[selected]:text-[var(--color-white)] ',
                )}
              >
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Root>
    </Field.Root>
  );
}
