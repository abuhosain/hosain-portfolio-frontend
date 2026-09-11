"use client";

import React from "react";
import { founderData } from "@/data/founder";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Reveal } from "../animations/Reveal";
import { StaggerContainer, StaggerItem } from "../animations/Stagger";
import { TiltCard } from "../animations/TiltCard";
import { Rocket, Cpu, Sparkles } from "lucide-react";

export function Founder() {
  return (
    <section id="founder" className="py-24 relative bg-[#09090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          index="05"
          badge="Founder Mindset & Venture"
          title="Building Products is Not Just My Profession."
          titleAccent="It's How I Think."
          subtitle="SystomeX represents an ongoing venture trajectory bridging physical hardware solutions, practical robotics kits, and scalable software ecosystems."
        />

        {/* Vision Statement Banner */}
        <Reveal direction="up" delay={0.1}>
          <TiltCard maxTilt={5} glareOpacity={0.15}>
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#12121D]/95 via-[#161626]/95 to-[#101018]/95 border border-white/10 mb-12 relative overflow-hidden backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
                      Venture Initiative: {founderData.ventureName}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-display">
                    {founderData.tagline}
                  </h3>
                  <div className="space-y-2 pt-2 text-neutral-300 text-sm leading-relaxed">
                    {founderData.thesis.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/60 border border-white/10 shrink-0 text-center font-mono">
                  <div className="text-xs text-neutral-400">Direction</div>
                  <div className="text-lg font-bold text-accent mt-1">Robotics &amp; Tech</div>
                  <div className="text-[10px] text-neutral-500 mt-1">Early-Stage Execution</div>
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        {/* Focus Areas with 3D Tilt */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {founderData.focusAreas.map((area, idx) => (
            <StaggerItem key={area.title}>
              <TiltCard maxTilt={10} glareOpacity={0.25} scaleOnHover={1.03}>
                <Card
                  variant="glass"
                  borderAccent
                  className="p-6 h-full flex flex-col justify-between hover:bg-[#13131E] transition-all bg-[#0E0E16]/90 backdrop-blur-md border-white/10"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="accent" size="sm">
                        {area.badge}
                      </Badge>
                      <span className="font-mono text-xs text-neutral-500">0{idx + 1}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 font-display">{area.title}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </Card>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
