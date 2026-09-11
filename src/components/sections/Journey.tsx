"use client";

import React from "react";
import { journeyData } from "@/data/journey";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Reveal } from "../animations/Reveal";
import { TiltCard } from "../animations/TiltCard";
import { FloatingParticles } from "../animations/FloatingParticles";
import { CheckCircle2, Sparkles } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-24 relative bg-[#07070B] border-t border-white/5 overflow-hidden">
      <FloatingParticles count={20} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          index="07"
          badge="Evolution & Milestones"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Still Building."
          titleAccent="The Journey is the Product."
          subtitle="A stage-by-stage 3D progression from core computer science curiosity to full-stack mastery and hardware venture initiatives."
        />

        {/* Timeline container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {journeyData.map((stage, idx) => (
            <div key={stage.phase} className="relative">
              {/* Timeline marker */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  stage.current
                    ? "border-accent bg-[#0A0A0E] shadow-[0_0_15px_#00F0FF]"
                    : "border-white/30 bg-[#161622]"
                }`}
              >
                {stage.current && (
                  <span className="animate-ping absolute inset-0 rounded-full bg-accent opacity-85" />
                )}
              </div>

              <Reveal direction="left" delay={idx * 0.1}>
                <TiltCard maxTilt={6} glareOpacity={0.2} scaleOnHover={1.015}>
                  <Card
                    variant="glass"
                    borderAccent={stage.current}
                    className="p-6 md:p-8 bg-[#0C0C14]/40 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
                          {stage.phase}
                        </span>
                        <span className="text-neutral-500 font-mono text-xs">/</span>
                        <span className="text-neutral-300 font-mono text-xs">{stage.period}</span>
                      </div>
                      {stage.current && (
                        <Badge variant="live" size="sm">
                          Current Focus
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-display">
                      {stage.title}
                    </h3>

                    <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                      {stage.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      {stage.milestones.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-mono">
                          <CheckCircle2 className="w-4 h-4 text-accent/90 shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TiltCard>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
