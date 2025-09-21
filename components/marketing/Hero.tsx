"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { siteContent } from "@/lib/content";

const rotatingWords = ["Procesos", "Ventas", "Clientes"];

function renderTerm(term: string) {
  const glossaryEntry = (siteContent.glossary as Record<string, string | undefined>)[term];
  if (glossaryEntry) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="text-brand-300 underline decoration-dotted cursor-help">{term}</span>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>{glossaryEntry}</p>
        </TooltipContent>
      </Tooltip>
    );
  }
  return <span>{term}</span>;
}

export function Hero() {
  const { socialProof } = siteContent;
  const testimonial = socialProof.testimonial;

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const badge = "Garantia 100% resultados";
  const primaryCTA = "Obten tu Plan de IA en 30 Segundos";
  const credibility = {
    result: "+45% ventas en 30 dias",
    client: "TechStart Pro",
    caseLink: "/casos/techstart-pro",
    caseLabel: "Ver caso de exito"
  };

  const scrollToQuiz = () => {
    const quizSection = document.getElementById("quiz-section");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <TooltipProvider>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/70">
            <Shield className="h-4 w-4 text-brand-300" aria-hidden="true" />
            {badge}
          </span>

          <div className="mt-6 flex flex-col items-center gap-6">
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Trabajamos para optimizar tus
              <span className="block text-brand-300 sm:inline sm:pl-3">{rotatingWords[wordIndex]}</span>.
            </h1>


            <p className="max-w-3xl text-base text-white/80 sm:text-lg">
              Agentes con {renderTerm("IA")}, procesos orquestados y datos limpios listos para vender mas.
            </p>

            <div className="flex flex-col items-center gap-3 text-sm text-white/70">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <Image
                  src={testimonial.avatar}
                  alt={"Foto de " + testimonial.author}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-base font-semibold text-white">{credibility.result}</p>
                  <p className="text-xs text-white/60">Caso real: {credibility.client}</p>
                </div>
              </div>
              <Link
                href={credibility.caseLink}
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-300 hover:text-brand-200"
              >
                {credibility.caseLabel}
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>

            <div className="flex w-full flex-col items-center gap-4 pt-6 sm:flex-row sm:justify-center">
              <Button
                onClick={scrollToQuiz}
                size="lg"
                className="w-full max-w-xs whitespace-normal break-words bg-brand-600 text-lg font-semibold text-white shadow-xl transition-colors duration-300 hover:bg-brand-500 sm:max-w-none"
              >
                {primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </TooltipProvider>
  );
}
