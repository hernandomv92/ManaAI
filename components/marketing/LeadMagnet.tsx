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
    if (email) {
      toast.success("Guía enviada a tu correo. Revisa tu bandeja.");
      setEmail("");
      setIsOpen(false);
    } else {
      toast.error("Por favor ingresa tu correo.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="fixed top-4 left-4 right-4 z-40 text-xs font-semibold bg-white/10 backdrop-blur-md border-white/20 text-white/80 hover:bg-white/15 hover:text-white shadow-md px-4 py-3 rounded-xl transition-colors duration-200 sm:text-sm sm:max-w-md sm:w-full sm:left-1/2 sm:right-auto sm:-translate-x-1/2 md:left-auto md:right-8 md:top-20 md:w-auto md:px-6 md:py-3 md:translate-x-0"
        >
          <Download className="mr-2 h-4 w-4" />
          Guía gratuita: 7 hacks de IA para triplicar conversiones
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-brand-900/95 border-brand-700/50 backdrop-blur-sm text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">Descarga tu guía gratuita</DialogTitle>
          <DialogDescription className="text-white/70">
            Ingresa tu correo para recibir 7 hacks de IA para triplicar conversiones en 2024. Sin spam, solo valor.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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

