"use client";

import React, { useState, useEffect } from "react";
import { socialsData } from "@/data/socials";
import { soundFX } from "@/lib/sound";
import { TiltCard } from "../animations/TiltCard";
import { ArrowUp, Github, Linkedin, Facebook, Mail, Globe, Radio } from "lucide-react";
import { Magnetic } from "../animations/Magnetic";

export function Footer() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    soundFX.playShockwave();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "facebook":
        return <Facebook className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative bg-[#060609] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-accent/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_#00F0FF] animate-pulse" />
              <h3 className="font-display font-black text-xl tracking-wider text-white uppercase">
                Abu Hosain
              </h3>
            </div>
            <p className="text-sm text-neutral-300 max-w-md leading-relaxed font-normal">
              Software Engineer, Full-Stack Architect &amp; Founder. Building scalable digital products,
              autonomous IoT hardware, and high-performance modern web platforms.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-400 font-medium">
                Open for high-impact software &amp; hardware projects
              </span>
            </div>
          </div>

          {/* Col 2: Navigation shortcuts */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-neutral-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#lab" className="hover:text-accent transition-colors">
                  The Lab (Hardware &amp; IoT)
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-accent transition-colors">
                  SystomeX Venture
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-accent transition-colors">
                  Career Journey
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Live Telemetry Card with 3D Tilt */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-neutral-200 uppercase tracking-wider">
              System Telemetry
            </h4>
            <TiltCard maxTilt={8} glareOpacity={0.2}>
              <div className="p-4 rounded-2xl bg-[#0F0F1A]/50 border border-white/10 backdrop-blur-xl space-y-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Location:</span>
                  <span className="text-neutral-200 font-semibold">Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Local Time:</span>
                  <span className="text-accent font-bold">{timeStr || "06:00 AM"}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Engine:</span>
                  <span className="text-emerald-400 font-semibold">Three.js + Lenis</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
          <div>
            © {new Date().getFullYear()} Abu Hosain. Zero hardcoded JSX. Engineered with craft.
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialsData.links.map((link) => (
              <Magnetic key={link.platform} strength={0.25}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-accent hover:border-accent/40 hover:bg-white/10 transition-all inline-flex"
                >
                  {getSocialIcon(link.platform)}
                </a>
              </Magnetic>
            ))}

            <Magnetic strength={0.3}>
              <button
                onClick={scrollToTop}
                title="Scroll back to top"
                className="p-2.5 rounded-full bg-accent/20 border border-accent/40 text-accent hover:bg-accent hover:text-black transition-all ml-2 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
