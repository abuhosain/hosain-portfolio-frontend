"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  ArrowUp,
  Globe,
  ShoppingBag,
  Youtube,
  Facebook,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { enrollmentConfig, mentorInfo } from "@/data/courseData";

interface CourseFooterProps {
  lang: "bn" | "en";
}

export function CourseFooter({ lang }: CourseFooterProps) {
  const isBn = lang === "bn";
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 py-10 sm:py-12 lg:py-14 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-10 border-b border-slate-200/80">
          {/* Brand & Course Summary (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              <span className="font-display font-extrabold text-lg text-slate-900 tracking-tight">
                Abu Hosain
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                Course Edition
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              {isBn ? (
                <>
                  <strong className="text-slate-900">AI-ভিত্তিক ওয়েব ডিজাইন ও ডেভেলপমেন্ট</strong> — আবু হোসাইন (ফাউন্ডার, NeexG ও Systomex)-এর ৩ মাসের বাস্তবমুখী ইঞ্জিনিয়ারিং মেন্টরশিপ।
                </>
              ) : (
                <>
                  <strong className="text-slate-900">AI-Based Web Design &amp; Development</strong> — A 3-month hands-on engineering mentorship led by Abu Hosain (Founder of NeexG &amp; Systomex).
                </>
              )}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span>
                {isBn
                  ? "ডিপ্লোমা ইন CST, বগুড়া পলিটেকনিক · IWC ও I3C গোল্ড মেডেলিস্ট"
                  : "Diploma in CST (BPI) · Dual Gold Medalist (IWC & I3C)"}
              </span>
            </div>

            {/* Campus & Host Partner Badge */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>{isBn ? "ক্লাস ভেন্যু: E-LAE Ltd (বগুড়া শাখা)" : "Host: E-LAE Ltd (Bogura Branch)"}</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {isBn
                  ? "সুবর্ণা টাওয়ার (২ টাওয়ার্স), খান্দার বাজার, বগুড়া সদর — ৫৮০০।"
                  : "Subarna Tower (2 Towers), Khandar Bazar, Bogura - 5800."}
              </p>
              <div className="flex items-center gap-3 pt-0.5">
                <a
                  href="https://e-laeltd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 font-mono text-[11px] font-semibold underline"
                >
                  e-laeltd.com
                </a>
                <a
                  href="https://www.facebook.com/elaeltd.bogura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1877F2] hover:underline font-mono text-[11px] font-semibold"
                >
                  Facebook Page
                </a>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 hover:text-indigo-800 transition-colors underline underline-offset-4"
              >
                <span>{isBn ? "← প্রধান পোর্টফোলিও ভিজিট করুন" : "← Visit Main Portfolio (abuhosain.dev)"}</span>
              </Link>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-slate-900 uppercase tracking-wider">
              {isBn ? "কোর্স সেকশনসমূহ" : "Course Navigation"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#curriculum" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {isBn ? "৩ মাসের কারিকুলাম" : "3-Month Curriculum"}
                </a>
              </li>
              <li>
                <a href="#ai-tools" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {isBn ? "AI টুলস ও ভাইব কোডিং" : "AI Stack & Vibe Coding"}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {isBn ? "৪টি লাইভ ক্যাপস্টোন প্রজেক্ট" : "4 Live Capstone Projects"}
                </a>
              </li>
              <li>
                <a href="#venue" className="text-emerald-700 hover:text-emerald-800 transition-colors font-semibold flex items-center gap-1">
                  <span>{isBn ? "বগুড়া ক্যাম্পাস (E-LAE Ltd)" : "Bogura Campus (E-LAE Ltd)"}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">New</span>
                </a>
              </li>
              <li>
                <a href="#mentor" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {isBn ? "আবু হোসাইন (মেন্টর)" : "About Abu Hosain"}
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {isBn ? "স্টুডেন্ট রিসোর্স ও সুবিধা" : "Student Perks & Resources"}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {isBn ? "সচরাচর প্রশ্ন (FAQ)" : "Frequently Asked Questions"}
                </a>
              </li>
              <li>
                <a href="#enroll-now" className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors font-semibold">
                  {isBn ? "ভর্তি আবেদন ও সিট বুকিং" : "Reserve Seat / Enroll Now"}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Ventures (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-slate-900 uppercase tracking-wider">
              {isBn ? "যোগাযোগ ও ভেঞ্চারস" : "Connect & Ventures"}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={enrollmentConfig.whatsappContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="font-mono">{enrollmentConfig.whatsappPhoneFormatted} (WhatsApp)</span>
              </a>

              <a
                href={`mailto:${enrollmentConfig.contactEmail}?subject=Course%20Inquiry%20-%20AI%20Web%20Design`}
                className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="font-mono">{enrollmentConfig.contactEmail}</span>
              </a>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://neexg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono hover:bg-blue-100 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>neexg.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href="https://systomex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono hover:bg-emerald-100 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>systomex.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href="https://oregent.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-mono hover:bg-amber-100 transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>oregent.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="text-center sm:text-left space-y-0.5">
            <div>
              &copy; {currentYear} Abu Hosain ({mentorInfo.personalBrand}). All rights reserved.
            </div>
            <div className="text-[11px] text-slate-400">
              {isBn
                ? "অফিশিয়াল ক্লাস ভেন্যু: ই-লার্নিং অ্যান্ড আর্নিং লিমিটেড (বগুড়া শাখা, সুবর্ণা টাওয়ার)"
                : "Official Venue: E-Learning & Earning Ltd. (Bogura Branch, Subarna Tower)"}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/abuhosain25"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com/@hosainfo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5 text-red-600" />
            </a>
            <a
              href={enrollmentConfig.whatsappContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-emerald-600 hover:bg-slate-200/70 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              title="Back to top"
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition-colors ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CourseFooter;
