'use client';

import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

import { SmallText } from './Typography';

interface SelectOption {
  value: string;
  label: string;
}

interface AppSelectProps {
  options: SelectOption[];
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function AppSelect({
  label,
  options,
  value,
  onChange,
  className,
}: AppSelectProps) {
  const handleValueChange = (newValue: string | null) => {
    if (onChange && newValue !== null) {
      onChange(newValue);
    }
  };
  const selectId = React.useId(); // Генеруємо унікальний id для зв'язування label та select
  return (
    <div className="flex flex-col gap-1.5 items-start">
      {label && (
        <label
          htmlFor={selectId}
          className="text-xs font-bold text-brand-secondary select-none tracking-wide text-left block"
        >
          <SmallText>{label}</SmallText>
        </label>
      )}

      {/* Передаємо id у Select, якщо бібліотека його підтримує, або безпосередньо в тригер */}
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger id={selectId} className={className}>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
