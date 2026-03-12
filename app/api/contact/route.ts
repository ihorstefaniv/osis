import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export async function POST(request: Request) {
  const form = await request.formData();

  const payload = {
    name: String(form.get('name') ?? ''),
    email: String(form.get('email') ?? ''),
    message: String(form.get('message') ?? ''),
  };

  // Валідація мінімальна, щоб уникати порожніх заявок.
  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json({ ok: false, message: 'Заповніть усі поля.' }, { status: 400 });
  }

  const { error } = await supabaseServer.from('contacts').insert(payload);

  if (error) {
    return NextResponse.json({ ok: false, message: 'Помилка збереження заявки.' }, { status: 500 });
  }

  return NextResponse.redirect(new URL('/contact?success=1', request.url));
}
