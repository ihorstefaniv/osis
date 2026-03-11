import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils/cn';

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-[color:var(--line)]/50 bg-[color:var(--surface)] p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl/5',
        className,
      )}
    >
      {children}
    </article>
  );
}
