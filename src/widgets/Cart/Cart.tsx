'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useCartStore } from '@/entities/Product/store/useCartStore';
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs';
import { Button } from '@/shared/ui/button';
import { BodyText, H1 } from '@/shared/ui/Typography';
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
    <main className="px-4 pt-6 pb-14 sm:px-6 sm:pt-10 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="xl:mx-auto xl:max-w-300">
        <Breadcrumbs items={[{ label: 'Cart' }]} className="mb-10 py-0" />

        <H1 className="mb-8 font-extrabold">Cart</H1>

        {items.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center px-6 text-center">
            <Image
              src="/img/cart-is-empty.png"
              alt="Cart is empty"
              width={300}
              height={200}
              priority
              sizes="(max-width: 640px) 100vw, 400px"
              className="w-full h-auto object-contain max-w-[400px] mb-8"
            />
            <H1 className="text-brand-white mb-4">Your cart is empty</H1>
            <BodyText className="text-brand-secondary max-w-[400px] mb-8">
              Looks like you haven&apos;t added anything to your cart yet.
            </BodyText>
            <Link href="/phones">
              <Button variant="primary" className="h-12 min-w-[200px]">
                Go to shop
              </Button>
            </Link>
          </div>
        ) : (
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

            <div className="flex flex-col gap-4 border border-brand-elements p-6 lg:w-92 lg:shrink-0 lg:self-start lg:gap-6">
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
        )}
      </div>
    </main>
  );
};
