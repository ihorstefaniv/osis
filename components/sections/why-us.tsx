import { Card } from '@/components/ui/card';
import { SectionHeading, SectionShell } from '@/components/sections/section-shell';

const points = [
  'Strong visual hierarchy and predictable UX.',
  'SEO-first structure and clean semantic markup.',
  'Reusable component system with low maintenance cost.',
];

export function WhyUsSection() {
  return (
    <SectionShell className="border-t border-[color:var(--line)]/40">
      <SectionHeading eyebrow="Why us" title="Designed like a product" description="Clear sections. Card-based layout. Minimal noise." />
      <div className="grid gap-4 md:grid-cols-3">
        {points.map((item) => (
          <Card key={item} className="bg-[color:var(--surface-soft)]">
            <p className="text-sm text-[var(--muted)]">{item}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
