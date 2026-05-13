"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const heroCard = {
  title: "Ordenamos lo que hoy frena tu operación.",
  subtitle: "Primero entendemos tu proceso; después aplicamos tecnología, automatización o IA solo donde realmente aporta valor.",
  items: [
    {
      title: "Procesos entendidos antes de automatizar",
      description: "Mapeamos cómo trabaja tu equipo para encontrar cuellos de botella reales, no supuestos."
    },
    {
      title: "Información más clara para decidir",
      description: "Conectamos formularios, hojas, CRMs o bases de datos para reducir copias manuales y retrabajo."
    },
    {
      title: "Automatizaciones con criterio",
      description: "Diseñamos flujos que acompañan tu operación actual y pueden crecer sin volverse un caos."
    },
    {
      title: "Acompañamiento durante la implementación",
      description: "Probamos, ajustamos y documentamos contigo para que la solución sea usable por tu equipo."
    }
  ],
  closing: "Menos promesas mágicas. Más claridad, implementación responsable y mejoras que tu equipo puede sostener."
};

export function Hero() {
  const badge = "Tecnología aplicada con criterio";
  const primaryCTA = "Agenda una conversación inicial";
  const titleBase = "Procesos más claros, equipos más enfocados,";
  const titleHighlight = "tecnología mejor aplicada";
  const subtitle = "Consultoría, desarrollo y automatización para resolver problemas reales de operación.";

  const handlePrimaryClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://calendly.com/hernandomv-xnsf/30min", "_blank", "noreferrer");
    }
  };

  return (
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

        <div className="mt-6 flex w-full flex-col items-center gap-5">
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {titleBase}
            <span className="block text-brand-300 sm:inline sm:pl-3">
              {titleHighlight}
            </span>
          </h1>

          <p className="max-w-3xl text-base text-white/80 sm:text-lg">{subtitle}</p>

          <div className="flex w-full flex-col items-center text-sm text-white/80">
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-0 rounded-2xl bg-brand-400/25 blur-xl" aria-hidden="true" />
              <div className="relative rounded-2xl border border-brand-300/50 bg-gradient-to-br from-brand-500/15 via-brand-500/10 to-brand-400/10 p-5 text-left shadow-[0_16px_28px_-18px_rgba(56,189,248,0.55)] backdrop-blur-sm sm:p-6">
                <h2 className="text-lg font-semibold text-white sm:text-xl">
                  {heroCard.title}
                </h2>
                <p className="mt-3 text-base text-white/80">
                  {heroCard.subtitle}
                </p>

                <ul className="mt-5 space-y-3 text-sm text-white/80">
                  {heroCard.items.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-300" />
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-white/70">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm font-medium text-white/90">
                  {heroCard.closing}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-4 pt-6 sm:flex-row sm:justify-center">
            <PrimaryButton onClick={handlePrimaryClick}>
              {primaryCTA}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </PrimaryButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
