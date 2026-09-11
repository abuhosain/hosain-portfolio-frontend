import React, { ReactNode } from "react";
import { Badge } from "./Badge";
import { Reveal } from "../animations/Reveal";

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: ReactNode;
  index?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeIcon,
  index,
  title,
  titleAccent,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}>
      <Reveal direction="up" delay={0.05}>
        <div className={`flex items-center gap-3 mb-4 ${isCenter ? "justify-center" : ""}`}>
          {index && (
            <span className="font-mono text-xs font-semibold text-accent/80 tracking-widest uppercase">
              //{index}
            </span>
          )}
          {badge && (
            <Badge variant="accent" size="sm" icon={badgeIcon}>
              {badge}
            </Badge>
          )}
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}{" "}
          {titleAccent && (
            <span className="text-gradient-accent">
              {titleAccent}
            </span>
          )}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal direction="up" delay={0.15}>
          <p className="mt-4 text-base md:text-lg text-neutral-400 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
