export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200/20 py-8 text-center text-sm text-[var(--muted)]">
      <p>© {new Date().getFullYear()} OSIS Studio — веб-студія для малого бізнесу.</p>
      <p className="mt-1 text-xs">Next.js 15 · TypeScript · Tailwind v4 · Supabase</p>
    </footer>
  );
}
