import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts } from '@/lib/content';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return { title: 'Статтю не знайдено' };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="space-y-5">
      <header className="rounded-2xl bg-[color:var(--surface)] p-5 sm:p-6">
        <p className="text-xs uppercase text-[var(--brand-purple)]">{post.category}</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">{post.title}</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">{post.createdAt}</p>
      </header>

      <Card>
        <p className="text-sm leading-7 sm:text-base">{post.content}</p>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold">Коментарі</h2>
        <form className="mt-3 space-y-3">
          <Input placeholder="Ваше ім'я" aria-label="Ім'я для коментаря" />
          <Textarea placeholder="Ваш коментар" aria-label="Коментар" rows={4} />
          <Button type="button">Додати коментар</Button>
        </form>
      </Card>
    </article>
  );
}
