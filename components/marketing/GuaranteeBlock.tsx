"use client";

import { ShieldCheck, CheckCircle2 } from "lucide-react";

const GUARANTEE = {
  title: "Crecimiento con bases sólidas",
  subtitle: "Organizamos tus procesos y unificamos tus canales para que tu negocio crezca sin caos ni sobresaltos.",
  steps: [
    {
      title: "Diagnóstico claro",
      description: "Revisamos contigo cómo trabajas hoy y detectamos dónde se pierden tiempo y oportunidades."
    },
    {
      title: "Procesos ordenados",
      description: "Unificamos canales y estructuramos flujos simples, para que todo tu equipo trabaje con claridad."
    },
    {
      title: "Crecimiento enfocado",
      description: "Con la casa en orden, tú y tu equipo se enfocan en lo importante: clientes, ventas y expansión."
    }
  ],
  note: "Sin promesas vacías: nuestro trabajo no es magia, es orden. Cuando tu negocio opera con claridad, el crecimiento llega solo."
};

export function GuaranteeBlock() {
  return (
    <section className="bg-brand-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-brand-900/60 px-6 py-12 sm:px-10 md:grid-cols-[1fr_1fr]">
          <div className="space-y-6 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-200">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Garantía de enfoque real
            </span>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{GUARANTEE.title}</h2>
              <p className="text-base text-white/75 sm:text-lg">{GUARANTEE.subtitle}</p>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-black/20 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Como aseguramos el resultado</h3>
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
              {GUARANTEE.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
