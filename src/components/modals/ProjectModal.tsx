"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/data/projects";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll while modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-hidden"
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

        {/* Modal Window: Bottom sheet on mobile, centered card on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          data-lenis-prevent="true"
          className="relative w-full max-w-2xl bg-[#0F111A] border-t sm:border border-white/[0.12] rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden z-10 text-neutral-200 max-h-[90vh] sm:max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#141624] shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                // Project Specification
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div
            className="p-6 sm:p-8 space-y-6 overflow-y-auto overscroll-contain flex-1"
            data-lenis-prevent="true"
          >
            {/* Title & Tagline */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-accent mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Extended Brief */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                Project Overview &amp; Architecture Brief
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.brief || project.description}
              </p>
            </div>

            {/* Key Technical Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Key Technical Highlights
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                Technologies &amp; Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-neutral-200 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs font-mono text-neutral-400">
                Role: {project.role}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectModal;
