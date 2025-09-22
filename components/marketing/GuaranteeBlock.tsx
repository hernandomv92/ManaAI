"use client";

import { ShieldCheck, CheckCircle2 } from "lucide-react";

const GUARANTEE = {
  title: "Garantía de crecimiento medible",
  summary: "Definimos la métrica que importa, implementamos en 30 días y si no aumentamos al menos un 20% tus ventas en 90 días, devolvemos cada dólar.",
  stats: [
    { label: "Negocios acompañados", value: "500+" },
    { label: "Tickets medios", value: "$2.5K - $50K" },
    { label: "Tiempo promedio", value: "30 días" }
  ],
  steps: [
    {
      title: "1. Objetivo compartido",
      description: "Alineamos la métrica que impacta tu revenue y la medimos desde el día uno."
    },
    {
      title: "2. Implementación acompañada",
      description: "Iteramos semanalmente con tu equipo para activar agentes IA, procesos y dashboards."
    },
    {
      title: "3. Resultado garantizado",
      description: "Auditamos los resultados contigo; si no llegamos a la meta, reembolsamos el 100%."
    }
  ]
};

export function GuaranteeBlock() {
  return (
    <section className="bg-brand-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-brand-900/60 px-6 py-12 sm:px-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-200">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Cero riesgo financiero
            </span>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{GUARANTEE.title}</h2>
              <p className="text-base text-white/75 sm:text-lg">{GUARANTEE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {GUARANTEE.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-black/20 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Cómo aseguramos el resultado</h3>
            <ul className="space-y-4">
              {GUARANTEE.steps.map((step) => (
                <li key={step.title} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1">
                    <CheckCircle2 className="h-5 w-5 text-brand-300" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="rounded-2xl border border-brand-500/40 bg-brand-500/10 px-4 py-4 text-xs text-white/70">
              Cada proyecto incluye auditoría final y reporte que firmamos contigo. Si la métrica acordada no se cumple, reembolsamos en 5 días hábiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
