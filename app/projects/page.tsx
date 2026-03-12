import type { Metadata } from 'next';
import { projects } from '@/lib/content';
import { ProjectCard } from '@/components/projects/project-card';

export const metadata: Metadata = {
  title: 'Проєкти',
  description: 'Портфоліо OSIS Studio: кейси з описом задач, стеку і результатів.',
};

export default function ProjectsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold sm:text-3xl">Проєкти</h1>
      <p className="text-sm text-[var(--muted)]">Кожен кейс містить клієнта, індустрію, строки, технології, фічі та результат.</p>
      <div className="grid gap-4 sm:grid-cols-2">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
    </section>
  );
}
