import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

const MotionCard = motion(Card);

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
            {blog.posts.map((post, index) => (
              <MotionCard
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-brand-800/50 border-brand-700/50 backdrop-blur-sm hover:bg-brand-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-600/10 rounded-2xl group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-brand-600/20 text-brand-300 hover:bg-brand-600/30">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-3 text-sm text-white/60">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-brand-300 hover:text-white hover:bg-brand-600/20 transition-all duration-200 group/btn w-full justify-center"
                    asChild
                  >
                    <Link href={`/blog/${post.id}`}>
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </MotionCard>
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