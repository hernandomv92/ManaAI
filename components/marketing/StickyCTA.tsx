"use client";

import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function StickyCTA() {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://calendly.com/manaautomations", "_blank", "noreferrer");
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-950/95 px-4 py-4 backdrop-blur">
      <div className="mx-auto flex w-full max-w-4xl justify-center">
        <PrimaryButton
          onClick={handleClick}
          className="max-w-none sm:w-auto sm:min-w-[260px]"
        >
          Agenda tu AuditorÃ­a Gratuita
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </PrimaryButton>
      </div>
    </div>
  );
}

