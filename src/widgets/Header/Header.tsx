'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useCartStore } from '@/entities/Cart';
import { useFavoritesStore } from '@/entities/Favorite';
import { useCounterAnimation } from '@/shared/hooks/useCounterAnimation';
import { cn } from '@/shared/lib/utils';
import { CartIcon, HeartIcon } from '@/shared/ui/Icons';
import { Logo } from '@/shared/ui/Logo';
import { ThemeToggle } from '@/shared/ui/ThemeSwitcher';
import { UserAnchor } from '@/shared/ui/UserAnchor/UserAnchor';
import { MobileMenu } from '@/widgets/Header/MobileMenu';
import { DesktopNavLinks } from '@/widgets/Header/NavLinks';

const headerIconLinkClassName =
  'hidden h-full w-16 items-center justify-center border-l border-brand-elements text-brand-white transition-colors hover:bg-brand-surface-1 md:flex lg:w-22';

export const Header = () => {
  const pathname = usePathname();

  const cartItems = useCartStore((state) => state.items);
  const favoriteItems = useFavoritesStore((state) => state.items);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const formatCount = (count: number) => (count > 99 ? '99+' : count);
  const favoriteCount = favoriteItems.length;

  const isCartAnimating = useCounterAnimation(cartCount);
  const isFavoriteAnimating = useCounterAnimation(favoriteCount);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-brand-elements bg-brand-black">
      <div className="flex h-11.75 items-center justify-between lg:h-16">
        <div className="flex h-full items-center">
          <div className="flex h-full items-center px-4 md:px-6 lg:px-8">
            <Logo />
          </div>
          <nav className="hidden h-full md:flex">
            <DesktopNavLinks pathname={pathname} />
          </nav>
        </div>

        <div className="flex h-full items-center">
          <ThemeToggle className={headerIconLinkClassName} />

          <Link
            href="/favorites"
            aria-label="Favorites"
            className={cn(headerIconLinkClassName, 'relative')}
          >
            <div className="relative">
              <HeartIcon className="size-4 shrink-0" />
              {favoriteCount > 0 && (
                <span
                  className={cn(
                    'absolute -top-1.25 -right-1.75 flex size-3.75 items-center justify-center rounded-full bg-brand-red border-2 border-solid text-[8px] font-bold text-white leading-1 transition-colors duration-300',
                    isFavoriteAnimating
                      ? 'border-brand-white'
                      : 'border-brand-black',
                  )}
                >
                  {formatCount(favoriteCount)}
                </span>
              )}
            </div>
            {pathname?.startsWith('/favorites') && (
              <span className="absolute bottom-0 h-0.75 w-full bg-brand-white" />
            )}
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className={cn(headerIconLinkClassName, 'relative')}
          >
            <div className="relative">
              <CartIcon className="size-4 shrink-0" />
              {cartCount > 0 && (
                <span
                  className={cn(
                    'absolute -top-1.25 -right-1.75 flex size-3.75 items-center justify-center rounded-full bg-brand-red border-2 border-solid text-[8px] font-bold text-white leading-none transition-colors duration-300',
                    isCartAnimating
                      ? 'border-brand-white'
                      : 'border-brand-black',
                  )}
                >
                  {formatCount(cartCount)}
                </span>
              )}
            </div>
            {pathname?.startsWith('/cart') && (
              <span className="absolute bottom-0 h-0.75 w-full bg-brand-white" />
            )}
          </Link>
          <UserAnchor className="hidden h-full w-16 items-center justify-center border-l border-brand-elements transition-colors hover:bg-brand-surface-1 md:flex lg:w-22" />

          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </header>
  );
};
