import Link from 'next/link';
import { navItems } from '@/data/site-data';

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/30 bg-[color:var(--surface)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-[var(--brand-purple)]">
          OSIS Studio
        </Link>
        <nav className="flex flex-wrap gap-3 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-2 py-1 hover:bg-slate-500/10">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
