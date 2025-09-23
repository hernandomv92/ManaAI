"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import { siteContent } from "@/lib/content";

export function Footer() {
    return (
    <footer className="bg-brand-950 border-t border-brand-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent hover:from-brand-200 hover:to-brand-400 transition-colors duration-300">
              {siteContent.site.name}
            </Link>
            <p className="text-white/60 text-sm">
              {siteContent.footer.copyright}
            </p>
          </div>

          {/* Links & Theme Toggle */}
          <div className="flex items-center space-x-6 pr-20 relative z-20">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              href="https://www.linkedin.com/in/hernando-morales-b657bbb5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-brand-300 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              href="https://www.instagram.com/pokenando23/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-brand-300 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 pt-8 border-t border-brand-800/30">
          <div className="text-center">
            <p className="text-white/40 text-xs">
              Desarrollado con ❤️ para automatizar el futuro de los negocios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}