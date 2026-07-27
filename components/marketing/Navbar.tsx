"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    const baseHref = href.split('#')[0] || '/';
    return pathname === baseHref;
  };

  const navVariants = {
    light: {
      backgroundColor: "rgba(255, 255, 255, 0.96)",
      backdropFilter: "blur(10px)",
      borderColor: "rgba(215, 224, 234, 0.9)",
    },
    scrolled: {
      backgroundColor: "rgba(238, 244, 255, 0.96)",
      backdropFilter: "blur(10px)",
      borderColor: "rgba(207, 221, 246, 0.95)",
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial={false}
      animate={isScrolled ? "scrolled" : "light"}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 top-0 z-50 border-b transition-all duration-300"
      aria-label="Navegación principal"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155EEF] focus-visible:ring-offset-2"
            aria-label={`${siteContent.site.name}, inicio`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className="text-2xl font-bold text-[#155EEF] transition-colors"
              >
                {siteContent.site.name}
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {siteContent.navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-sm text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155EEF] focus-visible:ring-offset-2 ${
                    active
                      ? "text-[#0B4DD8]"
                      : "text-[#334A63] hover:text-[#0B4DD8]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`min-h-11 min-w-11 ${
                  isScrolled
                    ? "text-[#0B2440] hover:bg-white hover:text-[#0B4DD8]"
                    : "text-[#0B2440] hover:bg-[#EEF4FF] hover:text-[#0B4DD8]"
                }`}
                aria-label="Abrir menú"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-[#CFDDF6] bg-[#EEF4FF]"
            >
              <div className="flex flex-col space-y-6 mt-6">
                {siteContent.navigation.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-sm text-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155EEF] ${
                        active
                          ? "text-[#0B4DD8]"
                          : "text-[#334A63] hover:text-[#0B4DD8]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
