import Link from 'next/link';
import { posts } from '@/lib/content';
import { BlogList } from '@/components/blog/blog-list';
import { SectionHeading, SectionShell } from '@/components/sections/section-shell';

export function BlogPreviewSection() {
  return (
    <SectionShell className="border-t border-[color:var(--line)]/40">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Blog" title="Latest insights" description="Short practical posts for product and growth teams." />
        <Link href="/blog" className="text-sm font-semibold text-[var(--brand-blue)]">Всі статті →</Link>
      </div>
      <BlogList posts={posts.slice(0, 2)} />
    </SectionShell>
  );
}
