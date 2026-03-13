"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  // Функція для перевірки активного посилання
  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 border border-slate-100 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl transition-all duration-300">
        
        {/* Логотип */}
        <Link href="/" className="font-black text-xl tracking-tighter text-slate-900 flex items-center gap-1 hover:opacity-80 transition-opacity">
          OSIS<span className="w-2 h-2 rounded-full bg-brand-blue block"></span>
        </Link>
        
 {/* Навігація (Desktop) */}
        <nav className="hidden md:flex gap-6 text-sm font-bold text-slate-600">
          <Link 
            href="/services" 
            className={`transition-colors ${isActive('/services') ? 'text-brand-blue' : 'hover:text-brand-blue'}`}
          >
            Послуги
          </Link>
          <Link 
            href="/projects" 
            className={`transition-colors ${isActive('/projects') ? 'text-brand-purple' : 'hover:text-brand-purple'}`}
          >
            Проєкти (Портфоліо)
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-brand-yellow text-yellow-600' : 'hover:text-brand-yellow hover:text-yellow-600'}`}
          >
            Про студію
          </Link>
          {/* Якщо будеш робити сторінку Блогу */}
          {/* <Link 
            href="/blog" 
            className={`transition-colors ${isActive('/blog') ? 'text-green-500' : 'hover:text-green-500'}`}
          >
            Блог
          </Link> */}
          <Link 
            href="/contact" 
            className={`transition-colors ${isActive('/contact') ? 'text-slate-900' : 'hover:text-slate-900'}`}
          >
            Контакти
          </Link>
        </nav>

        {/* Кнопка (Desktop & Mobile) */}
        <Link 
          href="/contact" 
          className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-brand-blue transition-colors shadow-md shadow-slate-900/10 flex items-center gap-2"
        >
          Зв'язатися
        </Link>
      </header>
    </div>
  );
}