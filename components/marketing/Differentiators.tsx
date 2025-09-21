"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

const DIFFERENTIATORS = {
  title: "Lo que nos hace distintos",
  intro: "Hacemos IA que mueve tu pipeline: estrategia, despliegue y accountability en un mismo equipo.",
  items: [
    {
      label: "IA enfocada en ventas",
      summary: "Bots entrenados en tus playbooks, no prompts genericos.",
      metric: "+32% tasa de cierre promedio",
      detail: "Activamos agentes multicanal con entrenamiento propietario y QA semanal para iterar mensajes."
    },
    {
      label: "Implementacion en 30 dias",
      summary: "Workflows n8n y CRM conectados en semanas, no meses.",
      metric: "70% menos retrabajo operativo",
      detail: "Mapeamos procesos criticos, lanzamos pilotos en 10 dias y los llevamos a produccion en sprints cortos."
    },
    {
      label: "Garantia con skin in the game",
      summary: "Solo cobramos si la metrica acordada sube.",
      metric: "500+ equipos con resultados auditados",
      detail: "Definimos metricas compartidas, reportamos semanalmente y firmamos la clausula de devolucion total."
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
