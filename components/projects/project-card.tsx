import Link from 'next/link';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="soft-glow">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-1 text-sm text-[var(--muted)]">{project.description}</p>
      <p className="mt-2 text-sm">Клієнт: {project.client} · {project.timeline}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.technologies.map((t) => <Badge key={t}>{t}</Badge>)}
      </div>
      <p className="mt-3 text-sm text-[var(--brand-purple)]">Результат: {project.result}</p>
      <Link href={`/projects/${project.slug}`} className="mt-3 inline-block text-sm font-medium text-[var(--brand-blue)]">Кейс →</Link>
    </Card>
  );
}
