"use client";

import React from "react";
import { philosophyData } from "@/data/philosophy";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Reveal } from "../animations/Reveal";
import { TiltCard } from "../animations/TiltCard";
import { FloatingParticles } from "../animations/FloatingParticles";
import { Quote, Sparkles } from "lucide-react";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 relative bg-[#07070B] border-t border-white/5 overflow-hidden">
      <FloatingParticles count={20} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          index="09"
          badge="Mental Models"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Engineering Philosophy &"
          titleAccent="Guiding Principles."
          subtitle={philosophyData.subheadline}
        />

        {/* Featured Quotes in 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {philosophyData.quotes.map((q, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.15}>
              <TiltCard maxTilt={8} glareOpacity={0.25} scaleOnHover={1.02}>
                <Card
                  variant="glass"
                  borderAccent
                  className="p-8 md:p-10 h-full flex flex-col justify-between relative overflow-hidden bg-[#0C0C14]/40 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
                >
                  <Quote className="w-12 h-12 text-accent/15 absolute top-6 right-6 pointer-events-none" />

                  <div className="space-y-4">
                    <span className="font-mono text-xs text-accent uppercase tracking-widest font-bold">
                      Principle 0{idx + 1}
                    </span>
                    <blockquote className="text-xl md:text-2xl font-bold text-white leading-snug font-display">
                      &ldquo;{q.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
                    {q.context}
                  </div>
                </Card>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Supporting Principles with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophyData.principles.map((p, idx) => (
            <Reveal key={p.title} direction="up" delay={0.2 + idx * 0.1}>
              <TiltCard maxTilt={10} glareOpacity={0.2} scaleOnHover={1.03}>
                <Card variant="glass" className="p-6 bg-[#0C0C14]/40 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <h4 className="text-base font-bold text-white font-display">{p.title}</h4>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </Card>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
