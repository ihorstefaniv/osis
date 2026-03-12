import Link from "next/link";
import { ArrowRight, ExternalLink, Stethoscope, Wallet, MessageSquare, Globe } from "lucide-react";

export const metadata = {
  title: "Проєкти",
  description: "Портфоліо OSIS Studio. Наші роботи: сайти, Telegram-боти, медичні дашборди та фінансові трекери.",
};

const projects = [
  {
    id: 1,
    title: "Morshyn Lik Bot",
    category: "Telegram Бот",
    tech: ["Telegram API", "Node.js"],
    description: "Бот-маршрутизатор для державної лікарні. Допомагає пацієнтам швидко знаходити потрібну інформацію, дізнаватися графік роботи лікарів та записуватися на прийом без зайвих дзвінків у реєстратуру.",
    color: "bg-brand-purple",
    textColor: "text-brand-purple",
    bgColor: "bg-brand-purple/10",
    icon: <MessageSquare size={24} />,
  },
  {
    id: 2,
    title: "Офіційний сайт лікарні",
    category: "Web Development",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
    description: "Сучасний, швидкий та адаптивний веб-сайт для медичного закладу. Зручна навігація для пацієнтів, інтеграція з картами та високі показники швидкості завантаження (Google PageSpeed 90+).",
    color: "bg-brand-blue",
    textColor: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
    icon: <Globe size={24} />,
  },
  {
    id: 3,
    title: "uBudget",
    category: "Web App",
    tech: ["React", "Next.js", "Supabase"],
    description: "Фінансовий трекер для особистого бюджету. Зручний інтерфейс для запису доходів та витрат, аналітика по категоріях та планування бюджету на місяць.",
    color: "bg-brand-yellow",
    textColor: "text-yellow-600",
    bgColor: "bg-brand-yellow/20",
    icon: <Wallet size={24} />,
  },
  {
    id: 4,
    title: "Doctor Helper",
    category: "Внутрішній інструмент",
    tech: ["React", "Дашборд"],
    description: "Профільний інструмент для автоматизації рутини в медичних закладах. Допомагає лікарям вести базовий облік, швидко формувати потрібні дані та економити час на паперовій роботі.",
    color: "bg-slate-800",
    textColor: "text-slate-800",
    bgColor: "bg-slate-100",
    icon: <Stethoscope size={24} />,
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white pt-32 pb-20">
      
      {/* HERO SECTION */}
      <section className="px-6 py-12 md:py-20 max-w-5xl mx-auto w-full text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 tracking-tight">
          Наші <span className="text-brand-blue">роботи</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
          Ми не просто пишемо код. Ми створюємо інструменти, які вирішують реальні задачі: від лікарень до особистих фінансів.
        </p>
      </section>

      {/* PROJECTS GRID */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
              
              {/* Іконка та Категорія */}
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${project.bgColor} ${project.textColor}`}>
                  {project.icon}
                </div>
                <div className="bg-slate-50 px-3 py-1 rounded-full text-xs font-bold text-slate-500 border border-slate-100">
                  {project.category}
                </div>
              </div>

              {/* Заголовок та Опис */}
              <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 font-medium mb-8 line-clamp-3">
                {project.description}
              </p>

              {/* Теги технологій */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Кнопка-посилання (заглушка) */}
              <div className="pt-6 border-t border-slate-100 flex items-center">
                <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-brand-blue transition-colors group/link">
                  Детальніше про кейс <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mt-24 px-6 max-w-4xl mx-auto w-full">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Маєте ідею для проєкту?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            Давайте обговоримо її. Зробимо аналіз, підберемо оптимальні технології і запустимо MVP (мінімально життєздатний продукт) без зайвих витрат.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-slate-900 font-black rounded-full hover:bg-yellow-400 hover:scale-105 transition-all">
            Написати нам <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}