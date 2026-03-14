import Link from "next/link";
import { ArrowRight, Bot, Laptop, Printer, Calculator, CheckCircle2, MapPin } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm"; // <-- Правильний шлях до твоєї форми

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white selection:bg-brand-yellow selection:text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 pt-40 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        <div className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold mb-8 uppercase tracking-widest border border-slate-200">
          Мікро-студія повного циклу
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] text-slate-900 tracking-tight">
          Ваш бізнес. <br />
          <span className="text-brand-blue">Оцифрований.</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-medium leading-relaxed">
          Закриваємо всі технічні питання малого бізнесу: від розробки сайту, реєстрації на Google Maps і налаштування каси (ПРРО) до друку вашого логотипу на футболках.
        </p>
        <Link href="#contact" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-brand-blue hover:scale-105 transition-all shadow-xl shadow-slate-900/10">
          Почати співпрацю
        </Link>
      </section>

      {/* 2. SERVICES (Bento Grid) */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-black text-slate-900 mb-12">Що ми робимо</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Веб-сайти */}
          <div className="md:col-span-2 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-blue/30 transition-colors group">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
              <Laptop className="text-brand-blue" size={32} />
            </div>
            <h3 className="text-3xl font-black mb-4 text-slate-900">Веб-розробка</h3>
            <p className="text-slate-500 font-medium max-w-md">
              Швидкі сайти-візитки, корпоративні лендінги та системи обліку на базі Next.js. Особлива увага до QA-тестування — сайт працюватиме бездоганно.
            </p>
          </div>

          {/* Боти */}
          <div className="bg-brand-purple text-white p-10 rounded-[2.5rem] hover:bg-purple-700 transition-colors group">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Bot size={32} />
            </div>
            <h3 className="text-2xl font-black mb-4">Боти & CRM</h3>
            <p className="text-purple-100 font-medium text-sm">
              Helpdesk боти для клінік, збір заявок, автоматизація підтримки клієнтів.
            </p>
          </div>

          {/* Облік / ПРРО */}
          <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] group">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Calculator size={32} className="text-brand-yellow" />
            </div>
            <h3 className="text-xl font-black mb-4">Облік & ПРРО</h3>
            <p className="text-slate-400 font-medium text-sm">
              Налаштування програмних кас (Checkbox), впровадження систем для законної роботи.
            </p>
          </div>

          {/* Google Maps */}
          <div className="bg-white border-t-4 border-green-500 shadow-xl shadow-slate-200/50 p-10 rounded-[2.5rem] group hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <MapPin size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-black mb-4 text-slate-900">Google Maps</h3>
            <p className="text-slate-500 font-medium text-sm">
              Реєстрація бізнесу на картах, оптимізація профілю. Нехай клієнти з вашого міста знаходять вас першими.
            </p>
          </div>

          {/* Мерч */}
          <div className="bg-brand-yellow p-10 rounded-[2.5rem] group overflow-hidden relative">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Printer className="text-slate-900" size={32} />
              </div>
              <h3 className="text-xl font-black mb-4 text-slate-900">Мерч</h3>
              <p className="text-yellow-900 font-medium text-sm">
                Друк логотипу на чашках, базових футболках, теплих светрах та шопперах.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ПРОЄКТИ */}
      <section id="projects" className="py-24 bg-slate-50 w-full border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-4xl font-black text-slate-900">Останні роботи</h2>
            <Link href="#" className="font-bold text-brand-blue flex items-center gap-2 hover:gap-4 transition-all">
              Всі проєкти <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/30">
              <div className="bg-slate-100 w-full h-48 rounded-xl mb-6 flex items-center justify-center text-slate-400 font-bold text-xl">
                Медичний Дашборд
              </div>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-bold rounded-full">Web</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Next.js</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Doctor Helper</h3>
              <p className="text-slate-500 text-sm">Профільний інструмент для автоматизації роботи та обліку в медичних закладах.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/30">
              <div className="bg-slate-100 w-full h-48 rounded-xl mb-6 flex items-center justify-center text-slate-400 font-bold text-xl">
                Telegram Бот
              </div>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-bold rounded-full">Bot</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">CRM</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Helpdesk Bot для лікарні</h3>
              <p className="text-slate-500 text-sm">Система маршрутизації звернень клієнтів та автоматичний запис для лікарні в м. Миколаїв.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ЦІНИ ТА ПРОЦЕС */}
      <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div id="process">
          <h2 className="text-4xl font-black text-slate-900 mb-10">Процес роботи</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {[
              { num: "1", title: "Аналіз & ТЗ", text: "Вивчаємо бізнес, фіксуємо вимоги." },
              { num: "2", title: "Реалізація", text: "Пишемо код, налаштовуємо Google Maps/ПРРО або друкуємо мерч." },
              { num: "3", title: "Жорстке QA", text: "Тестуємо продукт на всіх пристроях." },
              { num: "4", title: "Реліз", text: "Передаємо вам готовий до роботи інструмент." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-blue text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {step.num}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-500">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-black text-slate-900 mb-10">Базові ціни</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-6 border border-slate-100 rounded-2xl bg-white shadow-sm hover:border-brand-blue transition-colors">
              <div>
                <h4 className="font-bold text-lg">Landing Page</h4>
                <p className="text-sm text-slate-500">Дизайн + Верстка</p>
              </div>
              <div className="text-xl font-black text-brand-blue">від $300</div>
            </div>
            <div className="flex justify-between items-center p-6 border border-slate-100 rounded-2xl bg-white shadow-sm hover:border-brand-purple transition-colors">
              <div>
                <h4 className="font-bold text-lg">Telegram Бот</h4>
                <p className="text-sm text-slate-500">З інтеграцією бази даних</p>
              </div>
              <div className="text-xl font-black text-brand-purple">від $400</div>
            </div>
            <div className="flex justify-between items-center p-6 border border-slate-100 rounded-2xl bg-white shadow-sm hover:border-green-500 transition-colors">
              <div>
                <h4 className="font-bold text-lg">Google Maps & SEO</h4>
                <p className="text-sm text-slate-500">Реєстрація + Оформлення</p>
              </div>
              <div className="text-xl font-black text-green-600">від $50</div>
            </div>
            <div className="flex justify-between items-center p-6 border border-slate-100 rounded-2xl bg-white shadow-sm hover:border-brand-yellow transition-colors">
              <div>
                <h4 className="font-bold text-lg">ПРРО & Облік</h4>
                <p className="text-sm text-slate-500">Налаштування під ключ</p>
              </div>
              <div className="text-xl font-black text-yellow-600">від $150</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. КОНТАКТИ ТА ФОРМА */}
      <section id="contact" className="py-24 bg-slate-900 text-white w-full rounded-t-[3rem] -mb-20 z-10 relative">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Давайте <span className="text-brand-yellow">створимо</span> щось круте.</h2>
            <p className="text-slate-400 mb-8">
              Залиште свої контакти, і ми зв'яжемося з вами для безкоштовної консультації та оцінки вашого проєкту.
            </p>
            <div className="space-y-4 font-medium">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-blue" size={20} /> Швидка відповідь
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-purple" size={20} /> Ніякого спаму
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-yellow" size={20} /> Прямий контакт з розробником
              </div>
            </div>
          </div>

          {/* Тут тепер тільки виклик компонента, ніякого зайвого HTML */}
          <div className="bg-white rounded-[2rem] p-8 text-slate-900 relative">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}