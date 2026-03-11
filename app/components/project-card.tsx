import type { projectCards } from '@/data/site-data';

type Project = (typeof projectCards)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="soft-glow rounded-2xl border border-slate-200/20 bg-[color:var(--surface)] p-5">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-[var(--muted)]">Клієнт: {project.client}</p>
      <p className="text-sm text-[var(--muted)]">Тривалість: {project.duration}</p>
      <p className="mt-3 text-sm">Технології: {project.technologies}</p>
      <p className="mt-1 text-sm">Фічі: {project.features}</p>
      <a href={project.url} className="mt-3 inline-block text-sm font-medium text-[var(--brand-blue)]">
        Перейти до демо →
      </a>
    </article>
  );
}
