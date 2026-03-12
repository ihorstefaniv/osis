import type { MetadataRoute } from 'next';
import { posts, projects } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://osis-studio.vercel.app';

  const staticRoutes = ['', '/about', '/projects', '/blog', '/contact'].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const blogRoutes = posts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.createdAt) }));
  const projectRoutes = projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date() }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
