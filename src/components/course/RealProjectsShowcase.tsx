"use client";

import React from "react";
import { ExternalLink, Check, Layers, Code, Sparkles, Server, ShoppingCart, Rocket } from "lucide-react";
import { verifiedMentorProjects, studentCapstoneProjects } from "@/data/courseData";

interface RealProjectsShowcaseProps {
  lang: "bn" | "en";
}

export function RealProjectsShowcase({ lang }: RealProjectsShowcaseProps) {
  const isBn = lang === "bn";

  const getCapstoneIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code className="w-5 h-5 text-blue-400" />;
      case 1:
        return <ShoppingCart className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Rocket className="w-5 h-5 text-purple-400" />;
      case 3:
        return <Server className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="projects" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-semibold">
              {isBn ? "// রিয়েল-ওয়ার্ল্ড পোর্টফোলিও ও প্রজেক্টস" : "// Real-World Portfolio & Projects"}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            {isBn
              ? "বাস্তব অভিজ্ঞতার প্রমাণ: যা আমি নিজে তৈরি করেছি এবং যা আপনি বানাবেন।"
              : "Proof of Craft: Real Live Platforms & Capstone Projects."}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-prose">
            {isBn
              ? "আমরা শিক্ষার্থীদের খেলনা তো-ডো অ্যাপ বানাইয়ে প্রতারিত করি না। নিচে মেন্টরের ভেরিফাইড লাইভ প্রোডাক্ট এবং আপনি যে ৪টি হাই-ভ্যালু ক্যাপস্টোন তৈরি করবেন তা বিস্তারিত দেওয়া হলো।"
              : "We don't build useless clone toys. Below you will find Abu Hosain's verified live production systems, followed by the 4 flagship capstone projects you will build and deploy during the course."}
          </p>
        </div>

        {/* SUBSECTION 1: MENTOR'S VERIFIED REAL-WORLD PLATFORMS */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6 pb-2.5 sm:pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 font-display">
                {isBn
                  ? "আবু হোসাইনের রিয়েল-লাইফ প্রোডাকশন প্ল্যাটফর্ম"
                  : "Verified Production Platforms by Abu Hosain"}
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              {isBn ? "লাইভ ও সক্রিয় প্ল্যাটফর্মসমূহ" : "Live & Active Platforms"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {verifiedMentorProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col justify-between p-4 sm:p-5 lg:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-500/30 transition-all duration-200 shadow-sm hover:shadow-md group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {project.badge}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-600 transition-colors"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs font-mono text-indigo-600 pt-0.5 font-medium">
                      {isBn ? project.taglineBn : project.taglineEn}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {isBn ? project.descriptionBn : project.descriptionEn}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-700 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {isBn ? "ভেরিফাইড লাইভ সিস্টেম" : "Verified Production System"}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-700 hover:text-indigo-600 flex items-center gap-1"
                  >
                    <span>{isBn ? "ভিজিট করুন" : "Visit"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUBSECTION 2: STUDENT CAPSTONE PROJECTS */}
        <div>
          <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  {isBn
                    ? "কোর্সের অংশ হিসেবে আপনি নিজে যে ৪টি ক্যাপস্টোন প্রজেক্ট বানাবেন"
                    : "The 4 Flagship Capstones You Will Build as a Student"}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {isBn
                  ? "এই প্রজেক্টগুলো আপনার পোর্টফোলিওকে সাধারণ ডেভেলপারদের চেয়ে ১০০ গুণ বেশি বিশ্বাসযোগ্য করে তুলবে।"
                  : "These 4 live applications will form the foundation of your high-ticket portfolio."}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-600 text-white self-start sm:self-auto shrink-0 shadow-sm">
              {isBn ? "১০০% হ্যান্ডস-অন" : "100% Hands-On"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {studentCapstoneProjects.map((capstone, idx) => (
              <div
                key={capstone.id}
                className="flex flex-col justify-between p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-500/30 transition-all duration-200 shadow-sm hover:shadow-md group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                      {getCapstoneIcon(idx)}
                    </div>
                    <span
                      className="px-3 py-0.5 rounded-full text-xs font-mono font-bold"
                      style={{
                        backgroundColor: `${capstone.accentColor}15`,
                        color: capstone.accentColor,
                        border: `1px solid ${capstone.accentColor}30`,
                      }}
                    >
                      {isBn ? capstone.badgeBn : capstone.badgeEn}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                      {isBn ? capstone.titleBn : capstone.titleEn}
                    </h4>
                    <span className="text-xs font-mono text-slate-500">
                      {isBn ? capstone.categoryBn : capstone.categoryEn}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isBn ? capstone.descriptionBn : capstone.descriptionEn}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide">
                      {isBn ? "প্রজেক্টের মূল ফিচারসমূহ:" : "Key Deliverables:"}
                    </span>
                    <ul className="space-y-1.5">
                      {(isBn ? capstone.deliverablesBn : capstone.deliverablesEn).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {capstone.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 border border-slate-200 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
