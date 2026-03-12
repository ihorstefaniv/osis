import Link from 'next/link';
import { navItems } from '@/lib/content';

export function Navigation() {
  return (
    <nav className="flex flex-wrap gap-2 text-sm" aria-label="Основна навігація">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-lg border border-transparent px-3 py-1.5 transition hover:border-[color:var(--line)] hover:bg-[color:var(--surface-soft)]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
