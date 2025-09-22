"use client";

import { useState } from "react";
import { Sparkles, Wrench, Handshake, BarChart3, Eye, ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const iconMap = {
  Wrench,
  Handshake,
  BarChart3,
  Eye,
} as const;

type DifferentiatorIcon = keyof typeof iconMap;

type DifferentiatorItem = {
  label: string;
  summary: string;
  metric: string;
  detail: string;
  icon: DifferentiatorIcon;
  footerTitle: string;
  footerBadges?: string[];
};

const DIFFERENTIATORS = {
  title: "Lo que nos hace distintos",
  intro: "No ofrecemos soluciones genÃ©ricas. DiseÃ±amos orden real adaptado a tu negocio.",
  items: [
    {
      label: "Soluciones a tu medida",
      summary: "Procesos diseÃ±ados para tu forma de trabajar.",
      metric: "Nada de plantillas genÃ©ricas",
      detail: "Diagnosticamos tu operaciÃ³n y adaptamos cada flujo a tu realidad. La soluciÃ³n encaja contigo, no al revÃ©s.",
      icon: "Wrench",
      footerTitle: "Adaptado a tu negocio",
      footerBadges: ["Flexible", "Personalizado"],
    },
    {
      label: "ImplementaciÃ³n acompaÃ±ada",
      summary: "No entregamos software y nos vamos.",
      metric: "Iteramos contigo paso a paso",
      detail: "Trabajamos junto a tu equipo hasta que todo fluya con claridad y sin fricciones. Estamos presentes en cada ajuste.",
      icon: "Handshake",
      footerTitle: "Caminamos contigo",
      footerBadges: ["Cercano", "PrÃ¡ctico"],
    },
    {
      label: "VisiÃ³n a largo plazo",
      summary: "Evitamos que el caos vuelva a empezar.",
      metric: "Bases sÃ³lidas que escalan",
      detail: "Creamos procesos que crecen contigo, para que el orden se mantenga aunque tu negocio y tus equipos se expandan.",
      icon: "BarChart3",
      footerTitle: "Crece sin caos",
      footerBadges: ["Escalable", "Duradero"],
    },
    {
      label: "Transparencia total",
      summary: "Ves el impacto en tiempo real.",
      metric: "Datos claros, sin humo",
      detail: "Mostramos cÃ³mo trabajamos y quÃ© resultados logramos en cada etapa. TÃº sabes siempre dÃ³nde estamos y hacia dÃ³nde vamos.",
      icon: "Eye",
      footerTitle: "Todo claro, siempre",
      footerBadges: ["Datos", "Confianza"],
    },
  ] satisfies DifferentiatorItem[],
} as const;

export function Differentiators() {
  const [active, setActive] = useState(0);
  const activeItem = DIFFERENTIATORS.items[active];
  const IconComp = iconMap[activeItem.icon];

  const handleCTA = () => {
    if (typeof window !== "undefined") {
      window.open("https://calendly.com/manaautomations", "_blank", "noreferrer");
    }
  };

  return (
    <section className="bg-brand-950/90 py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 rounded-3xl border border-white/10 bg-brand-900/60 px-6 py-12 sm:px-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-200">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Diferenciadores clave
            </span>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{DIFFERENTIATORS.title}</h2>
              <p className="text-base text-white/75 sm:text-lg">{DIFFERENTIATORS.intro}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {DIFFERENTIATORS.items.map((item, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 ${
                      isActive
                        ? "bg-brand-500 text-brand-900"
                        : "bg-white/5 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex min-h-[280px] flex-col justify-between rounded-3xl border border-white/10 bg-black/20 p-6 md:p-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">{activeItem.metric}</p>
              <h3 className="text-2xl font-semibold text-white">{activeItem.summary}</h3>
              <p className="text-base text-white/75">{activeItem.detail}</p>
            </div>

            <div className="group mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-white/10 group-hover:ring-white/20">
                  <IconComp className="text-sky-300" size={28} strokeWidth={1.75} aria-hidden />
                </span>
                <div className="text-sm text-white/70">{activeItem.footerTitle}</div>
              </div>

              {activeItem.footerBadges && activeItem.footerBadges.length > 0 ? (
                <div className="hidden items-center gap-2 md:flex">
                  {activeItem.footerBadges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton onClick={handleCTA} className="max-w-xs sm:max-w-none sm:px-12 sm:py-4">
            Agenda tu AuditorÃ­a Gratuita
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

