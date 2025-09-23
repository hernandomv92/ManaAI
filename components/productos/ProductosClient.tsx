"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
