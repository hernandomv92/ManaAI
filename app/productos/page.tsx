import { Metadata } from "next";
import { ProductosClient } from "@/components/productos/ProductosClient";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Productos",
  description: siteContent.products.subtitle,
  openGraph: {
    title: `Productos - ${siteContent.site.name}`,
    description: siteContent.products.subtitle,
  },
};

export default function ProductosPage() {
  return <ProductosClient />;
}
