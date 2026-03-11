import { SectionTitle } from '@/app/components/section-title';

export default function AboutPage() {
  return (
    <section className="rounded-2xl bg-[color:var(--surface)] p-6">
      <SectionTitle>Про OSIS Studio</SectionTitle>
      <p className="text-[var(--muted)]">
        Ми маленька команда, яка спеціалізується на швидких, надійних та простих веб-рішеннях для малого бізнесу.
      </p>
    </section>
  );
}
