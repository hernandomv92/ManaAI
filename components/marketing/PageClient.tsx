"use client";

import { useState } from "react";
import { Navbar } from "@/components/marketing/Navbar";
import { Hero } from "@/components/marketing/Hero";
import { GuaranteeBlock } from "@/components/marketing/GuaranteeBlock";
import { Differentiators } from "@/components/marketing/Differentiators";
import { SolutionsGrid } from "@/components/marketing/SolutionsGrid";
import { Testimonials } from "@/components/marketing/Testimonials";
import { Footer } from "@/components/marketing/Footer";
import { FloatingWhatsApp } from "@/components/marketing/FloatingWhatsApp";
import { ChatWidget } from "@/components/marketing/ChatWidget";
import { Quiz } from "@/components/marketing/Quiz";
import { LeadMagnet } from "@/components/marketing/LeadMagnet";

export default function PageClient() {
  const [quizResult, setQuizResult] = useState<{ industry: string; challenge: string } | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <GuaranteeBlock />
      <Differentiators />
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

