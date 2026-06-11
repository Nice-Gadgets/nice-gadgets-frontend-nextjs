import './globals.css';

import { mont } from '@/shared/config/fonts';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mont.variable}>
      <body className="min-h-screen antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
