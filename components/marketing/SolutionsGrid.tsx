"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Bot,
  Workflow,
  Database,
  Globe,
  Shield,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/content";

const iconMap = {
  Search,
  Bot,
  Workflow,
  Database,
  Globe,
  Shield
};

export function SolutionsGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="soluciones" className="py-20 bg-gradient-to-b from-brand-950 to-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {siteContent.solutions.title}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {siteContent.solutions.intro}
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {siteContent.solutions.items.map((solution, index) => {
            const IconComponent = iconMap[solution.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={solution.id}
                variants={item}
                className="group"
              >
                <Card className="bg-brand-800/50 border-brand-700/50 backdrop-blur-sm hover:bg-brand-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-600/10 rounded-2xl h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 bg-brand-600/20 rounded-xl group-hover:bg-brand-600/30 transition-colors"
                      >
                        <IconComponent className="h-6 w-6 text-brand-300" />
                      </motion.div>
                      <div className="text-xs font-medium text-brand-300 bg-brand-600/10 px-3 py-1 rounded-full">
                        0{index + 1}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                      {solution.title}
                    </CardTitle>
                    <p className="text-sm text-white/60 font-medium">
                      {solution.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {solution.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start space-x-2 text-sm text-white/70">
                          <div className="w-1.5 h-1.5 bg-brand-300 rounded-full mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${solution.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-brand-300 hover:text-white hover:bg-brand-600/20 transition-all duration-200 group/btn w-full justify-center"
                      >
                        Ver más
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}