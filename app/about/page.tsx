import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Про нас',
  description: 'Про підхід OSIS Studio: команда, стек, процес розробки та принципи.',
};

export default function AboutPage() {
  return (
    <article className="space-y-4 rounded-2xl bg-[color:var(--surface)] p-5 sm:p-6">
      <h1 className="text-2xl font-bold sm:text-3xl">Про OSIS Studio</h1>
      <p className="text-sm text-[var(--muted)] sm:text-base">Ми мікро веб-студія, що створює швидкі та практичні сайти для малого бізнесу.</p>
      <h2 className="text-xl font-semibold">Наш підхід</h2>
      <p className="text-sm text-[var(--muted)] sm:text-base">Працюємо ітеративно: бриф → структура → розробка → SEO → запуск → підтримка.</p>
      <h2 className="text-xl font-semibold">Технології</h2>
      <p className="text-sm text-[var(--muted)] sm:text-base">Next.js 15, TypeScript, Tailwind v4, Supabase. Це легкий і гнучкий стек під бюджетні хостинги.</p>
      <h2 className="text-xl font-semibold">Процес розробки</h2>
      <p className="text-sm text-[var(--muted)] sm:text-base">Код модульний: усі повторювані блоки винесені в окремі компоненти для легкого масштабування.</p>
    </article>
  );
}
