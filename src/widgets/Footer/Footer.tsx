'use client';

import Link from 'next/link';

import { Logo } from '@/shared/ui/Logo';
import { UppercaseText } from '@/shared/ui/Typography';

import { BackToTop } from './BackToTop';

const navLinks = [
  {
    href: 'https://github.com/Nice-Gadgets/nice-gadgets-frontend-nextjs',
    label: 'Github',
  },
  {
    href: 'https://github.com/Nice-Gadgets',
    label: 'Contacts',
  },
  {
    href: 'https://github.com/Nice-Gadgets/nice-gadgets-frontend-nextjs/blob/main/LICENSE',
    label: 'Rights',
  },
];

const NavLinks = () => {
  return (
    <>
      {navLinks.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          className="text-brand-secondary hover:text-brand-white transition-transform duration-300 hover:scale-110"
        >
          <UppercaseText>{label}</UppercaseText>
        </Link>
      ))}
    </>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className="bg-brand-surface border-t border-brand-elements px-6 py-5">
        <div className="hidden md:flex items-center relative">
          <Logo />

          <nav className="absolute left-1/2 -translate-x-1/2 items-center gap-10 flex">
            <NavLinks />
          </nav>
        </div>

        <div className="flex flex-col md:hidden gap-6">
          <Logo />

          <nav className="flex flex-col gap-3">
            <NavLinks />
          </nav>
        </div>
      </footer>

      <div className="fixed right-6 bottom-6 z-100">
        <BackToTop />
      </div>
    </>
  );
};
