"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { Award, GraduationCap, ArrowUpRight, Code2, Palette, Cpu, CheckCircle2, ShoppingBag } from "lucide-react";

export function About() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-accent" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-accent" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-accent" />;
      default:
        return <Code2 className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-24 border-t border-white/[0.08] bg-[#090A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              // Profile &amp; Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Engineering Web Systems with Craft &amp; Founder Execution
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Polished Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F111A] border border-white/[0.08] space-y-5 shadow-sm">
              {/* Profile Intro Bar with Photo */}
              <div className="flex items-center gap-4 pb-5 border-b border-white/[0.06]">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border border-white/10 ring-2 ring-accent/25 shrink-0 shadow-lg">
                  <Image
                    src={profileData.image}
                    alt={profileData.name}
                    fill
                    sizes="80px"
                    className="object-cover object-[center_28%]"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                      {profileData.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-accent/10 border border-accent/20 text-accent font-semibold">
                      Founder &amp; CEO
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 font-mono">
                    Full-Stack Software Engineer · Branding &amp; AI Automation
                  </p>
                  <div className="flex items-center gap-1.5 pt-0.5 text-xs text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Based in Bangladesh · Open for Global Projects</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-accent/10 border border-accent/20 text-accent font-semibold">
                  Founder &amp; CEO · NeexG
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-amber-500/10 border border-amber-500/20 text-amber-300 font-semibold">
                  Co-Founder · Oregent
                </span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                {profileData.detailedBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
                <span>Location: {profileData.location}</span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://neexg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline font-semibold"
                  >
                    <span>neexg.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://oregent.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-400 hover:underline font-semibold"
                  >
                    <span>oregent.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Honors Strip & Academic Credentials */}
          <div className="lg:col-span-5 space-y-4">
            {/* Honors Strip */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                  <Award className="w-4 h-4 text-accent" />
                  <span>Key Achievements</span>
                </div>
                <span className="text-[11px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                  Verified
                </span>
              </div>

              <div className="space-y-3">
                {profileData.achievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        {item.organization}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Block */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold pb-2 border-b border-white/[0.06]">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span>Education</span>
              </div>

              {profileData.education.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-sm font-semibold text-white">
                    {edu.degree}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    {edu.institution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {profileData.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-5 sm:p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 bg-white/[0.04] px-2 py-0.5 rounded">
                    {pillar.tag}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white font-display mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
