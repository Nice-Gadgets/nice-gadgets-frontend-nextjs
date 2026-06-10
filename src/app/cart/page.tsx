import { Button } from '@/shared/ui/button';
import { ChevronLeftIcon } from '@/shared/ui/icons';
import { H1 } from '@/shared/ui/Typography';
import { CartItem } from '@/widgets/CartItem';

const cartItems = [
  {
    item: {
      id: 1,
      category: 'phones' as const,
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 7 32GB Black',
      fullPrice: 400,
      price: 375,
      screen: "4.7' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '2GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7/black/00.webp',
    },
    quantity: 1,
  },
  {
    item: {
      id: 2,
      category: 'phones' as const,
      itemId: 'apple-iphone-7-plus-32gb-black',
      name: 'Apple iPhone 7 Plus 32GB Black',
      fullPrice: 540,
      price: 500,
      screen: "5.5' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '3GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7-plus/black/00.webp',
    },
    quantity: 2,
  },
  {
    item: {
      id: 3,
      category: 'phones' as const,
      itemId: 'apple-iphone-8-64gb-gold',
      name: 'Apple iPhone 8 64GB Gold',
      fullPrice: 600,
      price: 550,
      screen: "4.7' IPS",
      capacity: '64GB',
      color: 'gold',
      ram: '2GB',
      year: 2017,
      image: 'img/phones/apple-iphone-8/gold/00.webp',
    },
    quantity: 1,
  },
  {
    item: {
      id: 4,
      category: 'phones' as const,
      itemId: 'apple-iphone-11-64gb-black',
      name: 'Apple iPhone 11 64GB Black',
      fullPrice: 932,
      price: 880,
      screen: "6.1' IPS",
      capacity: '64GB',
      color: 'black',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11/black/00.webp',
    },
    quantity: 10,
  },
];

export default function CartPage() {
  const totalPrice = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0,
  );

  const totalItems = cartItems.length;

  return (
    <main className="pt-6 px-4 pb-14 sm:pt-10 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="xl:max-w-[1200px] xl:mx-auto">
        <Button variant="transparent" className="mb-6 sm:mb-4">
          <ChevronLeftIcon />
          Back
        </Button>
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
          <div className="border border-brand-elements p-6 flex flex-col gap-4 lg:self-start lg:gap-6 lg:w-[368px] lg:shrink-0">
            <div className="flex flex-col items-center gap-2">
              <H1 className="font-extrabold">${totalPrice.toFixed()}</H1>
              <span className="text-[14px] leading-[21px] font-semibold text-brand-secondary">
                Total for {totalItems} items
              </span>
            </div>
            <div className="h-[1px] bg-brand-elements" />
            <Button variant="primary" className="h-12">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
