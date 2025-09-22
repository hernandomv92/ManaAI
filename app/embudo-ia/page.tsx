"use client";

import { motion } from 'framer-motion';
import { Globe, Bot, MessageCircle, Zap, CheckCircle, Clock } from 'lucide-react';
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

export default function EmbudoIAPage() {
  const { solutions } = siteContent;
  const funnelData = solutions.items.find(item => item.id === 'embudo-ia');

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola, quiero un Embudo IA Autónomo funcionando en mi negocio');
    window.open(`https://wa.me/${siteContent.hero.whatsappNumber}?text=${message}`, '_blank');
  };

  const funnelProcess = [
    {
      icon: Globe,
      title: 'Arquitectura Web de Alto Impacto',
      description: 'Creamos la narrativa, diseño y estructura del sitio con pruebas A/B para convertir visitas en oportunidades desde el día uno.'
    },
    {
      icon: MessageCircle,
      title: 'Flujos Conversacionales Mapeados',
      description: 'Definimos journeys clave y mensajes por canal para que cada interacción guíe al usuario al siguiente paso del embudo.'
    },
    {
      icon: Bot,
      title: 'Agentes IA Omnicanal',
      description: 'Entrenamos agentes conectados a WhatsApp, chat web y email que mantienen contexto y disparan acciones automáticas.'
    },
    {
      icon: Zap,
      title: 'Medición y Optimización Continua',
      description: 'Integramos CRM, dashboards y alertas para iterar el embudo cada semana con datos reales.'
    }
  ];

  const benefits = [
    'Embudo operativo 24/7 que atiende y convierte sin equipo extra',
    '+35% en conversiones promedio en las primeras 6 semanas',
    '+30% cierres asistidos por agentes IA conectados a tu CRM',
    'Reportes claros: sabes qué canal genera cada venta y en qué paso optimizar'
  ];

  const faqs = [
    {
      question: '¿Qué incluye exactamente el Embudo IA Autónomo?',
      answer: 'Incluye el sitio web optimizado, agentes IA multicanal, integraciones con tus herramientas comerciales, automatizaciones de seguimiento y monitoreo continuo durante el primer mes.'
    },
    {
      question: '¿Cuánto tiempo toma tenerlo en producción?',
      answer: 'El despliegue típico toma 4-6 semanas. Avanzamos en paralelo: diseño del sitio, entrenamiento del agente, integraciones y pruebas. Vas viendo avances semanales.'
    },
    {
      question: '¿Se conecta con mi CRM y herramientas actuales?',
      answer: 'Sí. Nos integramos con HubSpot, Salesforce, Close, Zoho y CRMs personalizados, además de herramientas de marketing como Mailchimp, Klaviyo o ActiveCampaign.'
    },
    {
      question: '¿Qué soporte recibo después del lanzamiento?',
      answer: 'Incluimos un mes de soporte evolutivo con optimizaciones semanales y dashboards compartidos. Luego puedes continuar con nuestro plan de mejoras mensuales.'
    }
  ];

  const highlightExplanations = [
    'Sitio modular con copy probado, personalización dinámica y analítica lista para escalar campañas.',
    'Bots IA que responden en segundos y mantienen contexto en WhatsApp, chat web y email.',
    'Automatizaciones conectadas a tu CRM para nutrir, puntuar y cerrar leads sin tareas manuales.'
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
              <Globe className="h-12 w-12 text-brand-300" />
              <div className="text-sm font-medium text-brand-400 bg-brand-600/20 px-3 py-1 rounded-full">
                Presencia + Conversaciones Automatizadas
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Embudo IA Autónomo
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {funnelData?.subtitle || 'Sitios y agentes coordinados que convierten clientes mientras tú duermes.'}
            </p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Desde $2,800 USD | Implementación completa en 6 semanas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
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
              Lo que hace único a tu embudo
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {funnelData?.microProof || 'Cada punto de contacto optimizado con IA para convertir a cualquiera hora.'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {(funnelData?.bullets || []).map((bullet, index) => (
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
                      {highlightExplanations[index] || bullet}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Así construimos tu Embudo IA
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Metodología probada para lanzar y escalar en semanas, no meses.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {funnelProcess.map((step, index) => {
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
              Impacto que medimos juntos
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              El embudo no es teoría: cada semana revisamos resultados y optimizamos.
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
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Todo lo que necesitas saber antes de lanzar tu embudo.
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
              ¿Listo para lanzar tu Embudo IA?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Te acompañamos desde el diseño hasta las primeras ventas cerradas. En 6 semanas tienes un embudo que trabaja solo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 group"
              >
                <Bot className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Quiero mi Embudo IA
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand-300"
                onClick={() => window.open('https://calendly.com/manaautomations', '_blank')}
              >
                <Clock className="mr-3 h-6 w-6" />
                Agendar Consulta Gratuita
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8"
            >
              <div className="flex items-center space-x-2 text-white/60">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">20+ embudos IA en producción</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <CheckCircle className="h-5 w-5 text-brand-300" />
                <span className="text-sm font-medium">Mejoras semanales basadas en datos</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <CheckCircle className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Soporte 7 días tras el lanzamiento</span>
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
