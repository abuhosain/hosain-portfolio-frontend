"use client";

import React, { useState, useEffect } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Reveal } from "../animations/Reveal";
import { TiltCard } from "../animations/TiltCard";
import { FloatingParticles } from "../animations/FloatingParticles";
import { Github, ExternalLink, GitBranch, Star, GitCommit, Radio, Sparkles } from "lucide-react";

interface RepoItem {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

export function GitHubActivity() {
  const [repos, setRepos] = useState<RepoItem[]>([
    {
      name: "SmartFishBreeder-ESP32",
      description: "Autonomous aquaculture IoT telemetry & relay controller firmware with Firebase RTDB.",
      stars: 12,
      forks: 3,
      language: "C++",
      url: "https://github.com/abuhosain",
    },
    {
      name: "nextjs-clean-architecture",
      description: "Production-ready Next.js 16 App Router full-stack architecture boilerplate.",
      stars: 18,
      forks: 5,
      language: "TypeScript",
      url: "https://github.com/abuhosain",
    },
    {
      name: "node-express-auth-matrix",
      description: "Bulletproof REST API authentication server with refresh token rotation and RBAC.",
      stars: 9,
      forks: 2,
      language: "TypeScript",
      url: "https://github.com/abuhosain",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Attempt live fetch from public GitHub API
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://api.github.com/users/abuhosain/repos?sort=updated&per_page=3");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(
              data.map((r: { name: string; description?: string; stargazers_count: number; forks_count: number; language?: string; html_url: string }) => ({
                name: r.name,
                description: r.description || "Open source repository and developer tooling.",
                stars: r.stargazers_count,
                forks: r.forks_count,
                language: r.language || "TypeScript",
                url: r.html_url,
              }))
            );
          }
        }
      } catch {
        // Use default fallback
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const stats = [
    { label: "Primary Languages", value: "TypeScript & JavaScript" },
    { label: "Venture", value: "NeexG (neexg.com)" },
    { label: "Architecture", value: "React, Next.js & Node" },
    { label: "Embedded Systems", value: "ESP32 & IoT" },
  ];

  return (
    <section className="py-24 relative bg-[#07080D] border-t border-white/[0.08] overflow-hidden">
      <FloatingParticles count={20} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          index="10"
          badge="Open Source & Live Code Telemetry"
          badgeIcon={<Github className="w-3.5 h-3.5" />}
          title="Building in the Open,"
          titleAccent="Committing Daily."
          subtitle="A live 3D stream into open-source repositories, developer tooling experiments, and continuous code iteration."
        />

        <Reveal direction="up" delay={0.1}>
          <TiltCard maxTilt={6} glareOpacity={0.25} scaleOnHover={1.015}>
            <Card variant="glass" borderAccent className="p-8 md:p-10 bg-[#0C0C14]/40 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                      <span>github.com/abuhosain</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </h3>
                    <p className="text-xs text-neutral-300 font-mono mt-0.5">
                      Public repositories, hardware firmware, and full-stack boilers
                    </p>
                  </div>
                </div>

                <Button
                  href="https://github.com/abuhosain"
                  target="_blank"
                  variant="cyan-glow"
                  size="sm"
                  isMagnetic
                  rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  View GitHub Profile
                </Button>
              </div>

              {/* Live Fetched Repositories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 pb-8 border-b border-white/10">
                {repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-[#141424]/60 border border-white/10 hover:border-accent/50 group transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-white group-hover:text-accent transition-colors flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5 text-accent" />
                        <span className="truncate max-w-[140px]">{repo.name}</span>
                      </span>
                      <span className="text-[10px] font-mono text-accent/80 bg-accent/10 px-2 py-0.5 rounded">
                        {repo.language}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed mb-3">
                      {repo.description}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitCommit className="w-3 h-3" /> Active
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick stats cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                {stats.map((s) => (
                  <div key={s.label} className="p-3.5 rounded-xl bg-[#141424]/60 border border-white/5">
                    <div className="text-[10px] font-mono text-neutral-400">{s.label}</div>
                    <div className="text-xs sm:text-sm font-bold font-mono text-white mt-1">{s.value}</div>
                  </div>
                ))}
              </div>
            </Card>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}

export default GitHubActivity;
