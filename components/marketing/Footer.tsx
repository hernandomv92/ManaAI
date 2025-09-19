"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sun, Moon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/content";

export function Footer() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setIsDark(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

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
          <div className="flex items-center space-x-6">
            {/* Footer Links */}
            <div className="flex items-center space-x-4">
              {siteContent.footer.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-brand-300 text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="text-white/60 hover:text-brand-300 hover:bg-brand-800/50 rounded-xl transition-all duration-200"
                aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
              >
                <motion.div
                  animate={{ rotate: isDark ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </motion.div>
              </Button>
            </motion.div>
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