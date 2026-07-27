const commitments = [
  {
    number: "01",
    title: "Partimos de tu operación actual",
    description:
      "Auditamos procesos, herramientas y responsabilidades para entender qué funciona, dónde se pierde tiempo y qué conviene mejorar primero.",
  },
  {
    number: "02",
    title: "Nos adaptamos a tus sistemas",
    description:
      "Conectamos las herramientas que tu equipo ya utiliza y modificamos únicamente lo necesario para generar impacto sin obligarte a cambiarlo todo.",
  },
  {
    number: "03",
    title: "Nos hacemos cargo de implementar",
    description:
      "Diseñamos, construimos, probamos y acompañamos la transición mientras tu equipo continúa concentrado en la operación del negocio.",
  },
];

export function GuaranteeBlock() {
  return (
    <section
      className="border-t border-[#D7E0EA] bg-white py-20 text-[#10233B] sm:py-24"
      aria-labelledby="implementation-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#155EEF]">
              <span className="h-0.5 w-6 bg-[#155EEF]" aria-hidden="true" />
              Implementación sin fricción
            </p>

            <h2
              id="implementation-heading"
              className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#0B2440] sm:text-4xl lg:text-5xl"
            >
              Mejoramos sin interrumpir tu operación.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#5D6B7C] sm:text-lg">
              Entendemos cómo trabaja actualmente tu equipo, priorizamos una
              oportunidad de alto impacto y asumimos la implementación sin
              convertir la transición en otra carga para el negocio.
            </p>

            <p className="mt-8 border-l-2 border-[#155EEF] pl-5 text-base font-semibold leading-relaxed text-[#0B2440]">
              Tu negocio sigue avanzando. Nosotros asumimos el trabajo necesario
              para que la mejora llegue a producción.
            </p>
          </div>

          <ol className="border-y border-[#CFD8E3]">
            {commitments.map((commitment) => (
              <li
                key={commitment.number}
                className="grid gap-4 border-b border-[#CFD8E3] py-7 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span
                  className="text-sm font-semibold text-[#155EEF]"
                  aria-hidden="true"
                >
                  {commitment.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B2440]">
                    {commitment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5D6B7C] sm:text-base">
                    {commitment.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
