import './globals.css';

import { Metadata } from 'next';

import { mont } from '@/shared/config';
import { CurrencyRatesProvider } from '@/shared/ui/CurrencyRatesProvider';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

export const metadata: Metadata = {
  title: {
    default: 'Nice Gadgets',
    template: '%s | Nice Gadgets',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mont.variable}>
      <body className="min-h-screen antialiased flex flex-col pt-11.75 lg:pt-16">
        <Header />
        <div className="flex-1">
          <CurrencyRatesProvider>{children}</CurrencyRatesProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
