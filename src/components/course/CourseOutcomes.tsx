"use client";

import React from "react";
import { Check, Sparkles, Layers, Terminal, Server, Briefcase } from "lucide-react";
import { learningPillars } from "@/data/courseData";

interface CourseOutcomesProps {
  lang: "bn" | "en";
}

export function CourseOutcomes({ lang }: CourseOutcomesProps) {
  const isBn = lang === "bn";

  const getPillarIcon = (number: string) => {
    switch (number) {
      case "01":
        return <Layers className="w-5 h-5 text-blue-400" />;
      case "02":
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case "03":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "04":
        return <Briefcase className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="outcomes" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-semibold">
              {isBn ? "// ৪টি মূল শিক্ষণ ভিত্তি" : "// The 4 Engineering Pillars"}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-display">
            {isBn
              ? "সাধারণ কোডার নয়; একজন স্বয়ংসম্পূর্ণ প্রোডাক্ট ইঞ্জিনিয়ার হয়ে উঠুন।"
              : "Don't Just Learn Syntax. Become a High-Value Product Engineer."}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-prose">
            {isBn
              ? "আমরা কেবল তাত্ত্বিক লেকচার দিই না। আমরা শেখাই কীভাবে বাস্তব সমস্যার সমাধান করতে হয়, কাটিং-এজ AI দিয়ে প্রোডাকশন স্পিড বাড়াতে হয়, Vercel ক্লাউডে লাইভ করতে হয় এবং ক্লায়েন্ট থেকে আয় করতে হয়।"
              : "We don't teach abstract syntax in a vacuum. You master the entire lifecycle: architecting modern UIs, 10x velocity via AI, Vercel cloud deployment, and client monetization."}
          </p>
        </div>

        {/* 4 Pillars Grid (2x2 Balanced Split) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {learningPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col justify-between p-5 sm:p-6 lg:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-indigo-500/30 hover:bg-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                      {getPillarIcon(pillar.number)}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500">
                      PILLAR {pillar.number}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                    {isBn ? pillar.titleBn : pillar.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isBn ? pillar.taglineBn : pillar.taglineEn}
                  </p>
                </div>

                {/* Specific Skills Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {(isBn ? pillar.skillsBn : pillar.skillsEn).map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white border border-slate-200 text-slate-700 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Concrete Outcome */}
              <div className="pt-4 mt-5 border-t border-slate-200/80 flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{isBn ? pillar.outcomeBn : pillar.outcomeEn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseOutcomes;
