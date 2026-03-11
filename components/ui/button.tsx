import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils/cn';

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({ children, className, variant = 'primary', ...props }: Props) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-purple)]',
        variant === 'primary' && 'bg-[var(--brand-blue)] text-white hover:-translate-y-0.5 hover:shadow-lg',
        variant === 'secondary' && 'bg-[var(--brand-yellow)] text-slate-900 hover:-translate-y-0.5 hover:shadow-lg',
        variant === 'ghost' && 'border border-[color:var(--line)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-soft)]',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
