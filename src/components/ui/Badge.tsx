import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "success" | "outline" | "live";
  size?: "sm" | "md";
  className?: string;
  icon?: ReactNode;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
  icon,
}: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-200 select-none";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  const variantStyles = {
    default: "bg-[#141622] text-neutral-300 border border-white/10",
    accent: "bg-accent/10 text-accent border border-accent/25",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
    outline: "border border-white/15 text-neutral-400 bg-transparent",
    live: "bg-emerald-950/40 text-emerald-300 border border-emerald-500/30",
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {variant === "live" && (
        <span className="relative flex h-2 w-2 mr-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

export default Badge;
