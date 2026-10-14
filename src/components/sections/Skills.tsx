"use client";

import React from "react";
import { skillsData } from "@/data/skills";
import {
  Code2,
  Workflow,
  BrainCircuit,
  Video,
  Palette,
  Cloud,
  Cpu,
  ExternalLink,
} from "lucide-react";

export function Skills() {
  const getGroupIcon = (id: string) => {
    switch (id) {
      case "full-stack":
        return <Code2 className="w-5 h-5 text-accent" />;
      case "ai-automation":
        return <Workflow className="w-5 h-5 text-accent" />;
      case "machine-learning":
        return <BrainCircuit className="w-5 h-5 text-amber-400" />;
      case "video-editing":
        return <Video className="w-5 h-5 text-red-400" />;
      case "branding":
        return <Palette className="w-5 h-5 text-purple-400" />;
      case "devops":
        return <Cloud className="w-5 h-5 text-teal-400" />;
      case "embedded-iot":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-white/[0.08] bg-[#07080D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              // Core Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Grouped Technical Skills &amp; Stack
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-prose">
            A structured breakdown of development tools, automation workflows, design strategy, and ongoing machine learning study.
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <div
              key={group.id}
              className={`p-6 sm:p-7 rounded-2xl bg-[#0F111A] border transition-all duration-200 flex flex-col justify-between space-y-5 shadow-sm ${
                group.statusBadge
                  ? "border-amber-500/30 hover:border-amber-500/50"
                  : "border-white/[0.08] hover:border-white/[0.18]"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    {getGroupIcon(group.id)}
                  </div>

                  {group.statusBadge ? (
                    <span className="text-[11px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      ★ {group.statusBadge}
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
                      {group.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {group.category}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {group.proofLink && (
                  <div className="pt-1">
                    <a
                      href={group.proofLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-red-400 hover:text-red-300 transition-colors"
                    >
                      <span>{group.proofLink.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {group.skills.map((skillName) => (
                  <span
                    key={skillName}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-200"
                  >
                    {skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
