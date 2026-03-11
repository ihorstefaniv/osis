import { processSteps } from '@/lib/content';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { SectionHeading, SectionShell } from '@/components/sections/section-shell';

export function ProcessSection() {
  return (
    <SectionShell className="border-t border-[color:var(--line)]/40">
      <SectionHeading eyebrow="Process" title="Delivery pipeline" description="Simple and transparent flow from brief to launch." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, idx) => (
          <Card key={step.title}>
            <Badge>Крок {idx + 1}</Badge>
            <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">{step.description}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
