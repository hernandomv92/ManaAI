import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { FloatingWhatsApp } from '@/components/marketing/FloatingWhatsApp';
import { ChatWidget } from '@/components/marketing/ChatWidget';
import { siteContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights sobre automatización e IA para empresas',
  openGraph: {
    title: `Blog - ${siteContent.site.name}`,
    description: 'Insights sobre automatización e IA para empresas',
  },
};

import { BlogCard } from '@/components/blog/BlogCard';

export default function BlogPage() {
  const { blog } = siteContent;

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-950 to-brand-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {blog.title}
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {blog.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blog.posts.map((post, index) => (`r`n              <BlogCard key={post.id ?? index} post={post} index={index} />
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 text-center">
            <div className="bg-brand-800/30 backdrop-blur-sm border border-brand-600/20 rounded-3xl p-12 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                ¿Quieres más contenido como este?
              </h3>
              <p className="text-white/70 mb-8 text-lg">
                Suscríbete a nuestro newsletter y recibe las últimas tendencias en automatización e IA.
              </p>
              <Button 
                size="lg"
                className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Suscribirse al Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <ChatWidget />
    </main>
  );
}




