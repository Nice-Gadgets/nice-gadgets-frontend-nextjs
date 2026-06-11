import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/shared/lib/utils';
import { UppercaseText } from '@/shared/ui/Typography';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Phones', href: '/phones' },
  { label: 'Tablets', href: '/tablets' },
  { label: 'Accessories', href: '/accessories' },
];

const navLinkClassName =
  'relative text-brand-secondary transition-colors hover:text-brand-white';

export const DesktopNavLinks = ({ pathname }: { pathname: string | null }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const [ready, setReady] = useState(false);

  const activeIndex = navItems.findIndex(({ href }) =>
    href === '/' ? pathname === href : pathname?.startsWith(href),
  );

  useEffect(() => {
    const activeEl = linkRefs.current[activeIndex];
    const navEl = navRef.current;
    if (!activeEl || !navEl) {
      setIndicator(null);
      return;
    }

    const navRect = navEl.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();
    const inset = 16;

    setIndicator({
      left: linkRect.left - navRect.left + inset,
      width: linkRect.width - inset * 2,
    });

    setReady(true);
  }, [activeIndex, pathname]);

  return (
    <div ref={navRef} className="relative flex h-full">
      {indicator && (
        <span
          aria-hidden
          className={cn(
            'pointer-events-none absolute bottom-0 h-0.75 bg-brand-white',
            ready ? 'transition-[left,width] duration-300 ease-in-out' : '',
          )}
          style={{ left: indicator.left, width: indicator.width }}
        />
      )}

      {navItems.map(({ label, href }, i) => {
        const isActive =
          href === '/' ? pathname === href : pathname?.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            ref={(el) => {
              linkRefs.current[i] = el;
            }}
            className={cn(
              navLinkClassName,
              'flex h-full items-center px-4 lg:px-8',
              isActive && 'text-brand-white',
            )}
          >
            <UppercaseText>{label}</UppercaseText>
          </Link>
        );
      })}
    </div>
  );
};

export const MobileNavLinks = ({
  pathname,
  onClose,
}: {
  pathname: string | null;
  onClose: () => void;
}) => {
  return (
    <>
      {navItems.map(({ label, href }) => {
        const isActive =
          href === '/' ? pathname === href : pathname?.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className={cn(
              navLinkClassName,
              'block',
              isActive && 'text-brand-white',
            )}
          >
            <span className="relative">
              <UppercaseText>{label}</UppercaseText>
              <span
                className={cn(
                  'absolute -bottom-2 left-0 h-0.75 bg-brand-white transition-[width] duration-300 ease-in-out',
                  isActive ? 'w-full' : 'w-0',
                )}
              />
            </span>
          </Link>
        );
      })}
    </>
  );
};
