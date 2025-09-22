"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const heroCard = {
  title: "Automatizamos lo que hoy te consume horas.",
  subtitle: "Deja que la IA organice tus flujos mientras tu te enfocas en crecer.",
  items: [
    {
      title: "Correos filtrados automáticamente",
      description: "Detectamos facturas, cotizaciones y pedidos en tu inbox."
    },
    {
      title: "Datos organizados en segundos",
      description: "La informacion se extrae y se guarda en tu base de datos o Google Sheets sin errores."
    },
    {
      title: "Procesos conectados",
      description: "Cada dato alimenta tu CRM, tu contabilidad o tus reportes sin que tengas que mover un dedo."
    },
    {
      title: "Respuestas inteligentes",
      description: "El sistema envia confirmaciones o notificaciones al instante, para que nada quede pendiente."
    }
  ],
  closing: "Menos revisiones manuales, mas control y tiempo libre para enfocarte en tus clientes."
};

export function Hero() {
  const badge = "Asegura el futuro de tu negocio";
  const primaryCTA = "Agenda tu Auditoria Gratuita";
  const titleBase = "Del desorden a la claridad: tu negocio,";
  const titleHighlight = "potenciado con IA";
  const subtitle = "Haz mas con menos esfuerzo (y cero estres).";

  const handlePrimaryClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://calendly.com/manaautomations", "_blank", "noreferrer");
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

        <div className="mt-6 flex w-full flex-col items-center gap-6">
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {titleBase}
            <span className="block text-brand-300 sm:inline sm:pl-3">
              {titleHighlight}
            </span>
          </h1>

          <p className="max-w-3xl text-base text-white/80 sm:text-lg">{subtitle}</p>

          <div className="flex w-full flex-col items-center text-sm text-white/80">
            <div className="relative w-full max-w-4xl">
              <div className="absolute inset-0 rounded-[2rem] bg-brand-400/20 blur-3xl" aria-hidden="true" />
              <div className="relative rounded-[2rem] border border-brand-300/70 bg-gradient-to-br from-brand-500/20 via-brand-500/10 to-brand-400/10 p-8 text-left shadow-[0_25px_45px_-25px_rgba(56,189,248,0.55)] backdrop-blur-sm sm:p-10">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  {heroCard.title}
                </h2>
                <p className="mt-4 text-base text-white/80 sm:text-lg">
                  {heroCard.subtitle}
                </p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200/80">
                  {heroCard.sectionLabel}
                </p>

                <ul className="mt-6 grid gap-4 text-sm text-white/80 sm:grid-cols-2">
                  {heroCard.items.map((item) => (
                    <li key={item.title} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-300" />
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-white/70">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-sm font-medium text-white/90">
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
