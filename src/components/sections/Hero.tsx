"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
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

          {/* Right Column: Architectural Credentials & Proof */}
          <div className="lg:col-span-5 space-y-4">
            {/* International Honors Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-3">
                <Award className="w-4 h-4" />
                <span>Global Recognition</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white font-display">
                Dual International Gold Medalist
              </h2>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Awarded top technical honors across competitive international innovation showcases.
              </p>

              <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">Innovation World Cup (IWC)</span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Gold Medal
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">Invention &amp; Innovation Comp. (I3C)</span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Gold Medal
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Academic & Founder Credential Strip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] shadow-sm"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Education &amp; Roots</span>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-white">
                  Diploma in Computer Science &amp; Technology (CST)
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  Bogura Polytechnic Institute
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  <span>Foundations: C++, Data Structures, OS</span>
                </div>
                <span>Bangladesh</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
