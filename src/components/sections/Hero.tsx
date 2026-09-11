"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profile";
import { soundFX } from "@/lib/sound";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Reveal } from "../animations/Reveal";
import { Hero3DCanvas } from "../3d/Hero3DCanvas";
import { FloatingParticles } from "../animations/FloatingParticles";
import { ArrowDown, Terminal, Rocket, Zap, Activity, Cpu, ChevronDown, Sparkles } from "lucide-react";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isCorePulsing, setIsCorePulsing] = useState(false);
  const [isWarping, setIsWarping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profileData.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const triggerQuantumShockwave = () => {
    soundFX.playShockwave();
    setIsCorePulsing(true);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("hero:pulse_core"));
    }
    setTimeout(() => setIsCorePulsing(false), 800);
  };

  const triggerWarpSpeed = () => {
    soundFX.playChirp();
    setIsWarping(true);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("hero:pulse_core"));
    }
    setTimeout(() => setIsWarping(false), 1000);
  };

  const scrollToAbout = () => {
    soundFX.playClick(650);
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[640px] max-h-[1080px] flex flex-col justify-between items-center pt-24 pb-4 overflow-hidden tech-grid">
      {/* 3D WebGL Interactive Quantum Three.js Canvas */}
      <Hero3DCanvas />

      {/* Floating 3D Ambient Dust Particles */}
      <FloatingParticles count={25} />

      {/* Dynamic Background Atmospheric Nebulas */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Left Interactive Cyber-HUD Widget */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -translate-y-1/2 left-4 xl:left-8 2xl:left-14 hidden xl:block z-20"
      >
        <div className="p-4 rounded-2xl bg-[#0B0B14]/45 border border-accent/40 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-2.5 w-60">
          <div className="flex items-center justify-between text-[10px] text-neutral-400 border-b border-white/10 pb-1.5 font-mono">
            <span className="flex items-center gap-1.5 text-accent font-semibold">
              <Cpu className="w-3.5 h-3.5" /> KERNEL_ENGINE
            </span>
            <span className="text-emerald-400 font-bold">ONLINE</span>
          </div>
          <div className="text-xs text-white font-medium">
            Abu Hosain <span className="text-neutral-400 font-normal">:: Architect</span>
          </div>
          <div className="text-[10px] text-neutral-300 font-mono">
            ESP32 IoT · Cloud · Full-Stack
          </div>
          <button
            onClick={triggerWarpSpeed}
            className={`w-full mt-1 px-3 py-1.5 rounded-xl border font-semibold text-[10px] uppercase tracking-wider font-mono transition-all flex items-center justify-center gap-1.5 ${
              isWarping
                ? "bg-emerald-400 text-black shadow-[0_0_20px_#10B981]"
                : "bg-accent/15 border-accent/40 text-accent hover:bg-accent hover:text-black shadow-sm"
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>{isWarping ? "Warp Activated!" : "Trigger Warp Speed"}</span>
          </button>
        </div>
      </motion.div>

      {/* Right Interactive Cyber-HUD Widget */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -translate-y-1/2 right-4 xl:right-8 2xl:right-14 hidden xl:block z-20"
      >
        <div className="p-4 rounded-2xl bg-[#0B0B14]/45 border border-purple-500/40 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-2.5 w-60">
          <div className="flex items-center justify-between text-[10px] text-neutral-400 border-b border-white/10 pb-1.5 font-mono">
            <span className="flex items-center gap-1.5 text-purple-400 font-semibold">
              <Activity className="w-3.5 h-3.5 animate-pulse" /> 3D TELEMETRY
            </span>
            <span className="text-accent font-bold font-mono">60 FPS</span>
          </div>
          <div className="text-[11px] text-neutral-300 font-mono flex justify-between">
            <span>Core Status:</span>
            <span className="text-emerald-400 font-semibold">Nominal</span>
          </div>
          <div className="text-[10px] text-neutral-400 font-mono">
            Three.js WebGL Particle Mesh
          </div>
          <button
            onClick={triggerQuantumShockwave}
            className={`w-full mt-1 px-3 py-1.5 rounded-xl border font-semibold text-[10px] uppercase tracking-wider font-mono transition-all flex items-center justify-center gap-1.5 ${
              isCorePulsing
                ? "bg-purple-500 text-white shadow-[0_0_20px_#8B5CF6]"
                : "bg-purple-500/15 border-purple-500/40 text-purple-300 hover:bg-purple-500 hover:text-white shadow-sm"
            }`}
          >
            <Zap className="w-3 h-3" />
            <span>{isCorePulsing ? "Shockwave Fired!" : "Pulse Quantum Core"}</span>
          </button>
        </div>
      </motion.div>

      {/* Top Spacer */}
      <div className="w-full h-1" />

      {/* Main Glassmorphic Hero Centerpiece */}
      <div className="relative max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 z-10 w-full">
        <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-[#08080C]/35 border border-white/15 backdrop-blur-[8px] shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.02)] text-center">
          
          {/* Availability Status Badge & Terminal Line */}
          <Reveal direction="up" delay={0.05}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
              <Badge variant="live" size="sm">
                {profileData.availability.label}
              </Badge>
              <div className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] text-accent font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30">
                <Terminal className="w-3 h-3" />
                <span>&gt; hello world</span>
              </div>
            </div>
          </Reveal>

          {/* High-Contrast Crisp Headline */}
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-3 leading-[1.08] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] select-none">
              Abu Hosain<span className="text-accent">.</span>
            </h1>
          </Reveal>

          {/* Dynamic Rotating Role with Glassy Pill Tag */}
          <Reveal direction="up" delay={0.15}>
            <div className="h-11 flex items-center justify-center mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#10101A]/60 border border-white/20 backdrop-blur-md shadow-[inset_0_0_12px_rgba(0,240,255,0.08)]">
                <span className="text-xs sm:text-sm font-mono text-neutral-300">
                  Specialized as:
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xs sm:text-sm md:text-base font-bold text-accent font-mono tracking-wide drop-shadow-[0_0_10px_rgba(0,240,255,0.6)]"
                  >
                    {profileData.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          {/* Subcopy */}
          <Reveal direction="up" delay={0.2}>
            <p className="text-xs sm:text-sm md:text-base text-neutral-200 max-w-2xl mx-auto leading-relaxed mb-6 font-normal drop-shadow">
              {profileData.bio}
            </p>
          </Reveal>

          {/* Magnetic Action Buttons */}
          <Reveal direction="up" delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                href="#projects"
                variant="cyan-glow"
                size="md"
                isMagnetic
                rightIcon={<ArrowDown className="w-4 h-4" />}
              >
                Explore Work
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="md"
                isMagnetic
                leftIcon={<Rocket className="w-4 h-4 text-accent" />}
              >
                Let&apos;s Build
              </Button>

              <button
                onClick={triggerQuantumShockwave}
                title="Pulse 3D Quantum Core in background"
                className={`p-2.5 rounded-xl border text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isCorePulsing
                    ? "bg-accent text-black font-bold shadow-[0_0_20px_#00F0FF]"
                    : "bg-[#141422]/60 border-white/15 text-neutral-300 hover:text-white hover:border-accent/40"
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-accent" />
                <span className="hidden sm:inline">Pulse 3D Core</span>
              </button>
            </div>
          </Reveal>

          {/* Quick Scope Stats Row */}
          <Reveal direction="up" delay={0.3}>
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
              {profileData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-2.5 rounded-xl bg-[#12121C]/40 border border-white/10 backdrop-blur-md"
                >
                  <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-sm font-bold text-white font-display">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>

      {/* Bottom User-Friendly Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="z-10 cursor-pointer select-none"
        onClick={scrollToAbout}
      >
        <button
          className="flex flex-col items-center gap-1 text-neutral-400 hover:text-accent transition-colors font-mono text-[10px] tracking-widest uppercase focus:outline-none"
          aria-label="Scroll to explore"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 text-accent" />
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;
