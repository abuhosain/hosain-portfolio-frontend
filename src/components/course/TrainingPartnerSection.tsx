"use client";

import React from "react";
import {
  Building2,
  MapPin,
  ExternalLink,
  Facebook,
  Globe,
  Phone,
  CheckCircle2,
  Users,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Sparkles,
  Palette,
  Film,
  Target,
  Cpu,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { partnerInstituteData, enrollmentConfig } from "@/data/courseData";

interface TrainingPartnerSectionProps {
  lang: "bn" | "en";
}

export function TrainingPartnerSection({ lang }: TrainingPartnerSectionProps) {
  const isBn = lang === "bn";
  const { achievements, boguraBranch, otherCourses } = partnerInstituteData;

  const getAchievementIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Users className="w-6 h-6 text-emerald-800" />;
      case 1:
        return <TrendingUp className="w-6 h-6 text-emerald-800" />;
      case 2:
        return <Briefcase className="w-6 h-6 text-emerald-800" />;
      case 3:
      default:
        return <GraduationCap className="w-6 h-6 text-emerald-800" />;
    }
  };

  const getCourseIcon = (id: string) => {
    switch (id) {
      case "graphics-design":
        return <Palette className="w-5 h-5 text-indigo-600" />;
      case "ai-ad-making":
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case "video-editing":
        return <Film className="w-5 h-5 text-rose-600" />;
      case "digital-marketing":
        return <Target className="w-5 h-5 text-blue-600" />;
      case "ai-automation":
      default:
        return <Cpu className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section
      id="venue"
      className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-semibold">
              {isBn ? "// অফিশিয়াল ভেন্যু ও একাডেমি পার্টনার" : "// Official Training Venue & Partner"}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            {isBn ? (
              <>
                <span className="text-emerald-700">ই-লার্নিং অ্যান্ড আর্নিং লিমিটেড</span> বগুড়া শাখায় সরাসরি ক্লাস
              </>
            ) : (
              <>
                In-Person Classes at <span className="text-emerald-700">E-Learning &amp; Earning Ltd.</span> (Bogura Branch)
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-prose">
            {isBn
              ? "সারাদেশে ৬৫টিরও বেশি ব্রাঞ্চের সুবিশাল নেটওয়ার্ক নিয়ে প্রতিষ্ঠিত ই-লার্নিং অ্যান্ড আর্নিং লিমিটেড (E-LAE Ltd.)-এর বগুড়া সদর শাখায় পরিচালিত হবে আমাদের এই কোর্স। আধুনিক কম্পিউটার ল্যাব এবং সরাসরি মেন্টরের উপস্থিতিতে হাতে-কলমে প্র্যাকটিস করার সুযোগ।"
              : "With a nationwide network of over 65+ branches, E-Learning & Earning Ltd. (E-LAE Ltd.) hosts our specialized program at their Bogura Sadar Campus with high-spec lab workstations and direct in-person mentorship."}
          </p>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isBn ? partnerInstituteData.totalBranchesBn : partnerInstituteData.totalBranchesEn}</span>
            </span>

            <a
              href={partnerInstituteData.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition-colors border border-slate-200"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>e-laeltd.com</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* 1. Verified Achievement Stats (Green Cards matching user screenshot) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-10 sm:mb-12">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-br from-[#0B7D3B] via-[#08632E] to-[#044820] text-white p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center text-center shadow-md shadow-emerald-950/15 border border-emerald-600/30 hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-md mb-3 sm:mb-4 shrink-0">
                {getAchievementIcon(idx)}
              </div>

              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-display tracking-tight leading-tight">
                {item.count}
              </div>

              <div className="text-xs sm:text-sm font-semibold text-emerald-100 mt-1 leading-snug">
                {isBn ? item.labelBn : item.labelEn}
              </div>

              <p className="text-[10px] sm:text-[11px] text-emerald-200/90 mt-1 leading-tight hidden sm:block">
                {isBn ? item.descBn : item.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Bogura Branch Campus Details Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200/90 p-5 sm:p-7 lg:p-8 mb-12 sm:mb-14 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left: Location & Branch Specs (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                  {isBn ? "ক্লাস ভেন্যু ও ক্যাম্পাস" : "Live In-Person Venue"}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                {isBn ? boguraBranch.branchNameBn : boguraBranch.branchNameEn}
              </h3>

              <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase">
                    {isBn ? "সরাসরি ঠিকানা:" : "Physical Address:"}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5 leading-relaxed">
                    {isBn ? boguraBranch.locationBn : boguraBranch.locationEn}
                  </div>
                </div>
              </div>

              {/* Lab Highlights */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide">
                  {isBn ? "ক্যাম্পাস ও ল্যাব সুবিধাসমূহ:" : "Campus & Lab Facilities:"}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {(isBn ? boguraBranch.labHighlightsBn : boguraBranch.labHighlightsEn).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Connect & Actions Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                {isBn ? "ক্যাম্পাস ভিজিট ও যোগাযোগ" : "Campus Actions & Inquiries"}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {isBn
                  ? "সরাসরি অফিসে এসে কোর্স কাউন্সেলিং নিন অথবা ফেসবুক পেজ ও হেল্পলাইনে যোগাযোগ করে আপনার সিট নিশ্চিত করুন।"
                  : "Visit our Bogura campus for 1-on-1 career counseling or contact the branch team directly."}
              </p>

              <div className="space-y-2 pt-1">
                {/* Facebook Page Button */}
                <a
                  href={boguraBranch.facebookPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/15 text-[#1877F2] text-xs sm:text-sm font-bold transition-colors border border-[#1877F2]/20 min-h-[42px]"
                >
                  <span className="flex items-center gap-2">
                    <Facebook className="w-4 h-4" />
                    <span>{isBn ? "বগুড়া শাখা ফেসবুক পেজ" : "Bogura Branch Facebook"}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Official Website Button */}
                <a
                  href={partnerInstituteData.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold transition-colors border border-slate-200 min-h-[42px]"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-slate-600" />
                    <span>{isBn ? "ই-লার্নিং অফিসিয়াল ওয়েবসাইট" : "E-LAE Official Website"}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                {/* Google Maps Button */}
                <a
                  href={boguraBranch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs sm:text-sm font-semibold transition-colors border border-rose-200 min-h-[42px]"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rose-600" />
                    <span>{isBn ? "ম্যাপে লোকেশন দেখুন" : "View on Google Maps"}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-rose-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Other In-Demand Courses Available at Bogura Branch */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-semibold">
                {isBn ? "// বগুড়া ক্যাম্পাসে অন্যান্য কোর্স" : "// More Programs at Bogura Branch"}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
              {isBn
                ? "বগুড়া শাখায় আরও যেসব প্রফেশনাল কোর্সে ভর্তি হতে পারবেন"
                : "Other In-Demand IT Programs at E-LAE Bogura Branch"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isBn
                ? "আমাদের AI-ভিত্তিক ওয়েব ডেভেলপমেন্ট ছাড়াও ই-লার্নিং অ্যান্ড আর্নিং লিমিটেড বগুড়া ব্রাঞ্চে সরাসরি ক্লাসরুমে এই শীর্ষস্থানীয় ফ্রিল্যান্সিং স্কিলগুলো শেখানো হয়:"
                : "Along with modern Web Engineering, E-LAE Bogura Branch provides in-person classroom training for these high-earning digital careers:"}
            </p>
          </div>

          {/* 5 Course Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {otherCourses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-500/30 transition-all duration-200 shadow-sm hover:shadow-md group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getCourseIcon(course.id)}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {isBn ? course.badgeBn : course.badgeEn}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      {isBn ? course.categoryBn : course.categoryEn}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors mt-0.5">
                      {isBn ? course.titleBn : course.titleEn}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isBn ? course.descriptionBn : course.descriptionEn}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide block mb-1">
                      {isBn ? "কভার্ড টুলস:" : "Core Toolchain:"}
                    </span>
                    <p className="text-[11px] font-mono text-indigo-700 leading-normal font-medium">
                      {isBn ? course.skillsBn : course.skillsEn}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100">
                  <a
                    href={boguraBranch.facebookPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 hover:text-indigo-600 transition-colors group/link"
                  >
                    <span>{isBn ? "বগুড়া শাখায় বিস্তারিত জানুন" : "Inquire at Bogura Branch"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}

            {/* Quick Consultation Promo Card */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-200/80 shadow-sm">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-indigo-600 uppercase tracking-wider block font-bold">
                    {isBn ? "সরাসরি ক্যারিয়ার কাউন্সেলিং" : "Career Counseling"}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 font-display mt-0.5">
                    {isBn ? "কোন কোর্সটি আপনার জন্য পারফেক্ট?" : "Need Help Choosing a Track?"}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isBn
                    ? "সরাসরি বগুড়া সুবর্ণা টাওয়ারের ব্রাঞ্চে এসে মেন্টর ও ক্যারিয়ার কাউন্সেলরদের সাথে কথা বলে নিজের আগ্রহ অনুযায়ী সঠিক কোর্স বেছে নিন।"
                    : "Visit our Subarna Tower Bogura campus in person to consult with our mentors and find the ideal tech career path for you."}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-indigo-100">
                <a
                  href={enrollmentConfig.whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm shadow-indigo-600/20"
                >
                  <span>{isBn ? "কাউন্সেলিং হেল্পলাইন (WhatsApp)" : "WhatsApp Counseling"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainingPartnerSection;
