"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, Globe, ShoppingBag, ExternalLink, Mail, MessageCircle, Youtube, CheckCircle2 } from "lucide-react";
import { mentorInfo } from "@/data/courseData";

interface MentorSectionProps {
  lang: "bn" | "en";
}

export function MentorSection({ lang }: MentorSectionProps) {
  const isBn = lang === "bn";

  return (
    <section id="mentor" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-semibold">
              {isBn ? "// মেন্টর পরিচিতি" : "// Lead Instructor & Mentor"}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            {isBn
              ? "সরাসরি শিখুন একজন অ্যাক্টিভ প্রোডাক্ট ফাউন্ডারের কাছ থেকে।"
              : "Learn Directly from an Active Software Founder & Engineer."}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-prose">
            {isBn
              ? "যিনি নিজে প্রতিনিয়ত রিয়েল ক্লাউড সার্ভারে কোড ডিপ্লয় করেন, ক্লায়েন্টের জন্য SaaS আর্কিটেকচার বানান এবং ডিজিটাল প্রোডাক্ট এজেন্সি পরিচালনা করেন।"
              : "Learn from someone actively shipping production architectures, operating an engineering agency, and deploying live SaaS products daily."}
          </p>
        </div>

        {/* Mentor Profile Hero Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200/90 p-5 sm:p-7 lg:p-10 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start relative z-10">
            {/* Left: Photo & Quick Badges (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-2xl overflow-hidden border-2 border-white ring-4 ring-indigo-500/20 shadow-md shrink-0 group">
                <Image
                  src={mentorInfo.avatarImage}
                  alt={mentorInfo.name}
                  width={220}
                  height={220}
                  className="w-full h-full object-cover object-[center_28%] group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/95 text-emerald-700 border border-emerald-200 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Mentor
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900 font-display flex items-center justify-center lg:justify-start gap-2">
                  <span>{mentorInfo.name}</span>
                  <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
                </h3>
                <p className="text-xs font-mono text-indigo-600 font-semibold">
                  {isBn ? mentorInfo.titleBn : mentorInfo.titleEn}
                </p>
                <p className="text-[11px] font-mono text-slate-500">
                  {isBn ? mentorInfo.experienceSummaryBn : mentorInfo.experienceSummaryEn}
                </p>
              </div>

              {/* Direct Social & Agency Channels */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <a
                  href={mentorInfo.socials.neexg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>neexg.com</span>
                </a>
                <a
                  href={mentorInfo.socials.systomex || "https://systomex.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>systomex.com</span>
                </a>
                <a
                  href={mentorInfo.socials.oregent}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-amber-800 bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>oregent.com</span>
                </a>
                <a
                  href={mentorInfo.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 bg-white border border-slate-200 shadow-2xs transition-colors"
                  aria-label="YouTube Channel @hosainfo"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                </a>
                <a
                  href={mentorInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 bg-white border border-slate-200 shadow-2xs transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                </a>
                <a
                  href={`mailto:${mentorInfo.socials.email}`}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 bg-white border border-slate-200 shadow-2xs transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-indigo-600" />
                </a>
              </div>
            </div>

            {/* Right: Detailed Biography & Verified Credentials (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Natural Narrative Biography */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {(isBn ? mentorInfo.bioBn : mentorInfo.bioEn).map((paragraph, index) => (
                  <p key={index} className="text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Verified Credentials Grid */}
              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs font-mono font-semibold text-slate-900 uppercase tracking-wider mb-3">
                  {isBn ? "ভেরিফাইড অর্জন ও প্রাতিষ্ঠানিক পরিচয়:" : "Verified Credentials & Honors:"}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mentorInfo.credentials.map((cred, idx) => (
                    <a
                      key={idx}
                      href={cred.url}
                      target={cred.url.startsWith("http") ? "_blank" : undefined}
                      rel={cred.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="p-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-500/30 transition-all flex items-start gap-2.5 group shadow-2xs hover:shadow-sm"
                    >
                      <Award className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div className="min-w-0">
                        <div className="font-semibold text-xs text-slate-900 truncate group-hover:text-indigo-600 transition-colors">
                          {isBn ? cred.titleBn : cred.titleEn}
                        </div>
                        <div className="text-[11px] font-mono text-slate-500 truncate">
                          {isBn ? cred.orgBn : cred.orgEn}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mentorship Core Philosophy Quote */}
              <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-200 text-xs text-slate-700 leading-relaxed font-normal flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  {isBn ? (
                    <>
                      <strong>মেন্টরের অঙ্গীকার:</strong> &quot;আমি নিজে যেভাবে বাস্তব ক্লায়েন্টদের জন্য সফটওয়্যার তৈরি করি, আন্তর্জাতিক পুরস্কার পেয়েছি এবং প্রোডাক্ট লঞ্চ করেছি—ঠিক সেই প্র্যাকটিক্যাল জ্ঞানই শিক্ষার্থীদের শেখানো হবে। এখানে কোনো অপ্রয়োজনীয় বা মুখস্থ বিদ্যা নেই।&quot;
                    </>
                  ) : (
                    <>
                      <strong>Mentor&apos;s Commitment:</strong> &quot;I teach the exact workflows, architectural standards, and cloud tooling that I use to deliver for paying clients and operate my own ventures. Zero filler, zero fake promises — pure engineering craftsmanship.&quot;
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
