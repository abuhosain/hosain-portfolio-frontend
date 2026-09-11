"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
  borderAccent?: boolean;
  variant?: "glass" | "solid" | "bordered";
}

export function Card({
  children,
  className = "",
  glowOnHover = true,
  borderAccent = false,
  variant = "glass",
  ...props
}: CardProps) {
  const variantStyles = {
    glass: "bg-[#0E0E14]/85 backdrop-blur-md border border-white/[0.08]",
    solid: "bg-[#111118] border border-white/[0.07]",
    bordered: "bg-transparent border border-white/10",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-300",
        variantStyles[variant],
        glowOnHover && "hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]",
        borderAccent && "hover:border-accent/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
