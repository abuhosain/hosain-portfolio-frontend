"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/data/projects";
import { soundFX } from "@/lib/sound";
import { X, ExternalLink, Github, CheckCircle2, Cpu, Database, Server, Layers, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const handleClose = () => {
    soundFX.playClick(600);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#0C0C14]/95 border border-white/20 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-8 backdrop-blur-2xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12121E]/80">
            <div className="flex items-center gap-2">
              <Badge variant="accent" size="sm">
                {project.category}
              </Badge>
              <span className="text-xs font-mono text-neutral-400">
                // Architecture Deep Dive
              </span>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Title & Tagline */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                {project.title}
              </h2>
              <p className="text-sm text-accent font-mono mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Overview */}
            <div className="p-4 rounded-2xl bg-[#141422]/60 border border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                Executive Overview
              </h4>
              <p className="text-sm text-neutral-200 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Core Architectural Highlights
              </h4>
              <div className="space-y-2">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#141420]/50 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-300">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Specs */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Full-Stack Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-[#181828] border border-white/10 text-neutral-200 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    variant="cyan-glow"
                    size="sm"
                    rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="secondary"
                    size="sm"
                    leftIcon={<Github className="w-3.5 h-3.5 text-neutral-400" />}
                  >
                    Source Code
                  </Button>
                )}
              </div>

              <span className="text-xs font-mono text-neutral-500">
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
