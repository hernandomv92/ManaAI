import { Metadata } from "next";
import PageClient from "@/components/marketing/PageClient";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Inicio",
  description: siteContent.site.description,
  openGraph: {
    title: `${siteContent.site.name} - ${siteContent.site.tagline}`,
    description: siteContent.site.description,
  },
};

export default function Home() {
  return <PageClient />;
}