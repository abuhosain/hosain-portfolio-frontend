"use client";

import React, { useState } from "react";
import { Calendar, CheckCircle2, ChevronRight, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { curriculumMonths } from "@/data/courseData";

interface CourseCurriculumProps {
  lang: "bn" | "en";
}

export function CourseCurriculum({ lang }: CourseCurriculumProps) {
  const isBn = lang === "bn";
  const [activeMonthIdx, setActiveMonthIdx] = useState(0);

  const activeMonth = curriculumMonths[activeMonthIdx];

  // Switch month and smoothly scroll to the top of curriculum active month
  const handleSelectMonth = (idx: number, shouldScroll = true) => {
    setActiveMonthIdx(idx);
    if (shouldScroll) {
      setTimeout(() => {
        const target = document.getElementById("curriculum-active-month") || document.getElementById("curriculum");
        if (target) {
          const headerOffset = 76; // offset for sticky navigation header
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 25);
    }
  };

  return (
    <section id="curriculum" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-7 sm:mb-9 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-semibold">
              {isBn ? "// ৩ মাসের বিশদ কারিকুলাম" : "// 3-Month Detailed Curriculum"}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            {isBn
              ? "১২ সপ্তাহের ধাপে ধাপে বাস্তবমুখী রোডম্যাপ"
              : "A Rigorous, 12-Week Production-First Roadmap"}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-prose">
            {isBn
              ? "বেসিক HTML/CSS থেকে শুরু করে আধুনিক জাভাস্ক্রিপ্ট, রিঅ্যাক্ট ১৯, নেক্সট জেএস অ্যাপ রাউটার, AI ভাইব কোডিং, ব্যাকএন্ড ডেটাবেস, Vercel ক্লাউড ডিপ্লয়মেন্ট এবং আন্তর্জাতিক ক্লায়েন্ট হ্যান্ডলিং—প্রতিটি সপ্তাহের রয়েছে নির্দিষ্ট প্র্যাকটিক্যাল ডেলিভারেবল।"
              : "From semantic fundamentals to React 19, Next.js App Router, AI-driven Vibe Coding, full-stack database architectures, Vercel cloud deployment, and international client acquisition."}
          </p>
        </div>

        {/* Responsive Month Selector Tabs (3 Equal Columns on Mobile & Desktop) */}
        <div className="w-full mb-6 sm:mb-8">
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-inner">
            {curriculumMonths.map((month, idx) => {
              const isActive = activeMonthIdx === idx;
              const weekLabelBn = idx === 0 ? "সপ্তাহ ০১-০৪" : idx === 1 ? "সপ্তাহ ০৫-০৮" : "সপ্তাহ ০৯-১২";
              const weekLabelEn = idx === 0 ? "Weeks 01-04" : idx === 1 ? "Weeks 05-08" : "Weeks 09-12";
              const titleShortBn = idx === 0 ? "বেসিক & JS" : idx === 1 ? "ফুল-স্ট্যাক AI" : "লঞ্চ & SaaS";
              const titleShortEn = idx === 0 ? "Foundations" : idx === 1 ? "Full-Stack AI" : "Launch & SaaS";

              return (
                <button
                  key={month.monthNumber}
                  type="button"
                  onClick={() => handleSelectMonth(idx, false)}
                  className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2.5 px-2 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-200 min-h-[50px] sm:min-h-[46px] text-center sm:text-left ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20 font-bold"
                      : "bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200/60 font-semibold"
                  }`}
                >
                  <Calendar className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? "text-white" : "text-indigo-600"}`} />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-sm leading-tight truncate">
                      {isBn ? `মাস ${month.monthNumber}` : `Month ${month.monthNumber}`}
                      <span className="hidden md:inline font-normal opacity-90">
                        : {isBn ? titleShortBn : titleShortEn}
                      </span>
                    </span>
                    <span className={`text-[10px] sm:text-[11px] font-mono leading-tight ${isActive ? "text-indigo-100" : "text-slate-500"}`}>
                      {isBn ? weekLabelBn : weekLabelEn}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Month Header Banner with Anchor for Smooth Scroll */}
        <div
          id="curriculum-active-month"
          className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm mb-6 sm:mb-8 space-y-2.5 sm:space-y-3 relative overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold"
                style={{
                  backgroundColor: `${activeMonth.accentColor}15`,
                  color: activeMonth.accentColor,
                  border: `1px solid ${activeMonth.accentColor}30`,
                }}
              >
                {isBn ? activeMonth.badgeBn : activeMonth.badgeEn}
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                {activeMonth.monthNumber === 1 && (isBn ? "সপ্তাহ ০১ - ০৪" : "Weeks 01 - 04")}
                {activeMonth.monthNumber === 2 && (isBn ? "সপ্তাহ ০৫ - ০৮ (Week 5 Start)" : "Weeks 05 - 08 (Week 5 Start)")}
                {activeMonth.monthNumber === 3 && (isBn ? "সপ্তাহ ০৯ - ১২ (Week 9 Start)" : "Weeks 09 - 12 (Week 9 Start)")}
              </span>
            </div>

            <span className="text-[11px] font-mono text-indigo-700 font-semibold bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
              {isBn ? "৪টি নিবিড় প্র্যাকটিক্যাল সপ্তাহ" : "4 Practical Sprints"}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 font-display">
            {isBn ? activeMonth.titleBn : activeMonth.titleEn}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            {isBn ? activeMonth.taglineBn : activeMonth.taglineEn}
          </p>
        </div>

        {/* 4 Weeks Grid for Active Month */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {activeMonth.weeks.map((week) => (
            <div
              key={week.weekNumber}
              className="flex flex-col justify-between p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-500/30 transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <div className="space-y-4">
                {/* Week Header */}
                <div className="flex items-center justify-between gap-3">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-100 border border-slate-200 text-slate-800">
                    {isBn ? `সপ্তাহ ০${week.weekNumber}` : `Week 0${week.weekNumber}`}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {isBn ? "লাইভ সেশন ও অ্যাসাইনমেন্ট" : "Live Session & Code"}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                    {isBn ? week.titleBn : week.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isBn ? week.summaryBn : week.summaryEn}
                  </p>
                </div>

                {/* Topics Bullet List */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide">
                    {isBn ? "কোর টপিকস:" : "Core Topics Covered:"}
                  </div>
                  <ul className="space-y-1.5">
                    {(isBn ? week.topicsBn : week.topicsEn).map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Weekly Outcome Box */}
              <div className="mt-6 pt-4 border-t border-slate-100 bg-emerald-50/60 p-3 rounded-xl border border-emerald-200/70">
                <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-mono font-bold mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                  <span>{isBn ? "এই সপ্তাহের ফলাফল:" : "Weekly Milestone Deliverable:"}</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {isBn ? week.outcomeBn : week.outcomeEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Quick Month Switcher & Auto-Scroll Navigation Footer */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
          {/* Status & Month Selector Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 font-display">
                {isBn
                  ? `বর্তমান ভিউ: মাস ${activeMonth.monthNumber} (${activeMonth.monthNumber === 1 ? "সপ্তাহ ০১-০৪" : activeMonth.monthNumber === 2 ? "সপ্তাহ ০৫-০৮" : "সপ্তাহ ০৯-১২"})`
                  : `Currently Viewing: Month ${activeMonth.monthNumber} (${activeMonth.monthNumber === 1 ? "Weeks 01-04" : activeMonth.monthNumber === 2 ? "Weeks 05-08" : "Weeks 09-12"})`}
              </span>
            </div>

            {/* Direct Month Jump Buttons [01] [02] [03] with Auto Scroll */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[11px] font-mono text-slate-400 mr-1 hidden xs:inline">
                {isBn ? "অন্য মাস দেখুন:" : "Jump to:"}
              </span>
              {curriculumMonths.map((_, idx) => {
                const isActive = activeMonthIdx === idx;
                const weekLabelBn = idx === 0 ? "সপ্তাহ ১-৪" : idx === 1 ? "সপ্তাহ ৫-৮" : "সপ্তাহ ৯-১২";
                const weekLabelEn = idx === 0 ? "W 01-04" : idx === 1 ? "W 05-08" : "W 09-12";

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectMonth(idx, true)}
                    aria-label={isBn ? `মাস ${idx + 1} (${weekLabelBn}) দেখুন` : `View Month ${idx + 1} (${weekLabelEn})`}
                    className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-mono font-bold transition-all min-h-[38px] ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-500/20"
                        : "bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 border border-slate-200"
                    }`}
                  >
                    <span>0{idx + 1}</span>
                    <span className="hidden sm:inline text-[11px] font-normal opacity-90">
                      {isBn ? `(${weekLabelBn})` : `(${weekLabelEn})`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Previous / Next Action Buttons with Auto Scroll to Starting Week */}
          <div className="flex items-center justify-between gap-3 pt-1">
            {activeMonthIdx > 0 ? (
              <button
                type="button"
                onClick={() => handleSelectMonth(activeMonthIdx - 1, true)}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-semibold transition-all border border-slate-200 min-h-[40px]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>
                  {isBn
                    ? `পূর্ববর্তী: মাস ${activeMonthIdx} (${activeMonthIdx === 1 ? "সপ্তাহ ০১-০৪" : "সপ্তাহ ০৫-০৮"})`
                    : `Previous: Month ${activeMonthIdx}`}
                </span>
              </button>
            ) : (
              <span />
            )}

            {activeMonthIdx < curriculumMonths.length - 1 ? (
              <button
                type="button"
                onClick={() => handleSelectMonth(activeMonthIdx + 1, true)}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold transition-all shadow-sm shadow-indigo-600/20 active:scale-[0.98] min-h-[40px] ml-auto"
              >
                <span>
                  {isBn
                    ? `পরবর্তী: মাস ${activeMonthIdx + 2} দেখুন (${activeMonthIdx + 1 === 1 ? "সপ্তাহ ০৫-০৮ শুরু" : "সপ্তাহ ০৯-১২ শুরু"})`
                    : `Next: Month ${activeMonthIdx + 2}`}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <a
                href="#enroll-now"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all shadow-sm shadow-emerald-600/20 active:scale-[0.98] min-h-[40px] ml-auto"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isBn ? "কোর্সে ভর্তি আবেদন করুন" : "Apply for Enrollment"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseCurriculum;
