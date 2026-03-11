import Link from 'next/link';
import type { BlogPost } from '@/types';
import { Card } from '@/components/ui/card';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card>
      <p className="text-xs uppercase text-[var(--brand-purple)]">{post.category}</p>
      <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
      <p className="mt-2 text-sm text-[var(--muted)]">{post.excerpt}</p>
      <p className="mt-2 text-xs text-[var(--muted)]">Коментарів: {post.comments}</p>
      <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-medium text-[var(--brand-blue)]">Читати →</Link>
    </Card>
  );
}
