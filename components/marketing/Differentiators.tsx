"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

const DIFFERENTIATORS = {
  title: "Lo que nos hace distintos",
  intro: "No ofrecemos soluciones genéricas. Diseñamos orden real adaptado a tu negocio.",
  items: [
    {
      label: "Soluciones a tu medida",
      summary: "Procesos diseñados para tu forma de trabajar.",
      metric: "Nada de plantillas genéricas",
      detail: "Diagnosticamos tu operación y adaptamos cada flujo a tu realidad. La solución encaja contigo, no al revés."
    },
    {
      label: "Implementación acompañada",
      summary: "No entregamos software y nos vamos.",
      metric: "Iteramos contigo paso a paso",
      detail: "Trabajamos junto a tu equipo hasta que todo fluya con claridad y sin fricciones. Estamos presentes en cada ajuste."
    },
    {
      label: "Visión a largo plazo",
      summary: "Evitamos que el caos vuelva a empezar.",
      metric: "Bases sólidas que escalan",
      detail: "Creamos procesos que crecen contigo, para que el orden se mantenga aunque tu negocio y tus equipos se expandan."
    }
    {
      label: "Transparencia total",
      summary: "Ves el impacto en tiempos real.",
      metric: "Datos claros, sin humo",
      detail: "Mostramos cómo trabajamos y qué resultados logramos en cada etapa. Tú sabes siempre dónde estamos y hacia dónde vamos."
    }
  ]
};

export function Differentiators() {
  const [active, setActive] = useState(0);
  const activeItem = DIFFERENTIATORS.items[active];

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

          <div className="space-y-6 rounded-3xl border border-white/10 bg-black/20 p-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">{activeItem.metric}</p>
              <h3 className="text-2xl font-semibold text-white">{activeItem.summary}</h3>
              <p className="text-base text-white/75">{activeItem.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
