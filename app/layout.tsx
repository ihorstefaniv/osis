import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';

export const metadata: Metadata = {
  title: 'OSIS Studio',
  description: 'Мікро веб-студія на Next.js + Supabase',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main className="mx-auto min-h-[calc(100vh-140px)] max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
