import { blogCategories } from '@/lib/content';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

export function BlogSearch() {
  return (
    <form className="grid gap-3 rounded-2xl bg-[color:var(--surface)] p-4 sm:grid-cols-3" aria-label="Фільтри блогу">
      <Input placeholder="Пошук статей" aria-label="Пошук статей" />
      <Select aria-label="Фільтр категорій" defaultValue="Усі">
        {blogCategories.map((category) => <option key={category} value={category}>{category}</option>)}
      </Select>
      <Input placeholder="Пошук по коментарях" aria-label="Пошук по коментарях" />
    </form>
  );
}
