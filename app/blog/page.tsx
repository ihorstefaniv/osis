import type { Metadata } from 'next';
import { posts } from '@/lib/content';
import { BlogList } from '@/components/blog/blog-list';
import { BlogSearch } from '@/components/blog/blog-search';

export const metadata: Metadata = {
  title: 'Блог',
  description: 'Блог OSIS Studio: SEO, frontend, стратегія. Пошук, категорії та коментарі.',
};

export default function BlogPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold sm:text-3xl">Блог</h1>
      <BlogSearch />
      <BlogList posts={posts} />
    </section>
  );
}
