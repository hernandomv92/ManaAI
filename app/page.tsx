import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Hero } from '@/components/marketing/Hero';
import { SolutionsGrid } from '@/components/marketing/SolutionsGrid';
import { Testimonials } from '@/components/marketing/Testimonials';
import { CTA } from '@/components/marketing/CTA';
import { Footer } from '@/components/marketing/Footer';
import { FloatingWhatsApp } from '@/components/marketing/FloatingWhatsApp';
import { ChatWidget } from '@/components/marketing/ChatWidget';
import { Quiz } from '@/components/marketing/Quiz';
import { LeadMagnet } from '@/components/marketing/LeadMagnet';
import { siteContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Inicio',
  description: siteContent.site.description,
  openGraph: {
    title: `${siteContent.site.name} - ${siteContent.site.tagline}`,
    description: siteContent.site.description,
  },
};

export default function Home() {
  const handleDiagnosis = () => {
    // Trigger Quiz modal or scroll to it; for simplicity, alert and suggest quiz
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: document.getElementById('quiz-section')?.offsetTop || 0, behavior: 'smooth' });
    }
  };

  const handleCalendly = () => {
    window.open('https://calendly.com/manaautomations/demo', '_blank');
  };

  const handleWhatsAppDiagnosis = () => {
    const message = encodeURIComponent("Hola, quiero hacer el Diagnóstico IA Gratuito para mi negocio.");
    window.open(`https://wa.me/${siteContent.hero.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="quiz-section">
        <Quiz />
      </div>
      <SolutionsGrid />
      <Testimonials />
      <CTA />
      <LeadMagnet />
      
      {/* Dual-Path Exit Strategy CTA */}
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
              ¿No estás listo para comprometerte aún?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Haz nuestro Diagnóstico IA Gratuito y obtén tu plan personalizado en minutos. O agenda una llamada para hablar con un experto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Free Diagnosis Button - Links to WhatsApp for quick chat diagnosis */}
            <Button
              onClick={handleWhatsAppDiagnosis}
              size="lg"
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-green-500/25 transition-all duration-300 group flex items-center space-x-2"
            >
              <Zap className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Diagnóstico IA Gratuito</span>
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
            Sin compromiso. Solo información valiosa para hacer crecer tu negocio.
          </motion.p>
        </div>
      </motion.section>

      <Footer />
      <FloatingWhatsApp />
      <ChatWidget />
    </main>
  );
}