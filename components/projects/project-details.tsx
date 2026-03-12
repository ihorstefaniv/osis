import type { Project } from '@/types';
import { Badge } from '@/components/ui/badge';

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <article className="space-y-5 rounded-2xl bg-[color:var(--surface)] p-5 sm:p-6">
      <header>
        <h1 className="text-2xl font-bold sm:text-3xl">{project.title}</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">{project.client} · {project.industry} · {project.timeline}</p>
      </header>
      <p className="text-sm sm:text-base">{project.description}</p>
      <section>
        <h2 className="font-semibold">Технології</h2>
        <div className="mt-2 flex flex-wrap gap-2">{project.technologies.map((t) => <Badge key={t}>{t}</Badge>)}</div>
      </section>
      <section>
        <h2 className="font-semibold">Фічі</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{project.features.map((f) => <li key={f}>{f}</li>)}</ul>
      </section>
      <p className="text-sm text-[var(--brand-purple)]">Результат: {project.result}</p>
      <a href={project.url} className="text-sm font-medium text-[var(--brand-blue)]">Посилання на проєкт</a>
    </article>
  );
}
