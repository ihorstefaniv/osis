import Link from 'next/link';
import { Button } from '@/components/ui/button';

const heroStats = [
  { label: 'Запуск MVP', value: '2-6 тижнів' },
  { label: 'Lighthouse', value: '90+' },
  { label: 'Підтримка', value: '30 днів' },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[color:var(--line)]/50 bg-[color:var(--surface)] px-6 py-10 sm:px-10 sm:py-14 soft-glow">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,rgba(250,204,21,0.12),transparent_42%)]" />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="inline-flex rounded-full border border-[color:var(--line)] bg-[color:var(--surface-soft)] px-3 py-1 text-xs font-semibold">
            Modern SaaS Web Design
          </p>
          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Launch faster.
            <br />
            Scale cleaner.
          </h1>
          <p className="mt-5 max-w-xl text-sm text-[var(--muted)] sm:text-base">
            Minimal interface, clear structure, high performance. Designed for conversion and growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact"><Button>Почати проєкт</Button></Link>
            <Link href="/projects"><Button variant="ghost">Дивитися кейси</Button></Link>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {heroStats.map((item) => (
            <article key={item.label} className="rounded-2xl border border-[color:var(--line)]/50 bg-[color:var(--surface-soft)] p-4">
              <p className="text-2xl font-extrabold">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[var(--muted)]">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
