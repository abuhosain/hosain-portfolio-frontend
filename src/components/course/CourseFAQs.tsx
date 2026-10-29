"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { courseFAQs, enrollmentConfig } from "@/data/courseData";

interface CourseFAQsProps {
  lang: "bn" | "en";
}

export function CourseFAQs({ lang }: CourseFAQsProps) {
  const isBn = lang === "bn";
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            <span className="font-mono text-xs text-indigo-700 uppercase tracking-wider font-semibold">
              {isBn ? "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী" : "Frequently Asked Questions"}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            {isBn ? "আপনার কি কোনো প্রশ্ন রয়েছে?" : "Have Questions Before Enrolling?"}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            {isBn
              ? "কোর্স কারিকুলাম, ভাইব কোডিং, সার্ভার ডিপ্লয়মেন্ট এবং ক্লাস শিডিউল সম্পর্কিত প্রয়োজনীয় সকল উত্তর নিচে দেওয়া হলো।"
              : "Here are clear, transparent answers regarding prerequisites, AI vibe coding, Linux cloud servers, and course logistics."}
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3.5">
          {courseFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-100/60 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                    {isBn ? faq.questionBn : faq.questionEn}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-600 bg-indigo-50 border-indigo-200" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 font-normal">
                    {isBn ? faq.answerBn : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="font-bold text-sm text-slate-900 flex items-center justify-center sm:justify-start gap-2">
              <MessageSquare className="w-4 h-4 text-indigo-600" />
              <span>{isBn ? "আরও কিছু জানতে চান?" : "Still have more questions?"}</span>
            </div>
            <p className="text-xs text-slate-600">
              {isBn
                ? "সরাসরি আবু হোসাইনের সাথে হোয়াটসঅ্যাপে কথা বলে আপনার প্রশ্নের উত্তর নিন।"
                : "Message Abu Hosain directly on WhatsApp for personal guidance."}
            </p>
          </div>
          <a
            href={enrollmentConfig.whatsappContactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-2xs transition-colors shrink-0"
          >
            {isBn ? "হোয়াটসঅ্যাপে প্রশ্ন করুন" : "Chat on WhatsApp"}
          </a>
        </div>
      </div>
    </section>
  );
}
