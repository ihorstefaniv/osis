import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, message, business } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error('Telegram tokens are missing in environment variables');
      return NextResponse.json({ error: 'Конфігурація сервера неповна' }, { status: 500 });
    }

    const text = `
🚀 **Нова заявка з OSIS.studio**

👤 **Ім'я:** ${name}
📞 **Телефон:** ${phone}
🏢 **Бізнес:** ${business || 'Не вказано'}
💬 **Повідомлення:** ${message || 'Без повідомлення'}
    `;

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      throw new Error('Помилка відправки в Telegram');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Помилка при відправці' }, { status: 500 });
  }
}