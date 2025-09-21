"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, Mail } from "lucide-react";
import { toast } from "sonner";

export function LeadMagnet() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleDownload = () => {
    // Placeholder for actual download/email capture
    if (email) {
      toast.success("¡Guía enviada a tu email! Revisa tu bandeja.");
      setEmail("");
      setIsOpen(false);
      // In production, send email and download PDF
    } else {
      toast.error("Por favor ingresa tu email.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="fixed top-4 left-4 right-4 z-50 text-xs font-semibold bg-white/90 backdrop-blur-sm border-brand-300 text-brand-900 hover:bg-white hover:border-brand-500 shadow-lg px-4 py-3 rounded-xl transition-all duration-300 sm:text-sm sm:max-w-md sm:w-full sm:left-1/2 sm:right-auto sm:-translate-x-1/2 md:left-auto md:right-8 md:top-20 md:w-auto md:px-6 md:py-3 md:translate-x-0"
        >
          <Download className="mr-2 h-4 w-4" />
          Guía Gratuita: 7 Hacks IA para Triplicar Conversiones
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-brand-900/95 border-brand-700/50 backdrop-blur-sm text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">Descarga tu Guía Gratuita</DialogTitle>
          <DialogDescription className="text-white/70">
            Ingresa tu email para recibir "7 Hacks IA para Triplicar Conversiones en 2024". ¡Sin spam, solo valor!
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-brand-800/50 border-brand-700/50 text-white placeholder-white/50 focus:ring-brand-500"
          />
          <Button onClick={handleDownload} className="w-full bg-brand-600 hover:bg-brand-500">
            <Mail className="mr-2 h-4 w-4" />
            Enviar y Descargar
          </Button>
          <p className="text-xs text-white/50 text-center">
            Tu información está segura con nosotros.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
