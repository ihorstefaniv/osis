import { services } from '@/lib/content';
import { Card } from '@/components/ui/card';
import { SectionHeading, SectionShell } from '@/components/sections/section-shell';

export function ServicesSection() {
  return (
    <SectionShell className="border-t border-[color:var(--line)]/40">
      <SectionHeading eyebrow="Services" title="Core blocks" description="Service modules built for fast delivery." />
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service, index) => (
          <Card key={service.title} className="group">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-purple)]">0{index + 1}</p>
            <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{service.description}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
