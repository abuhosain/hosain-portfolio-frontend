"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/data/resume";
import { soundFX } from "@/lib/sound";
import {
  X,
  Printer,
  Mail,
  MapPin,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Cpu,
  Code2,
  Server,
  Database,
  Cloud,
  Copy,
  Check,
  Layers,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { TiltCard } from "../animations/TiltCard";
import { toast } from "sonner";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = "all" | "skills" | "experience" | "education";

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    soundFX.playClick(600);
    onClose();
  };

  const handlePrint = () => {
    soundFX.playShockwave();

    const printWindow = window.open("", "_blank", "width=850,height=1100");
    if (!printWindow) {
      window.print();
      return;
    }

    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${resumeData.name} — Resume</title>
  <style>
    @page { size: A4; margin: 12mm 15mm; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #0f172a;
      line-height: 1.45;
      background: #ffffff;
      padding: 10px;
    }
    .header { border-bottom: 2px solid #00F0FF; padding-bottom: 10px; margin-bottom: 14px; }
    .name { font-size: 24px; font-weight: 800; color: #020617; letter-spacing: -0.5px; }
    .title { font-size: 13px; font-weight: 700; color: #008494; margin-top: 2px; }
    .meta { font-size: 11px; color: #475569; margin-top: 4px; font-family: monospace; }
    .summary { font-size: 11px; color: #334155; margin-top: 6px; line-height: 1.5; }
    .section-title {
      font-size: 11.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #008494;
      margin: 14px 0 6px 0;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 3px;
      font-family: monospace;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
    .skill-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 5px 8px;
    }
    .skill-category { font-size: 10.5px; font-weight: 700; color: #0f172a; margin-bottom: 2px; }
    .skill-items { font-size: 10px; color: #475569; line-height: 1.35; }
    .exp-item { margin-bottom: 10px; }
    .exp-header { display: flex; justify-content: space-between; align-items: baseline; }
    .exp-role { font-size: 12px; font-weight: 700; color: #0f172a; }
    .exp-period { font-size: 10.5px; color: #64748b; font-weight: 600; font-family: monospace; }
    .exp-org { font-size: 11px; color: #008494; font-weight: 600; margin-bottom: 3px; font-family: monospace; }
    .exp-bullets { margin-left: 16px; }
    .exp-bullets li { font-size: 10.5px; color: #334155; margin-bottom: 2.5px; line-height: 1.45; }
    .edu-item { display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px; }
    .edu-deg { font-weight: 700; color: #0f172a; }
    .edu-inst { color: #64748b; font-size: 10.5px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">${resumeData.name}</div>
    <div class="title">${resumeData.title}</div>
    <div class="meta">${resumeData.location} &bull; ${resumeData.email}</div>
    <div class="summary">${resumeData.summary}</div>
  </div>

  <div class="section-title">01 // Technical Competencies</div>
  <div class="skills-grid">
    ${resumeData.skills
      .map(
        (s) => `
      <div class="skill-card">
        <div class="skill-category">${s.category}</div>
        <div class="skill-items">${s.items.join(" &bull; ")}</div>
      </div>
    `
      )
      .join("")}
  </div>

  <div class="section-title">02 // Experience &amp; Architecture Scope</div>
  ${resumeData.experience
    .map(
      (e) => `
    <div class="exp-item">
      <div class="exp-header">
        <span class="exp-role">${e.role}</span>
        <span class="exp-period">${e.period}</span>
      </div>
      <div class="exp-org">${e.organization}</div>
      <ul class="exp-bullets">
        ${e.bullets.map((b) => `<li>${b}</li>`).join("")}
      </ul>
    </div>
  `
    )
    .join("")}

  <div class="section-title">03 // Education &amp; Foundations</div>
  ${resumeData.education
    .map(
      (ed) => `
    <div class="edu-item">
      <div>
        <div class="edu-deg">${ed.degree}</div>
        <div class="edu-inst">${ed.institution}</div>
      </div>
      <div style="font-weight: 600; color: #008494; font-family: monospace;">${ed.period}</div>
    </div>
  `
    )
    .join("")}

  <script>
    window.onload = function() {
      window.focus();
      window.print();
      setTimeout(function() { window.close(); }, 750);
    };
  </script>
</body>
</html>`;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const handleCopyMarkdown = () => {
    soundFX.playClick(900);
    const md = `# ${resumeData.name}\n**${resumeData.title}**\n${resumeData.location} | ${resumeData.email}\n\n## Summary\n${resumeData.summary}\n\n## Technical Competencies\n${resumeData.skills.map((s) => `- **${s.category}:** ${s.items.join(", ")}`).join("\n")}\n\n## Experience\n${resumeData.experience.map((e) => `### ${e.role} — ${e.organization} (${e.period})\n${e.bullets.map((b) => `- ${b}`).join("\n")}`).join("\n\n")}\n\n## Education\n${resumeData.education.map((ed) => `- **${ed.degree}** (${ed.institution}) — ${ed.period}`).join("\n")}`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    toast.success("Resume Markdown copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case "backend & systems":
        return <Server className="w-4 h-4 text-purple-400" />;
      case "databases":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "devops & cloud":
        return <Cloud className="w-4 h-4 text-amber-400" />;
      case "iot & hardware":
        return <Cpu className="w-4 h-4 text-rose-400" />;
      default:
        return <Layers className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* 3D Holographic Cyber Dossier Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 25 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col w-full max-w-5xl h-[90vh] max-h-[860px] bg-[#0A0A12]/95 border border-white/20 rounded-3xl shadow-[0_25px_90px_rgba(0,0,0,0.95),inset_0_0_30px_rgba(0,240,255,0.03)] overflow-hidden z-10 backdrop-blur-3xl text-neutral-200"
        >
          {/* Top Holographic Laser Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent pointer-events-none z-20" />

          {/* Header Control Bar */}
          <div className="shrink-0 flex flex-wrap items-center justify-between gap-3 px-5 sm:px-8 py-4 border-b border-white/10 bg-[#0F0F1A]/90 print:hidden z-10">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-3 h-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-white font-bold tracking-wider uppercase">
                  Executive Engineering Dossier
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyMarkdown}
                title="Copy Markdown Resume"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-neutral-300 hover:text-white transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-accent" />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy MD"}</span>
              </button>

              <button
                onClick={handlePrint}
                title="Print or Save as PDF"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-accent/20 hover:bg-accent hover:text-black border border-accent/50 text-accent text-xs font-mono font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={handleClose}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors ml-1"
                aria-label="Close CV"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Section Filter Tabs */}
          <div className="shrink-0 flex items-center gap-2 px-5 sm:px-8 py-2.5 border-b border-white/5 bg-[#0D0D16]/70 overflow-x-auto print:hidden">
            {[
              { id: "all", label: "00 // All Sections" },
              { id: "skills", label: "01 // Tech Stack" },
              { id: "experience", label: "02 // Experience" },
              { id: "education", label: "03 // Education" },
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundFX.playClick(800);
                    setActiveTab(tab.id as TabType);
                  }}
                  className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
                    active
                      ? "bg-accent/20 border border-accent/50 text-white font-semibold shadow-[0_0_10px_rgba(0,240,255,0.25)]"
                      : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Scrollable Document Body with Custom Scrollbar */}
          <div className="flex-1 overflow-y-auto min-h-0 p-5 sm:p-8 space-y-8 print:p-0 print:space-y-6">
            {/* Header Profile Hero Card */}
            {(activeTab === "all" || activeTab === "skills") && (
              <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#121220]/80 to-[#0A0A12]/90 border border-white/10 overflow-hidden shadow-inner">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-[11px] font-mono font-semibold">
                      <Sparkles className="w-3 h-3" /> Full-Stack &amp; Embedded Systems Architect
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                      {resumeData.name}
                    </h1>
                    <p className="text-sm sm:text-base text-accent font-mono font-semibold">
                      {resumeData.title}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono text-neutral-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-accent" /> {resumeData.location}
                      </span>
                      <a
                        href={`mailto:${resumeData.email}`}
                        className="flex items-center gap-1.5 text-neutral-300 hover:text-accent transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-accent" /> {resumeData.email}
                      </a>
                    </div>
                  </div>

                  {/* 3D KPI Badges Grid */}
                  <div className="grid grid-cols-2 gap-2.5 shrink-0 min-w-[240px]">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-lg font-black text-white font-display">4+ Years</div>
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Engineering Experience</div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-lg font-black text-accent font-display">12+ Apps</div>
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Production Shipped</div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-lg font-black text-emerald-400 font-display">ESP32</div>
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Hardware &amp; IoT</div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-lg font-black text-purple-400 font-display">99.9%</div>
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Uptime Reliability</div>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-5 pt-5 border-t border-white/10 font-normal">
                  {resumeData.summary}
                </p>
              </div>
            )}

            {/* 01 // Technical Competencies with 3D Tilt Cards */}
            {(activeTab === "all" || activeTab === "skills") && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    <span>01 // Technical Competencies &amp; Stack</span>
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {resumeData.skills.length} Core Domains
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resumeData.skills.map((skillGroup) => (
                    <TiltCard key={skillGroup.category} maxTilt={6} glareOpacity={0.2} scaleOnHover={1.02}>
                      <div className="p-5 rounded-2xl bg-[#0F0F1A]/80 border border-white/10 backdrop-blur-xl h-full flex flex-col justify-between space-y-3 hover:border-accent/40 transition-colors shadow-sm">
                        <div>
                          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                            {getCategoryIcon(skillGroup.category)}
                            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                              {skillGroup.category}
                            </h4>
                          </div>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {skillGroup.items.map((item) => (
                              <span
                                key={item}
                                className="px-2 py-1 rounded-md bg-[#161626] border border-white/5 text-[11px] font-mono text-neutral-200"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            )}

            {/* 02 // Experience & Architecture Scope */}
            {(activeTab === "all" || activeTab === "experience") && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>02 // Experience &amp; Engineering Scope</span>
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-400">
                    Track Record
                  </span>
                </div>

                <div className="space-y-4">
                  {resumeData.experience.map((exp, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-[#0F0F1A]/80 border border-white/10 backdrop-blur-xl space-y-3 relative hover:border-accent/30 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                        <div>
                          <h4 className="text-base font-bold text-white font-display">
                            {exp.role}
                          </h4>
                          <span className="text-xs font-mono text-accent font-semibold">
                            {exp.organization}
                          </span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 self-start sm:self-auto">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2 pt-1">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 03 // Education & Credentials */}
            {(activeTab === "all" || activeTab === "education") && (
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>03 // Education &amp; Foundations</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resumeData.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#0F0F1A]/80 border border-white/10 backdrop-blur-xl flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-bold text-white text-sm font-display">{edu.degree}</div>
                        <div className="text-neutral-400 font-mono mt-0.5">{edu.institution}</div>
                      </div>
                      <span className="font-mono text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
                        {edu.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="shrink-0 flex items-center justify-between px-6 sm:px-8 py-3.5 border-t border-white/10 bg-[#0C0C14]/90 text-[11px] font-mono text-neutral-400 print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Inquiries: abuhosain.dev@gmail.com</span>
            </div>

            <a
              href="#contact"
              onClick={handleClose}
              className="text-accent font-bold hover:underline flex items-center gap-1"
            >
              <span>Initiate Project Conversation</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ResumeModal;
