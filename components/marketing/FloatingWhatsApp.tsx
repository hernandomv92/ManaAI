"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteContent } from "@/lib/content";

export function FloatingWhatsApp() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, quiero automatizar mi negocio");
    // TODO: Replace siteContent.hero.whatsappNumber with actual WhatsApp number
    window.open(`https://wa.me/${siteContent.hero.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-20 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
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

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        <div className="bg-brand-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg border border-brand-700">
          Habla con un experto
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brand-900" />
        </div>
      </motion.div>
    </motion.div>
  );
}