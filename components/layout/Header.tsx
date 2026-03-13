"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react'; // Переконайся, що lucide-react встановлено

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Функція для перевірки активного посилання
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/services', label: 'Послуги', activeClass: 'text-brand-blue' },
    { href: '/projects', label: 'Проєкти', activeClass: 'text-brand-purple' },
    { href: '/about', label: 'Про студію', activeClass: 'text-yellow-600' },
    { href: '/contact', label: 'Контакти', activeClass: 'text-slate-900' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 border border-slate-100 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl transition-all duration-300 relative">
        
        {/* Логотип */}
        <Link href="/" className="font-black text-xl tracking-tighter text-slate-900 flex items-center gap-1 hover:opacity-80 transition-opacity z-[60]">
          OSIS<span className="w-2 h-2 rounded-full bg-brand-blue block"></span>
        </Link>
        
        {/* Навігація (Desktop) */}
        <nav className="hidden md:flex gap-6 text-sm font-bold text-slate-600">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`transition-colors ${isActive(link.href) ? link.activeClass : `hover:${link.activeClass}`}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Права частина: Кнопка та Бургер */}
        <div className="flex items-center gap-3 z-[60]">
          <Link 
            href="/contact" 
            className="hidden sm:flex px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-brand-blue transition-colors shadow-md shadow-slate-900/10 items-center gap-2"
          >
            Зв'язатися
          </Link>

          {/* Кнопка мобільного меню */}
          <button 
            className="md:hidden p-2 text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Мобільне меню (Drop-down) */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-4 md:hidden">
            <nav className="bg-white border border-slate-100 shadow-2xl rounded-3xl p-6 flex flex-col gap-4 text-center font-bold text-slate-600 animate-in fade-in zoom-in duration-300">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 text-lg ${isActive(link.href) ? link.activeClass : 'hover:text-slate-900'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-5 py-4 bg-slate-900 text-white rounded-2xl"
              >
                Зв'язатися
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}