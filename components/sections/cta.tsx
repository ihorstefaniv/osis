import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionShell } from '@/components/sections/section-shell';

export function CtaSection() {
  return (
    <SectionShell className="border-t border-[color:var(--line)]/40">
      <section className="rounded-3xl border border-[color:var(--line)]/50 bg-[color:var(--surface)] px-6 py-10 text-center sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-purple)]">Ready to launch</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">Need a modern SaaS-style website?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--muted)]">We can ship a clean, scalable landing with SEO foundation in weeks.</p>
        <Link href="/contact" className="mt-6 inline-block"><Button>Зв&apos;язатися</Button></Link>
      </section>
    </SectionShell>
  );
}
