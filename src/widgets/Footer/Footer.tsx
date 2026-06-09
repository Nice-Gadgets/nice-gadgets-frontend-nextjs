import Link from 'next/link';

import { ChevronUpIcon } from '@/shared/ui/icons';
import { Logo } from '@/shared/ui/Logo';
import { SmallText, UppercaseText } from '@/shared/ui/Typography';

const navLinks = [
  {
    href: 'https://github.com/Nice-Gadgets/nice-gadgets-frontend-nextjs',
    label: 'Github',
    external: true,
  },
  {
    href: 'https://github.com/Nice-Gadgets',
    label: 'Contacts',
    external: true,
  },
  { href: '/', label: 'Rights', external: false },
];

const NavLinks = () => (
  <>
    {navLinks.map(({ href, label, external }) => (
      <Link
        key={label}
        href={href}
        target={external ? '_blank' : undefined}
        className="text-brand-secondary hover:text-brand-white transition-transform duration-300 hover:scale-110"
      >
        <UppercaseText>{label}</UppercaseText>
      </Link>
    ))}
  </>
);

const BackToTop = () => (
  <Link
    href="/"
    className="group flex items-center gap-4 transition-transform duration-300 hover:scale-110"
  >
    <SmallText className="text-brand-secondary group-hover:text-brand-white transition-colors">
      Back to top
    </SmallText>
    <div className="border border-brand-elements p-2 aspect-square cursor-pointer">
      <ChevronUpIcon className="text-brand-secondary group-hover:text-brand-white" />
    </div>
  </Link>
);

export const Footer = () => {
  return (
    <footer className="bg-brand-surface border-t border-brand-elements px-6 py-5">
      <div className="hidden md:flex items-center justify-between">
        <Logo />

        <nav className="flex items-center gap-10">
          <NavLinks />
        </nav>

        <BackToTop />
      </div>

      <div className="flex flex-col md:hidden gap-6">
        <Logo />

        <nav className="flex flex-col gap-3">
          <NavLinks />
        </nav>

        <div className="self-end">
          <BackToTop />
        </div>
      </div>
    </footer>
  );
};
