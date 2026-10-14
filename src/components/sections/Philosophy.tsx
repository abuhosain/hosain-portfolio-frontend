"use client";

import React from "react";
import { philosophyData } from "@/data/philosophy";
import { Quote } from "lucide-react";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 border-t border-white/[0.08] bg-[#090A0F]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              // Mental Models
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Engineering Philosophy
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-prose">
            {philosophyData.subheadline}
          </p>
        </div>

        {/* Featured Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {philosophyData.quotes.map((q, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  Principle 0{idx + 1}
                </span>
                <blockquote className="text-xl sm:text-2xl font-bold text-white leading-snug font-display">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-neutral-400">
                {q.context}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophyData.principles.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] space-y-2"
            >
              <h4 className="text-sm font-bold text-white font-display">
                {p.title}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
