import { BlogCard } from '@/app/components/blog-card';
import { SectionTitle } from '@/app/components/section-title';
import { blogPosts } from '@/data/site-data';
import { Input } from '@/ui/input';
import { Select } from '@/ui/select';

export default function BlogPage() {
  return (
    <section className="space-y-5">
      <SectionTitle>Блог</SectionTitle>
      {/* Filters are modular and ready to be connected to Supabase query params. */}
      <div className="grid gap-3 rounded-2xl bg-[color:var(--surface)] p-4 sm:grid-cols-3">
        <Input placeholder="Пошук постів" />
        <Select defaultValue="all">
          <option value="all">Усі категорії</option>
          <option value="frontend">Frontend</option>
          <option value="strategy">Стратегія</option>
        </Select>
        <Input placeholder="Коментарі: пошук по автору" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  );
}
