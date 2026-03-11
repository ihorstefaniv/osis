import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'w-full rounded-xl border border-slate-300/40 bg-transparent px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[var(--brand-purple)]',
        className,
      )}
      {...props}
    />
  );
}
