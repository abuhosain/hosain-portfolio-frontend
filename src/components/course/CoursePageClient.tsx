"use client";

import React, { useState, useEffect } from "react";
import { CourseNav } from "@/components/course/CourseNav";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseOutcomes } from "@/components/course/CourseOutcomes";
import { CourseCurriculum } from "@/components/course/CourseCurriculum";
import { AIToolsSection } from "@/components/course/AIToolsSection";
import { RealProjectsShowcase } from "@/components/course/RealProjectsShowcase";
import { DeploymentFlow } from "@/components/course/DeploymentFlow";
import { SaaSJourney } from "@/components/course/SaaSJourney";
import { ClientWorkflow } from "@/components/course/ClientWorkflow";
import { MentorSection } from "@/components/course/MentorSection";
import { TrainingPartnerSection } from "@/components/course/TrainingPartnerSection";
import { CourseBenefits } from "@/components/course/CourseBenefits";
import { CourseFAQs } from "@/components/course/CourseFAQs";
import { EnrollmentCTA } from "@/components/course/EnrollmentCTA";
import { CourseFooter } from "@/components/course/CourseFooter";

export function CoursePageClient() {
  const [lang, setLang] = useState<"bn" | "en">("bn");

  // Read language preference from URL parameter (defaulting to Bangla)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get("lang");
      if (urlLang === "en") {
        setLang("en");
        return;
      }
      if (urlLang === "bn") {
        setLang("bn");
        return;
      }

      // Default to Bangla
      setLang("bn");
      localStorage.setItem("course_lang", "bn");
    }
  }, []);

  const handleSelectLang = (selected: "bn" | "en") => {
    setLang(selected);
    if (typeof window !== "undefined") {
      localStorage.setItem("course_lang", selected);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", selected);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const handleToggleLang = () => {
    const nextLang = lang === "bn" ? "en" : "bn";
    handleSelectLang(nextLang);
  };

  return (
    <div
      lang={lang}
      dir="ltr"
      className={`relative w-full overflow-hidden bg-[#F8FAFC] text-slate-900 pb-20 lg:pb-0 ${
        lang === "bn" ? "font-bengali" : "font-sans"
      }`}
    >
      {/* 1. Sticky/Fixed Navigation Header */}
      <CourseNav lang={lang} onToggleLang={handleToggleLang} />

      {/* 2. Editorial Hero Section: Code Preview, Precise Headlines & Spec Strip */}
      <CourseHero lang={lang} onSelectLang={handleSelectLang} />

      {/* 3. The 4 Engineering Pillars */}
      <CourseOutcomes lang={lang} />

      {/* 4. Three-Month Progressive Curriculum Roadmap */}
      <CourseCurriculum lang={lang} />

      {/* 5. Modern AI Toolchain Matrix & Disciplined Vibe Coding */}
      <AIToolsSection lang={lang} />

      {/* 6. Real-World Portfolio: Verified Live Platforms + 4 Student Capstones */}
      <RealProjectsShowcase lang={lang} />

      {/* 7. Dedicated Deployment Pipeline: Localhost to Vercel & Custom Domain */}
      <DeploymentFlow lang={lang} />

      {/* 8. Dedicated SaaS Product Lifecycle: Validation to First 100 Users */}
      <SaaSJourney lang={lang} />

      {/* 9. Dedicated Agency & Freelancing Pipeline: Discovery to Monthly Retainers */}
      <ClientWorkflow lang={lang} />

      {/* 10. Verified Mentor Profile: Abu Hosain (Founder NeexG & Systomex) */}
      <MentorSection lang={lang} />

      {/* 11. Official Training Venue & Partner: E-Learning & Earning Ltd. (Bogura Branch, Subarna Tower) */}
      <TrainingPartnerSection lang={lang} />

      {/* 12. Concrete Student Resources & Perks */}
      <CourseBenefits lang={lang} />

      {/* 12. Accessible FAQs Accordion */}
      <CourseFAQs lang={lang} />

      {/* 13. Calm, Confident Closing Card & Application */}
      <EnrollmentCTA lang={lang} />

      {/* 14. Dedicated Course Footer */}
      <CourseFooter lang={lang} />
    </div>
  );
}

export default CoursePageClient;
