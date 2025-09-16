"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type CalButtonProps = {
  label?: string;
  url?: string; // Cal.com booking URL
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  icon?: ReactNode; 
  iconPosition?: "left" | "right"; 
};

export default function CalButton({
  label = "Book a Call",
  url = "https://cal.com/charan-skillhigh/15min",
  variant = "default",
  size = "lg",
  icon,
  iconPosition = "left",
}: CalButtonProps) {
  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className="bg-green-800 text-white text-base sm:text-md px-4 py-5 hover:bg-primary pixel-border shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none flex items-center gap-2 cursor-pointer"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon && iconPosition === "left" && <span>{icon}</span>}
        {label}
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </a>
    </Button>
  );
}
