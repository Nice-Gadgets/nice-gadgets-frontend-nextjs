import Link from 'next/link';

import { ProductInterface } from '@/entities/Product/types/ProductInterface';
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs';
import { Button } from '@/shared/ui/button';
import { ChevronLeftIcon } from '@/shared/ui/icons';
import { H1 } from '@/shared/ui/Typography';
import { CartItem } from '@/widgets/CartItem';

interface CartItemType {
  item: ProductInterface;
  quantity: number;
}

interface CartProps {
  cartItems: CartItemType[];
}

export const Cart = ({ cartItems }: CartProps) => {
  const totalPrice = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0,
  );

  const totalItems = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0,
  );

  return (
    <main className="px-4 pt-6 pb-14 sm:px-6 sm:pt-10 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="xl:mx-auto xl:max-w-300">
        <Breadcrumbs items={[{ label: 'Cart' }]} className="mb-10 py-0" />

        <Link
          href="/"
          className="group mb-4 inline-flex items-center gap-1 text-sm text-brand-white transition-colors hover:text-brand-accent"
        >
          <ChevronLeftIcon className="transition-transform" />
          Back
        </Link>

        <H1 className="mb-8 font-extrabold">Cart</H1>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-4">
          <div className="flex flex-col gap-4 lg:flex-1">
            {cartItems.map((cartItem) => (
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
      </div>
    </main>
  );
};
