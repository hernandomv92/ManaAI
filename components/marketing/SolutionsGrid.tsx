"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Workflow,
  Globe,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteContent } from "@/lib/content";

const iconMap = {
  Search,
  Workflow,
  Globe
};

interface SolutionsGridProps {
  quizResult?: string | null;
}

export function SolutionsGrid({ quizResult }: SolutionsGridProps) {
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

  // Reorder solutions based on quiz result
  let orderedItems = [...siteContent.solutions.items];
  if (quizResult) {
    const priorities: { [key: string]: string[] } = {
      leads: ['embudo-ia', 'auditorias', 'ops-ia'],
      sales: ['embudo-ia', 'ops-ia', 'auditorias'],
      processes: ['ops-ia', 'auditorias', 'embudo-ia'],
    };
    const order = priorities[quizResult] || priorities.leads || orderedItems.map(item => item.id);
    orderedItems = order
      .map((id) => siteContent.solutions.items.find((item) => item.id === id))
      .filter((item): item is typeof orderedItems[number] => Boolean(item));
  }

  const defaultOpen = quizResult ? orderedItems[0].id : undefined;

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

        {/* Solutions Accordion */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue={defaultOpen} className="w-full">
            {orderedItems.map((solution, index) => {
              const IconComponent = iconMap[solution.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={solution.id}
                  variants={item}
                  className="mb-4"
                >
                  <AccordionItem value={solution.id} className="border-brand-700/50 bg-brand-800/30 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline bg-transparent border-none">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="p-3 bg-brand-600/20 rounded-xl transition-colors"
                          >
                            <IconComponent className="h-6 w-6 text-brand-300" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                            <p className="text-sm text-white/60">{solution.subtitle}</p>
                            <p className="text-xs text-brand-300 mt-1 italic">"{solution.microProof}"</p>
                          </div>
                        </div>
                        <div className="text-xs font-medium text-brand-300 bg-brand-600/10 px-3 py-1 rounded-full">
                          0{index + 1}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-0 bg-brand-800/50">
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
                          className="text-brand-300 hover:text-white hover:bg-brand-600/20 transition-all duration-200 w-full justify-center"
                        >
                          Ver más
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
