"use client";

import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('contact'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in h-full">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black mb-2">Дякуємо!</h3>
        <p className="text-slate-500">Заявка вже у нашому Telegram. Скоро відповімо.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-slate-500 mb-1">Як до вас звертатись?</label>
        <input name="name" required type="text" placeholder="Ім'я" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-blue transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-500 mb-1">Telegram або телефон</label>
        <input name="contact" required type="text" placeholder="@username або +380..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-blue transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-500 mb-1">Що потрібно зробити?</label>
        <textarea name="message" rows={3} placeholder="Опишіть ваш проєкт..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-blue transition-colors resize-none"></textarea>
      </div>
      <button 
        disabled={status === 'loading'}
        className="w-full py-4 bg-brand-blue text-white font-black rounded-xl hover:bg-blue-700 transition-all mt-2 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === 'loading' ? <><Loader2 className="animate-spin" size={20} /> Відправка...</> : 'Відправити заявку'}
      </button>
      {status === 'error' && <p className="text-red-500 text-xs text-center font-bold mt-2">Сталася помилка. Перевірте з'єднання.</p>}
    </form>
  );
}