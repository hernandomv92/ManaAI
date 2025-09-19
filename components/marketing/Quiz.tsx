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
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface QuizState {
  industry: string;
  challenge: string;
}

export function Quiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"start" | "questions" | "result">("start");
  const [answers, setAnswers] = useState<QuizState>({ industry: "", challenge: "" });
  const [recommendation, setRecommendation] = useState<string>("");

  const industries = [
    { value: "ecommerce", label: "E-commerce" },
    { value: "services", label: "Servicios" },
    { value: "tech", label: "Tecnología" },
    { value: "other", label: "Otro" }
  ];

  const challenges = [
    { value: "leads", label: "Generar más leads" },
    { value: "sales", label: "Cerrar más ventas" },
    { value: "processes", label: "Automatizar procesos" },
    { value: "other", label: "Otro" }
  ];

  const handleStart = () => {
    setStep("questions");
  };

  const handleAnswer = (key: keyof QuizState, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    // Simple logic for recommendation
    if (answers.challenge === "leads") {
      setRecommendation("Te recomendamos nuestros Scrapers/Data para enriquecer leads.");
    } else if (answers.challenge === "sales") {
      setRecommendation("Te recomendamos Agentes IA para cerrar ventas automáticamente.");
    } else if (answers.challenge === "processes") {
      setRecommendation("Te recomendamos Orquestación n8n para optimizar flujos.");
    } else {
      setRecommendation("Explora todas nuestras soluciones personalizadas.");
    }
    setStep("result");
  };

  const handleClose = () => {
    setIsOpen(false);
    setStep("start");
    setAnswers({ industry: "", challenge: "" });
    setRecommendation("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-brand-600/25 transition-all duration-300"
        >
          ¿Tu negocio listo para IA que vende? Descubre en 60 segundos.
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-brand-900/95 border-brand-700/50 backdrop-blur-sm text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {step === "start" && "¿Listo para IA que vende?"}
            {step === "questions" && "Responde 2 preguntas rápidas"}
            {step === "result" && "Tu recomendación personalizada"}
          </DialogTitle>
          <DialogDescription className="text-white/70">
            {step === "start" && "Descubre si tu negocio está preparado para automatizaciones que generan ventas."}
            {step === "questions" && "Solo toma 60 segundos."}
            {step === "result" && "Basado en tus respuestas, aquí va tu sugerencia."}
          </DialogDescription>
        </DialogHeader>

        {step === "start" && (
          <div className="space-y-6 text-center">
            <p className="text-lg text-white/80">Evalúa tu situación actual y recibe recomendaciones personalizadas.</p>
            <Button onClick={handleStart} className="w-full bg-brand-600 hover:bg-brand-500">
              Empezar Quiz
            </Button>
          </div>
        )}

        {step === "questions" && (
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-white/80 mb-2 block">1. ¿En qué industria opera tu negocio?</label>
              <Select value={answers.industry} onValueChange={(value) => handleAnswer("industry", value)}>
                <SelectTrigger className="bg-brand-800/50 border-brand-700/50 text-white">
                  <SelectValue placeholder="Selecciona tu industria" />
                </SelectTrigger>
                <SelectContent className="bg-brand-900 border-brand-700">
                  {industries.map((ind) => (
                    <SelectItem key={ind.value} value={ind.value} className="text-white">
                      {ind.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-white/80 mb-2 block">2. ¿Cuál es tu principal desafío actual?</label>
              <Select value={answers.challenge} onValueChange={(value) => handleAnswer("challenge", value)}>
                <SelectTrigger className="bg-brand-800/50 border-brand-700/50 text-white">
                  <SelectValue placeholder="Selecciona tu desafío" />
                </SelectTrigger>
                <SelectContent className="bg-brand-900 border-brand-700">
                  {challenges.map((ch) => (
                    <SelectItem key={ch.value} value={ch.value} className="text-white">
                      {ch.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleSubmit} 
              disabled={!answers.industry || !answers.challenge}
              className="w-full bg-brand-600 hover:bg-brand-500 disabled:opacity-50"
            >
              Descubrir mi solución
            </Button>
          </div>
        )}

        {step === "result" && (
          <div className="space-y-6 text-center">
            <Badge className="bg-green-600/20 text-green-300 border-green-400/30">
              Recomendación Personalizada
            </Badge>
            <p className="text-lg text-white/90">{recommendation}</p>
            <div className="space-y-3">
              <Link href="/agentes">
                <Button className="w-full bg-brand-600 hover:bg-brand-500">
                  Explorar Agentes IA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" onClick={handleClose} className="w-full border-white/20 text-white">
                Cerrar
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}