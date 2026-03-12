import { Mail, MessageSquare, Clock, Send, MapPin } from "lucide-react";

export const metadata = {
  title: "Контакти",
  description: "Зв'яжіться з OSIS Studio для обговорення вашого проєкту. Швидка відповідь у Telegram.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 pt-32 pb-20">
      
      {/* HEADER SECTION */}
      <section className="px-6 py-12 max-w-5xl mx-auto w-full text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 tracking-tight">
          Давайте <span className="text-brand-yellow text-yellow-500">почнемо</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
          Заповніть форму або напишіть нам напряму. Ми проаналізуємо вашу задачу і запропонуємо найкраще рішення без "води".
        </p>
      </section>

      {/* CONTACT BLOCKS & FORM */}
      <section className="px-6 max-w-6xl mx-auto w-full mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          
          {/* ЛІВА ЧАСТИНА: Контакти */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">Наші контакти</h2>
              <p className="text-slate-500 font-medium">Вибирайте найзручніший спосіб зв'язку.</p>
            </div>

            <div className="space-y-6">
              {/* Telegram */}
              <a href="https://t.me/osis_studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">Telegram (Швидка відповідь)</p>
                  <p className="text-lg font-black text-slate-900">@osis_studio</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:hello@osis.studio" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                <div className="w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">Email</p>
                  <p className="text-lg font-black text-slate-900">hello@osis.studio</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">Локація</p>
                  <p className="text-lg font-black text-slate-900">Remote / Україна</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-yellow/20 rounded-2xl p-6 border border-brand-yellow/30 flex items-start gap-4">
              <Clock className="text-yellow-700 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-yellow-900 mb-1">Графік роботи</h4>
                <p className="text-sm text-yellow-800 font-medium">
                  Пн-Пт: 10:00 - 19:00 <br />
                  Сб-Нд: Вільний графік (можемо відповідати довше)
                </p>
              </div>
            </div>
          </div>

          {/* ПРАВА ЧАСТИНА: Форма */}
          <div className="lg:col-span-3 bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white relative shadow-2xl">
            <div className="absolute top-6 right-6 bg-brand-blue/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-brand-blue/30 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              Онлайн
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black mb-2">Напишіть нам</h3>
            <p className="text-slate-400 mb-8 font-medium">Опишіть вашу задачу, і ми запропонуємо рішення.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">Ваше ім'я</label>
                  <input 
                    type="text" 
                    placeholder="Олександр" 
                    className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 focus:outline-none focus:border-brand-blue focus:bg-slate-800 transition-all text-white placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">Telegram або Телефон</label>
                  <input 
                    type="text" 
                    placeholder="@username або +380..." 
                    className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 focus:outline-none focus:border-brand-blue focus:bg-slate-800 transition-all text-white placeholder-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Що потрібно зробити?</label>
                <textarea 
                  rows={4} 
                  placeholder="Наприклад: Потрібен Telegram-бот для клініки або лендінг для кав'ярні..." 
                  className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 focus:outline-none focus:border-brand-blue focus:bg-slate-800 transition-all text-white placeholder-slate-500 resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full py-4 bg-brand-blue text-white font-black text-lg rounded-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-blue/20"
              >
                Відправити заявку <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-xs text-slate-500 text-center mt-4">
                Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних.
              </p>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}