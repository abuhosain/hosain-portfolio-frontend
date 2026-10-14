"use client";

import React from "react";
import { journeyData } from "@/data/journey";
import { CheckCircle2 } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-24 border-t border-white/[0.08] bg-[#07080D]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              // Evolution &amp; Trajectory
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Engineering Milestones
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-prose">
            From foundational computer science at Bogura Polytechnic Institute to international
            gold medals and founding NeexG.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/[0.1] ml-3 md:ml-4 pl-6 md:pl-8 space-y-10">
          {journeyData.map((stage) => (
            <div key={stage.phase} className="relative">
              {/* Timeline marker */}
              <div
                className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                  stage.current
                    ? "border-accent bg-accent"
                    : "border-white/30 bg-[#090A0F]"
                }`}
              />

              <div className="p-6 md:p-8 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/[0.18] transition-colors space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                      {stage.phase}
                    </span>
                    <span className="text-neutral-600 font-mono text-xs">&bull;</span>
                    <span className="text-neutral-400 font-mono text-xs">{stage.period}</span>
                  </div>

                  {stage.current && (
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Active Phase
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white font-display">
                  {stage.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {stage.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                  {stage.milestones.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
