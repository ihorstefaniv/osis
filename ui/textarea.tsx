import type { TextareaHTMLAttributes } from 'react';

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="w-full rounded-xl border border-slate-300/40 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-purple)]"
      {...props}
    />
  );
}
