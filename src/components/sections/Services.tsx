"use client";

import React, { useState } from "react";
import {
  Code2,
  Palette,
  Workflow,
  Bot,
  Video,
  Rocket,
  ArrowUpRight,
  MessageCircle,
  FileText,
  Cpu,
  Table,
  MessageSquare,
  Database,
  Play,
  ExternalLink,
} from "lucide-react";
import { servicesData, brandBuildAutomateSteps, automationFlowNodes } from "@/data/services";

export function Services() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-accent" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-accent" />;
      case "Workflow":
        return <Workflow className="w-5 h-5 text-accent" />;
      case "Bot":
        return <Bot className="w-5 h-5 text-accent" />;
      case "Video":
        return <Video className="w-5 h-5 text-accent" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-accent" />;
      default:
        return <Code2 className="w-5 h-5 text-accent" />;
    }
  };

  const getFlowNodeIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText":
        return <FileText className="w-4 h-4 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-blue-400" />;
      case "Table":
        return <Table className="w-4 h-4 text-amber-400" />;
      case "MessageSquare":
        return <MessageSquare className="w-4 h-4 text-teal-400" />;
      case "Database":
        return <Database className="w-4 h-4 text-purple-400" />;
      default:
        return <Workflow className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 border-t border-white/[0.08] bg-[#090A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                // Capabilities &amp; Solutions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              What I Can Do For You
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-prose">
              End-to-end execution across modern web engineering, brand identity direction, AI workflow automation, and video content production.
            </p>
          </div>

          <a
            href="https://wa.me/8801319539510"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs sm:text-sm font-semibold transition-colors self-start md:self-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* 1. Asymmetric Services Grid: 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0F111A] border transition-all duration-200 group hover:-translate-y-1 shadow-sm ${
                service.featured
                  ? "border-accent/30 hover:border-accent/60 bg-gradient-to-b from-[#121526] to-[#0F111A]"
                  : "border-white/[0.08] hover:border-white/20"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.featured && (
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent">
                      Core Discipline
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-neutral-400 bg-white/[0.03] border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white transition-colors min-h-[44px] items-center"
                >
                  <span>Let&apos;s talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-accent transition-colors" />
                </a>

                <a
                  href="https://wa.me/8801319539510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-400 hover:underline min-h-[44px] inline-flex items-center"
                  aria-label={`Inquire about ${service.title} via WhatsApp`}
                >
                  WhatsApp →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 2. "Brand it. Build it. Automate it." 3-Step Block */}
        <div className="mb-16 p-6 sm:p-10 rounded-3xl bg-[#0F121F] border border-white/[0.08] relative overflow-hidden shadow-sm">
          <div className="max-w-xl mb-8 space-y-2">
            <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
              // Methodology &amp; Delivery
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Brand it. Build it. Automate it.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              A cohesive 3-stage execution philosophy ensuring your product looks commanding, runs fast, and operates automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {brandBuildAutomateSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-white/20">
                    {step.step}
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {step.phase}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white font-display">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Automation Showcase with Inline SVG Workflow Diagram */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-[#0E101A] border border-white/[0.08] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-accent" />
                <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                  Workflow Architecture
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Automated Operations Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                How modern n8n and Zapier automations bridge forms, storage, messaging, and CRM pipelines with zero human overhead.
              </p>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 self-start sm:self-auto">
              Real-Time Sync Engine
            </span>
          </div>

          {/* Inline SVG Workflow Nodes */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#090A0F] border border-white/[0.06] overflow-x-auto">
            <div className="min-w-[620px] flex items-center justify-between gap-2 py-4">
              {automationFlowNodes.map((node, idx) => (
                <React.Fragment key={node.step}>
                  <div className="flex-1 flex flex-col items-center text-center p-3 rounded-xl bg-[#121422] border border-white/[0.08] space-y-2">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      {getFlowNodeIcon(node.icon)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white whitespace-nowrap">
                        {node.title}
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-0.5 leading-tight">
                        {node.desc}
                      </div>
                    </div>
                  </div>

                  {idx < automationFlowNodes.length - 1 && (
                    <div className="shrink-0 flex items-center px-1">
                      <svg
                        width="24"
                        height="12"
                        viewBox="0 0 24 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-neutral-600"
                      >
                        <path
                          d="M0 6H20M20 6L15 1M20 6L15 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Video Showcase Facade (YouTube @hosainfo) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0F111A] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md space-y-3">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-red-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
                Content &amp; Video Production
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Short-Form Content &amp; Brand Promo Videos
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Producing high-retention promo reels, product walkthroughs, and explainer videos on YouTube (@hosainfo) to bring brand stories to life.
            </p>
            <div className="pt-2">
              <a
                href="https://youtube.com/@hosainfo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-xl bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-600/20 text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Visit Channel (@hosainfo)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Facade Box */}
          <div className="w-full md:w-[380px] aspect-video rounded-2xl bg-[#161928] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center text-center p-6 group">
            {isPlayingVideo ? (
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube-nocookie.com/embed?listType=user_uploads&list=hosainfo&autoplay=1"
                title="Abu Hosain YouTube Videos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                onClick={() => setIsPlayingVideo(true)}
                className="w-full h-full flex flex-col items-center justify-center cursor-pointer space-y-3"
              >
                <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Click to Watch Production Reels</div>
                  <div className="text-[11px] font-mono text-neutral-400 mt-0.5">YouTube @hosainfo</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
