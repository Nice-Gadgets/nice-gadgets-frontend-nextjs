import './globals.css';

import { mont } from '@/shared/config/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mont.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
