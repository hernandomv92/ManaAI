"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { FloatingWhatsApp } from "@/components/marketing/FloatingWhatsApp";
import { siteContent } from "@/lib/content";

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

export function ProductosClient() {
  const { products } = siteContent;
  const [openOrderId, setOpenOrderId] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Record<string, { company: string; phone: string; email: string }>>({});
  const [submittedOrderId, setSubmittedOrderId] = useState<string | null>(null);
  const [submittingOrderId, setSubmittingOrderId] = useState<string | null>(null);
  const [submissionErrors, setSubmissionErrors] = useState<Record<string, string | null>>({});

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, vi el caso Biologix y quiero hablar sobre una solución a medida para mi empresa");
    window.open(`https://wa.me/${siteContent.hero.whatsappNumber}?text=${message}`, "_blank", "noreferrer");
  };

  const handleCalendly = () => {
    window.open("https://calendly.com/hernandomv-xnsf/30min", "_blank", "noreferrer");
  };

  const handleOrderToggle = (productId: string) => {
    setSubmittedOrderId(null);
    setSubmissionErrors((current) => {
      const next = { ...current };
      delete next[productId];
      return next;
    });
    setOpenOrderId((current) => (current === productId ? null : productId));
  };

  const handleFormValueChange = (productId: string, field: "company" | "phone" | "email", value: string) => {
    setFormValues((prev) => {
      const current = prev[productId] ?? { company: "", phone: "", email: "" };
      return {
        ...prev,
        [productId]: {
          ...current,
          [field]: value,
        },
      };
    });
  };

  const handleOrderSubmit = async (event: FormEvent<HTMLFormElement>, productId: string) => {
    event.preventDefault();

    const currentValues = formValues[productId] ?? { company: "", phone: "", email: "" };
    const company = currentValues.company.trim();
    const phone = currentValues.phone.trim();
    const email = currentValues.email.trim();

    if (!company) {
      setSubmissionErrors((prev) => ({ ...prev, [productId]: "Ingresa el nombre de la empresa." }));
      return;
    }

    if (!phone) {
      setSubmissionErrors((prev) => ({ ...prev, [productId]: "Ingresa un numero de telefono." }));
      return;
    }

    if (!email) {
      setSubmissionErrors((prev) => ({ ...prev, [productId]: "Ingresa un correo valido." }));
      return;
    }

    setSubmittingOrderId(productId);
    setSubmissionErrors((prev) => ({ ...prev, [productId]: null }));

    try {
      const response = await fetch("/api/product-orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company, phone, email, productId }),
      });

      if (!response.ok) {
        let message = "No se pudo enviar el correo.";

        try {
          const data = await response.json();
          if (data && typeof data.error === "string" && data.error.trim().length > 0) {
            message = data.error;
          }
        } catch {
          // ignore parse errors
        }

        setSubmissionErrors((prev) => ({ ...prev, [productId]: message }));
        return;
      }

      setSubmittedOrderId(productId);
      setOpenOrderId(null);
      setFormValues((prev) => ({
        ...prev,
        [productId]: { company: "", phone: "", email: "" },
      }));
      setSubmissionErrors((prev) => ({ ...prev, [productId]: null }));
    } catch (error) {
      console.error("Error submitting product order", error);
      setSubmissionErrors((prev) => ({
        ...prev,
        [productId]: "Hubo un error al enviar la solicitud. Intenta de nuevo.",
      }));
    } finally {
      setSubmittingOrderId(null);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-950 to-brand-900">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <Badge className="mx-auto w-fit bg-brand-600/20 text-brand-200 border-brand-500/40 px-4 py-2 text-sm">
              Catálogo de soluciones
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {products.title}
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {products.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20" aria-labelledby="process-video-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-brand-800/40 p-5 shadow-2xl shadow-brand-950/40 backdrop-blur-sm lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
            <div className="overflow-hidden rounded-2xl border border-brand-500/30 bg-brand-950/70 shadow-xl shadow-brand-950/40">
              <video
                className="aspect-video w-full bg-brand-950 object-cover"
                src={products.processVideo.videoSrc}
                controls
                muted
                playsInline
                preload="metadata"
                aria-describedby="process-video-description process-video-caption"
              >
                Tu navegador no soporta video HTML5.
              </video>
              <div className="border-t border-brand-500/20 bg-brand-950/95 p-5">
                <p className="mb-4 text-sm text-white/70">
                  ¿Querés revisar si un flujo parecido aplica para tu operación?
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="button"
                    className="bg-brand-500 text-white hover:bg-brand-400"
                    onClick={handleCalendly}
                  >
                    <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                    Agendar una cita
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-green-400/60 bg-green-500/10 text-green-100 hover:bg-green-500/20 hover:text-white"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                    Hablar por WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6 text-left">
              <Badge className="w-fit bg-brand-600/20 text-brand-200 border-brand-500/40 px-4 py-2 text-sm">
                {products.processVideo.eyebrow}
              </Badge>
              <div className="space-y-4">
                <h2 id="process-video-title" className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                  {products.processVideo.title}
                </h2>
                <p id="process-video-description" className="text-base leading-relaxed text-white/75 md:text-lg">
                  {products.processVideo.description}
                </p>
              </div>
              <ul className="space-y-3">
                {products.processVideo.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-white/80 md:text-base">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-300" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p id="process-video-caption" className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-4 text-sm text-white/70">
                {products.processVideo.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-10"
          >
            {products.items.map((product, index) => (
              <motion.div key={product.id} variants={item}>
                <Card className="border-brand-700/60 bg-brand-800/40 backdrop-blur-sm shadow-xl shadow-brand-900/40">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div>
                        <Badge className="bg-brand-600/30 text-brand-200 border-brand-500/60">
                          {String(index + 1).padStart(2, "0")}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-semibold text-white text-left">
                        {product.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 text-white/80 text-base leading-relaxed">
                    {Array.isArray(product.offer) &&
                      product.offer.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}

                    {"emphasisItems" in product && Array.isArray(product.emphasisItems) && (
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">
                          {product.emphasisTitle ?? "Beneficios clave"}
                        </h3>
                        <ul className="space-y-2">
                          {(product.emphasisItems as string[]).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-3 text-sm sm:text-base">
                              <CheckCircle className="h-5 w-5 text-brand-300 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {"flowItems" in product && Array.isArray(product.flowItems) && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">
                          {product.flowTitle ?? "Cómo funciona"}
                        </h3>
                        <ol className="space-y-3">
                          {(product.flowItems as string[]).map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-3">
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600/20 text-brand-200 text-sm font-semibold">
                                {stepIndex + 1}
                              </span>
                              <span className="text-sm sm:text-base text-white/80">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {product.result && (
                      <p className="text-brand-200 font-semibold text-base sm:text-lg">
                        {product.result}
                      </p>
                    )}

                    <div className="flex justify-end">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="border-brand-500/70 text-brand-200 hover:bg-brand-600/20 hover:text-white"
                        onClick={() => handleOrderToggle(product.id)}
                      >
                        Ordena ya
                      </Button>
                    </div>

                    {openOrderId === product.id && (
                      <motion.form
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-4 space-y-4 rounded-xl border border-brand-600/40 bg-brand-900/60 p-4"
                        onSubmit={(event) => handleOrderSubmit(event, product.id)}
                      >
                        <div className="grid gap-3 sm:grid-cols-2">
                          <label className="text-sm font-medium text-white/70">
                            Nombre de la empresa
                            <input
                              type="text"
                              required
                              value={formValues[product.id]?.company ?? ""}
                              onChange={(event) => handleFormValueChange(product.id, "company", event.target.value)}
                              placeholder="Ej. Acme Corp"
                              className="mt-2 w-full rounded-lg border border-brand-600/40 bg-brand-950/60 px-4 py-2 text-white placeholder-white/40 focus:border-brand-300 focus:outline-none"
                            />
                          </label>
                          <label className="text-sm font-medium text-white/70">
                            Numero de telefono
                            <input
                              type="tel"
                              required
                              value={formValues[product.id]?.phone ?? ""}
                              onChange={(event) => handleFormValueChange(product.id, "phone", event.target.value)}
                              placeholder="+57 123 456 7890"
                              className="mt-2 w-full rounded-lg border border-brand-600/40 bg-brand-950/60 px-4 py-2 text-white placeholder-white/40 focus:border-brand-300 focus:outline-none"
                            />
                          </label>
                          <label className="sm:col-span-2 text-sm font-medium text-white/70">
                            Correo electrónico
                            <input
                              type="email"
                              required
                              value={formValues[product.id]?.email ?? ""}
                              onChange={(event) => handleFormValueChange(product.id, "email", event.target.value)}
                              placeholder="tu@empresa.com"
                              className="mt-2 w-full rounded-lg border border-brand-600/40 bg-brand-950/60 px-4 py-2 text-white placeholder-white/40 focus:border-brand-300 focus:outline-none"
                            />
                          </label>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <Button
                            type="submit"
                            size="sm"
                            disabled={submittingOrderId === product.id}
                            className="bg-brand-500 hover:bg-brand-400 text-white disabled:opacity-60 disabled:hover:bg-brand-500"
                          >
                            {submittingOrderId === product.id ? "Enviando..." : "Enviar"}
                          </Button>
                          {submissionErrors[product.id] && (
                            <p className="text-sm text-red-300 sm:text-base">
                              {submissionErrors[product.id]}
                            </p>
                          )}
                        </div>
                      </motion.form>
                    )}

                    {submittedOrderId === product.id && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-brand-200"
                      >
                        ¡Gracias! Te contactaremos muy pronto.
                      </motion.p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}