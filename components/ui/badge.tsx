import type { PropsWithChildren } from 'react';

export function Badge({ children }: PropsWithChildren) {
  return <span className="rounded-full bg-slate-500/10 px-2 py-1 text-xs">{children}</span>;
}
