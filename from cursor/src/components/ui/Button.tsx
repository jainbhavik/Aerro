"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  magnetic?: boolean;
  disabled?: boolean;
};

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  magnetic = true,
  disabled,
}: ButtonProps) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(0.22);

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-foreground text-background hover:shadow-[0_0_32px_rgba(0,212,255,0.45)]",
    secondary:
      "border border-border bg-surface text-foreground hover:border-accent/50 hover:bg-surface-elevated hover:shadow-[0_0_28px_rgba(0,212,255,0.2)]",
    ghost:
      "bg-transparent text-foreground border border-transparent hover:bg-surface",
  };

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={magnetic ? onMouseMove : undefined}
      onMouseLeave={magnetic ? onMouseLeave : undefined}
      style={magnetic ? { x, y } : undefined}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.button>
  );
}
