"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  FileSearch,
  Mail,
  MonitorCheck,
  PackageCheck,
  ReceiptText,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

type StepKey =
  | "order"
  | "extract"
  | "hub"
  | "siigo"
  | "portal"
  | "guide"
  | "notify";

type NodeState = "pending" | "running" | "complete";

type ProcessNodeProps = {
  step: StepKey;
  title: string;
  icon: LucideIcon;
  phase: number;
  className?: string;
};

const stepTiming: Record<StepKey, { running: number; complete: number }> = {
  order: { running: 1, complete: 2 },
  extract: { running: 3, complete: 4 },
  hub: { running: 5, complete: 6 },
  siigo: { running: 7, complete: 8 },
  portal: { running: 7, complete: 8 },
  guide: { running: 7, complete: 8 },
  notify: { running: 9, complete: 10 },
};

const stateLabels: Record<NodeState, string> = {
  pending: "Pendiente",
  running: "Procesando",
  complete: "Completado",
};

const paths = {
  orderExtract: "M500 94 V119",
  extractHub: "M500 195 V220",
  hubSiigo: "M500 296 V320 C500 344 180 326 180 348",
  hubPortal: "M500 296 V348",
  hubGuide: "M500 296 V320 C500 344 820 326 820 348",
  siigoNotify: "M180 424 V445 C180 468 500 450 500 466",
  portalNotify: "M500 424 V466",
  guideNotify: "M820 424 V445 C820 468 500 450 500 466",
};

function waitForVisibleDelay(duration: number, signal: AbortSignal) {
  return new Promise<void>((resolve) => {
    let remaining = duration;
    let startedAt = 0;
    let timer: number | undefined;
    let finished = false;

    const cleanup = () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }

      document.removeEventListener("visibilitychange", handleVisibilityChange);
      signal.removeEventListener("abort", finish);
    };

    const finish = () => {
      if (finished) {
        return;
      }

      finished = true;
      cleanup();
      resolve();
    };

    const schedule = () => {
      if (signal.aborted) {
        finish();
        return;
      }

      if (document.hidden) {
        return;
      }

      startedAt = performance.now();
      timer = window.setTimeout(finish, remaining);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (timer !== undefined) {
          window.clearTimeout(timer);
          timer = undefined;
          remaining = Math.max(0, remaining - (performance.now() - startedAt));
        }
        return;
      }

      schedule();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    signal.addEventListener("abort", finish, { once: true });
    schedule();
  });
}

function getNodeState(step: StepKey, phase: number): NodeState {
  const timing = stepTiming[step];

  if (phase >= timing.complete) {
    return "complete";
  }

  if (phase === timing.running) {
    return "running";
  }

  return "pending";
}

function ProcessNode({
  step,
  title,
  icon: Icon,
  phase,
  className = "",
}: ProcessNodeProps) {
  const state = getNodeState(step, phase);

  const stateClasses =
    state === "running"
      ? "border-[#155EEF] bg-[#EEF4FF]"
      : state === "complete"
        ? "border-[#155EEF] bg-white"
        : "border-[#D7E0EA] bg-white";

  const iconClasses =
    state === "pending"
      ? "border-[#D7E0EA] bg-[#F7F9FC] text-[#5D6B7C]"
      : "border-[#155EEF] bg-[#155EEF] text-white";

  return (
    <div
      className={`grid min-h-[4.75rem] w-[11.875rem] grid-cols-[2.625rem_minmax(0,1fr)] items-center gap-3 rounded-lg border p-3 transition-colors duration-200 ${stateClasses} ${className}`}
      data-state={state}
    >
      <span
        className={`grid h-[2.625rem] w-[2.625rem] place-items-center rounded-md border transition-colors duration-200 ${iconClasses}`}
      >
        <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
      </span>

      <span className="min-w-0">
        <span className="block truncate text-[0.8125rem] font-semibold text-[#0B2440]">
          {title}
        </span>
        <span className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-[0.6875rem] text-[#5D6B7C]">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              state === "pending" ? "bg-[#D7E0EA]" : "bg-[#155EEF]"
            }`}
            aria-hidden="true"
          />
          {stateLabels[state]}
        </span>
      </span>
    </div>
  );
}

function Connector({
  d,
  active,
  reducedMotion,
}: {
  d: string;
  active: boolean;
  reducedMotion: boolean;
}) {
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke="#D7E0EA"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <motion.path
        d={d}
        fill="none"
        stroke="#155EEF"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={false}
        animate={{ pathLength: active ? 1 : 0 }}
        transition={{
          duration: reducedMotion ? 0 : 0.85,
          ease: [0.22, 0.75, 0.26, 1],
        }}
      />
    </>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState(0);
  const [completionAnnouncement, setCompletionAnnouncement] = useState("");

  const handlePrimaryClick = () => {
    window.open(
      "https://calendly.com/hernandomv-xnsf/30min",
      "_blank",
      "noopener,noreferrer",
    );
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const sequence: Array<[number, number]> = [
      [1, 650],
      [2, 500],
      [3, 850],
      [4, 500],
      [5, 720],
      [6, 750],
      [7, 1000],
      [8, 850],
      [9, 700],
      [10, 0],
    ];

    if (shouldReduceMotion) {
      setPhase(10);
      return () => controller.abort();
    }

    const runLoop = async () => {
      await waitForVisibleDelay(700, signal);

      let isFirstCycle = true;

      while (!signal.aborted) {
        for (const [nextPhase, duration] of sequence) {
          if (signal.aborted) {
            return;
          }

          setPhase(nextPhase);

          if (duration > 0) {
            await waitForVisibleDelay(duration, signal);
          }
        }

        if (signal.aborted) {
          return;
        }

        if (isFirstCycle) {
          setCompletionAnnouncement("Demostración del proceso completada.");
          isFirstCycle = false;
        }

        await waitForVisibleDelay(2000, signal);

        if (signal.aborted) {
          return;
        }

        setPhase(0);
        await waitForVisibleDelay(500, signal);
      }
    };

    void runLoop();

    return () => {
      controller.abort();
    };
  }, [shouldReduceMotion]);

  const liveStatus = useMemo(() => {
    switch (phase) {
      case 0:
        return "Preparando una nueva orden";
      case 1:
        return "Recibiendo la orden de compra";
      case 2:
        return "Orden recibida";
      case 3:
        return "Leyendo y validando los datos del PDF";
      case 4:
        return "Datos validados";
      case 5:
        return "Coordinando las tareas operativas";
      case 6:
        return "Tareas preparadas";
      case 7:
        return "Ejecutando facturación, portal y despacho";
      case 8:
        return "Factura, portal y guía completados";
      case 9:
        return "Enviando la actualización al cliente";
      default:
        return "Proceso completado";
    }
  }, [phase]);

  return (
    <section className="overflow-hidden bg-white text-[#10233B]">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-20 text-center sm:px-6 sm:pb-10 sm:pt-24 lg:px-8">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#155EEF]"
        >
          <span className="h-0.5 w-6 bg-[#155EEF]" aria-hidden="true" />
          Procesos claros, operaciones eficientes
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.08, duration: 0.5 }}
          className="mx-auto mt-5 max-w-5xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#0B2440] sm:text-5xl lg:text-6xl"
        >
          Menos tareas repetitivas. Más tiempo para hacer crecer tu negocio.
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.16, duration: 0.5 }}
          className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#5D6B7C] sm:text-lg"
        >
          Conectamos las herramientas que tu equipo ya utiliza para convertir
          una orden dispersa en un proceso coordinado, trazable y visible de
          principio a fin.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.24, duration: 0.5 }}
          className="mt-7 flex justify-center"
        >
          <PrimaryButton width="content" onClick={handlePrimaryClick}>
            Revisemos tu proceso
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </PrimaryButton>
        </motion.div>
      </div>

      <div className="bg-[#F7F9FC] py-8 sm:py-10" style={{ overflowAnchor: "none" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-[#D7E0EA] bg-white">
            <div className="flex min-h-12 items-center gap-2.5 border-b border-[#D7E0EA] px-4 py-3 text-sm sm:px-6">
              <span
                className="h-2 w-2 flex-none rounded-full bg-[#155EEF]"
                aria-hidden="true"
              />
              <span className="whitespace-nowrap text-[#5D6B7C]">Proceso en curso:</span>
              <strong className="min-w-0 truncate font-semibold text-[#10233B]">
                {liveStatus}
              </strong>
              <span className="sr-only" aria-live="polite" aria-atomic="true">
                {completionAnnouncement}
              </span>
            </div>

            <div
              className="relative mx-auto hidden aspect-[25/14] w-full max-w-[62.5rem] md:block"
              aria-label="Una orden llega por correo, sus datos se validan y luego se ejecutan tareas conectadas de facturación, actualización del portal, generación de guía y notificación al cliente."
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1000 560"
                aria-hidden="true"
              >
                <Connector
                  d={paths.orderExtract}
                  active={phase >= 2}
                  reducedMotion={Boolean(shouldReduceMotion)}
                />
                <Connector
                  d={paths.extractHub}
                  active={phase >= 4}
                  reducedMotion={Boolean(shouldReduceMotion)}
                />
                <Connector
                  d={paths.hubSiigo}
                  active={phase >= 6}
                  reducedMotion={Boolean(shouldReduceMotion)}
                />
                <Connector
                  d={paths.hubPortal}
                  active={phase >= 6}
                  reducedMotion={Boolean(shouldReduceMotion)}
                />
                <Connector
                  d={paths.hubGuide}
                  active={phase >= 6}
                  reducedMotion={Boolean(shouldReduceMotion)}
                />
                <Connector
                  d={paths.siigoNotify}
                  active={phase >= 8}
                  reducedMotion={Boolean(shouldReduceMotion)}
                />
                <Connector
                  d={paths.portalNotify}
                  active={phase >= 8}
                  reducedMotion={Boolean(shouldReduceMotion)}
                />
                <Connector
                  d={paths.guideNotify}
                  active={phase >= 8}
                  reducedMotion={Boolean(shouldReduceMotion)}
                />
              </svg>

              <ProcessNode
                step="order"
                title="Orden por correo"
                icon={Mail}
                phase={phase}
                className="absolute left-1/2 top-[10%] -translate-x-1/2 -translate-y-1/2"
              />
              <ProcessNode
                step="extract"
                title="Datos del PDF"
                icon={FileSearch}
                phase={phase}
                className="absolute left-1/2 top-[28%] -translate-x-1/2 -translate-y-1/2"
              />
              <ProcessNode
                step="hub"
                title="Proceso Lumora"
                icon={Workflow}
                phase={phase}
                className="absolute left-1/2 top-[46%] w-[13.375rem] -translate-x-1/2 -translate-y-1/2"
              />
              <ProcessNode
                step="siigo"
                title="Factura en SIIGO"
                icon={ReceiptText}
                phase={phase}
                className="absolute left-[18%] top-[69%] -translate-x-1/2 -translate-y-1/2"
              />
              <ProcessNode
                step="portal"
                title="Portal actualizado"
                icon={MonitorCheck}
                phase={phase}
                className="absolute left-1/2 top-[69%] -translate-x-1/2 -translate-y-1/2"
              />
              <ProcessNode
                step="guide"
                title="Guía generada"
                icon={PackageCheck}
                phase={phase}
                className="absolute left-[82%] top-[69%] -translate-x-1/2 -translate-y-1/2"
              />
              <ProcessNode
                step="notify"
                title="Cliente notificado"
                icon={BellRing}
                phase={phase}
                className="absolute left-1/2 top-[90%] w-[13.75rem] -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            <div
              className="mx-auto grid max-w-xl gap-3 px-4 py-6 md:hidden"
              aria-label="Flujo automatizado de una orden de compra"
            >
              <ProcessNode
                step="order"
                title="Orden por correo"
                icon={Mail}
                phase={phase}
                className="w-full"
              />
              <span
                className="mx-auto h-4 w-px bg-[#D7E0EA]"
                aria-hidden="true"
              />
              <ProcessNode
                step="extract"
                title="Datos del PDF"
                icon={FileSearch}
                phase={phase}
                className="w-full"
              />
              <span
                className="mx-auto h-4 w-px bg-[#D7E0EA]"
                aria-hidden="true"
              />
              <ProcessNode
                step="hub"
                title="Proceso Lumora"
                icon={Workflow}
                phase={phase}
                className="w-full"
              />

              <p className="mb-1 mt-2 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#5D6B7C]">
                Tareas coordinadas
              </p>
              <div className="grid gap-3 border-l-2 border-[#D7E0EA] pl-4">
                <ProcessNode
                  step="siigo"
                  title="Factura en SIIGO"
                  icon={ReceiptText}
                  phase={phase}
                  className="w-full"
                />
                <ProcessNode
                  step="portal"
                  title="Portal actualizado"
                  icon={MonitorCheck}
                  phase={phase}
                  className="w-full"
                />
                <ProcessNode
                  step="guide"
                  title="Guía generada"
                  icon={PackageCheck}
                  phase={phase}
                  className="w-full"
                />
              </div>

              <span
                className="mx-auto h-4 w-px bg-[#D7E0EA]"
                aria-hidden="true"
              />
              <ProcessNode
                step="notify"
                title="Cliente notificado"
                icon={BellRing}
                phase={phase}
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-6 grid border-y border-[#CFDDF6] bg-[#EEF4FF] md:grid-cols-3">
            <div className="border-b border-[#CFDDF6] px-5 py-5 md:border-b-0 md:border-r sm:px-6">
              <strong className="block text-base font-semibold text-[#0B4DD8]">
                Menos intervención manual
              </strong>
              <span className="mt-1.5 block text-sm leading-relaxed text-[#5D6B7C]">
                La información se captura una sola vez y continúa entre sistemas.
              </span>
            </div>
            <div className="border-b border-[#CFDDF6] px-5 py-5 md:border-b-0 md:border-r sm:px-6">
              <strong className="block text-base font-semibold text-[#0B4DD8]">
                Ejecución coordinada
              </strong>
              <span className="mt-1.5 block text-sm leading-relaxed text-[#5D6B7C]">
                Facturación, despacho y visibilidad avanzan como un mismo flujo.
              </span>
            </div>
            <div className="px-5 py-5 sm:px-6">
              <strong className="block text-base font-semibold text-[#0B4DD8]">
                Estado visible
              </strong>
              <span className="mt-1.5 block text-sm leading-relaxed text-[#5D6B7C]">
                El equipo y el cliente saben qué ocurrió con cada orden.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
