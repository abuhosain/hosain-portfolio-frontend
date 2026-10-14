"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/data/resume";
import {
  X,
  Printer,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Copy,
  Check,
  Globe,
} from "lucide-react";
import { toast } from "sonner";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
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
      line-height: 1.5;
      background: #ffffff;
      padding: 16px;
    }
    .header { border-bottom: 2px solid #2563EB; padding-bottom: 12px; margin-bottom: 16px; }
    .name { font-size: 26px; font-weight: 800; color: #020617; letter-spacing: -0.5px; }
    .title { font-size: 14px; font-weight: 700; color: #2563EB; margin-top: 2px; }
    .meta { font-size: 11px; color: #475569; margin-top: 4px; font-family: monospace; }
    .summary { font-size: 11.5px; color: #334155; margin-top: 8px; line-height: 1.55; }
    .section-title {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #2563EB;
      margin: 16px 0 8px 0;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 3px;
    }
    .achieve-grid, .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
    .card-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 6px 10px;
    }
    .item-title { font-size: 11px; font-weight: 700; color: #0f172a; }
    .item-desc { font-size: 10px; color: #475569; }
    .exp-item { margin-bottom: 12px; }
    .exp-header { display: flex; justify-content: space-between; align-items: baseline; }
    .exp-role { font-size: 12px; font-weight: 700; color: #0f172a; }
    .exp-period { font-size: 10.5px; color: #64748b; font-weight: 600; font-family: monospace; }
    .exp-org { font-size: 11px; color: #2563EB; font-weight: 600; margin-bottom: 4px; }
    .exp-bullets { margin-left: 16px; }
    .exp-bullets li { font-size: 10.5px; color: #334155; margin-bottom: 3px; line-height: 1.45; }
    .edu-item { display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px; }
    .edu-deg { font-weight: 700; color: #0f172a; }
    .edu-inst { color: #64748b; font-size: 10.5px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">${resumeData.name}</div>
    <div class="title">${resumeData.title}</div>
    <div class="meta">${resumeData.location} &bull; ${resumeData.email} &bull; ${resumeData.phone} &bull; ${resumeData.website}</div>
    <div class="summary">${resumeData.summary}</div>
  </div>

  <div class="section-title">01 // Key Achievements &amp; Global Honors</div>
  <div class="achieve-grid">
    ${resumeData.achievements
      .map(
        (a) => `
      <div class="card-box">
        <div class="item-title">${a.title}</div>
        <div class="item-desc">${a.organization}</div>
      </div>
    `
      )
      .join("")}
  </div>

  <div class="section-title">02 // Technical Competencies</div>
  <div class="skills-grid">
    ${resumeData.skills
      .map(
        (s) => `
      <div class="card-box">
        <div class="item-title">${s.category}</div>
        <div class="item-desc">${s.items.join(" &bull; ")}</div>
      </div>
    `
      )
      .join("")}
  </div>

  <div class="section-title">03 // Experience &amp; Leadership</div>
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

  <div class="section-title">04 // Education</div>
  ${resumeData.education
    .map(
      (ed) => `
    <div class="edu-item">
      <div>
        <div class="edu-deg">${ed.degree}</div>
        <div class="edu-inst">${ed.institution}</div>
      </div>
      <div style="font-weight: 600; color: #2563EB; font-family: monospace;">${ed.period || ""}</div>
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
    const md = `# ${resumeData.name}\n**${resumeData.title}**\n${resumeData.location} | ${resumeData.email} | ${resumeData.phone} | ${resumeData.website}\n\n## Summary\n${resumeData.summary}\n\n## Achievements\n${resumeData.achievements.map((a) => `- **${a.title}** (${a.organization})`).join("\n")}\n\n## Technical Competencies\n${resumeData.skills.map((s) => `- **${s.category}:** ${s.items.join(", ")}`).join("\n")}\n\n## Experience\n${resumeData.experience.map((e) => `### ${e.role} — ${e.organization} (${e.period})\n${e.bullets.map((b) => `- ${b}`).join("\n")}`).join("\n\n")}\n\n## Education\n${resumeData.education.map((ed) => `- **${ed.degree}** (${ed.institution}) — ${ed.period || ""}`).join("\n")}`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    toast.success("Resume Markdown copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden"
        data-lenis-prevent="true"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          data-lenis-prevent="true"
          className="relative flex flex-col w-full max-w-4xl h-[90vh] max-h-[820px] bg-[#0E1018] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-10 text-neutral-200"
        >
          {/* Header Controls */}
          <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#121420]">
            <div>
              <h2 className="text-sm font-bold text-white font-display">
                Curriculum Vitae — Abu Hosain
              </h2>
              <p className="text-[11px] font-mono text-neutral-400">
                Software Engineer &bull; Founder of NeexG
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyMarkdown}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                title="Copy Markdown"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-accent" />
                )}
                <span>{copied ? "Copied" : "Copy MD"}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors ml-1"
                aria-label="Close CV"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Body */}
          <div
            className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 overscroll-contain"
            data-lenis-prevent="true"
          >
            {/* Header / Intro */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {resumeData.name}
                </h1>
                <span className="text-xs font-mono text-accent font-semibold">
                  {resumeData.title}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" /> {resumeData.location}
                </span>
                <a
                  href={`mailto:${resumeData.email}`}
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-white"
                >
                  <Mail className="w-3.5 h-3.5 text-accent" /> {resumeData.email}
                </a>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-accent" /> {resumeData.phone}
                </span>
                <a
                  href="https://neexg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-accent hover:underline font-semibold"
                >
                  <Globe className="w-3.5 h-3.5" /> neexg.com
                </a>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-2">
                {resumeData.summary}
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>01 // International Honors &amp; Achievements</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {resumeData.achievements.map((a, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1"
                  >
                    <div className="text-xs font-bold text-white font-display">
                      {a.title}
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      {a.organization}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Stack */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>02 // Technical Competencies</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {resumeData.skills.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2"
                  >
                    <h4 className="text-xs font-semibold text-white font-mono uppercase tracking-wider">
                      {s.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-neutral-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>03 // Experience &amp; Leadership</span>
              </div>

              <div className="space-y-3">
                {resumeData.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2.5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-white/[0.04]">
                      <div>
                        <div className="text-sm font-bold text-white">{exp.role}</div>
                        <div className="text-xs font-mono text-accent font-semibold">
                          {exp.organization}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-neutral-400">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {exp.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>04 // Education &amp; Foundations</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {resumeData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">{edu.degree}</div>
                      <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        {edu.institution}
                      </div>
                    </div>
                    {edu.period && (
                      <span className="text-xs font-mono text-accent">{edu.period}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ResumeModal;
