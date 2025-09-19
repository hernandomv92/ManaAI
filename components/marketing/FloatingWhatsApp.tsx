"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar, Phone } from "lucide-react";
import { siteContent } from "@/lib/content";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function FloatingWhatsApp() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, quiero automatizar mi negocio");
    window.open(`https://wa.me/${siteContent.hero.whatsappNumber}?text=${message}`, '_blank');
  };

  const handleCalendly = () => {
    window.open('https://calendly.com/manaautomations/demo', '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-20 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.05 }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group relative"
            aria-label="Contacto"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.4)",
                "0 0 0 20px rgba(34, 197, 94, 0.0)",
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            
            {/* Pulse animation */}
            <motion.div
              className="absolute inset-0 bg-green-500 rounded-full -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white/95 backdrop-blur-sm border-gray-200 w-48 mr-4 shadow-lg rounded-xl border-0 p-2">
          <DropdownMenuItem
            onClick={handleWhatsApp}
            className="cursor-pointer hover:bg-green-50 rounded-lg p-3 text-sm font-medium text-gray-900 flex items-center space-x-3"
          >
            <MessageCircle className="h-4 w-4 text-green-600" />
            <span>Chatea Ahora</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleCalendly}
            className="cursor-pointer hover:bg-blue-50 rounded-lg p-3 text-sm font-medium text-gray-900 flex items-center space-x-3"
          >
            <Calendar className="h-4 w-4 text-blue-600" />
            <span>Agenda Demo Gratis</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        <div className="bg-brand-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg border border-brand-700">
          Contacto rápido
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brand-900" />
        </div>
      </motion.div>
    </motion.div>
  );
}