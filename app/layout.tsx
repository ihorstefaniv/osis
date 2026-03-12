import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://osis-studio.vercel.app'),
  title: { default: 'OSIS Studio — мікро веб-студія', template: '%s | OSIS Studio' },
  description: 'OSIS Studio: швидка веб-розробка, SEO і mobile-first рішення на Next.js 15 + Supabase.',
  openGraph: {
    title: 'OSIS Studio',
    description: 'Легкі сайти для малого бізнесу.',
    url: 'https://osis-studio.vercel.app',
    siteName: 'OSIS Studio',
    locale: 'uk_UA',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main className="mx-auto min-h-[calc(100vh-160px)] w-full max-w-6xl px-4 py-6 sm:py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
