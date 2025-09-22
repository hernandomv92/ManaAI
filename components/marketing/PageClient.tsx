"use client";

import { Navbar } from "@/components/marketing/Navbar";
import { Hero } from "@/components/marketing/Hero";
import { GuaranteeBlock } from "@/components/marketing/GuaranteeBlock";
import { Differentiators } from "@/components/marketing/Differentiators";
import { SolutionsGrid } from "@/components/marketing/SolutionsGrid";
import { Testimonials } from "@/components/marketing/Testimonials";
import { Footer } from "@/components/marketing/Footer";
import { FloatingWhatsApp } from "@/components/marketing/FloatingWhatsApp";
import { ChatWidget } from "@/components/marketing/ChatWidget";
import { StickyCTA } from "@/components/marketing/StickyCTA";

export default function PageClient() {
  return (
    <main className="min-h-screen pb-24">
      <Navbar />
      <Hero />
      <GuaranteeBlock />
      <Differentiators />
      <SolutionsGrid />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
      <ChatWidget />
      <StickyCTA />
    </main>
  );
}
