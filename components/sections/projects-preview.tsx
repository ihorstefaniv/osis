import Link from 'next/link';
import { projects } from '@/lib/content';
import { ProjectCard } from '@/components/projects/project-card';
import { SectionHeading, SectionShell } from '@/components/sections/section-shell';

export function ProjectsPreviewSection() {
  return (
    <SectionShell className="border-t border-[color:var(--line)]/40">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Projects" title="Case studies" description="Structured portfolio with business outcomes." />
        <Link href="/projects" className="text-sm font-semibold text-[var(--brand-blue)]">Усі проєкти →</Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">{projects.slice(0, 2).map((project) => <ProjectCard key={project.id} project={project} />)}</div>
    </SectionShell>
  );
}
