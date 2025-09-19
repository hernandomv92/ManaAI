import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteContent } from '@/lib/content';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: {
    default: `${siteContent.site.name} - ${siteContent.site.tagline}`,
    template: `%s | ${siteContent.site.name}`
  },
  description: siteContent.site.description,
  keywords: ['automatización', 'IA', 'inteligencia artificial', 'chatbots', 'WhatsApp', 'procesos', 'n8n', 'scraping', 'agentes AI'],
  authors: [{ name: siteContent.site.name }],
  creator: siteContent.site.name,
  metadataBase: new URL(siteContent.site.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteContent.site.url,
    title: `${siteContent.site.name} - ${siteContent.site.tagline}`,
    description: siteContent.site.description,
    siteName: siteContent.site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteContent.site.name} - ${siteContent.site.tagline}`,
    description: siteContent.site.description,
    creator: '@manaautomations',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // TODO: Add verification IDs when available
    // google: 'verification-id',
    // yandex: 'verification-id',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/_next/static/media/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* TODO: Add Vercel Analytics when ready */}
        {/* <script defer src="/_vercel/insights/script.js"></script> */}
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-brand-950 text-white`}>
        {children}
      </body>
    </html>
  );
}