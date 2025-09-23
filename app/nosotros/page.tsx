"use client";

import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Zap, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { FloatingWhatsApp } from '@/components/marketing/FloatingWhatsApp';
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

export default function AboutPage() {
  const { about } = siteContent;

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, quiero conocer más sobre Lumora Partners");
    window.open(`https://wa.me/${siteContent.hero.whatsappNumber}?text=${message}`, '_blank');
  };

  const processIcons = [Target, Users, Zap];

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
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {about.hero.title}
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {about.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-brand-800/30 backdrop-blur-sm border border-brand-600/20 rounded-3xl p-8 md:p-12">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-white mb-4">
                  {about.story.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-white/80 leading-relaxed text-center">
                  {about.story.content}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              {about.process.title}
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Nuestro proceso probado en más de 50 proyectos exitosos
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {about.process.steps.map((step, index) => {
              const IconComponent = processIcons[index];
              
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="group"
                >
                  <Card className="bg-brand-800/50 border-brand-700/50 backdrop-blur-sm hover:bg-brand-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-600/10 rounded-2xl h-full">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-4 bg-brand-600/20 rounded-2xl group-hover:bg-brand-600/30 transition-colors w-fit">
                        <IconComponent className="h-8 w-8 text-brand-300" />
                      </div>
                      <div className="text-sm font-medium text-brand-300 bg-brand-600/10 px-4 py-2 rounded-full w-fit mx-auto mb-4">
                        Paso {index + 1}
                      </div>
                      <CardTitle className="text-2xl font-bold text-white group-hover:text-brand-300 transition-colors">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
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
              Respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {about.faqs.map((faq, index) => (
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
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Comencemos con una conversación. Te mostraremos cómo la automatización puede revolucionar tu empresa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 group"
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Conversar por WhatsApp
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand-300"
                onClick={() => window.open('https://calendly.com/hernandomv-xnsf/30min', '_blank')}
              >
                Agendar llamada
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
                <span className="text-sm font-medium">Más de 50 proyectos exitosos</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <CheckCircle className="h-5 w-5 text-brand-300" />
                <span className="text-sm font-medium">Garantía de resultados</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <CheckCircle className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Soporte continuo</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
