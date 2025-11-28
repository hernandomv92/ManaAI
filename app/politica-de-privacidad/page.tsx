import { Metadata } from "next";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { FloatingWhatsApp } from "@/components/marketing/FloatingWhatsApp";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidad y Tratamiento de Datos Personales",
  description:
    "Conoce cómo Lumora Partner trata los datos personales bajo la Ley 1581 de 2012 y los lineamientos de WhatsApp Business API.",
  openGraph: {
    title: "Política de Privacidad y Tratamiento de Datos Personales | Lumora Partner",
    description:
      "Detalles sobre roles, finalidades y derechos de Habeas Data en los servicios de Lumora Partner.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-950 to-brand-900 text-white">
      <Navbar />
      <section className="pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-300/80">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Política de Privacidad y Tratamiento de Datos Personales
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Transparencia sobre cómo {siteContent.site.name} trata los datos personales de los
            usuarios finales de nuestros clientes, en cumplimiento de la Ley 1581 de 2012 y los
            términos de Meta para WhatsApp Business API.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-900/60 border border-brand-700/40 rounded-3xl p-6 md:p-10 shadow-xl shadow-brand-950/40 backdrop-blur">
            <div className="space-y-10">
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  1. INTRODUCCIÓN Y MARCO LEGAL
                </h2>
                <p className="text-white/80 leading-relaxed">
                  <strong>LUMORA PARTNER</strong> (Identificado legalmente como{" "}
                  <strong>Hernando Morales Vélez</strong>, en adelante "LUMORA"), es una agencia y
                  proveedor de tecnología con domicilio en Colombia, dedicada a la prestación de
                  servicios de automatización de la comunicación digital.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Esta Política de Privacidad y Tratamiento de Datos Personales (la "Política")
                  informa sobre cómo <strong>LUMORA</strong> trata la información personal de los
                  usuarios finales (los "Titulares") de nuestros clientes, en cumplimiento de la{" "}
                  <strong>Ley 1581 de 2012</strong> (Habeas Data) y los términos de{" "}
                  <strong>Meta Platforms, Inc.</strong> para la Plataforma WhatsApp Business API.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  2. ROLES Y RESPONSABLES DEL TRATAMIENTO
                </h2>
                <h3 className="text-xl font-semibold text-brand-200">Roles en el servicio de WhatsApp</h3>
                <p className="text-white/80 leading-relaxed">
                  En el contexto de nuestros servicios de automatización de WhatsApp, operamos en los
                  siguientes roles:
                </p>
                <div className="overflow-x-auto rounded-2xl border border-brand-700/50 bg-brand-900/70">
                  <table className="w-full border-collapse text-sm md:text-base">
                    <thead className="text-left text-white/80">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Rol</th>
                        <th className="px-4 py-3 font-semibold">Definición</th>
                        <th className="px-4 py-3 font-semibold">
                          Aplicación en el Servicio de WhatsApp
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-t border-brand-800/60">
                        <td className="px-4 py-3 font-semibold text-white">
                          Responsable del Tratamiento
                        </td>
                        <td className="px-4 py-3">La entidad que decide el propósito del mensaje.</td>
                        <td className="px-4 py-3">
                          <strong>Nuestros Clientes</strong> (Ej. <strong>Biologix Colombia SAS</strong>).
                        </td>
                      </tr>
                      <tr className="border-t border-brand-800/60">
                        <td className="px-4 py-3 font-semibold text-white">
                          Encargado del Tratamiento
                        </td>
                        <td className="px-4 py-3">
                          La entidad que procesa los datos siguiendo las instrucciones del Responsable.
                        </td>
                        <td className="px-4 py-3">
                          <strong>LUMORA PARTNER</strong> actúa como el intermediario técnico que envía
                          los mensajes a través de la API.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-white/80 leading-relaxed">
                  <strong>LUMORA</strong> solo procesa los datos personales bajo la dirección y
                  responsabilidad de sus clientes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  3. DATOS PERSONALES RECOLECTADOS Y TRATADOS
                </h2>
                <h3 className="text-xl font-semibold text-brand-200">Información tratada</h3>
                <p className="text-white/80 leading-relaxed">
                  <strong>LUMORA</strong> accede y trata la información estrictamente necesaria para la
                  prestación del servicio de automatización. Los datos incluyen:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/80">
                  <li>
                    <strong className="text-white">Información de Contacto:</strong> Número de teléfono
                    del usuario final.
                  </li>
                  <li>
                    <strong className="text-white">Contenido del Mensaje:</strong> El texto y datos de las
                    notificaciones transaccionales o de utilidad enviados.
                  </li>
                  <li>
                    <strong className="text-white">Metadatos de la API:</strong> Información de entrega y
                    estado de los mensajes (entregado, leído, fallido).
                  </li>
                </ul>
                <p className="text-white/80 leading-relaxed">
                  La recolección de los datos mencionados se realiza bajo la previa autorización (Opt-in)
                  obtenida por nuestro Cliente (el Responsable del Tratamiento).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">4. FINALIDAD DEL TRATAMIENTO</h2>
                <h3 className="text-xl font-semibold text-brand-200">Propósitos autorizados</h3>
                <p className="text-white/80 leading-relaxed">
                  La información personal es tratada por <strong>LUMORA</strong> con la{" "}
                  <strong>única finalidad</strong> de:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/80">
                  <li>
                    <strong className="text-white">Prestar Servicios de Automatización:</strong> Ejecutar
                    flujos de trabajo (utilizando plataformas como n8n y Twilio) para el envío de{" "}
                    <strong className="text-white">mensajes transaccionales y de utilidad</strong> (ej.
                    confirmaciones de pedidos, alertas de envío).
                  </li>
                  <li>
                    <strong className="text-white">Reportes de Entrega:</strong> Monitorear el estado de
                    los mensajes enviados en nombre del cliente.
                  </li>
                  <li>
                    <strong className="text-white">Mantenimiento y Soporte:</strong> Solucionar problemas
                    técnicos relacionados con la comunicación vía API.
                  </li>
                </ul>
                <p className="text-white/80 leading-relaxed">
                  <strong className="text-white">LUMORA no utiliza</strong> esta información para fines de{" "}
                  <em>marketing</em> o publicidad no solicitada.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  5. TRANSFERENCIA Y TRANSMISIÓN DE DATOS
                </h2>
                <h3 className="text-xl font-semibold text-brand-200">Proveedores involucrados</h3>
                <p className="text-white/80 leading-relaxed">
                  Para la entrega de mensajes, los datos son transmitidos de forma necesaria a:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/80">
                  <li>
                    <strong className="text-white">Meta Platforms, Inc.:</strong> Dueño de WhatsApp y
                    proveedor de la Plataforma API.
                  </li>
                  <li>
                    <strong className="text-white">Twilio Inc.:</strong> Proveedor de Soluciones
                    Empresariales (BSP) esencial para el servicio de mensajería API.
                  </li>
                </ul>
                <p className="text-white/80 leading-relaxed">
                  Aseguramos que nuestros proveedores cumplen con estándares de seguridad y que la
                  transferencia de datos cumple con la normativa colombiana.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  6. DERECHOS DE LOS TITULARES (HABEAS DATA)
                </h2>
                <h3 className="text-xl font-semibold text-brand-200">Ejercicio de derechos</h3>
                <p className="text-white/80 leading-relaxed">
                  Los Titulares tienen derecho a ejercer los derechos de <strong>Habeas Data</strong> (Ley
                  1581 de 2012), incluyendo el <strong>acceso</strong>, la <strong>corrección</strong> y la{" "}
                  <strong>supresión</strong> de sus datos.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/80">
                  <li>
                    Para ejercer estos derechos, el Titular debe contactar al{" "}
                    <strong>Responsable del Tratamiento</strong> (el cliente de LUMORA, ej. Biologix Colombia
                    SAS).
                  </li>
                  <li>
                    Si el Titular contacta a <strong>LUMORA</strong>, reenviaremos su solicitud al cliente
                    correspondiente para su gestión.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">7. VIGENCIA Y CONTACTO</h2>
                <h3 className="text-xl font-semibold text-brand-200">Datos de contacto</h3>
                <ul className="list-disc pl-5 space-y-2 text-white/80">
                  <li>
                    <strong className="text-white">Vigencia:</strong> La presente Política rige a partir de
                    la fecha de su publicación.
                  </li>
                  <li>
                    <strong className="text-white">
                      Información de Contacto para Solicitudes (LUMORA):
                    </strong>
                  </li>
                </ul>
                <div className="overflow-x-auto rounded-2xl border border-brand-700/50 bg-brand-900/70">
                  <table className="w-full border-collapse text-sm md:text-base">
                    <thead className="text-left text-white/80">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Detalle</th>
                        <th className="px-4 py-3 font-semibold">Información</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-t border-brand-800/60">
                        <td className="px-4 py-3 font-semibold text-white">Razón Social</td>
                        <td className="px-4 py-3">Hernando Morales Vélez (LUMORA PARTNER)</td>
                      </tr>
                      <tr className="border-t border-brand-800/60">
                        <td className="px-4 py-3 font-semibold text-white">Correo Electrónico</td>
                        <td className="px-4 py-3">hernandomv@gmail.com</td>
                      </tr>
                      <tr className="border-t border-brand-800/60">
                        <td className="px-4 py-3 font-semibold text-white">Dirección</td>
                        <td className="px-4 py-3">Carrera 19 3A 54, Cali, Valle del Cauca, Colombia</td>
                      </tr>
                      <tr className="border-t border-brand-800/60">
                        <td className="px-4 py-3 font-semibold text-white">Fecha de Publicación</td>
                        <td className="px-4 py-3">27 Noviembre 2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
