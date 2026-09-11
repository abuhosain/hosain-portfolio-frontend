"use client";

import React from "react";
import { methodologyData } from "@/data/methodology";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Reveal } from "../animations/Reveal";
import { StaggerContainer, StaggerItem } from "../animations/Stagger";
import { TiltCard } from "../animations/TiltCard";
import { FloatingParticles } from "../animations/FloatingParticles";
import { Search, Compass, Code, CheckCircle2, Rocket, Sparkles } from "lucide-react";

export function HowIBuild() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="w-4 h-4 text-accent" />;
      case "Compass":
        return <Compass className="w-4 h-4 text-purple-400" />;
      case "Code":
        return <Code className="w-4 h-4 text-cyan-400" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case "Rocket":
        return <Rocket className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section id="process" className="py-24 relative bg-[#09090D] border-t border-white/5 tech-grid overflow-hidden">
      <FloatingParticles count={20} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          index="06"
          badge="Engineering Methodology"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="From Idea to Production:"
          titleAccent="The 6-Step Workflow."
          subtitle="A repeatable, 3D architectural methodology ensuring high reliability, velocity, and clean execution."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodologyData.map((step) => (
            <StaggerItem key={step.number}>
              <TiltCard maxTilt={9} glareOpacity={0.25} scaleOnHover={1.03}>
                <Card
                  variant="glass"
                  borderAccent
                  className="p-6 h-full flex flex-col justify-between hover:border-accent/50 transition-all duration-300 group bg-[#0C0C14]/40 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-accent/50 transition-colors">
                        {getStepIcon(step.icon)}
                      </div>
                      <span className="font-mono text-3xl font-black text-neutral-600 group-hover:text-accent transition-colors drop-shadow">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed mb-4 font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-1.5">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span>{detail}</span>
                      </div>
                    ))}
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

export default HowIBuild;
