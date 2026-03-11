import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SectionHeading, SectionShell } from '@/components/sections/section-shell';

export function ContactBlockSection() {
  return (
    <SectionShell className="border-t border-[color:var(--line)]/40">
      <SectionHeading eyebrow="Contact" title="Start with a short brief" description="Minimal form. Fast response. Clear next steps." />
      <section className="max-w-2xl rounded-2xl border border-[color:var(--line)]/50 bg-[color:var(--surface)] p-5 sm:p-6">
        <form className="space-y-3" action="/api/contact" method="post">
          <Input name="name" placeholder="Ім'я" required aria-label="Ім'я" />
          <Input name="email" type="email" placeholder="Email" required aria-label="Email" />
          <Textarea name="message" rows={5} placeholder="Опишіть задачу" required aria-label="Повідомлення" />
          <Button type="submit">Надіслати</Button>
        </form>
      </section>
    </SectionShell>
  );
}
