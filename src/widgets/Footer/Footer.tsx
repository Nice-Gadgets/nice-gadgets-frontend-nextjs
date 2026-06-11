import Link from 'next/link';

import { Logo } from '@/shared/ui/Logo';
import { UppercaseText } from '@/shared/ui/Typography';
import { BackToTop } from '@/widgets/Footer/BackToTop';

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

const NavLinks = () => (
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
