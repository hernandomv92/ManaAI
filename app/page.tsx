import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Hero } from '@/components/marketing/Hero';
import { SolutionsGrid } from '@/components/marketing/SolutionsGrid';
import { Testimonials } from '@/components/marketing/Testimonials';
import { CTA } from '@/components/marketing/CTA';
import { Footer } from '@/components/marketing/Footer';
import { FloatingWhatsApp } from '@/components/marketing/FloatingWhatsApp';
import { ChatWidget } from '@/components/marketing/ChatWidget';
import { siteContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Inicio',
  description: siteContent.site.description,
  openGraph: {
    title: `${siteContent.site.name} - ${siteContent.site.tagline}`,
    description: siteContent.site.description,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SolutionsGrid />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
      <ChatWidget />
    </main>
  );
}