"use client";

import React from "react";
import { ArrowUpRight, ExternalLink, Globe, ShoppingBag, Sparkles, ShieldCheck } from "lucide-react";
import { venturesData } from "@/data/ventures";

export function Ventures() {
  const [neexg, oregent] = venturesData;

  return (
    <section id="ventures" className="py-20 sm:py-24 border-t border-white/[0.08] bg-[#0A0C14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              // Ventures &amp; Startups
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Startups &amp; Co-Founded Ventures
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-prose">
            The companies I build, lead, and co-founded. From client engineering and AI automations to brand-first consumer commerce.
          </p>
        </div>

        {/* Editorial Asymmetric Ventures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: NeexG (Founder & CEO) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-[#0F121F] border border-blue-500/20 hover:border-blue-500/40 p-6 sm:p-8 relative overflow-hidden transition-all duration-300 shadow-md group">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                      {neexg.name}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">
                      neexg.com
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {neexg.role}
                  </span>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[11px] font-mono text-neutral-400 bg-white/[0.04] border border-white/[0.08]">
                    {neexg.badge}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-base sm:text-lg font-semibold text-neutral-200">
                  {neexg.tagline}
                </h4>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  {neexg.brief}
                </p>
              </div>

              {/* Tag Row */}
              <div className="flex flex-wrap gap-2 pt-2">
                {neexg.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono text-neutral-300 bg-white/[0.04] border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/[0.08] flex items-center justify-between gap-4 relative z-10">
              <span className="text-xs font-mono text-neutral-400">
                Agency · SaaS &amp; Automation
              </span>
              <a
                href={neexg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm group-hover:translate-x-0.5"
              >
                <span>Visit NeexG</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Oregent (Co-Founder) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-[#121118] border border-amber-500/20 hover:border-amber-500/40 p-6 sm:p-8 relative overflow-hidden transition-all duration-300 shadow-md group">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                      {oregent.name}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">
                      oregent.com
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  {oregent.role}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-base sm:text-lg font-semibold text-neutral-200">
                  {oregent.tagline}
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {oregent.brief}
                </p>
              </div>

              {/* Tag Row */}
              <div className="flex flex-wrap gap-2 pt-2">
                {oregent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono text-neutral-300 bg-white/[0.04] border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/[0.08] flex items-center justify-between gap-4 relative z-10">
              <span className="text-xs font-mono text-neutral-400">
                Fashion &amp; Sneaker Brand
              </span>
              <a
                href={oregent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-sm group-hover:translate-x-0.5"
              >
                <span>Visit Oregent</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ventures;
