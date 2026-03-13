export async function POST(req: Request) {
  const data = await req.json();
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  const text = `🚀 Нова заявка!\nІм'я: ${data.name}\nТелефон: ${data.phone}`;
  
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  return Response.json({ success: true });
}