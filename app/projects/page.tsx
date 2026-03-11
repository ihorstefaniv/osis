import { ProjectCard } from '@/app/components/project-card';
import { SectionTitle } from '@/app/components/section-title';
import { projectCards } from '@/data/site-data';

export default function ProjectsPage() {
  return (
    <section>
      <SectionTitle>Проєкти</SectionTitle>
      <p className="mb-6 text-sm text-[var(--muted)]">Секція з розширеними блоками: клієнт, терміни, стек, фічі, лінк.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {projectCards.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
