'use client';

import { Dialog } from '@base-ui/react/dialog';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/lib/utils';
import { CartIcon, CloseIcon, HeartIcon, MenuIcon } from '@/shared/ui/icons';
import { Logo } from '@/shared/ui/Logo';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Phones', href: '/phones' },
  { label: 'Tablets', href: '/tablets' },
  { label: 'Accessories', href: '/accessories' },
];

const navLinkClassName =
  'relative text-[12px] leading-2.75 font-bold tracking-[0.04em] text-brand-secondary uppercase transition-colors hover:text-brand-white';

const activeNavLinkClassName = 'text-brand-white';

const activeUnderlineClassName = 'bg-brand-white';

const headerIconLinkClassName =
  'hidden h-full w-16 items-center justify-center border-l border-brand-elements text-brand-white transition-colors hover:bg-brand-surface-1 md:flex lg:w-22';

const mobileIconButtonClassName =
  'flex h-12 w-12 items-center justify-center border-l border-brand-elements text-brand-white transition-colors hover:bg-brand-surface-1';

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
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    navLinkClassName,
                    'flex h-full items-center px-4 lg:px-8',
                    isActive && activeNavLinkClassName,
                  )}
                >
                  {label}

                  {isActive && (
                    <span
                      className={cn(
                        'absolute right-4 bottom-0 left-4 h-0.75 lg:right-8 lg:left-8',
                        activeUnderlineClassName,
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex h-full items-center">
          <Link
            href="/favorites"
            aria-label="Favorites"
            className={headerIconLinkClassName}
          >
            <HeartIcon className="size-4" />
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className={headerIconLinkClassName}
          >
            <CartIcon className="size-4" />
          </Link>

          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </header>
  );
};

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={cn(mobileIconButtonClassName, 'md:hidden')}>
        <MenuIcon />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-brand-black md:hidden" />

        <Dialog.Popup className="fixed inset-0 z-50 flex flex-col bg-brand-black md:hidden">
          <div className="flex h-12 items-center justify-between border-b border-brand-elements">
            <div className="flex h-full items-center px-4">
              <Logo />
            </div>

            <Dialog.Close className="flex h-12 w-12 items-center justify-center border-l border-brand-elements text-brand-white transition-colors hover:bg-brand-surface-1">
              <CloseIcon />
            </Dialog.Close>
          </div>

          <nav className="flex flex-1 flex-col items-center gap-8 pt-16">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;

              return (
                <Dialog.Close
                  key={href}
                  nativeButton={false}
                  render={<Link href={href} />}
                >
                  <span
                    className={cn(
                      'relative block text-[12px] leading-2.75 font-bold tracking-[0.04em] text-brand-secondary uppercase transition-colors hover:text-brand-white',
                      isActive && 'text-brand-white',
                    )}
                  >
                    {label}

                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-0.75 w-full bg-brand-white" />
                    )}
                  </span>
                </Dialog.Close>
              );
            })}
          </nav>

          <div className="grid h-16 grid-cols-2 border-t border-brand-elements">
            <Dialog.Close
              nativeButton={false}
              render={<Link href="/favorites" />}
            >
              <span className="flex h-full items-center justify-center border-r border-brand-elements text-brand-white transition-colors hover:bg-brand-surface-1">
                <HeartIcon className="size-4" />
              </span>
            </Dialog.Close>

            <Dialog.Close nativeButton={false} render={<Link href="/cart" />}>
              <span className="flex h-full items-center justify-center text-brand-white transition-colors hover:bg-brand-surface-1">
                <CartIcon className="size-4" />
              </span>
            </Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
