import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { WhyUsSection } from '@/components/sections/why-us';
import { ProcessSection } from '@/components/sections/process';
import { ProjectsPreviewSection } from '@/components/sections/projects-preview';
import { BlogPreviewSection } from '@/components/sections/blog-preview';
import { CtaSection } from '@/components/sections/cta';
import { ContactBlockSection } from '@/components/sections/contact-block';

export const metadata: Metadata = {
  title: 'Головна',
  description: 'Лендінг мікро веб-студії OSIS Studio: швидко, легко, SEO-оптимізовано.',
};

export default function HomePage() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <ProjectsPreviewSection />
      <BlogPreviewSection />
      <CtaSection />
      <ContactBlockSection />
    </div>
  );
}
