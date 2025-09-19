"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { siteContent } from "@/lib/content";

function renderTerm(term: string) {
  const glossaryEntry = (siteContent.glossary as Record<string, string | undefined>)[term];
  if (glossaryEntry) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="text-brand-300 underline decoration-dotted cursor-help">{term}</span>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>{glossaryEntry}</p>
        </TooltipContent>
      </Tooltip>
    );
  }
  return <span>{term}</span>;
}

export function Hero() {
  const scrollToQuiz = () => {
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { socialProof } = siteContent;

  return (
    <TooltipProvider>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-brand-600/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Utiliza {renderTerm('IA')} Probada para Multiplicar Ventas en 30 Días (Comprobado por 500+ Negocios), o Te Devolvemos el 100%.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Agentes con {renderTerm('IA')}, procesos orquestados y {renderTerm('Data')} listos para vender más.
            </motion.p>

            {/* Early Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-2xl mx-auto bg-brand-800/30 backdrop-blur-sm border border-brand-600/20 rounded-2xl p-6 text-left"
            >
              <blockquote className="text-lg italic text-white/90 font-medium">
                "{socialProof.testimonial.text}"
              </blockquote>
              <div className="mt-4 flex items-center space-x-3 text-sm text-brand-300">
                <span className="font-semibold">– {socialProof.testimonial.author}, {socialProof.testimonial.role}</span>
              </div>
            </motion.div>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              onClick={scrollToQuiz}
              size="lg"
              className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-brand-600/25 transition-all duration-300 hover:scale-105 group"
            >
              {siteContent.hero.primaryCTA}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-1 h-16 bg-gradient-to-b from-brand-300 to-transparent rounded-full opacity-60" />
        </motion.div>
      </div>
  {/* Floating Guarantee Badge */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{
      opacity: 1,
      scale: [1, 1.05, 1], // Subtle pulse every 3s
    }}
    transition={{
      duration: 0.6,
      delay: 1.2,
      scale: { duration: 2, repeat: Infinity, repeatDelay: 1 }
    }}
    className="fixed bottom-4 left-4 sm:top-4 sm:right-4 z-50 flex items-center space-x-2 bg-green-600/20 border border-green-400/30 rounded-xl px-3 py-2 sm:px-4 sm:py-3"
  >
    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-300 flex-shrink-0" />
    <span className="text-xs sm:text-sm font-semibold text-green-100 hidden sm:block">Garantía {renderTerm('ROI')}: 90 Días o Dinero de Vuelta</span>
  </motion.div>

      </section>
    </TooltipProvider>
  );
}