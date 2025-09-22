"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EXTERNAL_QUOTES = [
  {
    author: "Sam Altman",
    role: "CEO, OpenAI",
    quote:
      "Pronto será impensable no tener inteligencia integrada en cada producto y servicio. La IA será tan evidente como tener una app móvil hoy.",
    company: "OpenAI",
    logo: "https://logo.clearbit.com/openai.com",
  },
  {
    author: "Jeff Bezos",
    role: "Presidente, Amazon",
    quote:
      "La IA elevará la calidad del trabajo y permitirá carreras con más sentido gracias a la automatización de tareas que antes eran imposibles.",
    company: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
  },
  {
    author: "Bill Gates",
    role: "Cofundador, Microsoft",
    quote:
      "La IA es una oportunidad comercial enorme que transformará empresas y países cuando se construye para resolver necesidades reales.",
    company: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
  },
];

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
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
              Voces que lideran la IA
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Referentes globales ven la IA como el nuevo estándar competitivo
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {EXTERNAL_QUOTES.map((reference) => (
              <motion.blockquote
                key={reference.author}
                variants={item}
                className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-brand-800/40 p-6 text-left shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                    <Image
                      src={reference.logo}
                      alt={`Logotipo de ${reference.company}`}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{reference.author}</p>
                    <p className="text-xs text-white/60">{reference.role}</p>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-white/80">
                  “{reference.quote}”
                </p>

                <cite className="mt-auto text-xs font-semibold uppercase tracking-[0.25em] text-brand-200/70">
                  {reference.company}
                </cite>
              </motion.blockquote>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
