"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteContent } from "@/lib/content";

export function Testimonials() {
  const { socialProof } = siteContent;

  return (
    <section className="py-20 bg-gradient-to-b from-brand-900 to-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-white/60 mb-8 uppercase tracking-wider">
            {socialProof.title}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {socialProof.companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 w-full text-center">
                  <span className="text-white/70 font-semibold text-sm">
                    {company}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-brand-800/30 backdrop-blur-sm border border-brand-600/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-brand-600/10 to-transparent rounded-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-radial from-brand-300/10 to-transparent rounded-full" />
            
            {/* Quote icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-brand-300/30 mb-6"
            >
              <Quote className="h-12 w-12" />
            </motion.div>

            {/* Stars */}
            <div className="flex space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Star className="h-5 w-5 fill-brand-300 text-brand-300" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-medium">
              "{socialProof.testimonial.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center space-x-4">
              <Avatar className="h-14 w-14 border-2 border-brand-300/20">
                <AvatarImage 
                  src={socialProof.testimonial.avatar} 
                  alt={socialProof.testimonial.author}
                />
                <AvatarFallback className="bg-brand-600 text-white font-semibold">
                  {socialProof.testimonial.author.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-white text-lg">
                  {socialProof.testimonial.author}
                </div>
                <div className="text-brand-300 font-medium">
                  {socialProof.testimonial.role}
                </div>
                <div className="text-white/60 text-sm">
                  {socialProof.testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}