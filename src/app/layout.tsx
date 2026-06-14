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
      <body className="min-h-screen antialiased flex flex-col pt-[47px] lg:pt-16">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
