"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Reveal } from "../animations/Reveal";
import { TiltCard } from "../animations/TiltCard";
import { FloatingParticles } from "../animations/FloatingParticles";
import { CheckCircle2, Sparkles } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#09090D] border-t border-white/5 tech-grid overflow-hidden">
      <FloatingParticles count={20} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          index="08"
          badge="Experience & Scope"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Engineering Capabilities"
          titleAccent="& Responsibilities."
          subtitle="A structured 3D breakdown of roles, architectural ownership, and technical contributions across product engineering."
        />

        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <Reveal key={exp.role} direction="up" delay={idx * 0.1}>
              <TiltCard maxTilt={6} glareOpacity={0.2} scaleOnHover={1.015}>
                <Card
                  variant="glass"
                  borderAccent
                  className="p-6 md:p-8 hover:border-accent/50 transition-all duration-300 bg-[#0C0C14]/40 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
                          {exp.scope}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white font-display">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="default" size="sm">
                        {exp.focus}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-300 mb-6 leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Capabilities list */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {exp.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-mono">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-neutral-400 mr-2">Technologies:</span>
                    {exp.techUsed.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#161626]/70 border border-white/10 text-[11px] font-mono text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
