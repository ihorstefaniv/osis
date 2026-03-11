import type { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        'w-full rounded-xl border border-slate-300/40 bg-transparent px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[var(--brand-purple)]',
        className,
      )}
      {...props}
    />
  );
}
