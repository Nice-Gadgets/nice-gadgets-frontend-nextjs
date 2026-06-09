import Link from 'next/link';

import { Button } from '@/shared/ui/button';
import { ChevronUpIcon } from '@/shared/ui/icons';
import { Logo } from '@/shared/ui/Logo';
import { SmallText, UppercaseText } from '@/shared/ui/Typography';

export const Footer = () => {
  return (
    <footer className="bg-brand-surface border-t border-brand-elements px-6 py-5">
      <div className="hidden md:flex items-center justify-between">
        <Logo />

        <nav className="flex items-center gap-10">
          <Link
            href="https://github.com/Nice-Gadgets/nice-gadgets-frontend-nextjs"
            target="_blank"
          >
            <UppercaseText>Github</UppercaseText>
          </Link>
          <Link href="https://github.com/Nice-Gadgets" target="_blank">
            <UppercaseText>Contacts</UppercaseText>
          </Link>
          <Link href="/">
            <UppercaseText>Rights</UppercaseText>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <SmallText className="text-brand-secondary">Back to top</SmallText>
          <Button variant="control" className="border border-brand-elements">
            <ChevronUpIcon />
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:hidden gap-6">
        <Logo />

        <nav className="flex flex-col gap-3">
          <Link
            href="https://github.com/Nice-Gadgets/nice-gadgets-frontend-nextjs"
            target="_blank"
          >
            <UppercaseText>Github</UppercaseText>
          </Link>
          <Link href="https://github.com/Nice-Gadgets" target="_blank">
            <UppercaseText>Contacts</UppercaseText>
          </Link>
          <Link href="/">
            <UppercaseText>Rights</UppercaseText>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <SmallText className="text-brand-secondary">Back to top</SmallText>
          <Button variant="control" className="border border-brand-elements">
            <ChevronUpIcon />
          </Button>
        </div>
      </div>
    </footer>
  );
};
