'use client';

import { type ClassValue, clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export interface DropdownOption {
  value: string;
  label: string;
}

interface SharedDropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  label?: string; // Текст "Description" над дропдауном
  value?: string | null;
  onChange?: (value: string | null) => void;
  className?: string;
}

export const SharedDropdown = ({
  options,
  placeholder = 'Default',
  label,
  value,
  onChange,
  className,
}: SharedDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    /* Загальний контейнер має фіксовану ширину 176px.
       Якщо є лейбл, додаємо чіткий відступ вниз gap-[7px], як на макеті.
    */
    <div
      ref={dropdownRef}
      className={cn(
        "flex flex-col font-['Montserrat',sans-serif] w-[176px] relative select-none z-40",
        label ? 'gap-[7px]' : 'gap-0',
        className,
      )}
    >
      {/* 1. ЛЕЙБЛ — стиль Small text (12px), колір Secondary (#75767F) */}
      {label && (
        <span className="text-[12px] text-[#75767F] font-medium leading-none tracking-wide block">
          {label}
        </span>
      )}

      <div className="relative w-[176px]">
        {/* 2. Кнопка тригера (Ширина 176px, Висота 40px):
          - Текст: 14px з line-height 21px (leading-[21px]).
          - Default: bg-surface-2 (#323542)
          - Hover: bg-surface-1 (#161827)
          - Focus (Open): bg-surface-2 + border-accent (#905bff)
        */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'h-10 w-[176px] px-4 rounded-none text-[14px] leading-[21px] font-normal outline-none border flex items-center justify-between transition-colors duration-150 cursor-pointer',
            isOpen
              ? 'bg-surface-2 border-[#905bff] text-white'
              : 'bg-surface-2 border-transparent text-white hover:bg-surface-1',
          )}
        >
          {/* Якщо елемент вибрано — текст білий, якщо ні — тьмяний колір плейсхолдера Icons (#4A4D58) */}
          <span className={cn(!value && 'text-[#4A4D58]')}>
            {value && selectedOption ? selectedOption.label : placeholder}
          </span>

          <ChevronDown
            className={cn(
              'h-4 w-4 text-[#75767F] transition-transform duration-150',
              isOpen && 'rotate-180',
            )}
          />
        </button>

        {/* 3. Випадаюче меню (Content):
          - Відкривається рівно під кнопкою (top-10 = 40px).
          - Фон списку: глибокий темний bg-surface-1 (#161827).
          - Обведення: 1px бордер кольору icons (#4A4D58).
        */}
        {isOpen && (
          <div className="absolute left-0 top-10 w-[176px] bg-[#161827] border border-[#4A4D58] rounded-none shadow-2xl p-0 flex flex-col z-50 overflow-hidden">
            {options.map((option) => {
              const isChecked = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange?.(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    /* 4. Елемент списку (Item):
                      - Висота 32px.
                      - Колір тексту за замовчуванням: тьмяний icons (#4A4D58).
                    */
                    'h-8 w-full text-left rounded-none px-4 flex items-center text-[14px] leading-[21px] text-[#4A4D58] font-normal outline-none transition-colors cursor-pointer',

                    /* Hover Item: плашка стає Surface 2 (#323542), текст — білим */
                    'hover:bg-[#323542] hover:text-white',

                    /* Стан вже вибраного рядка */
                    isChecked && 'bg-[#323542] text-white',
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
