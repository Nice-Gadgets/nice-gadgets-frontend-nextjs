import './globals.css';

import { myCustomFont } from '@/shared/config/fonts';
import { cn } from '@/shared/lib/utils';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(myCustomFont.variable)}>
      <body className="min-h-screen bg-brand-black text-brand-white antialiased">
        {children}
      </body>
    </html>
  );
}
