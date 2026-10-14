"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem, ProjectCategory } from "@/data/projects";
import { ArrowUpRight, Lock, ExternalLink, Info } from "lucide-react";
import { ProjectModal } from "../modals/ProjectModal";

type FilterTab = "All" | ProjectCategory;

const FILTER_TABS: FilterTab[] = [
  "All",
  "SaaS",
  "E-commerce",
  "EdTech",
  "Corporate",
  "AI",
  "Branding",
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-white/[0.08] bg-[#090A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                // Selected Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Production Applications &amp; Client Platforms
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-prose">
              A curated catalog of live SaaS platforms, multi-tenant engines, e-commerce brands,
              and institutional tools built and shipped by Abu Hosain.
            </p>
            {/* Required venture callout */}
            <p className="text-xs font-mono text-neutral-400 pt-1">
              Looking for my own ventures? See{" "}
              <a
                href="#ventures"
                className="text-accent underline underline-offset-4 hover:text-white transition-colors"
              >
                Startups &amp; Ventures above
              </a>
              .
            </p>
          </div>

          {/* Horizontally Scrollable Filter Tabs (Mobile chip row with hidden scrollbar) */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#12141F] border border-white/[0.08] min-w-max">
              {FILTER_TABS.map((tab) => {
                const active = activeTab === tab;
                const count =
                  tab === "All"
                    ? projectsData.length
                    : projectsData.filter((p) => p.category === tab).length;

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-2 min-h-[44px] rounded-lg text-xs font-medium transition-all duration-150 flex items-center gap-1.5 shrink-0 ${
                      active
                        ? "bg-accent text-white shadow-sm"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <span>{tab}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                        active ? "bg-white/20 text-white" : "text-neutral-500 bg-white/[0.04]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid: 1 col mobile, 2 tablet, 3 desktop */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col justify-between rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/20 transition-all duration-200 overflow-hidden hover:-translate-y-1 shadow-sm"
              >
                <div>
                  {/* Visual Preview Frame (Browser Mockup with neutral, premium canvas) */}
                  <div className="relative aspect-[16/10] bg-[#141624] border-b border-white/[0.06] overflow-hidden flex flex-col justify-between p-4">
                    {/* Browser Address Bar */}
                    <div className="flex items-center justify-between gap-2 z-10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/40 border border-white/10 text-[10px] font-mono text-neutral-400 max-w-[170px] truncate">
                        <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                        <span className="truncate">
                          {project.liveUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                        {project.category}
                      </span>
                    </div>

                    {/* Styled Brand Graphic Canvas */}
                    <div
                      className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.03] flex items-center justify-center p-6 text-center select-none"
                      style={{
                        background: `radial-gradient(circle at 50% 120%, ${project.gradient.from}33 0%, #0F111A 90%)`,
                      }}
                    >
                      <div className="space-y-1.5">
                        <div
                          className="font-display font-black text-2xl tracking-tight text-white drop-shadow-md"
                          style={{ color: "#FFFFFF" }}
                        >
                          {project.title}
                        </div>
                        <div className="text-xs text-neutral-300 font-mono">
                          {project.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Live indicator tag */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {project.status}
                      </span>

                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Info Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-lg font-bold text-white hover:text-accent transition-colors font-display cursor-pointer flex items-center gap-1.5"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </h3>
                      <p className="text-xs font-mono text-accent mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech / Category Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0 mt-2 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors min-h-[44px] px-1"
                    aria-label={`View architectural details for ${project.title}`}
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Brief</span>
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-semibold transition-colors"
                    aria-label={`Open live site for ${project.title}`}
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

export default Projects;
