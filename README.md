# OSIS Studio — стартовий проєкт

Легкий SEO-оптимізований starter для мікро веб-студії на **Next.js 15 + TypeScript + Tailwind v4 + Supabase**.

## Структура

- `app/` — маршрути App Router (головна, блог, проєкти, контакти, адмінка)
- `components/` — UI, layout і секційні блоки
- `lib/` — контент, Supabase клієнти, утиліти
- `types/` — спільні типи
- `styles/` — глобальні стилі
- `supabase/schema.sql` — SQL-схема

## Запуск локально

```bash
npm install
npm run dev
```

## Перевірки

```bash
npm run lint
npm run build
```

## Налаштування Supabase

1. Створи проєкт у Supabase.
2. Виконай SQL із `supabase/schema.sql`.
3. Скопіюй `.env.example` у `.env.local`.
4. Додай ключі Supabase.

## Деплой на Vercel

1. Імпортуй репозиторій у Vercel.
2. Додай змінні середовища з `.env.example`.
3. Build command: `npm run build`, Output: Next.js default.

## Деплой на Cloudflare Pages

1. Підключи репозиторій у Cloudflare Pages.
2. Build command: `npm run build`.
3. Налаштуй адаптер/рантайм Next.js згідно документації Cloudflare для App Router.
4. Додай ENV змінні Supabase.

## Що вже реалізовано

- Mobile-first верстка.
- SEO metadata + `sitemap.xml` + `robots.txt`.
- Модульна архітектура компонентів.
- Блог і проєкти зі сторінками деталей (`/blog/[slug]`, `/projects/[slug]`).
- Форма контактів із записом у Supabase.
- Заготовка адмінки під CRUD і Supabase Auth.
