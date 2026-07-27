"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  FileText,
  Link2,
  MessageSquareText,
  PackageCheck,
  Truck,
  UsersRound,
} from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { FloatingWhatsApp } from "@/components/marketing/FloatingWhatsApp";
const stages = [
  { label: "Entrada", detail: "Correo, Meta, CRM o formulario", icon: FileText },
  { label: "Coordinación Lumora", detail: "Reglas, datos y tareas conectadas", icon: Link2 },
  { label: "Facturación y POS", detail: "Documentos y ventas actualizados", icon: PackageCheck },
  { label: "Logística", detail: "Guía, despacho y seguimiento", icon: Truck },
  { label: "CRM", detail: "Contexto comercial disponible", icon: UsersRound },
  { label: "Comunicación", detail: "Cliente y equipo informados", icon: MessageSquareText },
];

const integrations = [
  {
    title: "Facturación y POS",
    names: [
      { name: "Siigo", logo: "/images/integrations/siiigocolombia.jpeg" },
      { name: "Loggro", logo: "/images/integrations/Loggro_idz6t93v1l_1.svg" },
      { name: "Fudo", logo: "/images/integrations/Fudo_idmLSWpEZL_1.svg" },
    ],
  },
  {
    title: "Logística",
    names: [
      { name: "Servientrega", logo: "/images/integrations/servientrega.png" },
      { name: "Envía", logo: "/images/integrations/envia.png" },
      { name: "Coordinadora", logo: "/images/integrations/Coordinadora_S-A-_id5OcvcDht_1.svg" },
      { name: "Inter Rapidísimo", logo: "/images/integrations/interrapidisimo.png" },
    ],
  },
  { title: "CRM", names: [{ name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot" }] },
  {
    title: "Comunicación",
    names: [
      { name: "Meta", logo: "https://cdn.simpleicons.org/meta" },
      { name: "WhatsApp", logo: "https://cdn.simpleicons.org/whatsapp" },
      { name: "Instagram", logo: "https://cdn.simpleicons.org/instagram" },
      { name: "Gmail", logo: "https://cdn.simpleicons.org/gmail" },
      { name: "Outlook", logo: "/images/integrations/outlook.webp" },
    ],
  },
];

const cases = [
  {
    eyebrow: "GENYX SAS",
    title: "Una orden conectada con facturación, logística y notificación.",
    body: "Recibimos la orden de compra, estructuramos la información y conectamos los pasos que antes dependían de tareas separadas.",
    points: ["Orden recibida y validada", "Facturación en Siigo", "Guía, portal y comunicación de despacho"],
  },
  {
    eyebrow: "BIOLOGIX COLOMBIA SAS",
    title: "Información comercial disponible para decidir y actuar.",
    body: "Conectamos la recepción de órdenes, las respuestas automáticas, WhatsApp y la visibilidad comercial para que el equipo pueda priorizar mejor.",
    points: ["Órdenes y respuestas conectadas", "Comunicación transaccional por WhatsApp", "Dashboard operativo para seguimiento"],
  },
];

export function ProductosClient() {
  const [activeStage, setActiveStage] = useState(0);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setShouldReduceMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = window.setInterval(() => {
      setActiveStage((current) => (current + 1) % stages.length);
    }, 1600);
    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  const handleCalendly = () => {
    window.open("https://calendly.com/hernandomv-xnsf/30min", "_blank", "noreferrer");
  };

  return (
    <main className="min-h-screen bg-white text-[#0B2440]">
      <Navbar />

      <section className="border-b border-[#D7E0EA] pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#155EEF]">
              <span className="h-0.5 w-7 bg-[#155EEF]" aria-hidden="true" />
              Implementaciones reales
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B2440] sm:text-6xl">
              Sistemas que conectan tu operación de principio a fin.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5D6B7C] sm:text-xl">
              Integramos las herramientas que tu equipo ya utiliza para reducir tareas manuales, coordinar procesos y mantener la información visible.
            </p>
            <button
              type="button"
              onClick={handleCalendly}
              className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-md bg-[#155EEF] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0B4DD8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155EEF] focus-visible:ring-offset-2"
            >
              Revisemos tu operación
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-16 sm:py-20" aria-labelledby="connected-process-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#155EEF]">El proceso conectado</p>
            <h2 id="connected-process-title" className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0B2440] sm:text-4xl">
              Una entrada puede activar varias tareas coordinadas.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5D6B7C]">
              La información se captura una vez, avanza entre sistemas y deja una base preparada para los siguientes procesos.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#CFDDF6] bg-white">
            <div className="flex items-center justify-between border-b border-[#D7E0EA] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3 text-sm">
                <span className="h-2 w-2 rounded-full bg-[#155EEF]" aria-hidden="true" />
                <span className="text-[#5D6B7C]">Proceso automático</span>
                <strong className="text-[#0B2440]">{stages[activeStage].label}</strong>
              </div>
              <span className="hidden text-xs text-[#7A8796] sm:inline">Se repite al finalizar</span>
            </div>

            <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-12">
              <div className="space-y-3">
                {stages.slice(0, 2).map((stage, index) => {
                  const Icon = stage.icon;
                  const isActive = activeStage === index;
                  return (
                    <motion.div
                      key={stage.label}
                      animate={shouldReduceMotion ? undefined : { borderColor: isActive ? "#155EEF" : "#D7E0EA", backgroundColor: isActive ? "#EEF4FF" : "#FFFFFF" }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3 rounded-lg border p-4"
                    >
                      <span className="grid h-10 w-10 flex-none place-items-center rounded-md border border-[#CFDDF6] bg-[#F7F9FC] text-[#155EEF]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <strong className="block text-sm text-[#0B2440]">{stage.label}</strong>
                        <span className="mt-1 block text-xs text-[#5D6B7C]">{stage.detail}</span>
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="relative grid gap-4 sm:grid-cols-2">
                <div className="absolute left-1/2 top-1/2 hidden h-px w-[78%] -translate-x-1/2 bg-[#CFDDF6] sm:block" aria-hidden="true" />
                {stages.slice(2).map((stage, index) => {
                  const Icon = stage.icon;
                  const stageIndex = index + 2;
                  const isActive = activeStage === stageIndex;
                  return (
                    <motion.div
                      key={stage.label}
                      animate={shouldReduceMotion ? undefined : { borderColor: isActive ? "#155EEF" : "#D7E0EA", backgroundColor: isActive ? "#EEF4FF" : "#FFFFFF", y: isActive ? -4 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative flex items-center gap-3 rounded-lg border p-4"
                    >
                      <span className="grid h-10 w-10 flex-none place-items-center rounded-md border border-[#CFDDF6] bg-[#F7F9FC] text-[#155EEF]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <strong className="block text-sm text-[#0B2440]">{stage.label}</strong>
                        <span className="mt-1 block text-xs text-[#5D6B7C]">{stage.detail}</span>
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="grid border-t border-[#CFDDF6] bg-[#EEF4FF] sm:grid-cols-3">
              {[
                ["Cartera y conciliación", "El siguiente proceso se construye sobre datos trazables."],
                ["Seguimiento visible", "El equipo sabe qué pasó con cada orden."],
                ["Gestión comercial", "La información llega a quienes necesitan actuar."],
              ].map(([title, description]) => (
                <div key={title} className="border-b border-[#CFDDF6] px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-6">
                  <strong className="block text-sm font-semibold text-[#0B4DD8]">{title}</strong>
                  <span className="mt-1.5 block text-sm leading-relaxed text-[#5D6B7C]">{description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D7E0EA] py-16 sm:py-20" aria-labelledby="integration-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#155EEF]">Ecosistema conectable</p>
              <h2 id="integration-title" className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0B2440] sm:text-4xl">
                Trabajamos con las herramientas que tu empresa ya conoce.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5D6B7C]">La conexión depende de las capacidades, permisos y credenciales de cada plataforma.</p>
          </div>

          <div className="divide-y divide-[#D7E0EA] border-y border-[#D7E0EA]">
            {integrations.map((group) => (
              <div key={group.title} className="grid gap-4 py-5 md:grid-cols-[12rem_1fr] md:items-center">
                <strong className="text-sm text-[#0B2440]">{group.title}</strong>
                <div className="flex flex-wrap gap-2">
                  {group.names.map((item) => {
                    const integration = typeof item === "string" ? { name: item, logo: undefined } : item;
                    return (
                      <span key={integration.name} className="inline-flex items-center gap-2 rounded-full border border-[#CFDDF6] bg-[#F7F9FC] px-3 py-2 text-sm font-medium text-[#334A63]">
                        {integration.logo ? <img src={integration.logo} alt="" aria-hidden="true" className="h-4 w-4 object-contain" loading="lazy" /> : null}
                        {integration.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 flex items-center gap-2 text-xs text-[#5D6B7C]">
            <CheckCircle2 className="h-4 w-4 text-[#155EEF]" aria-hidden="true" />
            Lumora Partner cuenta con verificación de acceso de Meta como proveedor de tecnología.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="cases-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#155EEF]">Casos en operación</p>
            <h2 id="cases-title" className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0B2440] sm:text-4xl">Soluciones construidas alrededor del negocio real.</h2>
          </div>

          <div className="divide-y divide-[#D7E0EA] border-y border-[#D7E0EA]">
            {cases.map((caseStudy, index) => (
              <article key={caseStudy.eyebrow} className="grid gap-6 py-8 md:grid-cols-[13rem_1fr_1fr] md:gap-10 md:py-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#155EEF]">{caseStudy.eyebrow}</p>
                  <span className="mt-3 block text-sm text-[#7A8796]">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#0B2440]">{caseStudy.title}</h3>
                <div>
                  <p className="text-base leading-relaxed text-[#5D6B7C]">{caseStudy.body}</p>
                  <ul className="mt-5 space-y-2">
                    {caseStudy.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-[#334A63]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#155EEF]" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20" aria-labelledby="implementation-cta-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 bg-[#155EEF] px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10 sm:py-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#DDE9FF]">Siguiente implementación</p>
              <h2 id="implementation-cta-title" className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">Revisemos qué parte de tu operación puede conectarse primero.</h2>
            </div>
            <button type="button" onClick={handleCalendly} className="inline-flex min-h-12 flex-none items-center gap-3 bg-white px-5 py-3 text-sm font-semibold text-[#0B2440] transition-colors hover:bg-[#EEF4FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#155EEF]">
              Agendar revisión
              <Calendar className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
