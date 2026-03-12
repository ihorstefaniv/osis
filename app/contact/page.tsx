import type { Metadata } from 'next';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Контакти',
  description: 'Форма звʼязку з OSIS Studio. Заявки зберігаються у Supabase.',
};

export default function ContactPage() {
  return (
    <section className="max-w-2xl space-y-4 rounded-2xl bg-[color:var(--surface)] p-5 sm:p-6">
      <h1 className="text-2xl font-bold">Контакти</h1>
      <p className="text-sm text-[var(--muted)]">Опиши задачу — ми запропонуємо формат реалізації та строки.</p>
      <form className="space-y-3" action="/api/contact" method="post">
        <Input name="name" placeholder="Ім'я" required aria-label="Ім'я" />
        <Input name="email" type="email" placeholder="Email" required aria-label="Email" />
        <Textarea name="message" rows={6} placeholder="Повідомлення" required aria-label="Повідомлення" />
        <Button type="submit">Надіслати</Button>
      </form>
    </section>
  );
}
