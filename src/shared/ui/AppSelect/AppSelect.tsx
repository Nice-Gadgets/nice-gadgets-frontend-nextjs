// src/shared/ui/AppSelect/AppSelect.tsx
import { useId } from 'react';

import { cn } from '@/shared/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/Select';

interface AppSelectProps {
  label?: string;
  options: { value: string; label: string }[];
  value: string | null;
  onChange: (value: string | null) => void;
  className?: string;
  triggerClassName?: string;
}

export const AppSelect = ({
  label,
  options,
  value,
  onChange,
  className,
  triggerClassName,
}: AppSelectProps) => {
  const selectId = useId();

  return (
    <div className={cn('flex flex-col gap-1.5 items-stretch', className)}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-medium text-secondary"
        >
          {label}
        </label>
      )}

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={selectId} className={cn('w-full', triggerClassName)}>
          <SelectValue>
            {options.find((opt) => opt.value === value)?.label ?? ''}
          </SelectValue>
        </SelectTrigger>

        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
