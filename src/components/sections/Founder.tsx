"use client";

import React from "react";
import Image from "next/image";
import { founderData } from "@/data/founder";
import { profileData } from "@/data/profile";
import { ArrowUpRight, Globe, CheckCircle2 } from "lucide-react";

export function Founder() {
  return (
    <section id="founder" className="py-24 border-t border-white/[0.08] bg-[#07080D]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              // Venture &amp; Leadership
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Founder &amp; CEO at NeexG
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-prose">
            Building software products from zero to scale. Delivering custom platforms, scalable
            SaaS tools, and high-performance digital infrastructure.
          </p>
        </div>

        {/* Feature Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0F111A] border border-white/[0.08] mb-12 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                Technology Company
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {founderData.ventureName}
              </h3>
              <p className="text-sm text-neutral-300 font-mono">
                {founderData.tagline}
              </p>
            </div>

            <a
              href={founderData.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-xs font-semibold transition-colors self-start md:self-auto shadow-sm"
              aria-label="Visit NeexG official website at neexg.com"
            >
              <Globe className="w-4 h-4" />
              <span>Visit neexg.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-3 text-sm text-neutral-300 leading-relaxed max-w-3xl">
            {founderData.thesis.map((point, idx) => (
              <p key={idx}>{point}</p>
            ))}
          </div>

          {/* Founder Attribution Badge */}
          <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 ring-2 ring-accent/30 shrink-0">
                <Image
                  src={profileData.image}
                  alt="Abu Hosain - Founder & CEO"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover object-[center_28%]"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-white font-display">
                  {profileData.name}
                </div>
                <div className="text-[11px] font-mono text-neutral-400">
                  Founder &amp; CEO, NeexG
                </div>
              </div>
            </div>

            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
              Leadership &amp; Architecture
            </span>
          </div>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {founderData.focusAreas.map((area, idx) => (
            <div
              key={area.title}
              className="p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    {area.badge}
                  </span>
                  <span className="font-mono text-xs text-neutral-500">0{idx + 1}</span>
                </div>

                <h4 className="text-base font-bold text-white font-display">
                  {area.title}
                </h4>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Founder;
