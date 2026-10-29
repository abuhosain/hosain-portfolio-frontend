"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft, Globe, Sparkles, MessageCircle, Home, Zap, Package, User, MessageSquare } from "lucide-react";
import { enrollmentConfig, mentorInfo } from "@/data/courseData";

interface CourseNavProps {
  lang: "bn" | "en";
  onToggleLang: () => void;
}

const NAV_ITEMS = [
  { id: "curriculum", labelEn: "Curriculum", labelBn: "কারিকুলাম", href: "#curriculum" },
  { id: "ai-tools", labelEn: "AI Stack", labelBn: "AI টুলস", href: "#ai-tools" },
  { id: "projects", labelEn: "Projects", labelBn: "প্রজেক্টস", href: "#projects" },
  { id: "venue", labelEn: "Bogura Campus", labelBn: "বগুড়া ব্রাঞ্চ", href: "#venue" },
  { id: "mentor", labelEn: "Mentor", labelBn: "মেন্টর", href: "#mentor" },
  { id: "faq", labelEn: "FAQ", labelBn: "প্রশ্নোত্তর", href: "#faq" },
];

export function CourseNav({ lang, onToggleLang }: CourseNavProps) {
  const isBn = lang === "bn";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Scroll spy for course sections & active indicator
      if (scrollY < 120) {
        setActiveSection("");
        return;
      }

      const sections = [...NAV_ITEMS.map((item) => item.id), "enroll-now"];
      const scrollPos = scrollY + 240;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow,padding] duration-200 ease-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-2.5 sm:py-3 shadow-sm"
            : "bg-white/85 backdrop-blur-md border-b border-slate-200/60 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-3">
          {/* Brand mark & Back to Portfolio link */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-2.5 group min-h-[44px]"
              aria-label="Back to Abu Hosain portfolio"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-slate-200 ring-2 ring-indigo-500/20 group-hover:ring-indigo-600 transition-all shrink-0">
                <Image
                  src={mentorInfo.avatarImage}
                  alt={mentorInfo.name}
                  width={36}
                  height={36}
                  className="w-full h-full object-cover object-[center_28%] group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="font-display font-bold text-sm tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors whitespace-nowrap">
                    Abu Hosain
                  </span>
                  <span className="inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium whitespace-nowrap shrink-0">
                    Course
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 group-hover:text-slate-800 transition-colors hidden sm:flex items-center gap-1 whitespace-nowrap">
                  <ArrowLeft className="w-2.5 h-2.5 transition-transform group-hover:-translate-x-0.5 text-slate-400 group-hover:text-slate-700" />
                  <span>abuhosain.dev</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links (Visible on lg: 1024px+) */}
          <nav
            aria-label="Course section navigation"
            className="hidden lg:flex items-center gap-1 bg-slate-100/90 px-2.5 py-1 rounded-full border border-slate-200/80 shadow-inner"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-150 min-h-[34px] flex items-center whitespace-nowrap ${
                    isActive ? "text-indigo-600 font-semibold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCourseNavIndicator"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/70"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{isBn ? item.labelBn : item.labelEn}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Language Toggle & Enroll Button */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Language Switcher */}
            <button
              type="button"
              id="header-lang-toggle"
              onClick={onToggleLang}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 min-h-[38px] sm:min-h-[40px] rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-700 transition-colors cursor-pointer select-none shrink-0 whitespace-nowrap"
              aria-label={isBn ? "Switch to English" : "বাংলা ভাষায় পরিবর্তন করুন"}
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span className="font-mono text-xs whitespace-nowrap">{isBn ? "English" : "বাংলা"}</span>
            </button>

            {/* Enroll CTA (Hidden on mobile < sm, since mobile has dedicated bottom bar) */}
            <a
              href={enrollmentConfig.directEnrollUrl}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 min-h-[40px] rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm shadow-indigo-600/20 active:scale-[0.98] shrink-0 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">{isBn ? "ভর্তি হন" : "Enroll"}</span>
            </a>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[38px] min-w-[38px] sm:min-h-[40px] sm:min-w-[40px] flex lg:hidden items-center justify-center rounded-xl text-slate-700 hover:text-slate-900 border border-slate-200 bg-slate-50 shrink-0"
              aria-label={mobileMenuOpen ? "Close course navigation menu" : "Open course navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Slide-down Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-x-0 top-[60px] sm:top-[64px] z-50 bg-white border-b border-slate-200 p-5 shadow-xl lg:hidden max-h-[calc(100dvh-64px)] overflow-y-auto"
            >
              <div className="flex flex-col gap-2 max-w-md mx-auto">
                {/* Course Header Banner */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200 mb-1">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200 ring-2 ring-indigo-500/20 shrink-0">
                      <Image
                        src={mentorInfo.avatarImage}
                        alt={mentorInfo.name}
                        width={36}
                        height={36}
                        className="w-full h-full object-cover object-[center_28%]"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900 font-display">
                        AI-Based Web Design &amp; Dev
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        by Abu Hosain · 3 Months
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onToggleLang();
                    }}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200"
                  >
                    {isBn ? "EN" : "বাংলা"}
                  </button>
                </div>

                {/* Section Links */}
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-2.5 px-3.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? "text-indigo-600 bg-indigo-50/70 font-semibold border border-indigo-100"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <span>{isBn ? item.labelBn : item.labelEn}</span>
                      <span className="text-xs text-slate-400">→</span>
                    </a>
                  );
                })}

                {/* Direct Action Buttons */}
                <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
                  <a
                    href={enrollmentConfig.directEnrollUrl}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 min-h-[44px] rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm shadow-indigo-600/20 active:scale-[0.98]"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isBn ? "কোর্সে সিট বুক করুন" : "Enroll Now / Reserve Seat"}</span>
                  </a>

                  <a
                    href={enrollmentConfig.whatsappContactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 min-h-[44px] rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp: {enrollmentConfig.whatsappPhoneFormatted}</span>
                  </a>

                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2 text-center text-xs font-mono text-slate-500 hover:text-slate-800"
                  >
                    ← Back to abuhosain.dev
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile App-Style Bottom Navigation Bar (Visible only on mobile/tablet < lg) */}
      <nav
        aria-label="Mobile quick navigation"
        className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="max-w-md mx-auto grid grid-cols-5 items-end px-2 pt-1 pb-1.5 h-16 relative">
          {/* 1. Home */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
            }}
            className={`flex flex-col items-center justify-center w-full h-full py-1 text-center transition-colors min-h-[44px] ${
              !activeSection || activeSection === "home"
                ? "text-indigo-600 font-semibold"
                : "text-slate-500 hover:text-slate-900 font-medium"
            }`}
          >
            <Home className="w-5 h-5 mb-0.5 shrink-0" />
            <span className="text-[11px] leading-tight truncate">{isBn ? "হোম" : "Home"}</span>
          </a>

          {/* 2. Catalog / Curriculum */}
          <a
            href="#curriculum"
            onClick={() => setActiveSection("curriculum")}
            className={`flex flex-col items-center justify-center w-full h-full py-1 text-center transition-colors min-h-[44px] ${
              activeSection === "curriculum"
                ? "text-indigo-600 font-semibold"
                : "text-slate-500 hover:text-slate-900 font-medium"
            }`}
          >
            <Zap className="w-5 h-5 mb-0.5 shrink-0" />
            <span className="text-[11px] leading-tight truncate">{isBn ? "কারিকুলাম" : "Catalog"}</span>
          </a>

          {/* 3. Center Elevated WhatsApp Floating Button */}
          <div className="relative flex flex-col items-center justify-center w-full -top-3.5">
            <a
              href={enrollmentConfig.whatsappContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Abu Hosain on WhatsApp"
              className="w-12 h-12 rounded-full bg-[#E8F8F0] hover:bg-[#d5f7e4] border-2 border-emerald-400 text-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 active:scale-95 transition-all group"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
            </a>
            <span className="text-[11px] font-bold text-emerald-600 mt-1 leading-none tracking-tight">
              WhatsApp
            </span>
          </div>

          {/* 4. Projects / Cart */}
          <a
            href="#projects"
            onClick={() => setActiveSection("projects")}
            className={`flex flex-col items-center justify-center w-full h-full py-1 text-center transition-colors min-h-[44px] ${
              activeSection === "projects"
                ? "text-indigo-600 font-semibold"
                : "text-slate-500 hover:text-slate-900 font-medium"
            }`}
          >
            <Package className="w-5 h-5 mb-0.5 shrink-0" />
            <span className="text-[11px] leading-tight truncate">{isBn ? "প্রজেক্টস" : "Projects"}</span>
          </a>

          {/* 5. Account / Enroll */}
          <a
            href={enrollmentConfig.directEnrollUrl}
            onClick={() => setActiveSection("enroll-now")}
            className={`flex flex-col items-center justify-center w-full h-full py-1 text-center transition-colors min-h-[44px] ${
              activeSection === "enroll-now"
                ? "text-indigo-600 font-semibold"
                : "text-slate-500 hover:text-slate-900 font-medium"
            }`}
          >
            <User className="w-5 h-5 mb-0.5 shrink-0" />
            <span className="text-[11px] leading-tight truncate">{isBn ? "ভর্তি হন" : "Account"}</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default CourseNav;
