"use client";

import { motion } from 'framer-motion';
import { Shield, Target, Zap, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { FloatingWhatsApp } from '@/components/marketing/FloatingWhatsApp';
import { ChatWidget } from '@/components/marketing/ChatWidget';
import { siteContent } from '@/lib/content';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function GarantiaPage() {
  const { solutions } = siteContent;
  const guaranteeData = solutions.items.find(item => item.id === 'garantia');

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, quiero más información sobre la Garantía Vende más o te devolvemos el dinero");
    window.open(`https://wa.me/${siteContent.hero.whatsappNumber}?text=${message}`, '_blank');
  };

  const guaranteeProcess = [
    {
      icon: Target,
      title: "Medición de Baseline",
      description: "Establecemos métricas claras de tu situación actual (ventas, leads, eficiencia) antes de cualquier implementación."
    },
    {
      icon: Zap,
      title: "Implementación de Solución",
      description: "Desplegamos la automatización seleccionada con objetivos específicos y KPIs definidos conjuntamente."
    },
    {
      icon: Shield,
      title: "Monitoreo de Resultados",
      description: "Seguimiento continuo durante 90 días con reportes semanales y ajustes proactivos para maximizar impacto."
    },
    {
      icon: CheckCircle,
      title: "Evaluación y Cumplimiento",
      description: "Análisis final de resultados vs. objetivos. Si no se cumple, procedemos con el reembolso completo."
    }
  ];

  const benefits = [
    "Implementación 100% sin riesgo financiero",
    "Resultados medibles o devolución total",
    "Confianza absoluta en la solución propuesta",
    "Soporte prioritario durante los 90 días de garantía"
  ];

  const faqs = [
    {
      question: "¿Cuáles son las condiciones de la garantía?",
      answer: "Aplica a todas nuestras implementaciones principales (agentes IA, procesos, sitios web). Debes seguir nuestras recomendaciones de implementación y uso durante 90 días. Métricas deben mostrar mejora mínima del 20% en KPIs acordados."
    },
    {
      question: "¿Qué métricas se miden?",
      answer: "Definimos KPIs específicos al inicio: aumento en ventas, leads cualificados, reducción de tiempo/costos, ROI proyectado. Usamos herramientas de tracking como Google Analytics, CRMs y nuestros dashboards internos."
    },
    {
      question: "¿Cómo funciona el proceso de reembolso?",
      answer: "Si no se cumplen los objetivos acordados, reembolsamos el 100% del valor pagado por la implementación (excluyendo costos de terceros como hosting). El proceso toma máximo 15 días hábiles tras la evaluación final."
    },
    {
      question: "¿Hay limitaciones o exclusiones?",
      answer: "No aplica si no se implementa correctamente, si hay cambios en tu negocio que afecten resultados, o si no proporcionas acceso a datos necesarios para medición. Cubre solo la implementación principal, no servicios adicionales."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-950 to-brand-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <Shield className="h-12 w-12 text-brand-300" />
              <div className="text-sm font-medium text-brand-400 bg-brand-600/20 px-3 py-1 rounded-full">
                Garantía Incondicional
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Vende más o te devolvemos el dinero
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {guaranteeData?.subtitle || "Oferta condicionada"}
            </p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              90 días de garantía | Reembolso 100% si no hay resultados
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Analyze Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cobertura de la Garantía
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Lo que protegemos para tu tranquilidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {guaranteeData?.bullets?.map((bullet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-brand-800/30 border-brand-600/20 backdrop-blur-sm hover:bg-brand-800/50 transition-all duration-300 h-full rounded-2xl">
                  <CardHeader className="pb-4">
                    <div className="w-10 h-10 bg-brand-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-600/30 transition-colors">
                      <CheckCircle className="h-5 w-5 text-brand-300" />
                    </div>
                    <CardTitle className="text-white font-bold text-lg">
                      {index + 1}. {bullet}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 leading-relaxed">
                      {index === 0 ? "Compromiso absoluto con resultados medibles en métricas de negocio clave." :
                       index === 1 ? "Retorno de inversión verificable en el período de garantía establecido." :
                       "Asistencia técnica completa incluida sin costos adicionales durante 90 días."}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )) || []}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-brand-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cómo Funciona Nuestra Garantía
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Proceso transparente y sin sorpresas
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {guaranteeProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="group"
                >
                  <Card className="bg-brand-800/50 border-brand-700/50 backdrop-blur-sm hover:bg-brand-800/70 transition-all duration-300 hover:scale-105 rounded-2xl h-full">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-4 bg-brand-600/20 rounded-2xl group-hover:bg-brand-600/30 transition-colors">
                        <IconComponent className="h-8 w-8 text-brand-300" />
                      </div>
                      <div className="text-sm font-medium text-brand-300 bg-brand-600/10 px-4 py-2 rounded-full w-fit mx-auto mb-4">
                        Paso {index + 1}
                      </div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <p className="text-white/70 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seguridad Total
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Lo que ganas con nuestra garantía
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-brand-800/30 backdrop-blur-sm rounded-xl border border-brand-600/20">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <span className="text-white font-medium leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Detalles de nuestra política de garantía
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-brand-800/30 backdrop-blur-sm border border-brand-600/20 rounded-2xl px-6"
                >
                  <AccordionTrigger className="text-white hover:text-brand-300 transition-colors text-left py-6 text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 leading-relaxed pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Implementa sin Riesgo
            </h2>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Elige la solución que mejor se adapte a tu negocio. Si no vendes más en 90 días, te devolvemos tu inversión completa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 group"
              >
                <Shield className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Elegir Mi Solución
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand-300"
                onClick={() => window.open('https://calendly.com/manaautomations/garantia', '_blank')}
              >
                <Clock className="mr-3 h-6 w-6" />
                Consultar Detalles
              </Button>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8"
            >
              <div className="flex items-center space-x-2 text-white/60">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">0% riesgo financiero</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <CheckCircle className="h-5 w-5 text-brand-300" />
                <span className="text-sm font-medium">90 días de protección</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <CheckCircle className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Resultados garantizados</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <ChatWidget />
    </main>
  );
}