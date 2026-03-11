import { SectionTitle } from '@/app/components/section-title';
import { Input } from '@/ui/input';
import { Textarea } from '@/ui/textarea';
import { Button } from '@/ui/button';

export default function ContactPage() {
  return (
    <section className="max-w-2xl rounded-2xl bg-[color:var(--surface)] p-6">
      <SectionTitle>Контакти</SectionTitle>
      <form className="space-y-4">
        <Input name="name" placeholder="Ваше ім'я" required />
        <Input name="email" type="email" placeholder="Email" required />
        <Textarea name="message" placeholder="Опишіть задачу" rows={6} required />
        <Button type="submit">Надіслати</Button>
      </form>
    </section>
  );
}
