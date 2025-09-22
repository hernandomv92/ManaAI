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

const rotatingWords = ["Procesos", "Ventas", "Clientes"];

const painCards = [
  {
    title: "Negocios fisicos sin orden",
    intro: "La operacion diaria se frena cuando todo depende de tareas manuales.",
    points: [
      "Los correos de clientes se pierden entre bandejas sin seguimiento.",
      "La recepcion y el envio de facturas se retrasan por capturas y planillas.",
      "Los canales de comunicacion operan sin contexto y duplican conversaciones.",
      "Cada consulta urgente se atiende a ultimo momento porque no hay procesos claros."
    ]
  },
  {
    title: "Negocios online sin automatizacion",
    intro: "El crecimiento digital se detiene si los sistemas no hablan entre si.",
    points: [
      "Pedidos y pagos llegan por distintas plataformas sin sincronizacion central.",
      "Soporte responde tarde porque los tickets se mezclan con mensajes sueltos.",
      "Las campanas generan leads que nadie sigue por falta de alertas automaticas.",
      "Los reportes clave se arman a mano y las decisiones llegan tarde."
    ]
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
    }, 1300);
    return () => window.clearInterval(interval);
  }, []);

  const badge = "Asegura el futuro de tu negocio";
  const primaryCTA = "Obt?n una llamada para diagnosticar tu negocio";

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
              Integramos {renderTerm("IA")}, automatizaciones y datos en un flujo que acelera cada etapa de tu negocio.
            </p>

            <div className="flex w-full flex-col items-center gap-3 text-sm text-white/70">
              <div className="grid w-full max-w-3xl items-stretch gap-3 sm:grid-cols-2">
                {painCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm"
                  >
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{card.intro}</p>
                    <ul className="mt-4 space-y-3 text-sm text-white/80">
                      {card.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-300" />
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
