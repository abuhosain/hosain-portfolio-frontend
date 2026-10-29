"use client";

import React from "react";
import { Terminal, ShieldAlert, CheckCircle2, Cpu, Bot, Brain, Layout, Zap } from "lucide-react";
import { aiToolsList } from "@/data/courseData";

interface AIToolsSectionProps {
  lang: "bn" | "en";
}

export function AIToolsSection({ lang }: AIToolsSectionProps) {
  const isBn = lang === "bn";

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case "Bot":
        return <Bot className="w-4 h-4 text-emerald-400" />;
      case "Brain":
        return <Brain className="w-4 h-4 text-purple-400" />;
      case "Layout":
        return <Layout className="w-4 h-4 text-amber-400" />;
      default:
        return <Terminal className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section id="ai-tools" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-semibold">
              {isBn ? "// AI টুলচেইন ও ভাইব কোডিং" : "// Modern AI Toolchain & Vibe Coding"}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-display">
            {isBn
              ? "সিনিয়র ইঞ্জিনিয়ারদের মতো AI দিয়ে ৫x–১০x দ্রুত কাজ করার ডিসিপ্লিন।"
              : "Harness AI to Architect, Code, and Ship at 5x–10x Velocity."}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-prose">
            {isBn
              ? "অন্ধভাবে কোড কপি-পেস্ট করা নয়; কীভাবে সুনির্দিষ্ট সিস্টেম প্রম্পট, .cursorrules কনফিগারেশন এবং মাল্টি-এজেন্ট টুলসের মাধ্যমে কোডবেস নিয়ন্ত্রণ করতে হয় তা শিখবেন।"
              : "We don't teach lazy copy-pasting. We teach the rigorous engineering discipline of Vibe Coding: structuring prompts, setting architectural boundaries, indexing codebases, and automating tedious development loops."}
          </p>
        </div>

        {/* Clean, High-Density Tool Matrix (One-line role each, No decorative cards) */}
        <div className="mb-8 sm:mb-10 lg:mb-12 divide-y divide-slate-100 rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
          {aiToolsList.map((tool) => (
            <div
              key={tool.name}
              className="p-3.5 sm:p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-3 hover:bg-slate-50/80 transition-colors"
            >
              {/* Tool identity */}
              <div className="flex items-center gap-3.5 md:w-1/3 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                  {getToolIcon(tool.icon)}
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base text-slate-900 font-display">
                    {tool.name}
                  </div>
                  <div className="font-mono text-[11px] text-indigo-600 font-medium">
                    {isBn ? tool.categoryBn : tool.categoryEn}
                  </div>
                </div>
              </div>

              {/* One-line role */}
              <div className="text-xs sm:text-sm text-slate-600 md:w-1/2 leading-relaxed">
                {isBn ? tool.roleBn : tool.roleEn}
              </div>

              {/* Tag badge */}
              <div className="md:w-1/6 flex md:justify-end shrink-0">
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
                  {tool.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* The Disciplined Vibe Coding Methodology (Clean Comparison Split) */}
        <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-indigo-600 uppercase font-bold tracking-wider">
              {isBn ? "পদ্ধতিগত পার্থক্য" : "Methodology Difference"}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              {isBn
                ? "কেন অপরিকল্পিত এআই কোডিং ক্র্যাশ করে বনাম ইঞ্জিনিয়ারিং অ্যাপ্রোচ"
                : "Why Unsupervised AI Coding Fails vs How Senior Engineers Direct It"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* The Pitfall */}
            <div className="p-5 rounded-xl bg-red-50/80 border border-red-200 space-y-3">
              <div className="flex items-center gap-2 text-red-700 font-mono text-xs font-bold uppercase">
                <ShieldAlert className="w-4 h-4 shrink-0 text-red-600" />
                <span>{isBn ? "সাধারণ শিক্ষানবিশের ভুল" : "The Common Beginner Trap"}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>{isBn ? "সম্পূর্ণ কোডবেসের আর্কিটেকচার না বুঝে বড় প্রম্পট দেওয়া" : "Generating huge files without clear architectural boundary rules"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>{isBn ? "হ্যালুসিনেশন করা কোড অন্ধভাবে প্রোডাকশনে পুশ করা" : "Blindly pasting AI hallucinations into production without verification"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>{isBn ? "ডিবাগ করতে না পেরে প্রজেক্ট পরিত্যাগ করা" : "Inability to trace TypeScript and SSR runtime errors when things break"}</span>
                </li>
              </ul>
            </div>

            {/* The Engineering Standard */}
            <div className="p-5 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{isBn ? "আমাদের ডিসিপ্লিন্ড মেথডোলজি" : "Our Production Discipline"}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{isBn ? ".cursorrules ও টাইপস্ক্রিপ্ট ফ্রেমওয়ার্ক দিয়ে স্পষ্ট গাইডলাইন" : "Setting strict rules with .cursorrules, linter contracts & types"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{isBn ? "এআই শুধু কোড লিখবে, কিন্তু আর্কিটেকচারাল লিড হিসেবে আপনি সিদ্ধান্ত নেবেন" : "Directing the model like a technical lead reviewing pull requests"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{isBn ? "৫ থেকে ১০ গুণ দ্রুত প্রোডাক্ট লঞ্চ এবং নিরাপদ রক্ষণাবেক্ষণ" : "Shipping production SaaS 5x–10x faster with stable maintainability"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIToolsSection;
