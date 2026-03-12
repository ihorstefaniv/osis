import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils/cn';

export function SectionShell({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <section className={cn('space-y-6 py-10 sm:py-14', className)}>{children}</section>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="max-w-2xl space-y-2">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-purple)]">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {description ? <p className="text-sm text-[var(--muted)] sm:text-base">{description}</p> : null}
    </header>
  );
}
