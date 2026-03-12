export type NavItem = { href: string; label: string };

export type ServiceItem = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  createdAt: string;
  comments: number;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  client: string;
  industry: string;
  timeline: string;
  technologies: string[];
  features: string[];
  url: string;
  result: string;
};
