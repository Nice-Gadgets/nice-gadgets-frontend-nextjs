'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/lib/utils';
import { CartIcon, HeartIcon } from '@/shared/ui/icons';
import { Logo } from '@/shared/ui/Logo';
import { MobileMenu } from '@/widgets/Header/MobileMenu';
import { DesktopNavLinks } from '@/widgets/Header/NavLinks';

const headerIconLinkClassName =
  'hidden h-full w-16 items-center justify-center border-l border-brand-elements text-brand-white transition-colors hover:bg-brand-surface-1 md:flex lg:w-22';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-brand-elements bg-brand-black">
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
          <Link
            href="/favourites"
            aria-label="Favorites"
            className={cn(headerIconLinkClassName, 'relative')}
          >
            <HeartIcon className="size-4" />
            {pathname?.startsWith('/favourites') && (
              <span className="absolute bottom-0 h-0.75 w-full bg-brand-white" />
            )}
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className={cn(headerIconLinkClassName, 'relative')}
          >
            <CartIcon className="size-4" />
            {pathname?.startsWith('/cart') && (
              <span className="absolute bottom-0 h-0.75 w-full bg-brand-white" />
            )}
          </Link>

          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </header>
  );
};
