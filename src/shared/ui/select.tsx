'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { CheckIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';

import { ChevronDownIcon, ChevronUpIcon } from './icons';

const Select = SelectPrimitive.Root;

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      // ЗМІНЕНО: p-1 змінено на p-0
      className={cn('scroll-my-1 p-0', className)}
      {...props}
    />
  );
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn('flex flex-1 text-left text-[14px]!', className)}
      {...props}
    />
  );
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  size?: 'sm' | 'default';
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        // Змінено h-8 на h-10 для висоти 40px. Також pr-2 pl-2.5 змінено на px-3 для кращого вигляду
        "flex w-fit items-center justify-between data-popup-open:ring-1 data-popup-open:ring-brand-accent not-only-of-type: gap-1.5 border border-input bg-background bg-brand-surface-2 hover:bg-muted/50 py-2 px-3 text-sm whitespace-nowrap outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring disabled:cursor-not-allowed aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive data-placeholder:text-muted-foreground data-[size=default]:h-10 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-popover dark:hover:bg-muted/50 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-muted/50",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className="flex items-center justify-center transition-transform duration-200 data-popup-open:rotate-180 text-muted-foreground text-brand-secondary hover:text-brand-icons">
        <span
          className="h-4 w-4 bg-current block"
          style={{
            mask: 'url("/icons/Chevron (Arrow Down).svg") no-repeat center / contain',
            WebkitMask:
              'url("/icons/Chevron (Arrow Down).svg") no-repeat center / contain',
          }}
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  side = 'bottom',
  sideOffset = 4,
  align = 'start', // Змінено з "center" на "start" для вирівнювання по лівому краю кнопки
  alignOffset = 0,
  alignItemWithTrigger = false, // ЗМІНЕНО на false (ОБОВ'ЯЗКОВО для правильної ширини anchor)
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset' | 'alignItemWithTrigger'
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          // ЗМІНЕНО: додано rounded-none (прибирає раунд) та min-w-[--anchor-width]
          className={cn(
            'relative isolate z-50 translate-x-0! max-h-(--available-height) w-(--anchor-width) min-w-[--anchor-width] overflow-x-hidden overflow-y-auto bg-brand-black text-popover-foreground rounded-none shadow-md ring-1 ring-brand-elements duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
            className,
          )}
          {...props}
        >
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn('px-1.5 py-1 text-xs text-muted-foreground', className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      // ДОДАНО: group (для синхронного ховеру тексту), transition-none (миттєвий ховер)
      // ЗМІНЕНО: прибрано py-1, pl-1.5 змінено на pl-3
      className={cn(
        "group relative hover:bg-brand-surface-2 h-10 flex w-full cursor-pointer items-center gap-1.5 bg-brand-black pr-8 pl-3 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 transition-none",
        className,
      )}
      {...props}
    >
      {/* ЗМІНЕНО: додано group-hover:text-brand-white, щоб текст світився одночасно із фоном */}
      <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap text-brand-secondary group-hover:text-brand-white transition-none">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          // Змінено right-2 -> right-3 для симетрії з лівим краєм
          <span className="pointer-events-none absolute right-3 flex size-4 items-center justify-center text-brand-secondary" />
        }
      >
        <CheckIcon className="pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('pointer-events-none -mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
