'use client';

import Link from 'next/link';

import { useCartStore } from '@/entities/Product/store/useCartStore';
import { Button } from '@/shared/ui/button';
import { ChevronLeftIcon } from '@/shared/ui/icons';
import { H1 } from '@/shared/ui/Typography';
import { CartItem } from '@/widgets/CartItem';

export const Cart = () => {
  const items = useCartStore((state) => state.items);

  const totalPrice = items.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0,
  );

  const totalItems = items.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0,
  );

  return (
    <main className="pt-6 px-4 pb-14 sm:pt-10 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="xl:max-w-300 xl:mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-brand-white hover:text-brand-accent transition-colors mb-4 group"
        >
          <ChevronLeftIcon className="transition-transform" />
          Back
        </Link>
        <H1 className="mb-8 font-extrabold">Cart</H1>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-4">
          <div className="flex flex-col gap-4 lg:flex-1">
            {items.map((cartItem) => (
              <CartItem
                key={cartItem.item.itemId}
                item={cartItem.item}
                quantity={cartItem.quantity}
              />
            ))}
          </div>
          <div className="border border-brand-elements p-6 flex flex-col gap-4 lg:self-start lg:gap-6 lg:w-92 lg:shrink-0">
            <div className="flex flex-col items-center gap-2">
              <H1 className="font-extrabold">${totalPrice.toFixed()}</H1>
              <span className="text-[14px] leading-5.25 font-semibold text-brand-secondary">
                Total for {totalItems} items
              </span>
            </div>
            <div className="h-px bg-brand-elements" />
            <Button variant="primary" className="h-12">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
