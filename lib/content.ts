import type { BlogPost, NavItem, ProcessStep, Project, ServiceItem } from '@/types';

export const navItems: NavItem[] = [
  { href: '/', label: 'Головна' },
  { href: '/about', label: 'Про нас' },
  { href: '/projects', label: 'Проєкти' },
  { href: '/blog', label: 'Блог' },
  { href: '/contact', label: 'Контакти' },
  { href: '/admin', label: 'Адмінка' },
];

export const services: ServiceItem[] = [
  { title: 'Лендінги та сайти компаній', description: 'Швидкі сторінки з чіткою структурою під продаж і SEO.' },
  { title: 'MVP веб-продукти', description: 'Запуск функціонального продукту за 2-6 тижнів.' },
  { title: 'Підтримка й розвиток', description: 'Покращення швидкості, контенту та конверсії після релізу.' },
];

export const processSteps: ProcessStep[] = [
  { title: 'Аналіз', description: 'Уточнюємо цілі бізнесу, аудиторію та KPI.' },
  { title: 'Структура', description: 'Проєктуємо модулі, сторінки та SEO-архітектуру.' },
  { title: 'Розробка', description: 'Реалізуємо на Next.js + Supabase mobile-first.' },
  { title: 'Запуск', description: 'Деплой, перевірка метрик і план розвитку.' },
];

export const projects: Project[] = [
  {
    id: '1', title: 'NovaDent', slug: 'novadent', description: 'Сайт клініки з онлайн-записом та блогом.',
    client: 'NovaDent', industry: 'Медицина', timeline: '4 тижні',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind v4', 'Supabase'],
    features: ['Онлайн-запис', 'Блог', 'Локальне SEO'], url: 'https://example.com',
    result: '+38% заявок з органіки за 3 місяці.',
  },
  {
    id: '2', title: 'FlowCRM', slug: 'flowcrm', description: 'Внутрішній портал для сервісної компанії.',
    client: 'Flow Group', industry: 'B2B Сервіси', timeline: '7 тижнів',
    technologies: ['Next.js 15', 'Supabase Auth', 'Postgres'],
    features: ['Ролі користувачів', 'Звіти', 'Історія змін'], url: 'https://example.com',
    result: '-35% ручних операцій у відділі продажу.',
  },
];

export const posts: BlogPost[] = [
  {
    id: '1', title: 'SEO для малого бізнесу у 2026', slug: 'seo-dlia-maloho-biznesu-2026',
    excerpt: 'Практичний чекліст технічного SEO для швидких сайтів.',
    content: 'Повний контент статті-заглушки. Тут буде редакторський текст для SEO.',
    category: 'SEO', createdAt: '2026-03-01', comments: 6,
  },
  {
    id: '2', title: 'Як планувати MVP без перевитрат', slug: 'yak-planuvaty-mvp-bez-perevytrat',
    excerpt: 'Покроковий процес запуску MVP для мікро-команди.',
    content: 'Повний контент статті-заглушки. Тут буде редакторський текст для блогу.',
    category: 'Стратегія', createdAt: '2026-03-04', comments: 3,
  },
];

export const blogCategories = ['Усі', 'SEO', 'Frontend', 'Стратегія'];
