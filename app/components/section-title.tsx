import type { PropsWithChildren } from 'react';

export function SectionTitle({ children }: PropsWithChildren) {
  return <h2 className="mb-4 text-2xl font-bold tracking-tight">{children}</h2>;
}
