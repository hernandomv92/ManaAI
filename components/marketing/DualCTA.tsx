"use client";

import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/lib/content';

export function DualCTA() {
  const handleDiagnosis = () => {
    // Scroll to quiz section for diagnosis
    if (typeof window !== 'undefined') {
      const quizSection = document.getElementById('quiz-section');
      if (quizSection) {
        quizSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCalendly = () => {
    window.open('https://calendly.com/manaautomations/demo', '_blank');
  };

  const handleWhatsAppDiagnosis = () => {
    const message = encodeURIComponent("Hola, quiero hacer el DiagnÃ³stico IA Gratuito para mi negocio.");
    window.open(`https://wa.me/${siteContent.hero.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-b from-brand-900/50 to-brand-950 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Â¿No estÃ¡s listo para comprometerte aÃºn?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Haz nuestro DiagnÃ³stico IA Gratuito y obtÃ©n tu plan personalizado en minutos. O agenda una llamada para hablar con un experto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Free Diagnosis Button */}
          <Button
            onClick={handleWhatsAppDiagnosis}
            size="lg"
            className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-green-500/25 transition-all duration-300 group flex items-center space-x-2"
          >
            <Zap className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>DiagnÃ³stico IA Gratuito</span>
          </Button>

          {/* Schedule Call Button */}
          <Button
            onClick={handleCalendly}
            variant="outline"
            size="lg"
            className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand-300 flex items-center space-x-2"
          >
            <Calendar className="h-5 w-5" />
            <span>Agenda una Llamada</span>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-sm text-white/50"
        >
          Sin compromiso. Solo informaciÃ³n valiosa para hacer crecer tu negocio.
        </motion.p>
      </div>
    </motion.section>
  );
}