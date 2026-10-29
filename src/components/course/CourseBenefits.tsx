"use client";

import React from "react";
import { Video, UserCheck, FileCode, Sparkles, Briefcase, Users, Check } from "lucide-react";
import { studentBenefits } from "@/data/courseData";

interface CourseBenefitsProps {
  lang: "bn" | "en";
}

export function CourseBenefits({ lang }: CourseBenefitsProps) {
  const isBn = lang === "bn";

  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case "Video":
        return <Video className="w-5 h-5 text-blue-600" />;
      case "UserCheck":
        return <UserCheck className="w-5 h-5 text-emerald-600" />;
      case "FileCode":
        return <FileCode className="w-5 h-5 text-amber-600" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-indigo-600" />;
      default:
        return <Users className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="benefits" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-semibold">
              {isBn ? "// রিসোর্স ও স্টুডেন্ট বেনিফিট" : "// Practical Resources & Student Perks"}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            {isBn
              ? "যা যা রিসোর্স ও সাপোর্ট আপনি কোর্সে পাচ্ছেন।"
              : "Tangible Assets & Dedicated Support Provided to Every Student."}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-prose">
            {isBn
              ? "কোনো ফাঁকা প্রতিশ্রুতি নয়; কোর্স চলাকালীন এবং কোর্স শেষে আপনি যে যে রিয়েল কোডিং এসেটস, টেমপ্লেট এবং সরাসরি সাপোর্ট পাবেন তার তালিকা।"
              : "No unrealistic hype. Here are the concrete production starter kits, prompt libraries, proposal templates, and direct mentorship assets provided to help you succeed."}
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {studentBenefits.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-300 transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getBenefitIcon(item.icon)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200">
                    {isBn ? item.badgeBn : item.badgeEn}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                    {isBn ? item.titleBn : item.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {isBn ? item.descriptionBn : item.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-emerald-600 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>{isBn ? "কোর্স এনরোলমেন্টের সাথে অন্তর্ভূক্ত" : "Included with enrollment"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
