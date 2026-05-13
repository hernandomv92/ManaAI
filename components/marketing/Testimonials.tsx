"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Compass, Settings2 } from "lucide-react";

const PRINCIPLES = [
  {
    title: "Primero el problema",
    description:
      "Antes de hablar de IA o automatización, entendemos qué parte del proceso está generando fricción, errores o pérdida de tiempo.",
    icon: Compass,
  },
  {
    title: "Después la herramienta",
    description:
      "Elegimos desarrollo, integraciones, no-code, automatización o IA según el contexto. La tecnología no se impone: se justifica.",
    icon: Settings2,
  },
  {
    title: "Mejoras sostenibles",
    description:
      "Buscamos soluciones que tu equipo pueda usar, revisar y mejorar con claridad, no sistemas mágicos imposibles de mantener.",
    icon: CheckCircle2,
  },
];

const baseEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: baseEase,
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: baseEase },
  },
};

export function Testimonials() {
  return (
    <section className="bg-brand-900 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-200/70">
              Adopción tecnológica responsable
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              La IA sirve cuando resuelve un problema claro, no cuando se usa por moda
            </h2>
            <p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg">
              Nuestro enfoque no parte de prometer porcentajes. Parte de entender la operación, diseñar una mejora viable y acompañar su implementación.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {PRINCIPLES.map((principle) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  key={principle.title}
                  variants={item}
                  className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-brand-800/40 p-6 text-left shadow-lg backdrop-blur-sm"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <Icon className="h-6 w-6 text-brand-300" aria-hidden="true" />
                  </span>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                    <p className="text-base leading-relaxed text-white/75">
                      {principle.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
