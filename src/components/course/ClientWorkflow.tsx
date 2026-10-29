"use client";

import React from "react";
import { CheckCircle2, TrendingUp, Handshake } from "lucide-react";
import { clientWorkflowSteps } from "@/data/courseData";

interface ClientWorkflowProps {
  lang: "bn" | "en";
}

export function ClientWorkflow({ lang }: ClientWorkflowProps) {
  const isBn = lang === "bn";

  return (
    <section id="freelancing" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-semibold">
              {isBn ? "// ক্লায়েন্ট বিজনেস ও ফ্রিল্যান্সিং" : "// High-Value Client Systems"}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-display">
            {isBn
              ? "ক্লায়েন্ট ডিসকভারি থেকে মান্থলি রিটেইনার: NeexG এজেন্সির বাস্তব মেথডোলজি।"
              : "Client Acquisition to Recurring Retainers: The Exact 6-Stage Delivery Pipeline."}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-prose">
            {isBn
              ? "মার্কেটপ্লেসে কম টাকায় বিড করে সময় নষ্ট নয়। আমরা শেখাই কীভাবে ক্লায়েন্টের আসল বিজনেসের সমস্যা সমাধান করে হাই-ভ্যালু প্রপোজাল দিতে হয় এবং এককালীন ক্লায়েন্টকে প্রতি মাসের রিটেইনার পার্টনারে রূপান্তর করতে হয়।"
              : "Stop wasting hours competing in race-to-the-bottom bid wars. Learn the diagnostic consulting model Abu Hosain uses at NeexG to charge value-based fees, secure upfront deposits, and convert one-time projects into monthly retainers."}
          </p>
        </div>

        {/* 6-Stage Client Pipeline (2x3 Editorial Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {clientWorkflowSteps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col justify-between p-4 sm:p-5 lg:p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/90 hover:border-indigo-500/30 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-display text-slate-300">
                    {item.step}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                    {isBn ? item.phaseBn : item.phaseEn}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {isBn ? item.actionBn : item.actionEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {isBn ? item.detailBn : item.detailEn}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200/80 flex items-center gap-2 text-xs text-slate-500 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{isBn ? "প্র্যাকটিক্যাল ডকুমেন্ট ও টেমপ্লেট" : "Standardized agency playbook"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Retainer Note */}
        <div className="mt-8 p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 font-display">
              <Handshake className="w-4 h-4 text-indigo-600" />
              <span>{isBn ? "সরাসরি মেন্টরের এজেন্সি অভিজ্ঞতা" : "Taught from Live Agency Practice"}</span>
            </div>
            <p className="text-xs text-slate-600 max-w-2xl">
              {isBn
                ? "কোনো তাত্ত্বিক লেকচার নয়; NeexG এজেন্সিতে যেসব কন্ট্রাক্ট চুক্তি, প্রপোজাল ডক এবং ক্লায়েন্ট অনবোর্ডিং চেকলিস্ট ব্যবহার করা হয়, তার হুবহু কপি ও প্র্যাকটিস করানো হবে।"
                : "Students receive the actual non-disclosure templates, milestone agreements, and onboarding interview scripts used by NeexG for international client management."}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold shrink-0">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isBn ? "ভ্যালু-বেসড প্রাইসিং" : "Value-Based Retainers"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientWorkflow;
