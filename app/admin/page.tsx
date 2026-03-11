import { SectionTitle } from '@/app/components/section-title';
import { Button } from '@/ui/button';

export default function AdminPage() {
  return (
    <section className="space-y-4 rounded-2xl bg-[color:var(--surface)] p-6">
      <SectionTitle>Адмінка</SectionTitle>
      <p className="text-sm text-[var(--muted)]">
        Підготовлено місце для CRUD блогу та проєктів через Supabase (таблиці posts, categories, comments, projects).
      </p>
      <div className="flex flex-wrap gap-3">
        <Button>Створити пост</Button>
        <Button variant="secondary">Створити проєкт</Button>
      </div>
    </section>
  );
}
