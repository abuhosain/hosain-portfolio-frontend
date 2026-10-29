"use client";

import React from "react";
import { Flag, ArrowRight } from "lucide-react";
import { saasJourneySteps } from "@/data/courseData";

interface SaaSJourneyProps {
  lang: "bn" | "en";
}

export function SaaSJourney({ lang }: SaaSJourneyProps) {
  const isBn = lang === "bn";

  return (
    <section id="saas-journey" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-semibold">
              {isBn ? "// SaaS প্রোডাক্ট বিল্ডিং" : "// SaaS Product Engineering"}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-display">
            {isBn
              ? "আইডিয়া ভ্যালিডেশন থেকে রিয়েল SaaS লঞ্চ: ৫টি নিশ্চিত ধাপ।"
              : "From Problem Discovery to Paying Users: The 5-Phase SaaS Lifecycle."}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-prose">
            {isBn
              ? "মাসের পর মাস অপ্রয়োজনীয় ফিচার তৈরিতে নষ্ট না করে কীভাবে এআই দিয়ে দ্রুত MVP তৈরি করতে হয়, Vercel এজ ক্লাউডে হোস্ট করতে হয় এবং প্রথম ১০০ জন পেইং কাস্টমার অনবোর্ড করতে হয় তা শিখবেন।"
              : "Learn how Abu Hosain built live platforms like Obiram and Evanio AI: stripping away vanity features, rapidly scaffolding the core engine with Cursor & Claude, hosting on Vercel's global edge, and iterating based on real user feedback."}
          </p>
        </div>

        {/* 5-Step SaaS Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 sm:gap-4 relative">
          {saasJourneySteps.map((item, idx) => (
            <div
              key={item.step}
              className="flex flex-col justify-between p-5 rounded-xl bg-white border border-slate-200/90 hover:border-indigo-500/30 transition-all duration-200 shadow-sm hover:shadow-md relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                    PHASE {item.step}
                  </span>
                  {idx < saasJourneySteps.length - 1 && (
                    <ArrowRight className="hidden md:block w-3.5 h-3.5 text-slate-400 absolute -right-2.5 top-6 z-10" />
                  )}
                </div>

                <div className="space-y-1 pt-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    {isBn ? item.phaseBn : item.phaseEn}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                    {isBn ? item.titleBn : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {isBn ? item.descriptionBn : item.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-slate-700">
                <Flag className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="truncate">{isBn ? item.milestoneBn : item.milestoneEn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SaaSJourney;
