"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  GraduationCap,
  Mail,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 sm:pt-28 pb-16 arch-grid overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Narrative & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for SaaS, web engineering &amp; AI automation</span>
            </motion.div>

            {/* Main Headline (Name + Role unified in single semantic h1) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="space-y-3"
            >
              <h1 className="space-y-2">
                <span className="block text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
                  Abu Hosain
                </span>

                {/* Mobile Headline (compact) */}
                <span className="block sm:hidden text-lg font-semibold text-neutral-200 tracking-tight font-display leading-snug">
                  Software Engineer · Founder of{" "}
                  <a
                    href="https://neexg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-4 decoration-accent/60"
                  >
                    NeexG
                  </a>{" "}
                  &amp; Co-Founder of{" "}
                  <a
                    href="https://oregent.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-4 decoration-accent/60"
                  >
                    Oregent
                  </a>
                </span>

                {/* Desktop Headline (full) */}
                <span className="hidden sm:block text-xl sm:text-2xl font-semibold text-neutral-300 tracking-tight font-display leading-snug">
                  Software Engineer · Branding · AI Automation · Founder of{" "}
                  <a
                    href="https://neexg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent underline underline-offset-4 decoration-accent/60 transition-colors"
                  >
                    NeexG
                  </a>{" "}
                  · Co-Founder of{" "}
                  <a
                    href="https://oregent.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent underline underline-offset-4 decoration-accent/60 transition-colors"
                  >
                    Oregent
                  </a>
                </span>
              </h1>
            </motion.div>

            {/* Polished bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-prose"
            >
              Full-stack software engineer, founder of NeexG and co-founder of Oregent, building web apps, SaaS products and e-commerce platforms. Also specializing in branding, AI automation (n8n, Zapier) and video editing. Dual International Gold Medalist at IWC &amp; I3C with a CST diploma from Bogura Polytechnic Institute.
            </motion.p>

            {/* Clear CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-sm"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-[#141622] hover:bg-[#1A1D2C] border border-white/10 text-white font-medium text-sm transition-colors"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </a>

              <a
                href="mailto:abuhosainmin@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-200 font-mono transition-colors min-h-[44px] px-2"
                aria-label="Direct email to Abu Hosain at abuhosainmin@gmail.com"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate max-w-[200px] sm:max-w-none">abuhosainmin@gmail.com</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Portrait Showcase & Architectural Credentials */}
          <div className="lg:col-span-5 space-y-4">
            {/* Signature Portrait Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="relative group"
            >
              {/* Subtle ambient backlight aura */}
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent/25 via-purple-600/15 to-accent/25 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl border border-white/10 bg-[#0F111A]/90 backdrop-blur-md overflow-hidden p-2 sm:p-2.5 shadow-2xl">
                {/* Image Frame */}
                <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-black/40">
                  <Image
                    src={profileData.image}
                    alt={`${profileData.name} - Software Engineer & Founder`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                    className="object-cover object-[center_28%] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />

                  {/* Gradient overlays for contrast & depth */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-black/20 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Top-left: Location & Availability Pill */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#090A0F]/85 backdrop-blur-md border border-white/10 text-xs font-mono text-neutral-200 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Abu Hosain · Bangladesh</span>
                  </div>

                  {/* Top-right: Gold Medalist Pill */}
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[11px] font-mono shadow-md">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>2x Gold Medalist</span>
                  </div>

                  {/* Bottom Bar: Name, Founder status, Specialty */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    <div className="px-3 py-1.5 rounded-xl bg-[#0F111A]/90 backdrop-blur-md border border-white/10 text-xs shadow-md">
                      <div className="font-bold text-white font-display">Abu Hosain</div>
                      <div className="text-[11px] font-mono text-accent">Founder @ NeexG</div>
                    </div>
                    <div className="px-3 py-1.5 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/10 text-right shadow-md">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Focus</div>
                      <div className="text-xs font-semibold text-neutral-200">Full-Stack &amp; AI</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Credential Cards Grid: Dual Honors + Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* International Honors Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="p-4 rounded-2xl bg-[#0F111A] border border-white/[0.08] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-accent font-semibold">
                      <Award className="w-3.5 h-3.5 text-accent" />
                      <span>Recognition</span>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      2x Gold
                    </span>
                  </div>
                  <h2 className="text-sm font-bold text-white font-display">
                    Dual Gold Medalist
                  </h2>
                  <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                    IWC &amp; I3C International Technical Honors
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>IWC · I3C</span>
                  <span className="text-amber-300 font-semibold">World-Level</span>
                </div>
              </motion.div>

              {/* Academic & Roots Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="p-4 rounded-2xl bg-[#0F111A] border border-white/[0.08] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                      <GraduationCap className="w-3.5 h-3.5 text-accent" />
                      <span>Education</span>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
                      CST
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white font-display leading-tight">
                    Diploma in CST
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                    Bogura Polytechnic Institute
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-accent" />
                    <span>Foundations</span>
                  </div>
                  <span>Bangladesh</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
