"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Reveal } from "../animations/Reveal";
import { StaggerContainer, StaggerItem } from "../animations/Stagger";
import { TiltCard } from "../animations/TiltCard";
import { Code2, Boxes, Rocket, Cpu, TerminalSquare, Sparkles } from "lucide-react";

export function About() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-accent" />;
      case "Boxes":
        return <Boxes className="w-5 h-5 text-purple-400" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "TerminalSquare":
        return <TerminalSquare className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-[#09090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          index="01"
          badge="Core DNA & Philosophy"
          title="Engineering with Vision,"
          titleAccent="Building with Craft."
          subtitle="A multidisciplinary engineer bridging clean software architectures, fluid user interfaces, and connected hardware prototypes."
        />

        {/* Narrative & Bio grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left: Bio card */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <TiltCard maxTilt={6} glareOpacity={0.15}>
                <Card variant="glass" borderAccent className="p-8 relative overflow-hidden bg-[#0D0D14]/90 backdrop-blur-md">
                  <div className="space-y-4 text-neutral-300 leading-relaxed text-sm md:text-base">
                    {profileData.detailedBio.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-neutral-400">
                    <span>Based in: {profileData.location}</span>
                    <span className="text-accent font-semibold">UTC+06:00</span>
                  </div>
                </Card>
              </TiltCard>
            </Reveal>
          </div>

          {/* Right: Core Engineering Pillars */}
          <div className="lg:col-span-7">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.pillars.map((pillar) => (
                <StaggerItem key={pillar.title}>
                  <TiltCard maxTilt={10} glareOpacity={0.2} scaleOnHover={1.03}>
                    <Card
                      variant="solid"
                      borderAccent
                      className="p-5 h-full flex flex-col justify-between group hover:bg-[#14141E] transition-all bg-[#0F0F17]/90 backdrop-blur-md border-white/10"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:border-accent/40 transition-colors">
                            {getPillarIcon(pillar.icon)}
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                            {pillar.tag}
                          </span>
                        </div>
                        <h4 className="text-base font-semibold text-white mb-2 group-hover:text-accent transition-colors font-display">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </Card>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
