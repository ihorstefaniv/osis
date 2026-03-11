import type { blogPosts } from '@/data/site-data';

type BlogPost = (typeof blogPosts)[number];

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-slate-300/20 bg-[color:var(--surface)] p-4">
      <p className="text-xs font-medium uppercase text-[var(--brand-purple)]">{post.category}</p>
      <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
      <p className="mt-2 text-sm text-[var(--muted)]">{post.excerpt}</p>
    </article>
  );
}
