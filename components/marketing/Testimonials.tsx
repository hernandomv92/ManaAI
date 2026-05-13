"use client";

import { motion, type Variants } from "framer-motion";
import { BarChart3, ReceiptText, Store } from "lucide-react";

const CLIENT_CASES = [
  {
    client: "Marcela Pardo",
    company: "Biologix Colombia SAS",
    title: "Automatización comercial y dashboard operativo",
    description:
      "Automatizamos la recepción de órdenes de compra, las respuestas por correo, la búsqueda de jefes de finca y las notificaciones por WhatsApp para clientes y equipo interno.",
    detail:
      "También construimos una base de datos y un dashboard responsive con RFM híbrido para detectar cambios en el comportamiento de compra y priorizar visitas en ruta.",
    icon: BarChart3,
  },
  {
    client: "Jaime Osorio",
    company: "Genyx SAS",
    title: "Flujo automático de órdenes, facturación y despacho",
    description:
      "Procesamos órdenes de compra, validamos información, respondemos solicitudes y avanzamos hacia la generación de facturas de forma automática.",
    detail:
      "Después conectamos la creación de guías por Coordinadora y la comunicación con Farma Depot para preparar pedidos hasta su entrega al cliente final.",
    icon: ReceiptText,
  },
  {
    client: "Paninos",
    company: "Restaurante",
    title: "Tienda en línea conectada al POS",
    description:
      "Desarrollamos una tienda online conectada al sistema de facturación, capaz de identificar por dirección qué restaurante debe atender cada pedido.",
    detail:
      "El flujo incluye notificaciones por WhatsApp para clientes y para cada sede, manteniendo la operación conectada desde el pedido hasta la preparación.",
    icon: Store,
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
              Clientes y soluciones reales
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Desarrollos a medida que ya operan en negocios reales
            </h2>
            <p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg">
              Cada solución nace de entender cómo trabaja el cliente: sus herramientas, sus equipos, sus rutas y sus procesos críticos.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {CLIENT_CASES.map((caseItem) => {
              const Icon = caseItem.icon;

              return (
                <motion.article
                  key={`${caseItem.client}-${caseItem.company}`}
                  variants={item}
                  className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-brand-800/40 p-6 text-left shadow-lg backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon className="h-6 w-6 text-brand-300" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{caseItem.client}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-brand-200/70">
                        {caseItem.company}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">{caseItem.title}</h3>
                    <p className="text-sm leading-relaxed text-white/75">
                      {caseItem.description}
                    </p>
                    <p className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-4 text-sm leading-relaxed text-white/75">
                      {caseItem.detail}
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
