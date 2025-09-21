"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface QuizState {
  industry: string;
  challenge: string;
}

interface QuizProps {
  onQuizComplete?: (result: QuizState & { email?: string }) => void;
}

const INDUSTRY_OPTIONS = [
  { value: "ecommerce", label: "E-commerce" },
  { value: "services", label: "Servicios profesionales" },
  { value: "saas", label: "Producto o SaaS" },
  { value: "other", label: "Otro" }
];

const CHALLENGE_OPTIONS = [
  { value: "leads", label: "Generar leads cualificados" },
  { value: "sales", label: "Cerrar ventas mas rapido" },
  { value: "processes", label: "Automatizar procesos clave" },
  { value: "retention", label: "Retener y reactivar clientes" }
];

export function Quiz({ onQuizComplete }: QuizProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"intro" | "questions" | "result">("intro");
  const [answers, setAnswers] = useState<QuizState>({ industry: "", challenge: "" });
  const [recommendation, setRecommendation] = useState<string>("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const resetQuiz = () => {
    setStep("intro");
    setAnswers({ industry: "", challenge: "" });
    setRecommendation("");
    setEmail("");
    setSubmitted(false);
  };

  const handleDialogChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetQuiz();
    }
  };

  const handleStart = () => {
    setStep("questions");
  };

  const handleAnswer = (key: keyof QuizState, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const buildRecommendation = () => {
    if (answers.challenge === "leads") {
      return "Activa agentes IA que cualifican y enrutan leads sin supervision.";
    }
    if (answers.challenge === "sales") {
      return "Orquesta secuencias omnicanal con IA que empuja cada oportunidad.";
    }
    if (answers.challenge === "processes") {
      return "Mapea procesos criticos y automatizalos con n8n y dashboards.";
    }
    if (answers.challenge === "retention") {
      return "Crea flujos de reactivacion con datos enriquecidos y triggers IA.";
    }
    return "Explora nuestras soluciones modulares y arma tu stack IA paso a paso.";
  };

  const handleSubmitAnswers = () => {
    setRecommendation(buildRecommendation());
    setStep("result");
  };

  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (onQuizComplete) {
      onQuizComplete({ ...answers, email });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="w-full max-w-xs bg-amber-300 text-base font-semibold text-brand-950 shadow-md transition-colors duration-200 hover:bg-amber-200 sm:max-w-none"
        >
          Tu negocio ya vende con IA sin dormir? Haz el test (60 s)
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-brand-900/95 border-brand-700/50 backdrop-blur-sm text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {step === "intro" && "Diagnostico express de IA"}
            {step === "questions" && "Tu negocio en 60 segundos"}
            {step === "result" && "Reporte personalizado listo"}
          </DialogTitle>
          <DialogDescription className="text-white/70">
            {step === "intro" && "Descubre si estas listo para automatizar ventas con IA probada."}
            {step === "questions" && "Selecciona la opcion que mejor describe tu realidad actual."}
            {step === "result" && submitted
              ? "Ya enviamos el reporte a tu bandeja."
              : "Deja tu email y recibe el plan accionable con metricas y siguientes pasos."}
          </DialogDescription>
        </DialogHeader>

        {step === "intro" && (
          <div className="space-y-6 text-center">
            <p className="text-lg text-white/80">
              Te mostramos que automatizar primero, cuanto tardaras y que resultado puedes esperar.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <span>✔️ 3 preguntas rapidas</span>
              <span>✔️ Roadmap listo para compartir con tu equipo</span>
              <span>✔️ Benchmarks reales de negocios como el tuyo</span>
            </div>
            <Button onClick={handleStart} className="w-full bg-brand-600 hover:bg-brand-500">
              Empezar ahora
            </Button>
          </div>
        )}

        {step === "questions" && (
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                1. En que industria vendes mas?
              </label>
              <Select value={answers.industry} onValueChange={(value) => handleAnswer("industry", value)}>
                <SelectTrigger className="bg-brand-800/50 border-brand-700/50 text-white">
                  <SelectValue placeholder="Selecciona tu industria" />
                </SelectTrigger>
                <SelectContent className="bg-brand-900 border-brand-700">
                  {INDUSTRY_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                2. Cual es tu prioridad #1 ahora mismo?
              </label>
              <Select value={answers.challenge} onValueChange={(value) => handleAnswer("challenge", value)}>
                <SelectTrigger className="bg-brand-800/50 border-brand-700/50 text-white">
                  <SelectValue placeholder="Selecciona el reto principal" />
                </SelectTrigger>
                <SelectContent className="bg-brand-900 border-brand-700">
                  {CHALLENGE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleSubmitAnswers}
              disabled={!answers.industry || !answers.challenge}
              className="w-full bg-brand-600 hover:bg-brand-500 disabled:opacity-50"
            >
              Quiero mi plan IA
            </Button>
          </div>
        )}

        {step === "result" && (
          <div className="space-y-6 text-center">
            <Badge className="mx-auto bg-brand-500/20 text-brand-200 border-brand-400/30">
              Tu plan IA personalizado
            </Badge>
            <p className="text-lg text-white/90">{recommendation}</p>
            {!submitted ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4 text-left">
                <Input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="bg-brand-800/50 border-brand-700/50 text-white placeholder:text-white/50"
                />
                <Button type="submit" className="w-full bg-amber-300 text-brand-950 hover:bg-amber-200">
                  Enviar mi reporte IA
                </Button>
              </form>
            ) : (
              <div className="space-y-4 text-center">
                <p className="text-sm text-white/70">
                  Revisa tu bandeja (y la carpeta de promociones). Te compartimos un PDF con roadmap, metricas y la propuesta de siguiente paso.
                </p>
                <Button onClick={() => handleDialogChange(false)} className="w-full bg-brand-600 hover:bg-brand-500">
                  Volver a la pagina
                </Button>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
