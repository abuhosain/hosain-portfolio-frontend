"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projects";
import { soundFX } from "@/lib/sound";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Reveal } from "../animations/Reveal";
import { TiltCard } from "../animations/TiltCard";
import { ProjectModal } from "../modals/ProjectModal";
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, Sparkles, Layers } from "lucide-react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "SaaS / Platform", "E-Commerce", "IoT / Robotics", "Travel Tech", "Enterprise / Admin"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const handleCategoryFilter = (cat: string) => {
    soundFX.playClick(850);
    setSelectedCategory(cat);
  };

  const openProjectDetails = (project: ProjectItem) => {
    soundFX.playClick(900);
    setActiveModalProject(project);
  };

  return (
    <section id="projects" className="py-24 relative bg-[#08080B] border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/[0.04] blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          index="03"
          badge="Featured Engineering Work"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Architected from Scratch,"
          titleAccent="Built for Real Scale."
          subtitle="Explore selected SaaS platforms, e-commerce storefronts, hardware-integrated systems, and client software solutions with interactive 3D perspective."
        />

        {/* Category Filters */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-accent text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105"
                    : "bg-[#14141E]/60 backdrop-blur-md text-neutral-300 hover:text-white hover:bg-[#1C1C2A] border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects 3D Tilt Showcase */}
        <div className="space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <TiltCard maxTilt={8} glareOpacity={0.25} scaleOnHover={1.015}>
                  <Card
                    variant="glass"
                    borderAccent
                    data-cursor="project"
                    className="p-6 md:p-10 border-white/15 hover:border-accent/50 transition-all duration-300 group bg-[#0C0C14]/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Left: Project Details */}
                      <div className="lg:col-span-7 space-y-5">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-xs text-accent uppercase tracking-widest font-bold">
                            0{idx + 1} //
                          </span>
                          <Badge variant="accent" size="sm">
                            {project.category}
                          </Badge>
                          <Badge variant="default" size="sm">
                            {project.role}
                          </Badge>
                          {project.status === "Live" && (
                            <Badge variant="live" size="sm">
                              Live
                            </Badge>
                          )}
                        </div>

                        <div>
                          <h3
                            onClick={() => openProjectDetails(project)}
                            className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors flex items-center gap-2 font-display cursor-pointer"
                          >
                            <span>{project.title}</span>
                            <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                          </h3>
                          <p className="text-sm font-mono text-neutral-300 mt-1">
                            {project.tagline}
                          </p>
                        </div>

                        <p className="text-sm text-neutral-200 leading-relaxed font-normal">
                          {project.description}
                        </p>

                        {/* Key highlights */}
                        <div className="space-y-2 pt-2">
                          {project.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                              <CheckCircle2 className="w-4 h-4 text-accent/90 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 pt-3">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-[#161626]/70 border border-white/10 text-neutral-200 text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center gap-3 pt-4">
                          <Button
                            onClick={() => openProjectDetails(project)}
                            variant="cyan-glow"
                            size="sm"
                            isMagnetic
                            rightIcon={<Layers className="w-3.5 h-3.5" />}
                          >
                            Architecture Deep Dive
                          </Button>

                          {project.liveUrl && (
                            <Button
                              href={project.liveUrl}
                              variant="secondary"
                              size="sm"
                              isMagnetic
                              rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                            >
                              Live Experience
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button
                              href={project.githubUrl}
                              variant="outline"
                              size="sm"
                              isMagnetic
                              leftIcon={<Github className="w-3.5 h-3.5 text-neutral-400" />}
                            >
                              Source
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Right: Interactive 3D Showcase Teaser Box */}
                      <div className="lg:col-span-5">
                        <div
                          onClick={() => openProjectDetails(project)}
                          className="relative rounded-2xl bg-[#0F0F1A]/60 border border-white/10 p-6 overflow-hidden h-full flex flex-col justify-between shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] cursor-pointer hover:border-accent/40 transition-colors"
                        >
                          {/* Corner circuit accent */}
                          <div className="absolute top-0 right-0 w-28 h-28 bg-accent/5 rounded-bl-full pointer-events-none" />

                          <div>
                            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-mono text-xs text-neutral-300">
                              <span>System Architecture</span>
                              <span className="text-accent font-semibold">{project.category}</span>
                            </div>

                            {/* Stats cards */}
                            {project.stats && (
                              <div className="grid grid-cols-2 gap-3 mb-4">
                                {project.stats.map((s) => (
                                  <div key={s.label} className="p-3 rounded-xl bg-[#171726]/70 border border-white/5">
                                    <div className="text-[10px] font-mono text-neutral-400">{s.label}</div>
                                    <div className="text-base font-bold font-mono text-white mt-0.5">{s.value}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] text-neutral-300 space-y-1.5">
                              <div className="text-accent font-semibold">&gt; architecture_details</div>
                              <div>- Click to expand full spec</div>
                              <div>- 3D perspective depth physics</div>
                              <div>- Specular glare rendering</div>
                            </div>
                          </div>

                          <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                            <span>Status: {project.status}</span>
                            <span className="text-accent font-semibold">View Case Study →</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

export default Projects;
