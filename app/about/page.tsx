import Link from "next/link";
import { ArrowRight, ShieldCheck, Target, Lightbulb, MapPin, Coffee } from "lucide-react";

export const metadata = {
  title: "Про студію",
  description: "Історія OSIS Studio. Хто ми, як працюємо та чому якість (QA) для нас на першому місці.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white pt-32 pb-20">
      
      {/* HERO SECTION */}
      <section className="px-6 py-12 md:py-20 max-w-5xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-slate-200">
          Сімейна мікро-студія
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 tracking-tight">
          Більше, ніж просто <span className="text-brand-purple">код</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
          Ми не конвеєрна агенція. OSIS Studio — це бутиковий підхід до розробки, де кожен проєкт робиться як для себе.
        </p>
      </section>

 {/* ІСТОРІЯ ТА НАЗВА (Оновлено) */}
      <section className="px-6 max-w-6xl mx-auto w-full mb-24">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Філософія <span className="text-brand-blue">OSIS</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Для нас це означає <strong className="text-slate-900">особисту відповідальність</strong> за кожен випущений проєкт. Ми не ховаємося за безликим брендом "веб-студії №1", а відповідаємо за кожну строчку коду власним ім'ям. Тому якість, прозорість та відсутність багів — це наш базовий стандарт.
            </p>
            <div className="flex items-center gap-2 text-slate-500 font-bold">
              <MapPin className="text-brand-blue" size={20} /> Remote First (працюємо з будь-якою точкою світу)
            </div>
          </div>
          
          {/* Декоративний блок */}
          <div className="w-full md:w-1/3 aspect-square bg-slate-900 rounded-[2rem] p-8 flex flex-col justify-center items-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -right-10 -bottom-10 text-[10rem] font-black text-white/5 pointer-events-none rotate-12">
              CODE
            </div>
            <div className="text-4xl font-black mb-4 z-10 tracking-widest">O.S.I.S.</div>
            <div className="w-12 h-1 bg-brand-blue rounded-full z-10"></div>
          </div>

        </div>
      </section>

      {/* ЧОМУ МИ (ПЕРЕВАГИ) */}
      <section className="px-6 max-w-6xl mx-auto w-full mb-24">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">Наш підхід до роботи</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Перевага 1: Підприємницький досвід */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/30 hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6">
              <Coffee size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Ми самі підприємці</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Ми маємо власний фізичний бізнес, проходили шлях залучення державних грантів, створювали робочі місця та платимо податки. Ми розмовляємо з власниками бізнесу однією мовою, бо самі знаємо ціну кожній інвестиції.
            </p>
          </div>

          {/* Перевага 2: QA Підхід */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/30 hover:-translate-y-1 transition-transform border-t-4 border-t-brand-purple">
            <div className="w-14 h-14 bg-brand-purple/10 text-brand-purple rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Жорсткий QA-контроль</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Завдяки професійному бекграунду в Manual QA (тестуванні програмного забезпечення), жоден проєкт не йде в реліз із багами. Ми перевіряємо кожну кнопку, форму та відображення на всіх можливих екранах.
            </p>
          </div>

          {/* Перевага 3: Фокус на результаті */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/30 hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-brand-yellow/20 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Тільки те, що треба</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Не продаємо складні CRM-системи кав'ярні, якій потрібен простий Telegram-бот. Наша мета — підібрати інструмент, який окупиться максимально швидко і закриє вашу реальну біль.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 max-w-4xl mx-auto w-full">
        <div className="bg-brand-blue rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-brand-blue/30">
          <Lightbulb size={48} className="mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-black mb-6">Готові почати роботу?</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-10 text-lg">
            Розкажіть про свій проєкт. Ми проаналізуємо задачу та запропонуємо найкраще технічне рішення для вашого бізнесу.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-black rounded-full hover:bg-slate-50 hover:scale-105 transition-all shadow-lg">
            Зв'язатися з нами <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}