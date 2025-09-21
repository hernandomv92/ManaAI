"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/lib/content";

const PARTNER_LOGOS = [
  {
    name: "TechStart Pro",
    industry: "E-commerce",
    proof: "+45% ventas en 30 dias",
    gradient: "from-sky-400 to-blue-500"
  },
  {
    name: "Digital Ventures",
    industry: "B2B SaaS",
    proof: "-70% tiempo de respuesta en soporte",
    gradient: "from-violet-500 to-indigo-600"
  },
  {
    name: "Growth Labs",
    industry: "Agencia de growth",
    proof: "2x leads cualificados con scrapers IA",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    name: "InnovateCorp",
    industry: "Manufactura",
    proof: "50 horas semanales ahorradas",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    name: "FutureFlow",
    industry: "Fintech",
    proof: "+35% conversiones en funnels",
    gradient: "from-fuchsia-500 to-rose-500"
  },
  {
    name: "DataDriven",
    industry: "Consultoria",
    proof: "ROI +60% con orquestacion n8n",
    gradient: "from-cyan-500 to-blue-600"
  }
];

export function Testimonials() {
  const { socialProof } = siteContent;
  const testimonial = socialProof.testimonial;
  const caseStudy = {
    quote: "Pasamos de caos a 3x mas leads procesados gracias a su IA.",
    before: "4 horas al dia respondiendo leads manualmente en WhatsApp.",
    after: "Agentes IA cualificando leads 24/7 con seguimiento automatico.",
    metric: "+45% ventas en 30 dias",
    author: testimonial.author,
    role: testimonial.role,
    company: testimonial.company,
    avatar: testimonial.avatar,
    caseLink: "/casos/techstart-pro"
  };

  return (
    <section className="bg-brand-900 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16"
        >
          <div className="grid gap-10 rounded-3xl border border-white/10 bg-brand-800/40 px-6 py-10 sm:px-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-between gap-8">
              <div className="flex items-center gap-4 text-left">
                <Image
                  src={caseStudy.avatar}
                  alt={"Foto de " + caseStudy.author}
                  width={72}
                  height={72}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-white">{caseStudy.author}</p>
                  <p className="text-sm text-brand-300">{caseStudy.role}</p>
                  <p className="text-sm text-white/60">{caseStudy.company}</p>
                </div>
              </div>

              <blockquote className="text-xl font-medium leading-relaxed text-white/90">
                “{caseStudy.quote}”
              </blockquote>

              <Link
                href={caseStudy.caseLink}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
              >
                Ver caso de exito completo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4 text-left sm:grid-cols-3">
              <div className="col-span-1 rounded-2xl border border-brand-500/30 bg-brand-500/10 px-4 py-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-200/80">Metrica</p>
                <p className="mt-2 text-2xl font-semibold text-white">{caseStudy.metric}</p>
                <p className="mt-1 text-xs text-white/60">Crecimiento trimestral auditado por su equipo financiero.</p>
              </div>
              <div className="col-span-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Antes</p>
                <p className="mt-2 text-sm text-white/80">{caseStudy.before}</p>
              </div>
              <div className="col-span-1 rounded-2xl border border-brand-400/40 bg-brand-400/10 px-4 py-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Despues</p>
                <p className="mt-2 text-sm text-white/90">{caseStudy.after}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
              Confiado por equipos que viven de las metricas
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PARTNER_LOGOS.map((company) => (
                <div
                  key={company.name}
                  className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${company.gradient} text-sm font-semibold text-brand-950`}
                  >
                    {company.name
                      .split(" ")
                      .map((word) => word.charAt(0))
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{company.name}</p>
                    <p className="text-xs text-white/60">{company.industry}</p>
                  </div>
                  <p className="text-sm font-medium text-brand-200">{company.proof}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

