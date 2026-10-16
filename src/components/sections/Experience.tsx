"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { CheckCircle2, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/[0.08] bg-[#090A0F]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              // Professional Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Production Engineering &amp; Founder Experience
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-prose">
            Abu Hosain&apos;s hands-on technical leadership, client delivery, and full-stack software architecture
            across SaaS platforms, automated systems, and scalable web products.
          </p>
        </div>

        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/[0.18] transition-colors space-y-5"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
                <div>
                  <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                    {exp.scope}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                    {exp.role}
                  </h3>
                </div>

                <span className="text-xs font-mono text-neutral-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] self-start lg:self-auto">
                  {exp.focus}
                </span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Capabilities list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {exp.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{cap}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-neutral-500 mr-1">Stack:</span>
                {exp.techUsed.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-neutral-300"
                  >
                    {t}
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

export default Experience;
