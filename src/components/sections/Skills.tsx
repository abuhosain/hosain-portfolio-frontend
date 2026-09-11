"use client";

import React, { useState } from "react";
import { skillsData } from "@/data/skills";
import { soundFX } from "@/lib/sound";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Reveal } from "../animations/Reveal";
import { TiltCard } from "../animations/TiltCard";
import { FloatingParticles } from "../animations/FloatingParticles";
import { Code2, Server, Database, Cloud, Cpu, Wrench, Sparkles } from "lucide-react";

export function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Code2 className="w-4 h-4 text-accent" />;
      case "backend":
        return <Server className="w-4 h-4 text-purple-400" />;
      case "database":
        return <Database className="w-4 h-4 text-cyan-400" />;
      case "devops":
        return <Cloud className="w-4 h-4 text-amber-400" />;
      case "hardware":
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      default:
        return <Wrench className="w-4 h-4 text-accent" />;
    }
  };

  const handleCategoryClick = (id: string | null) => {
    soundFX.playClick(850);
    setActiveCategoryId(id);
  };

  return (
    <section id="skills" className="py-24 relative bg-[#09090D] border-t border-white/5 tech-grid overflow-hidden">
      {/* Subtle 3D Ambient Dust */}
      <FloatingParticles count={20} />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-accent/[0.04] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          index="02"
          badge="Technical Competency"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Engineered for Performance,"
          titleAccent="Built on Solid Stacks."
          subtitle="An interactive 3D breakdown of languages, frameworks, cloud infrastructure, and hardware technologies I leverage daily."
        />

        {/* Categories Tab Selector with Frosted Glass */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
            <button
              onClick={() => handleCategoryClick(null)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeCategoryId === null
                  ? "bg-accent text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105"
                  : "bg-[#12121C]/60 backdrop-blur-md text-neutral-300 hover:text-white hover:bg-[#1A1A28] border border-white/10"
              }`}
            >
              All Stacks ({skillsData.reduce((acc, g) => acc + g.skills.length, 0)})
            </button>
            {skillsData.map((group) => (
              <button
                key={group.id}
                onClick={() => handleCategoryClick(group.id === activeCategoryId ? null : group.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                  activeCategoryId === group.id
                    ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105"
                    : "bg-[#12121C]/60 backdrop-blur-md text-neutral-300 hover:text-white hover:bg-[#1A1A28] border border-white/10"
                }`}
              >
                {getCategoryIcon(group.id)}
                <span>{group.badge}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* 3D Tilt Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData
            .filter((group) => (activeCategoryId ? group.id === activeCategoryId : true))
            .map((group) => (
              <Reveal key={group.id} direction="up" delay={0.15}>
                <TiltCard maxTilt={8} glareOpacity={0.2} scaleOnHover={1.025}>
                  <Card
                    variant="glass"
                    borderAccent
                    className="p-6 h-full flex flex-col justify-between hover:border-accent/50 transition-all duration-300 group bg-[#0C0C14]/40 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
                  >
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-accent/50 transition-colors">
                            {getCategoryIcon(group.id)}
                          </div>
                          <h3 className="font-bold text-white text-base font-display">
                            {group.category}
                          </h3>
                        </div>
                        <Badge variant="default" size="sm">
                          {group.badge}
                        </Badge>
                      </div>

                      <p className="text-xs text-neutral-300 mb-6 leading-relaxed">
                        {group.description}
                      </p>

                      {/* Skill Pills */}
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                              skill.highlight
                                ? "bg-accent/15 border border-accent/40 text-white hover:border-accent shadow-[0_0_12px_rgba(0,240,255,0.1)]"
                                : "bg-[#141420]/70 border border-white/10 text-neutral-300 hover:border-white/25 hover:text-white"
                            }`}
                          >
                            {skill.highlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                            )}
                            <span>{skill.name}</span>
                            <span className="text-[10px] text-accent/80 ml-0.5">
                              {skill.level === "Core" ? "★" : ""}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span>{group.skills.length} competencies</span>
                      <span className="text-accent font-semibold">Production Verified</span>
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

export default Skills;
