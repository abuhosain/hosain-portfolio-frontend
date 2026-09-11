"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Search,
  ExternalLink,
  Code2,
  Cpu,
  Mail,
  User,
  Layers,
  ArrowRight,
  X,
  FileText,
  BookOpen,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { socialsData } from "@/data/socials";
import { ResumeModal } from "../modals/ResumeModal";
import { soundFX } from "@/lib/sound";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Actions" | "Social";
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open with "/" when not in input/textarea, or Cmd+K / Ctrl+K
      const activeTag = document.activeElement?.tagName.toLowerCase();
      const isInput = activeTag === "input" || activeTag === "textarea";

      if ((e.key === "/" && !isInput) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigateTo = (hash: string) => {
    setIsOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openResume = () => {
    setIsOpen(false);
    soundFX.playClick(850);
    setResumeOpen(true);
  };

  const commands: CommandItem[] = [
    {
      id: "action-resume",
      title: "View & Print Interactive Resume (CV)",
      category: "Actions",
      icon: <FileText className="w-4 h-4 text-accent" />,
      action: openResume,
      shortcut: "G R",
    },
    {
      id: "nav-about",
      title: "About Abu Hosain",
      category: "Navigation",
      icon: <User className="w-4 h-4 text-accent" />,
      action: () => navigateTo("#about"),
      shortcut: "G A",
    },
    {
      id: "nav-skills",
      title: "Tech Stack & Skills",
      category: "Navigation",
      icon: <Code2 className="w-4 h-4 text-accent" />,
      action: () => navigateTo("#skills"),
      shortcut: "G S",
    },
    {
      id: "nav-projects",
      title: "Projects Showcase",
      category: "Navigation",
      icon: <Layers className="w-4 h-4 text-accent" />,
      action: () => navigateTo("#projects"),
      shortcut: "G P",
    },
    {
      id: "nav-lab",
      title: "The Lab (Robotics & IoT)",
      category: "Navigation",
      icon: <Cpu className="w-4 h-4 text-accent" />,
      action: () => navigateTo("#lab"),
      shortcut: "G L",
    },
    {
      id: "nav-articles",
      title: "Engineering Notes & Case Studies",
      category: "Navigation",
      icon: <BookOpen className="w-4 h-4 text-accent" />,
      action: () => navigateTo("#articles"),
      shortcut: "G N",
    },
    {
      id: "nav-contact",
      title: "Contact & Inquiries",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-accent" />,
      action: () => navigateTo("#contact"),
      shortcut: "G C",
    },
    ...projectsData.map((p) => ({
      id: `proj-${p.id}`,
      title: `Project: ${p.title}`,
      category: "Projects" as const,
      icon: <ExternalLink className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo(`#projects`),
    })),
    {
      id: "action-email",
      title: `Send Email (${socialsData.email})`,
      category: "Actions",
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.location.href = `mailto:${socialsData.email}`;
        setIsOpen(false);
      },
    },
    ...socialsData.links.map((s) => ({
      id: `social-${s.platform}`,
      title: `Open ${s.label} (${s.handle})`,
      category: "Social" as const,
      icon: <ArrowRight className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.open(s.url, "_blank");
        setIsOpen(false);
      },
    })),
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-[#0F0F16] border border-white/15 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-10"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#14141E]/80">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <Terminal className="w-4 h-4 text-accent" />
                <span>terminal@abu-hosain:~</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-neutral-400">
                  ESC to close
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/5 gap-3">
              <Search className="w-5 h-5 text-accent" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command, project, or section..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none font-mono"
              />
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, idx) => (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm text-neutral-300 hover:bg-white/5 hover:text-white group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1.5 rounded-md bg-[#181824] border border-white/5 group-hover:border-accent/30 transition-colors">
                        {cmd.icon}
                      </span>
                      <div>
                        <div className="font-medium">{cmd.title}</div>
                        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                          {cmd.category}
                        </div>
                      </div>
                    </div>
                    {cmd.shortcut && (
                      <span className="text-[11px] font-mono text-neutral-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {cmd.shortcut}
                      </span>
                    )}
                  </button>
                ))
              ) : (
                <div className="py-8 text-center text-sm font-mono text-neutral-500">
                  No matching command found for &quot;{search}&quot;
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-[#12121A] border-t border-white/5 text-[11px] font-mono text-neutral-500 flex justify-between">
              <span>Tip: Press &apos;/&apos; anywhere on the site to reopen</span>
              <span>abu-hosain.dev</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

    <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
