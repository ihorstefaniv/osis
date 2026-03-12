import Link from 'next/link';

export default function Header() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 border border-slate-100 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl">
        <Link href="/" className="font-black text-xl tracking-tighter text-slate-900 flex items-center gap-1">
          OSIS<span className="w-2 h-2 rounded-full bg-brand-blue block"></span>
        </Link>
        
        <nav className="hidden md:flex gap-6 text-sm font-bold text-slate-600">
          <Link href="#services" className="hover:text-brand-blue transition-colors">Послуги</Link>
          <Link href="#projects" className="hover:text-brand-purple transition-colors">Проєкти</Link>
          <Link href="#pricing" className="hover:text-brand-yellow transition-colors">Ціни</Link>
          <Link href="#process" className="hover:text-slate-900 transition-colors">Процес</Link>
        </nav>

        <Link href="#contact" className="px-5 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-brand-blue transition-colors">
          Замовити
        </Link>
      </header>
    </div>
  );
}