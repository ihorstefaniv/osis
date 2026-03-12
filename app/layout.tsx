import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  // ВАЖЛИВО: Потім заміниш на свій реальний домен
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    template: "%s | OSIS Studio", // Підставлятиме "Проєкти | OSIS Studio"
    default: "OSIS Studio — Веб-розробка, Боти, ПРРО", 
  },
  description: "Мікро-студія повного циклу. Створюємо сайти на Next.js, Telegram-боти, налаштовуємо ПРРО та робимо брендинг.",
  keywords: ["розробка сайтів", "telegram боти", "ПРРО", "Checkbox", "веб-студія Львів"],
  openGraph: {
    type: "website",
    locale: "uk_UA",
    siteName: "OSIS Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}