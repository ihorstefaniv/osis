import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/content';
import { ProjectDetails } from '@/components/projects/project-details';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: 'Проєкт не знайдено' };

  return {
    title: project.title,
    description: `${project.title}: кейс у ніші ${project.industry} від OSIS Studio.`,
  };
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return <ProjectDetails project={project} />;
}
