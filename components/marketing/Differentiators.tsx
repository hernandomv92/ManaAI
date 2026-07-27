const methodSteps = [
  {
    number: "01",
    title: "Entender",
    description:
      "Escuchamos a quienes conocen el proceso y revisamos cómo trabajan hoy, qué herramientas utilizan y qué restricciones debemos respetar.",
  },
  {
    number: "02",
    title: "Evidenciar",
    description:
      "Mapeamos el estado actual para hacer visibles los tiempos perdidos, reprocesos, riesgos y dependencias que hoy frenan la operación.",
  },
  {
    number: "03",
    title: "Priorizar",
    description:
      "Elegimos una mejora viable y de alto impacto antes de ampliar el alcance. Así el negocio puede percibir valor rápidamente.",
  },
  {
    number: "04",
    title: "Implementar",
    description:
      "Construimos, conectamos y probamos la solución alrededor de la operación existente, sin trasladar la carga del proyecto a tu equipo.",
  },
  {
    number: "05",
    title: "Ajustar",
    description:
      "Acompañamos el uso real, corregimos fricciones y dejamos una base clara para extender la mejora hacia nuevos procesos.",
  },
];

export function Differentiators() {
  return (
    <section
      className="border-t border-[#D7E0EA] bg-[#F7F9FC] py-20 text-[#10233B] sm:py-24"
      aria-labelledby="consulting-method-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#155EEF]">
              <span className="h-0.5 w-6 bg-[#155EEF]" aria-hidden="true" />
              Consultoría que avanza
            </p>

            <h2
              id="consulting-method-heading"
              className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#0B2440] sm:text-4xl lg:text-5xl"
            >
              De entender el proceso a poner la mejora en marcha.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-relaxed text-[#5D6B7C] sm:text-lg">
              Organizamos reuniones con un propósito claro: entender, decidir o
              validar. El análisis y la implementación quedan en nuestras manos
              para que tu equipo no tenga que administrar otro proyecto.
            </p>

            <p className="mt-5 text-base font-semibold leading-relaxed text-[#0B2440]">
              Menos reuniones sin avance. Más decisiones respaldadas por el
              conocimiento real de la operación.
            </p>
          </div>
        </div>

        <ol className="mt-14 grid border-y border-[#CFD8E3] lg:grid-cols-5">
          {methodSteps.map((step) => (
            <li
              key={step.number}
              className="border-b border-[#CFD8E3] px-0 py-7 last:border-b-0 lg:border-b-0 lg:border-r lg:px-5 lg:py-8 lg:last:border-r-0"
            >
              <span
                className="text-sm font-semibold text-[#155EEF]"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#0B2440]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5D6B7C]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
