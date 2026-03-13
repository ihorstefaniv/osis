import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-white pt-24 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Верхня частина з великим текстом */}
        <div className="text-center md:text-left mb-20">
          <h2 className="text-[12vw] md:text-[7rem] font-black leading-none tracking-tighter text-white/5 select-none">
            OSIS STUDIO
          </h2>
        </div>
        
        {/* Основна сітка футера */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12 mb-16">
          
          {/* Компанія */}
          <div className="md:col-span-1">
            <Link href="/" className="font-black text-2xl tracking-tighter text-white flex items-center gap-1 mb-6">
              OSIS<span className="w-2 h-2 rounded-full bg-brand-blue block"></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Оцифровуємо, автоматизуємо та брендуємо малий бізнес. Працюємо на результат, а не на процес.
            </p>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              ФОП Стефанів І.Т.
            </div>
          </div>
          
          {/* Навігація */}
          <div>
            <h4 className="text-slate-100 font-bold mb-6 text-lg">Компанія</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">Про студію</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Наші роботи (Портфоліо)</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Послуги та Ціни</Link></li>
            </ul>
          </div>

          {/* Послуги (Швидкі лінки) */}
          <div>
            <h4 className="text-slate-100 font-bold mb-6 text-lg">Експертиза</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li><Link href="/services" className="hover:text-brand-blue transition-colors">Веб-розробка (Next.js)</Link></li>
              <li><Link href="/services" className="hover:text-brand-purple transition-colors">Telegram Боти & CRM</Link></li>
              <li><Link href="/services" className="hover:text-brand-yellow transition-colors">Налаштування ПРРО</Link></li>
              <li><Link href="/services" className="hover:text-green-400 transition-colors">Google Maps & SEO</Link></li>
            </ul>
          </div>

          {/* Контакти */}
          <div>
            <h4 className="text-slate-100 font-bold mb-6 text-lg">Контакти</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li>
                <a href="https://t.me/osis_studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  Telegram: @osis_studio
                </a>
              </li>
              <li>
                <a href="mailto:hello@osis.studio" className="hover:text-white transition-colors flex items-center gap-2">
                  hello@osis.studio
                </a>
              </li>
              <li className="pt-2 border-t border-white/10 mt-4 text-xs text-slate-500">
                Львівська область, Україна <br />
                Працюємо віддалено (Remote)
              </li>
            </ul>
          </div>

        </div>
        
        {/* Нижній рядок (Копірайт) */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs font-bold text-slate-500">
          <p>&copy; {currentYear} OSIS Studio. Всі права захищені.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-slate-300 transition-colors">Політика конфіденційності</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Договір оферти</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}