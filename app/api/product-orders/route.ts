import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteContent } from "@/lib/content";

const requestSchema = z.object({
  company: z.string().min(1, { message: "Empresa requerida" }).trim(),
  phone: z.string().min(1, { message: "Telefono requerido" }).trim(),
  email: z.string().email({ message: "Correo invalido" }).trim(),
  productId: z.string().min(1, { message: "Producto requerido" }),
});

function resolveNotificationRecipients(): string[] {
  const configured = process.env.ORDER_NOTIFICATION_EMAIL;
  if (!configured) {
    return ["hernandomv@gmail.com"];
  }

  return configured
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function getProductById(productId: string) {
  const products = siteContent.products?.items ?? [];
  return products.find((product) => product.id === productId);
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Solicitud invalida" }, { status: 400 });
  }

  const parsed = requestSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Datos invalidos" }, { status: 400 });
  }

  const { company, phone, email, productId } = parsed.data;
  const product = getProductById(productId);

  if (!product) {
    return NextResponse.json({ error: "Producto desconocido" }, { status: 404 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("RESEND_API_KEY no esta configurado");
    return NextResponse.json({ error: "Servicio de correo no esta disponible" }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);
  const from = process.env.RESEND_FROM_EMAIL || "Lumora Partner <onboarding@resend.dev>";
  const recipients = resolveNotificationRecipients();

  const lines: string[] = [
    `Nuevo lead interesado en ${product.title}.`,
    "",
    `Empresa: ${company}`,
    `Telefono: ${phone}`,
    `Correo del prospecto: ${email}`,
    `ID del producto: ${product.id}`,
  ];

  if (Array.isArray(product.offer) && product.offer.length > 0) {
    lines.push("", "Resumen de la oferta:");
    lines.push(...product.offer.map((paragraph) => `- ${paragraph}`));
  }

  if (product.result) {
    lines.push("", `Promesa o resultados destacados: ${product.result}`);
  }

  try {
    await resend.emails.send({
      from,
      to: recipients,
      subject: `Nuevo interes en ${product.title}`,
      replyTo: email,
      text: lines.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando correo de producto", error);
    return NextResponse.json({ error: "No se pudo enviar el correo" }, { status: 500 });
  }
}
