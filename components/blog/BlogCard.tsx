'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-brand-800/50 border border-brand-700/50 backdrop-blur-sm hover:bg-brand-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-600/10 rounded-2xl group"
    >
      <Card className="border-none bg-transparent">
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
        <CardContent className="pt-0">
          <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-200/70 text-center">
            Suscríbete al newsletter para recibir el análisis completo
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
