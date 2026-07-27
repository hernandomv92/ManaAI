"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Handshake, MessageCircle, Search, Sparkles, Wrench } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { FloatingWhatsApp } from "@/components/marketing/FloatingWhatsApp";
import { siteContent } from "@/lib/content";

const valueIcons = [Search, Sparkles, Handshake];
const processIcons = [MessageCircle, Search, Sparkles, Wrench, CheckCircle2];

export default function AboutPage() {
  const { about } = siteContent;

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, quiero conversar sobre la operación de mi empresa");
    window.open(`https://wa.me/${siteContent.hero.whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-[#0B2440]">
      <Navbar />

      <section className="border-b border-[#D7E0EA] bg-[#F7F9FC] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#155EEF]">Nosotros</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B2440] sm:text-6xl">{about.hero.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5D6B7C] sm:text-xl">{about.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#D7E0EA] py-16 sm:py-24" aria-labelledby="story-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#155EEF]">Una forma de trabajar</p>
              <h2 id="story-title" className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">{about.story.title}</h2>
              <p className="mt-5 border-l-2 border-[#155EEF] pl-5 text-lg font-medium leading-8 text-[#334A63]">{about.story.summary}</p>
              <div className="mt-8 overflow-hidden border border-[#CFDDF6] bg-[#EEF4FF] p-4">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image src={about.story.founder.image} alt={`Foto de ${about.story.founder.name}`} fill sizes="(min-width: 1024px) 360px, 90vw" className="object-cover" priority />
                </div>
                <p className="mt-4 text-lg font-semibold text-[#0B2440]">{about.story.founder.name}</p>
                <p className="mt-1 text-sm leading-6 text-[#5D6B7C]">{about.story.founder.role}</p>
              </div>
            </div>
            <div className="space-y-6 text-lg leading-8 text-[#5D6B7C]">
              {about.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="border-t border-[#D7E0EA] pt-6 font-semibold text-[#0B2440]">El resultado: más claridad para decidir, menos carga para operar y una base que permite seguir mejorando.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-16 sm:py-24" aria-labelledby="values-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#155EEF]">Lo que importa en la práctica</p>
            <h2 id="values-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{about.clientValue.title}</h2>
            <p className="mt-4 text-lg leading-8 text-[#5D6B7C]">{about.clientValue.subtitle}</p>
          </div>
          <div className="mt-10 grid gap-px border border-[#CFDDF6] bg-[#CFDDF6] md:grid-cols-3">
            {about.clientValue.items.map((value, index) => {
              const Icon = valueIcons[index];
              return <article key={value.title} className="bg-white p-7 sm:p-8"><div className="flex h-11 w-11 items-center justify-center bg-[#EEF4FF] text-[#155EEF]"><Icon className="h-5 w-5" aria-hidden="true" /></div><h3 className="mt-8 text-xl font-semibold text-[#0B2440]">{value.title}</h3><p className="mt-4 leading-7 text-[#5D6B7C]">{value.description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[#D7E0EA] py-16 sm:py-24" aria-labelledby="process-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#155EEF]">Implementación sin fricción</p><h2 id="process-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{about.process.title}</h2><p className="mt-5 text-lg leading-8 text-[#5D6B7C]">{about.process.subtitle}</p></div>
            <div className="divide-y divide-[#D7E0EA] border-y border-[#D7E0EA]">
              {about.process.steps.map((step, index) => { const Icon = processIcons[index]; return <div key={step.title} className="grid gap-4 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6"><div className="flex h-11 w-11 items-center justify-center bg-[#EEF4FF] text-[#155EEF]"><Icon className="h-5 w-5" aria-hidden="true" /></div><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#155EEF]">0{index + 1}</p><h3 className="mt-2 text-xl font-semibold text-[#0B2440]">{step.title}</h3><p className="mt-2 leading-7 text-[#5D6B7C]">{step.description}</p></div></div>; })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="faq-title">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#155EEF]">Preguntas frecuentes</p><h2 id="faq-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Una transición clara para tu equipo.</h2><div className="mt-8 divide-y divide-[#D7E0EA] border-y border-[#D7E0EA]">{about.faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[#0B2440] marker:hidden">{faq.question}<span className="float-right text-[#155EEF] transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl leading-7 text-[#5D6B7C]">{faq.answer}</p></details>)}</div></div>
      </section>

      <section className="bg-[#155EEF] py-14 text-white sm:py-16" aria-labelledby="about-cta-title"><div className="mx-auto flex max-w-6xl flex-col gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DDE9FF]">El primer paso es entender</p><h2 id="about-cta-title" className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Conversemos sobre lo que hoy le quita tiempo a tu equipo.</h2></div><button type="button" onClick={handleWhatsApp} className="inline-flex min-h-12 items-center justify-center gap-3 bg-white px-5 py-3 text-sm font-semibold text-[#0B2440] transition-colors hover:bg-[#EEF4FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#155EEF]">Conversar sobre mi operación<ArrowRight className="h-4 w-4" aria-hidden="true" /></button></div></section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

