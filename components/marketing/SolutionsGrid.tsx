const firstFlow = [
  "Orden recibida",
  "Facturación",
  "Logística",
  "Notificación",
];

const nextFlow = [
  "Cartera",
  "Identificar el pago",
  "Relacionar la factura",
  "Conciliar",
];

const foundations = [
  "Datos estructurados",
  "Integraciones reutilizables",
  "Reglas operativas",
  "Trazabilidad",
];

const expansionAreas = [
  "CRM y seguimiento",
  "WhatsApp",
  "Reportes administrativos",
  "Control documental",
  "Indicadores operativos",
];

function ProcessSequence({
  items,
  tone,
}: {
  items: string[];
  tone: "primary" | "secondary";
}) {
  const itemClasses =
    tone === "primary"
      ? "border-[#155EEF] bg-[#EEF4FF] text-[#0B4DD8]"
      : "border-[#AFC8F6] bg-white text-[#0B2440]";

  return (
    <ol className="grid gap-3 sm:grid-cols-2" aria-label="Etapas del proceso">
      {items.map((item, index) => (
        <li
          key={item}
          className={`flex min-h-14 items-center gap-3 border px-4 py-3 text-sm font-semibold ${itemClasses}`}
        >
          <span className="text-xs text-[#155EEF]" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          {item}
        </li>
      ))}
    </ol>
  );
}

export function SolutionsGrid() {
  return (
    <section
      id="soluciones"
      className="border-t border-[#D7E0EA] bg-white py-20 text-[#10233B] sm:py-24"
      aria-labelledby="connected-growth-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#155EEF]">
              <span className="h-0.5 w-6 bg-[#155EEF]" aria-hidden="true" />
              Una mejora prepara la siguiente
            </p>

            <h2
              id="connected-growth-heading"
              className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#0B2440] sm:text-4xl lg:text-5xl"
            >
              Optimizar un proceso crea la base para ordenar los demás.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-relaxed text-[#5D6B7C] sm:text-lg">
              Cuando la información, las reglas y los sistemas comienzan a
              trabajar de forma coordinada, la empresa no solo resuelve una
              tarea: construye una base operativa que facilita nuevas mejoras y
              permite crecer con mayor control.
            </p>

            <p className="mt-5 text-base font-semibold leading-relaxed text-[#0B2440]">
              Comenzamos por un flujo de alto impacto y avanzamos desde ahí
              hacia los procesos administrativos conectados.
            </p>
          </div>
        </div>

        <div className="mt-14 grid border-y border-[#CFD8E3] lg:grid-cols-[minmax(0,1fr)_18rem_minmax(0,1fr)]">
          <article className="py-8 lg:pr-10">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#155EEF]">
              Primer flujo consolidado
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[#0B2440]">
              La operación deja de depender de tareas separadas.
            </h3>
            <p className="mb-6 mt-3 text-sm leading-relaxed text-[#5D6B7C]">
              Un proceso real puede comenzar conectando el ingreso de la orden
              con facturación, logística y comunicación.
            </p>
            <ProcessSequence items={firstFlow} tone="primary" />
          </article>

          <div className="border-y border-[#CFD8E3] bg-[#0B4DD8] px-6 py-8 text-white lg:border-x lg:border-y-0">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/75">
              Base operativa común
            </p>
            <ul className="mt-5 space-y-4">
              {foundations.map((foundation) => (
                <li
                  key={foundation}
                  className="border-t border-white/25 pt-4 text-sm font-semibold first:border-t-0 first:pt-0"
                >
                  {foundation}
                </li>
              ))}
            </ul>
          </div>

          <article className="py-8 lg:pl-10">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#155EEF]">
              Siguiente expansión
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[#0B2440]">
              La misma base permite abordar un nuevo problema.
            </h3>
            <p className="mb-6 mt-3 text-sm leading-relaxed text-[#5D6B7C]">
              Con el flujo inicial organizado, cartera y conciliación pueden
              construirse sobre información que ya es trazable.
            </p>
            <ProcessSequence items={nextFlow} tone="secondary" />
          </article>
        </div>

        <div className="grid gap-8 border-b border-[#CFD8E3] py-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-[#0B2440]">
              La base también puede extenderse hacia:
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#5D6B7C]">
            {expansionAreas.map((area) => (
              <li
                key={area}
                className="border-l-2 border-[#AFC8F6] pl-3"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-semibold leading-relaxed text-[#0B2440] sm:text-xl">
          De resolver un punto crítico a construir una operación conectada de
          principio a fin.
        </p>
      </div>
    </section>
  );
}
