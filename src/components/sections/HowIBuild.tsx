"use client";

import React from "react";
import { methodologyData } from "@/data/methodology";
import { Search, Compass, Code, CheckCircle2, Rocket, Sparkles } from "lucide-react";

export function HowIBuild() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="w-4 h-4 text-accent" />;
      case "Compass":
        return <Compass className="w-4 h-4 text-accent" />;
      case "Code":
        return <Code className="w-4 h-4 text-accent" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-4 h-4 text-accent" />;
      case "Rocket":
        return <Rocket className="w-4 h-4 text-accent" />;
      default:
        return <Sparkles className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section id="process" className="py-24 border-t border-white/[0.08] bg-[#090A0F]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              // Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            The 6-Step Engineering Workflow
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-prose">
            A disciplined, repeatable process transforming initial scoping into reliable,
            high-performance shipped software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodologyData.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="font-mono text-2xl font-bold text-neutral-600">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowIBuild;
