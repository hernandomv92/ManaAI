import * as React from "react";

import { cn } from "@/lib/utils";

const baseClasses = "inline-flex items-center justify-center w-full max-w-xs whitespace-normal break-words rounded-md px-8 py-3 text-lg font-semibold text-white bg-brand-600 shadow-xl transition-colors duration-300 hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 disabled:pointer-events-none disabled:opacity-50 sm:max-w-none";

export type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, type = "button", ...props }, ref) => (
    <button ref={ref} type={type} className={cn(baseClasses, className)} {...props} />
  )
);

PrimaryButton.displayName = "PrimaryButton";
