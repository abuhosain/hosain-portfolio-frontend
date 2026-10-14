"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "../animations/Magnetic";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan-glow";
  size?: "sm" | "md" | "lg";
  isMagnetic?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  isMagnetic = false,
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = "",
  href,
  target,
  rel,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:opacity-50 disabled:pointer-events-none group select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-white text-black hover:bg-neutral-200 active:scale-[0.98]",
    "cyan-glow":
      "bg-accent text-white font-semibold hover:bg-accent-hover shadow-sm active:scale-[0.98]",
    secondary:
      "bg-[#141622] text-neutral-200 border border-white/10 hover:border-white/25 hover:bg-[#1A1D2C] hover:text-white active:scale-[0.98]",
    outline:
      "border border-white/15 text-neutral-300 hover:border-white/35 hover:text-white bg-transparent active:scale-[0.98]",
    ghost:
      "text-neutral-400 hover:text-white hover:bg-white/5 active:scale-[0.98]",
  };

  const buttonContent = (
    <>
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : (
        leftIcon && <span className="transition-transform group-hover:-translate-x-0.5">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!loading && rightIcon && (
        <span className="transition-transform group-hover:translate-x-0.5">{rightIcon}</span>
      )}
    </>
  );

  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    fullWidth && "w-full",
    className
  );

  if (href) {
    const isExternal = href.startsWith("http") || target === "_blank";
    const linkElement = (
      <a
        href={href}
        className={classes}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
      >
        {buttonContent}
      </a>
    );

    return isMagnetic ? <Magnetic strength={0.2}>{linkElement}</Magnetic> : linkElement;
  }

  const btn = (
    <button className={classes} disabled={disabled || loading} {...props}>
      {buttonContent}
    </button>
  );

  return isMagnetic ? <Magnetic strength={0.2}>{btn}</Magnetic> : btn;
}

export default Button;
