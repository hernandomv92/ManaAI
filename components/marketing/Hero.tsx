"use client";

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

const rotatingWords = ["Operaciones", "Comunicaciones", "Finanzas", "Proyectos", "Decisiones", "Clientes"];

const painCards = [
  {
    titlePrimary: "Negocios sin",
    titleBrand: "Lumora Partners",
    intro: "Cuando todo depende de ti y de tu equipo, el estres nunca se acaba.",
    points: [
      "Los clientes se cansan de esperar y algunos se van con la competencia.",
      "Los errores en facturas se convierten en discusiones y pagos atrasados.",
      "Saltas entre WhatsApp, correos y llamadas sin una visión clara de lo que pasa.",
      "Las urgencias interrumpen tu día y apagas incendios en lugar de hacer crecer tu negocio."
    ]
  },
  {
    titlePrimary: "Negocios con",
    titleBrand: "Lumora Partners",
    intro: "Con Lumora Partners, tu negocio fluye y recuperas el control.",
    points: [
      "Cada cliente recibe respuesta rápida y siente que lo atienden con prioridad.",
      "Las facturas se procesan solas, sin errores ni demoras.",
      "Todos los mensajes y llamadas están en un solo lugar, con la historia completa.",
      "Las tareas críticas se asignan solas y tu equipo sabe siempre qué hacer.",
      "Resultado: menos estrés, más confianza de tus clientes y más tiempo para enfocarte en crecer."
    ],
    highlight: true
  }
];

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
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => window.clearInterval(interval);
  }, []);

  const badge = "Asegura el futuro de tu negocio";
  const primaryCTA = "Agenda tu Auditoría Gratuita";

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
              Ponemos en orden tus
              <span className="block text-brand-300 sm:inline sm:pl-3">{rotatingWords[wordIndex]}</span>.
            </h1>

            <p className="max-w-3xl text-base text-white/80 sm:text-lg">
              Integramos {renderTerm("IA")}, automatizaciones y datos en un flujo que acelera cada etapa de tu negocio.
            </p>

            <div className="flex w-full flex-col items-center gap-3 text-sm text-white/70">
              <div className="grid w-full max-w-3xl items-stretch gap-3 sm:grid-cols-2">
                {painCards.map((card) => (
                  <div
                    key={`${card.titlePrimary}-${card.titleBrand}`}
                    className={`flex h-full flex-col rounded-2xl border p-6 text-left backdrop-blur-sm transition-all duration-300 ${card.highlight ? "border-brand-300 bg-gradient-to-br from-brand-500/20 via-brand-500/10 to-brand-400/10 shadow-[0_25px_45px_-25px_rgba(56,189,248,0.55)]" : "border-white/10 bg-white/5"}`}
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {card.titlePrimary}{" "}
                      <span className="text-brand-300">{card.titleBrand}</span>
                    </h3>
                    <p className={`mt-2 text-sm ${card.highlight ? "text-white/80" : "text-white/70"}`}
                    >
                      {card.intro}
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-white/80">
                      {card.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span
                            className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${card.highlight ? "bg-brand-300" : "bg-white/60"}`}
                          />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
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
