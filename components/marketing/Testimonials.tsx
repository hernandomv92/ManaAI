import { ArrowUpRight } from "lucide-react";

const CASE_STUDIES = [
  {
    number: "01",
    company: "Biologix Colombia SAS",
    title: "Visibilidad comercial y operación conectada",
    summary:
      "Un sistema que organiza la recepción de órdenes y convierte la información comercial en una herramienta útil para el equipo.",
    evidence: [
      {
        label: "Estado operativo",
        text: "Las órdenes, respuestas y datos necesarios para atender cada solicitud estaban distribuidos entre distintos puntos del proceso.",
      },
      {
        label: "Oportunidad identificada",
        text: "Conectar la gestión de órdenes con la información comercial para reducir tareas manuales y dar mayor claridad al seguimiento.",
      },
      {
        label: "Implementación entregada",
        text: "Recepción de órdenes de compra, respuestas por correo, consulta de jefes de finca, notificaciones por WhatsApp, base de datos estructurada y dashboard responsive con RFM híbrido.",
      },
      {
        label: "Impacto observable",
        text: "Información consolidada, mayor visibilidad sobre el comportamiento de compra y una base más clara para priorizar la gestión comercial y las visitas en ruta.",
      },
    ],
  },
  {
    number: "02",
    company: "Genyx SAS",
    title: "De la orden de compra al despacho",
    summary:
      "Un flujo coordinado para que la información avance desde la orden hasta la preparación del pedido con mayor trazabilidad.",
    evidence: [
      {
        label: "Estado operativo",
        text: "La validación de órdenes, la facturación, la logística y la comunicación dependían de varias tareas separadas.",
      },
      {
        label: "Oportunidad identificada",
        text: "Conectar el flujo completo para disminuir la intervención manual y mantener visible el estado de cada orden.",
      },
      {
        label: "Implementación entregada",
        text: "Validación y respuesta de órdenes de compra, facturación, creación de guías con Coordinadora y comunicación con Farma Depot y el equipo de bodega.",
      },
      {
        label: "Impacto observable",
        text: "Un proceso más coordinado y trazable desde la recepción de la orden hasta la preparación del despacho.",
      },
    ],
    roadmap:
      "Cartera, identificación de pagos y conciliación de cada pago con su factura correspondiente.",
  },
] as const;

export function Testimonials() {
  return (
    <section
      aria-labelledby="case-studies-title"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#155EEF]">
            <span className="h-px w-6 bg-[#155EEF]" aria-hidden="true" />
            Casos reales
          </p>
          <h2
            id="case-studies-title"
            className="mt-6 text-3xl font-semibold tracking-tight text-[#0B2440] sm:text-4xl lg:text-5xl"
          >
            Sistemas que ya operan dentro de negocios reales.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#5D6B7C] sm:text-lg sm:leading-8">
            Cada implementación comienza entendiendo la operación, continúa con
            una solución adaptada y termina con un sistema que el equipo puede
            utilizar sin detener su trabajo.
          </p>
        </header>

        <div className="mt-14 border-t border-[#D7E0EA] sm:mt-16">
          {CASE_STUDIES.map((caseStudy) => (
            <article
              key={caseStudy.company}
              className="border-b border-[#D7E0EA] py-12 sm:py-14"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.7fr)] lg:gap-16">
                <header>
                  <p className="text-sm font-semibold text-[#155EEF]">
                    {caseStudy.number}
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#5D6B7C]">
                    {caseStudy.company}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0B2440]">
                    {caseStudy.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#5D6B7C]">
                    {caseStudy.summary}
                  </p>
                </header>

                <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                  {caseStudy.evidence.map((item) => (
                    <div
                      key={item.label}
                      className="border-t border-[#D7E0EA] pt-5"
                    >
                      <dt className="font-semibold text-[#0B2440]">
                        {item.label}
                      </dt>
                      <dd className="mt-3 text-sm leading-6 text-[#5D6B7C] sm:text-base sm:leading-7">
                        {item.text}
                      </dd>
                    </div>
                  ))}

                  {"roadmap" in caseStudy && (
                    <div className="bg-[#F7F9FC] p-5 sm:col-span-2 sm:p-6">
                      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#155EEF]">
                        Siguiente etapa
                      </dt>
                      <dd className="mt-3 leading-7 text-[#0B2440]">
                        {caseStudy.roadmap}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </article>
          ))}
        </div>


        <div className="mt-16 bg-[#155EEF] px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Revisemos tu operación y encontremos una mejora concreta.
            </h3>
            <p className="mt-4 leading-7 text-white">
              Una conversación inicial enfocada puede ayudarnos a identificar
              dónde se pierde tiempo y cuál sería el mejor punto para comenzar.
            </p>
          </div>
          <a
            href="https://calendly.com/hernandomv-xnsf/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 bg-white px-6 py-3 font-semibold text-[#0B2440] transition-colors hover:bg-[#F7F9FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#155EEF] lg:mt-0 lg:shrink-0"
          >
            Agenda una revisión inicial
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
