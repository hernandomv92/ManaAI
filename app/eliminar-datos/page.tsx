import { Metadata } from "next";
import { ShieldCheck, Mail, Phone } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { FloatingWhatsApp } from "@/components/marketing/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Eliminar datos personales",
  description:
    "Solicita la eliminación de tus datos personales de los sistemas de Lumora Partner.",
  openGraph: {
    title: "Eliminar datos personales | Lumora Partner",
    description:
      "Formulario y contacto directo para solicitar la eliminación de datos en Lumora Partner.",
  },
};

export default function DataDeletionPage() {
  const contactEmail = "hernandomv@gmail.com";

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-950 to-brand-900 text-white">
      <Navbar />

      <section className="pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-300/80">
            Habeas Data
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Solicita la eliminación de tus datos
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Completa el formulario o envía un correo para eliminar tu información personal de
            nuestros sistemas. Responderemos en un máximo de 15 días hábiles.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-900/60 border border-brand-700/40 rounded-3xl p-6 md:p-10 shadow-xl shadow-brand-950/40 backdrop-blur space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 text-brand-200">
                  <ShieldCheck className="h-6 w-6" />
                  <span className="font-semibold">Protección de datos</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Instrucciones rápidas</h2>
                <ul className="list-disc pl-5 space-y-2 text-white/80">
                  <li>Incluye tu nombre completo y el correo o teléfono asociado.</li>
                  <li>Describe brevemente qué datos deseas eliminar.</li>
                  <li>Adjunta evidencia de titularidad si aplica (por ejemplo, número de pedido o captura).</li>
                </ul>
                <div className="space-y-3 rounded-2xl border border-brand-700/50 bg-brand-900/70 p-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <Mail className="h-5 w-5 text-brand-200" />
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-brand-100 hover:text-brand-200 transition-colors"
                    >
                      {contactEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Phone className="h-5 w-5 text-brand-200" />
                    <span>También puedes escribirnos por WhatsApp desde el botón flotante.</span>
                  </div>
                </div>
              </div>

              <div className="bg-brand-900/70 border border-brand-700/40 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">Formulario de eliminación</h3>
                <form
                  className="space-y-4"
                  action={`mailto:${contactEmail}`}
                  method="POST"
                  encType="text/plain"
                >
                  <div className="space-y-2">
                    <label className="text-sm text-white/70" htmlFor="name">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl bg-brand-800/60 border border-brand-700/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70" htmlFor="contact">
                      Correo o teléfono asociado
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      required
                      className="w-full rounded-xl bg-brand-800/60 border border-brand-700/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none"
                      placeholder="correo@ejemplo.com / +57300..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70" htmlFor="details">
                      Datos a eliminar
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={4}
                      className="w-full rounded-xl bg-brand-800/60 border border-brand-700/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none"
                      placeholder="Describe qué datos deseas eliminar y contexto adicional."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-500 hover:bg-brand-400 text-brand-950 font-semibold px-4 py-3 transition-colors"
                  >
                    Enviar solicitud
                  </button>
                  <p className="text-xs text-white/60">
                    Al enviar esta solicitud aceptas que podemos contactarte para validar tu identidad y confirmar la eliminación.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
