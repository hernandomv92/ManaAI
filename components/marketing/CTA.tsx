"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/content";

export function CTA() {
  const handleScheduleCall = () => {
    // TODO: Replace with actual scheduling link (Calendly, Cal.com, etc.)
    window.open('https://calendly.com/hernandomv-xnsf/30min', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-brand-600/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-brand-300/15 to-transparent rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            <span className="block">{siteContent.finalCTA.title}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            {siteContent.finalCTA.subtitle}
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <Button
              onClick={handleScheduleCall}
              size="lg"
              className="bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-brand-500/25 transition-all duration-300 hover:scale-105 group"
            >
              <Calendar className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              {siteContent.finalCTA.cta}
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8"
          >
            <div className="flex items-center space-x-2 text-white/60">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Consulta gratuita de 30 minutos</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <div className="w-2 h-2 bg-brand-300 rounded-full" />
              <span className="text-sm font-medium">Sin compromiso</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-sm font-medium">Resultados garantizados</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}