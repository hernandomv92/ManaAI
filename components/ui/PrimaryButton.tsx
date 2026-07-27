import * as React from "react";

import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex min-h-12 items-center justify-center whitespace-normal break-words rounded-md bg-brand-600 px-8 py-3 text-lg font-semibold text-white shadow-xl transition-colors duration-300 hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 disabled:pointer-events-none disabled:opacity-50";

const widthClasses = {
  full: "w-full max-w-xs sm:max-w-none",
  content: "w-full max-w-xs sm:w-auto sm:min-w-60 sm:max-w-[17.5rem]",
} as const;

export type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  width?: keyof typeof widthClasses;
};

export const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, type = "button", width = "full", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(baseClasses, widthClasses[width], className)}
      {...props}
    />
  )
);

PrimaryButton.displayName = "PrimaryButton";
