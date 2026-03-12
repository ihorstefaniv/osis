import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 pt-16 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="font-black text-2xl tracking-tighter text-slate-900 mb-4 block">
            OSIS<span className="text-brand-purple">.</span>Studio
          </Link>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-6">
            Допомагаємо малому бізнесу рости. Від швидкого лендінгу та налаштування каси до фірмової чашки з вашим логотипом.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wider">Послуги</h4>
          <ul className="space-y-2 text-sm text-slate-500 font-medium">
            <li><Link href="/services" className="hover:text-brand-blue transition-colors">Веб-розробка</Link></li>
            <li><Link href="/services" className="hover:text-brand-purple transition-colors">Автоматизація & CRM</Link></li>
            <li><Link href="/services" className="hover:text-brand-yellow transition-colors">Облік та ПРРО</Link></li>
            <li><Link href="/services" className="hover:text-slate-900 transition-colors">Брендинг & Мерч</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wider">Контакти</h4>
          <ul className="space-y-2 text-sm text-slate-500 font-medium">
            <li>Telegram: @osis_support</li>
            <li>Email: hello@osis.studio</li>
            <li>Україна</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} OSIS Studio. Всі права захищені.</p>
      </div>
    </footer>
  );
}