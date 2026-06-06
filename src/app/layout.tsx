import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import { cn } from '@/shared/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(geist.variable, geistMono.variable)}>
      <body>{children}</body>
    </html>
  );
}
