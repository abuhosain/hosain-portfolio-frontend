"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, MessageCircle, Mail, ShieldCheck, CheckCircle2 } from "lucide-react";
import { enrollmentConfig, mentorInfo } from "@/data/courseData";

interface EnrollmentCTAProps {
  lang: "bn" | "en";
}

export function EnrollmentCTA({ lang }: EnrollmentCTAProps) {
  const isBn = lang === "bn";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("beginner");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    // Construct direct WhatsApp message with user details
    const text = encodeURIComponent(
      `Hello Abu Hosain! I want to enroll in the AI-Based Web Design & Development course.\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nBackground: ${experienceLevel}`
    );
    const waUrl = `https://wa.me/8801319539510?text=${text}`;

    setSubmitted(true);
    // Open WhatsApp in new tab for direct seat confirmation
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="enroll-now" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-[#F8FAFC] relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-8 lg:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          {/* Subtle ambient accent glow inside card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl -z-0 pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 max-w-2xl mb-6 sm:mb-8 space-y-2.5 sm:space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>{isBn ? "সীমিত আসন · ১ম ব্যাচে ভর্তি" : "Limited Seats · Admissions Open"}</span>
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-display">
              {isBn
                ? "আপনার ডেভেলপার ক্যারিয়ারকে নতুন উচ্চতায় নিয়ে যান।"
                : "Transform from a Coder to a Full-Stack Product Engineer."}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              {isBn
                ? "৩ মাসে শিখুন বাস্তবমুখী টেকনোলজি, কাটিং-এজ AI ভাইব কোডিং এবং আন্তর্জাতিক ফ্রিল্যান্সিং। নিচে ফর্মটি পূরণ করে অথবা সরাসরি হোয়াটসঅ্যাপে মেসেজ পাঠিয়ে আপনার সিট কনফার্ম করুন।"
                : "Master production web technologies, cutting-edge AI vibe coding, and international client workflows in 3 intensive months. Submit the quick form below or message directly via WhatsApp."}
            </p>
          </div>

          {/* Quick Form & Direct Channel Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left: Quick Form (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-4 sm:p-6 lg:p-7 shadow-2xs">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    {isBn ? "আবেদন সফলভাবে গ্রহণ করা হয়েছে!" : "Application Submitted!"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {isBn
                      ? "আপনার তথ্যের ভিত্তিতে হোয়াটসঅ্যাপ মেসেজ উইন্ডো ওপেন হয়েছে। দ্রুত সিট নিশ্চিত করতে সরাসরি মেসেজটি পাঠিয়ে দিন।"
                      : "A WhatsApp chat has opened with your details. Send the message to complete your seat registration immediately."}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-indigo-600 underline underline-offset-4 hover:text-indigo-800 pt-2 font-medium"
                  >
                    {isBn ? "অন্য ফর্ম পূরণ করতে চান?" : "Submit another response"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-700 font-semibold" htmlFor="fullName">
                      {isBn ? "আপনার পুরো নাম *" : "Full Name *"}
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isBn ? "যেমন: মোহাম্মদ রহিম" : "e.g. John Doe"}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-700 font-semibold" htmlFor="email">
                        {isBn ? "ইমেইল অ্যাড্রেস *" : "Email Address *"}
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-700 font-semibold" htmlFor="phone">
                        {isBn ? "ফোন / হোয়াটসঅ্যাপ নম্বর" : "Phone / WhatsApp"}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+880 1..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-700 font-semibold" htmlFor="expLevel">
                      {isBn ? "আপনার বর্তমান অভিজ্ঞতা" : "Your Current Coding Level"}
                    </label>
                    <select
                      id="expLevel"
                      value={experienceLevel}
                      onChange={(e) => setExperienceLevel(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                    >
                      <option value="beginner">
                        {isBn ? "বিগিনার (বেসিক ধারণা আছে বা নতুন)" : "Beginner (New or minimal experience)"}
                      </option>
                      <option value="intermediate">
                        {isBn ? "ইন্টারমিডিয়েট (HTML/CSS/JS জানি, Next.js ও AI শিখতে চাই)" : "Intermediate (Know HTML/CSS/JS, want Next.js & AI)"}
                      </option>
                      <option value="developer">
                        {isBn ? "ওয়ার্কিং ডেভেলপার (SaaS, ক্লাউড ও ক্লায়েন্ট স্কেলিং চাই)" : "Working Developer (Want SaaS, Cloud & Business scaling)"}
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/30 active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span>{isBn ? "আবেদন পাঠান ও সিট কনফার্ম করুন" : "Submit & Reserve via WhatsApp"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Direct Contacts & Batch Guarantees (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Batch Guarantee Box */}
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-3">
                <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                  {isBn ? "ব্যাচ স্পেসিফিকেশন:" : "Batch Details:"}
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-200/80">
                    <span className="text-slate-500">{isBn ? "সময়সীমা:" : "Duration:"}</span>
                    <span className="font-semibold text-slate-900">
                      {isBn ? enrollmentConfig.batchInfo.durationBn : enrollmentConfig.batchInfo.durationEn}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/80">
                    <span className="text-slate-500">{isBn ? "ক্লাস ফরম্যাট:" : "Format:"}</span>
                    <span className="font-semibold text-slate-900">
                      {isBn ? enrollmentConfig.batchInfo.modeBn : enrollmentConfig.batchInfo.modeEn}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/80">
                    <span className="text-slate-500">{isBn ? "সর্বোচ্চ সিট:" : "Seats Limit:"}</span>
                    <span className="font-semibold text-emerald-600">
                      {isBn ? `${enrollmentConfig.batchInfo.seatsLimit} জন (সীমিত ব্যাচ)` : `${enrollmentConfig.batchInfo.seatsLimit} Seats Cap`}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">{isBn ? "সাপোর্ট:" : "Support:"}</span>
                    <span className="font-semibold text-slate-900">
                      {isBn ? enrollmentConfig.batchInfo.supportBn : enrollmentConfig.batchInfo.supportEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-2.5">
                <a
                  href={enrollmentConfig.whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-semibold text-xs flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>{isBn ? "হোয়াটসঅ্যাপে সরাসরি কথা বলুন" : "Message Direct on WhatsApp"}</span>
                  </span>
                  <span className="font-mono text-[11px] text-emerald-700 font-medium">
                    {enrollmentConfig.whatsappPhoneFormatted}
                  </span>
                </a>

                <a
                  href={`mailto:${enrollmentConfig.contactEmail}?subject=Course%20Admission%20Inquiry%20-%20AI%20Based%20Web%20Design%20and%20Development`}
                  className="w-full p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-medium text-xs flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-indigo-600" />
                    <span>{isBn ? "ইমেইলে যোগাযোগ করুন" : "Send Official Email"}</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">
                    {enrollmentConfig.contactEmail}
                  </span>
                </a>
              </div>

              {/* Verified Instructor Guarantee */}
              <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500 font-mono">
                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>
                  {isBn
                    ? "আবু হোসাইন কর্তৃক সরাসরি পরিচালিত মেন্টরশিপ"
                    : "Direct mentorship led by Abu Hosain (Founder, NeexG & Systomex)"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
