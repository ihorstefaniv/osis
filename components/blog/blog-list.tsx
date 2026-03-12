import type { BlogPost } from '@/types';
import { BlogCard } from '@/components/blog/blog-card';

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <BlogCard key={post.id} post={post} />)}</div>;
}
