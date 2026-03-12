import Link from "next/link";
import { Laptop, Bot, Calculator, MapPin, Printer, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Послуги та Ціни",
  description: "Детальний прайс на розробку сайтів, Telegram-ботів, налаштування ПРРО та друк мерчу.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white pt-32 pb-20">
      
      {/* HEADER SECTION */}
      <section className="px-6 py-12 md:py-20 max-w-5xl mx-auto w-full text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 tracking-tight">
          Рішення, які <span className="text-brand-purple">працюють</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
          Від швидкого лендінгу для старту продажів до легалізації доходів через ПРРО та створення фірмового стилю.
        </p>
      </section>

      {/* DETAILED SERVICES & PRICING */}
      <section className="px-6 max-w-6xl mx-auto w-full space-y-24">
        
        {/* 1. ВЕБ-РОЗРОБКА */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Laptop size={16} /> Web Development
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Сайти, що приносять прибуток</h2>
            <p className="text-slate-500 mb-8 text-lg">
              Сучасні веб-додатки на базі Next.js. Ми не просто малюємо дизайн, ми створюємо швидкі, оптимізовані інструменти з жорстким QA-тестуванням перед запуском.
            </p>
            <ul className="space-y-3 mb-8">
              {['Адаптивний дизайн (Mobile First)', 'Швидкість завантаження 90+ в Google', 'SEO-оптимізація "з коробки"', 'Підключення аналітики'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-brand-blue" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-black mb-6 border-b border-slate-200 pb-4">Пакети</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Landing Page</h4>
                  <p className="text-sm text-slate-500">Сайт-візитка (1 сторінка)</p>
                </div>
                <div className="text-2xl font-black text-brand-blue">від $300</div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Корпоративний сайт</h4>
                  <p className="text-sm text-slate-500">Багатосторінковий сайт</p>
                </div>
                <div className="text-2xl font-black text-brand-blue">від $600</div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Кастомний Web App</h4>
                  <p className="text-sm text-slate-500">Дашборди, облік, складні системи</p>
                </div>
                <div className="text-2xl font-black text-brand-blue">Індивідуально</div>
              </div>
            </div>
          </div>
        </div>

{/* 2. БОТИ ТА АВТОМАТИЗАЦІЯ (ОНОВЛЕНО ДЛЯ РЕАЛІЙ) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:order-2">
            <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Bot size={16} /> Telegram Bots
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Прості та надійні боти</h2>
            <p className="text-slate-500 mb-8 text-lg">
              Не ускладнюємо там, де це не потрібно. Створюємо зручних ботів-помічників, які заберуть на себе однотипні питання клієнтів і працюватимуть як візитка вашого бізнесу 24/7.
            </p>
            <ul className="space-y-3 mb-8">
              {['Боти-візитки (контакти, прайс, графік)', 'FAQ (відповіді на часті питання)', 'Форми збору заявок та відгуків', 'Базова маршрутизація клієнтів'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-brand-purple" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-purple text-white p-8 rounded-[2.5rem] shadow-xl shadow-purple-900/20 lg:order-1">
            <h3 className="text-2xl font-black mb-6 border-b border-purple-400/30 pb-4">Прайс</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-lg">Бот-візитка</h4>
                  <p className="text-sm text-purple-200">Інформація, FAQ, меню</p>
                </div>
                <div className="text-2xl font-black">від $100</div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-lg">Збір заявок</h4>
                  <p className="text-sm text-purple-200">Анкета, пересилка вам у ТГ</p>
                </div>
                <div className="text-2xl font-black">від $150</div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-lg">Бот-маршрутизатор</h4>
                  <p className="text-sm text-purple-200">Зручне меню вибору послуг</p>
                </div>
                <div className="text-2xl font-black">від $200</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. БІЗНЕС ТА ЛЕГАЛІЗАЦІЯ (ПРРО + MAPS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-xl">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <Calculator size={28} className="text-brand-yellow" />
            </div>
            <h3 className="text-2xl font-black mb-4">Налаштування ПРРО</h3>
            <p className="text-slate-400 mb-6 font-medium">
              Допоможемо працювати легально без головного болю. Реєстрація каси, налаштування Checkbox або Вчасно.Каса, навчання персоналу.
            </p>
            <div className="text-3xl font-black text-brand-yellow mb-2">від $150</div>
            <p className="text-sm text-slate-500">Оплата разова. Супровід обговорюється окремо.</p>
          </div>

          <div className="bg-green-50 p-10 rounded-[2.5rem] shadow-xl shadow-green-100 border border-green-100">
            <div className="w-14 h-14 bg-green-200 text-green-700 rounded-2xl flex items-center justify-center mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-slate-900">Google Maps & SEO</h3>
            <p className="text-green-800/80 mb-6 font-medium">
              Додамо ваш бізнес на карти, правильно оформимо профіль, щоб клієнти з вашого міста знаходили вас першими.
            </p>
            <div className="text-3xl font-black text-green-600 mb-2">від $50</div>
            <p className="text-sm text-green-700/60">Швидкий результат для локального бізнесу.</p>
          </div>
        </div>

        {/* 4. БРЕНДИНГ ТА МЕРЧ */}
        <div className="bg-brand-yellow p-10 md:p-16 rounded-[3rem] shadow-xl flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white/50 text-slate-900 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Printer size={16} /> Брендинг
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Фізичний вимір бренду</h2>
            <p className="text-yellow-900 mb-8 text-lg font-medium">
              Оцифрували бізнес? Тепер час виділятися в реальному житті. Якісний друк вашого логотипу на чашках, базових футболках, теплих светрах та худі.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors">
              Розрахувати вартість <ArrowRight size={18} />
            </Link>
          </div>
          <div className="w-full md:w-1/3 bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-white/50 text-slate-900">
            <h4 className="font-black mb-4">Що ми друкуємо:</h4>
            <ul className="space-y-2 font-medium">
              <li className="flex justify-between border-b border-yellow-500/20 pb-2"><span>Футболки</span> <span>від 850 ₴</span></li>
              <li className="flex justify-between border-b border-yellow-500/20 pb-2"><span>Худі / Светри</span> <span>від 1500 ₴</span></li>
              <li className="flex justify-between border-b border-yellow-500/20 pb-2"><span>Чашки</span> <span>від 350 ₴</span></li>
              <li className="flex justify-between pt-2 text-sm text-yellow-800">Кінцева ціна залежить від тиражу.</li>
            </ul>
          </div>
        </div>

      </section>

      {/* CTA SECTION */}
      <section className="mt-24 py-20 bg-slate-50 border-t border-slate-100 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Не знаєте, з чого почати?</h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-10">
          Напишіть нам. Ми безкоштовно проконсультуємо, розберемо вашу ситуацію та підберемо інструменти, які потрібні саме вашому бізнесу зараз.
        </p>
        <Link href="/contact" className="px-8 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-brand-blue/20">
          Отримати консультацію
        </Link>
      </section>

    </div>
  );
}