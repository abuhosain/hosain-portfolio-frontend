"use client";

import React from "react";
import {
  ArrowRight,
  Calendar,
} from "lucide-react";
import { enrollmentConfig } from "@/data/courseData";

interface CourseHeroProps {
  lang: "bn" | "en";
  onSelectLang?: (lang: "bn" | "en") => void;
}

export function CourseHero({ lang }: CourseHeroProps) {
  const isBn = lang === "bn";

  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 border-b border-slate-200/80 bg-[#F8FAFC] overflow-hidden">
      {/* 1. Top horizon glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent pointer-events-none" />

      {/* 2. Ambient multi-layer depth lighting (Indigo, Sky & Emerald) */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-indigo-500/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-blue-500/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-12 right-10 w-[320px] h-[260px] bg-emerald-500/[0.04] rounded-full blur-[130px] pointer-events-none" />

      {/* 3. Developer dot-matrix engineering grid with radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.20) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 36%, black 35%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 36%, black 35%, transparent 100%)",
        }}
      />

      {/* 4. Subtle engineering coordinate marks on desktop */}
      <div className="hidden xl:block absolute top-16 left-12 text-slate-400 font-mono text-[10px] tracking-wider select-none pointer-events-none">
        + COHORT // 01
      </div>
      <div className="hidden xl:block absolute top-16 right-12 text-slate-400 font-mono text-[10px] tracking-wider select-none pointer-events-none">
        EDITION // 2026
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* 3-Column Flanking Hero Layout: Left Spec Card, Center Hero, Right Cohort Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-center">
          {/* Left Flanking Card: Program Spec */}
          <div className="order-2 lg:order-1 lg:col-span-3 max-w-sm mx-auto lg:max-w-none w-full">
            <div className="rounded-xl bg-white border border-slate-200/90 hover:border-indigo-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md p-3.5 sm:p-4 transition-all duration-200 text-left space-y-2.5 sm:space-y-3">
              {/* Card Micro-Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {isBn ? "প্রোগ্রাম কাঠামো" : "PROGRAM SPEC"}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                  {isBn ? "১২ সপ্তাহ" : "12 WEEKS"}
                </span>
              </div>

              {/* Title & Micro Summary */}
              <div>
                <h2 className="font-display font-semibold text-xs sm:text-sm text-slate-900 tracking-tight leading-snug">
                  {isBn ? "৩ মাসের স্পেশালাইজড মেন্টরশিপ" : "3-Month Intensive Mentorship"}
                </h2>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  {isBn
                    ? "লাইভ সেশন, স্থায়ী ভিডিও আর্কাইভ ও বাস্তব আর্কিটেকচার।"
                    : "Live interactive sessions, permanent HD archives, and production architecture."}
                </p>
              </div>

              {/* High-density Specs Table */}
              <div className="pt-1 border-t border-slate-100 space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between py-0.5">
                  <span className="text-slate-500">{isBn ? "ক্লাস ভেন্যু" : "Venue"}</span>
                  <span className="text-emerald-700 font-semibold">{isBn ? "E-LAE বগুড়া শাখা" : "E-LAE Bogura"}</span>
                </div>
                <div className="flex items-center justify-between py-0.5">
                  <span className="text-slate-500">{isBn ? "ফরম্যাট" : "Format"}</span>
                  <span className="text-slate-800 font-medium">{isBn ? "ল্যাব কোডিং + অনলাইন" : "Lab Coding + Live"}</span>
                </div>
                <div className="flex items-center justify-between py-0.5">
                  <span className="text-slate-500">{isBn ? "প্রজেক্ট" : "Projects"}</span>
                  <span className="text-slate-800 font-medium">{isBn ? "৪টি প্রোডাকশন প্ল্যাটফর্ম" : "4 Production Platforms"}</span>
                </div>
                <div className="flex items-center justify-between py-0.5">
                  <span className="text-slate-500">{isBn ? "স্ট্যান্ডার্ড" : "Standard"}</span>
                  <span className="text-indigo-600 font-semibold">{isBn ? "১০০% প্রোডাকশন কোড" : "100% Production Grade"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Grand Headline, Narrative & CTAs */}
          <div className="order-1 lg:order-2 lg:col-span-6 text-center space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Campus & Venue Badge */}
            <div className="flex items-center justify-center">
              <a
                href="#venue"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-semibold bg-emerald-50 hover:bg-emerald-100/90 text-emerald-800 border border-emerald-200 transition-all shadow-xs group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>
                  {isBn
                    ? "সরাসরি ক্লাস: ই-লার্নিং অ্যান্ড আর্নিং লিঃ (বগুড়া শাখা, সুবর্ণা টাওয়ার)"
                    : "In-Person Classes: E-LAE Ltd (Bogura Branch, Subarna Tower)"}
                </span>
                <span className="text-emerald-600 transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] font-display">
              {isBn ? (
                <>
                  AI-ভিত্তিক ওয়েব ডেভেলপমেন্ট শিখুন।<br />
                  <span className="text-indigo-600">আধুনিক SaaS লঞ্চ করুন</span> ও ক্লায়েন্ট বিজনেসে এগিয়ে থাকুন।
                </>
              ) : (
                <>
                  Learn Modern Web Development with AI.<br />
                  <span className="text-indigo-600">Build Real Web Apps</span>{" "}&amp; Get Paying Clients.
                </>
              )}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
              {isBn ? (
                <>
                  ১২ সপ্তাহের একটি নিবিড় ও বাস্তবমুখী পূর্ণাঙ্গ ইঞ্জিনিয়ারিং কোর্স।
                  আধুনিক HTML, CSS, JavaScript, Tailwind, React 19 এবং Next.js-এর সাথে Cursor, Google Antigravity ও Claude দিয়ে ৪টি প্রোডাকশন প্ল্যাটফর্ম তৈরি, Vercel-এ লাইভ ক্লাউড ডিপ্লয়মেন্ট এবং আন্তর্জাতিক ক্লায়েন্ট ডিলিংয়ের বাস্তব কৌশল।
                </>
              ) : (
                <>
                  A 12-week intensive, hands-on engineering mentorship. Master modern HTML, CSS, JavaScript, React 19, and Next.js 16 alongside Cursor, Google Antigravity, and Claude. Zero toy clones—engineer 4 production platforms, deploy to Vercel edge with custom domains, and master real client business.
                </>
              )}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <a
                href={enrollmentConfig.directEnrollUrl}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm md:text-base font-bold transition-all shadow-md shadow-indigo-600/25 active:scale-[0.98] group min-h-[44px] sm:min-h-[48px]"
              >
                <span>{isBn ? "ভর্তি আবেদন করুন" : "Apply for Enrollment"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs sm:text-sm md:text-base font-medium transition-all shadow-sm min-h-[44px] sm:min-h-[48px]"
              >
                <Calendar className="w-4 h-4 text-indigo-600" />
                <span>{isBn ? "কারিকুলাম দেখুন" : "View Curriculum"}</span>
              </a>
            </div>

            {/* Center Trust Tagline */}
            <p className="text-[11px] sm:text-xs text-slate-500 font-mono">
              {isBn
                ? "✓ সরাসরি ১-অন-১ কোড রিভিউ · প্রতি ব্যাচে সীমিত ১৫টি আসন মাত্র"
                : "✓ Direct 1-on-1 code reviews · Only 15 seats available per cohort"}
            </p>
          </div>

          {/* Right Flanking Card: Only 15 Seats / Cohort Status */}
          <div className="order-3 lg:order-3 lg:col-span-3 max-w-sm mx-auto lg:max-w-none w-full">
            <div className="rounded-xl bg-white border border-slate-200/90 hover:border-emerald-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md p-3.5 sm:p-4 transition-all duration-200 text-left space-y-2.5 sm:space-y-3">
              {/* Card Micro-Header with live pulse */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600 font-medium">
                    {isBn ? "১ম ব্যাচ এডমিশন" : "COHORT 01"}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium">
                  {isBn ? "লাইভ" : "ACTIVE"}
                </span>
              </div>

              {/* Title & Seat Count */}
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="font-display font-semibold text-xs sm:text-sm text-slate-900 tracking-tight leading-snug">
                    {isBn ? "সীমিত আসন সংখ্যা" : "Cohort Capacity"}
                  </h2>
                  <span className="text-xs font-bold text-emerald-600 font-mono shrink-0">
                    {isBn ? "১৫টি আসন" : "15 Seats"}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  {isBn
                    ? "ব্যক্তিগত মেন্টরিং ও কোড রিভিউ বজায় রাখতে আসন কঠোরভাবে সীমিত।"
                    : "Strictly capped to guarantee direct 1-on-1 code reviews."}
                </p>
              </div>

              {/* High-density Specs Table */}
              <div className="pt-1 border-t border-slate-100 space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between py-0.5">
                  <span className="text-slate-500">{isBn ? "ভর্তি নীতি" : "Policy"}</span>
                  <span className="text-slate-800 font-medium">{isBn ? "আগে আসলে আগে পাবেন" : "First-Come Basis"}</span>
                </div>
                <div className="flex items-center justify-between py-0.5">
                  <span className="text-slate-500">{isBn ? "মেন্টরিং" : "Mentoring"}</span>
                  <span className="text-slate-800 font-medium">{isBn ? "সরাসরি ১-অন-১ রিভিউ" : "Direct 1-on-1"}</span>
                </div>
                <div className="flex items-center justify-between py-0.5">
                  <span className="text-slate-500">{isBn ? "ক্যাম্পাস" : "Campus"}</span>
                  <span className="text-slate-800 font-medium">{isBn ? "সুবর্ণা টাওয়ার, বগুড়া" : "Subarna Tower, Bogura"}</span>
                </div>
                <div className="pt-1">
                  <a
                    href={enrollmentConfig.directEnrollUrl}
                    className="flex items-center justify-between text-[11px] font-mono text-emerald-700 hover:text-emerald-800 font-semibold transition-colors group"
                  >
                    <span>{isBn ? "সিট বুক করতে আবেদন করুন" : "Claim Your Seat Now"}</span>
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Scannable Spec Strip (4 Key Metrics) */}
        <div className="mt-8 pt-6 sm:mt-10 sm:pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
              {isBn ? "সময়কাল" : "Duration"}
            </span>
            <div className="text-xs sm:text-sm md:text-base font-bold text-slate-900 font-display">
              {isBn ? "৩ মাস (১২ সপ্তাহ)" : "3 Months (12 Weeks)"}
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500">
              {isBn ? "সাপ্তাহিক লাইভ ক্লাস + অ্যাসাইনমেন্ট" : "Weekly live classes + projects"}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
              {isBn ? "AI টুলচেইন" : "AI Stack"}
            </span>
            <div className="text-xs sm:text-sm md:text-base font-bold text-slate-900 font-display">
              Cursor &amp; Antigravity
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500">
              {isBn ? "Claude 3.7 & v0 মেথডোলজি" : "Claude 3.7 & v0 workflows"}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
              {isBn ? "পোর্টফোলিও" : "Live Projects"}
            </span>
            <div className="text-xs sm:text-sm md:text-base font-bold text-slate-900 font-display">
              {isBn ? "৪টি প্রোডাকশন প্ল্যাটফর্ম" : "4 Production Platforms"}
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500">
              {isBn ? "SaaS, ই-কমার্স, ব্র্যান্ড ও ক্লাউড" : "SaaS, Commerce, Brand & Cloud"}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
              {isBn ? "ক্লাউড ও ক্লায়েন্ট" : "Cloud & Business"}
            </span>
            <div className="text-xs sm:text-sm md:text-base font-bold text-slate-900 font-display">
              Vercel &amp; Retainers
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500">
              {isBn ? "CI/CD, DNS ও রিটেইনার ডিলিং" : "CI/CD, DNS & Client Retainers"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseHero;
