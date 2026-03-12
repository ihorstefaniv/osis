import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[color:var(--line)]/50 bg-[color:var(--surface)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-lg font-bold">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-yellow)]" />
          <span className="grad-text">OSIS Studio</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
