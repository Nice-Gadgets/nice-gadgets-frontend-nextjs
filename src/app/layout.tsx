import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import { cn } from '@/shared/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(geistMono.variable, 'font-sans', geist.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
