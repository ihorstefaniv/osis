import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const metadata: Metadata = {
  title: 'Адмінка',
  description: 'Адмін-панель: CRUD для постів, категорій та проєктів з Supabase Auth.',
};

export default function AdminPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold sm:text-3xl">Адмінка</h1>
      <section className="rounded-2xl bg-[color:var(--surface)] p-5">
        <h2 className="font-semibold">Авторизація (Supabase Auth)</h2>
        <p className="mt-1 text-sm text-[var(--muted)]">Підключи login/logout через Supabase Auth (email/password або magic link).</p>
      </section>
      <section className="grid gap-4 rounded-2xl bg-[color:var(--surface)] p-5 lg:grid-cols-2">
        <form className="space-y-3" aria-label="Створити або редагувати пост">
          <h2 className="font-semibold">CRUD постів</h2>
          <Input placeholder="Заголовок" />
          <Input placeholder="Slug" />
          <Textarea placeholder="Контент" rows={5} />
          <Button type="button">Зберегти пост</Button>
        </form>
        <form className="space-y-3" aria-label="Створити або редагувати проєкт">
          <h2 className="font-semibold">CRUD проєктів</h2>
          <Input placeholder="Назва" />
          <Input placeholder="Slug" />
          <Textarea placeholder="Опис" rows={5} />
          <Button type="button" variant="secondary">Зберегти проєкт</Button>
        </form>
      </section>
    </div>
  );
}
