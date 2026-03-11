import Link from 'next/link';
import { SectionTitle } from '@/app/components/section-title';
import { serviceHighlights } from '@/data/site-data';
import { Button } from '@/ui/button';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="soft-glow rounded-3xl bg-[color:var(--surface)] p-8">
        <p className="inline-block rounded-full bg-[var(--brand-yellow)] px-3 py-1 text-xs font-semibold text-slate-900">
          Мікро веб-студія
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">OSIS Studio створює легкі сайти з характером</h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          Дизайн без важких зображень, продумана модульна структура, швидкий запуск і гнучке масштабування.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/contact">
            <Button>Обговорити проєкт</Button>
          </Link>
          <Link href="/projects">
            <Button variant="secondary">Переглянути кейси</Button>
          </Link>
        </div>
      </section>

      <section>
        <SectionTitle>Що робимо</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-3">
          {serviceHighlights.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-300/20 bg-[color:var(--surface)] p-4 text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
