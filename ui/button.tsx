import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  const palette =
    variant === 'primary'
      ? 'bg-[var(--brand-blue)] text-white hover:opacity-90'
      : 'bg-[var(--brand-yellow)] text-slate-900 hover:opacity-90';

  return (
    <button
      className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${palette} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
