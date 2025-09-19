import { Metadata } from 'next';
import { useState } from 'react';
import { Navbar } from '@/components/marketing/Navbar';
import { Hero } from '@/components/marketing/Hero';
import { SolutionsGrid } from '@/components/marketing/SolutionsGrid';
import { Testimonials } from '@/components/marketing/Testimonials';
import { Footer } from '@/components/marketing/Footer';
import { FloatingWhatsApp } from '@/components/marketing/FloatingWhatsApp';
import { ChatWidget } from '@/components/marketing/ChatWidget';
import { Quiz } from '@/components/marketing/Quiz';
import { LeadMagnet } from '@/components/marketing/LeadMagnet';
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
  const [quizResult, setQuizResult] = useState<{industry: string, challenge: string} | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="quiz-section">
        <Quiz onQuizComplete={(result) => setQuizResult(result)} />
      </div>
      <SolutionsGrid quizResult={quizResult?.challenge || null} />
      <Testimonials />
      <LeadMagnet />
      <Footer />
      <FloatingWhatsApp />
      <ChatWidget />
    </main>
  );
}