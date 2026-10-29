"use client";

import React from "react";
import { Terminal, ShieldCheck, ArrowRight } from "lucide-react";
import { deploymentSteps } from "@/data/courseData";

interface DeploymentFlowProps {
  lang: "bn" | "en";
}

export function DeploymentFlow({ lang }: DeploymentFlowProps) {
  const isBn = lang === "bn";

  return (
    <section id="deployment" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-semibold">
              {isBn ? "// ক্লাউড ও ডিপ্লয়মেন্ট পাইপলাইন" : "// Production Deployment Pipeline"}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-display">
            {isBn
              ? "লোকালহোস্ট থেকে Vercel ও কাস্টম ডোমেইনে লাইভ ডিপ্লয়মেন্ট।"
              : "From Localhost to Vercel & Custom Domain: The 5-Step Pipeline."}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-prose">
            {isBn
              ? "বেশিরভাগ কোর্সে কেবল লোকালহোস্টে কোড করে শেষ করা হয়। আমরা সরাসরি গিটহাব ইন্টিগ্রেশন, Vercel এজ ডিপ্লয়মেন্ট, প্রিভিউ ব্রাঞ্চিং, সিকিউর এনভায়রনমেন্ট ভ্যারিয়েবল এবং কাস্টম ডোমেইন DNS রাউটিং হাতে-কলমে শেখাই।"
              : "No local-only toy projects. You master automated Git CI/CD, zero-config Vercel edge deployment, preview branches for clients, environment variable encryption, and pointing production custom domains."}
          </p>
        </div>

        {/* 5-Step Horizontal Flow Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-3 relative">
          {deploymentSteps.map((item, idx) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between p-5 rounded-xl bg-[#F8FAFC] border border-slate-200/90 hover:border-indigo-500/30 hover:bg-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-3">
                {/* Step indicator & command */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                    STEP {item.step}
                  </span>
                  {idx < deploymentSteps.length - 1 && (
                    <ArrowRight className="hidden md:block w-3.5 h-3.5 text-slate-400 absolute -right-2 top-6 z-10" />
                  )}
                </div>

                {/* Command Snippet in Terminal Style */}
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5 overflow-x-auto no-scrollbar shadow-inner">
                  <Terminal className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="truncate">{item.commandSnippet}</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                    {isBn ? item.titleBn : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isBn ? item.descriptionBn : item.descriptionEn}
                  </p>
                </div>
              </div>

              {/* Key Deliverable */}
              <div className="pt-3 mt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="truncate">{isBn ? item.keyDeliverableBn : item.keyDeliverableEn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeploymentFlow;
