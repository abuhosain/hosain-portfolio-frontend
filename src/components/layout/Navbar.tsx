"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Terminal, ArrowUpRight, Cpu, Radio, Sparkles, Activity, FileText } from "lucide-react";
import { Magnetic } from "../animations/Magnetic";
import { ResumeModal } from "../modals/ResumeModal";
import { soundFX } from "@/lib/sound";

const NAV_ITEMS = [
  { label: "About", href: "#about", code: "01" },
  { label: "Skills", href: "#skills", code: "02" },
  { label: "Projects", href: "#projects", code: "03" },
  { label: "Lab", href: "#lab", code: "04" },
  { label: "SystomeX", href: "#founder", code: "05" },
  { label: "Journey", href: "#journey", code: "06" },
  { label: "Notes", href: "#articles", code: "07" },
  { label: "Contact", href: "#contact", code: "08" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // 3D Spatial Tilt Coordinates for Navbar
  const navRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

      // Calculate total scroll percentage
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress(Math.round((scrollY / winHeight) * 100));
      }

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = scrollY + 240;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3D Navbar Mouse Tracking
  const handleNavMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navRef.current || shouldReduceMotion) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -5;
    const rotY = ((x - centerX) / centerX) * 5;

    setTilt({ rotateX: rotX, rotateY: rotY });
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.22 });
  };

  const handleNavMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const openTerminal = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "/" }));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-2 sm:px-4 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        {/* 3D Perspective Wrapper */}
        <div style={{ perspective: "1200px" }} className="w-full max-w-7xl flex justify-center">
          <motion.nav
            ref={navRef}
            onMouseMove={handleNavMouseMove}
            onMouseLeave={handleNavMouseLeave}
            animate={{
              rotateX: tilt.rotateX,
              rotateY: tilt.rotateY,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.1 }}
            style={{ transformStyle: "preserve-3d" }}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={`relative flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-2 rounded-full border transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.6)] ${
              scrolled
                ? "bg-[#0A0A0F]/80 backdrop-blur-2xl border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,240,255,0.04)]"
                : "bg-[#0E0E16]/60 backdrop-blur-xl border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            }`}
          >
            {/* Dynamic Specular Glare Reflection on Navbar Glass */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full z-0 transition-opacity duration-200"
              style={{
                opacity: glare.opacity,
                background: `radial-gradient(circle 200px at ${glare.x}% ${glare.y}%, rgba(0, 240, 255, 0.45), transparent 70%)`,
              }}
            />

            {/* Bottom Laser / Energy Wave line */}
            <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent pointer-events-none" />

            {/* Logo Mark with 3D Quantum Spinning Bead */}
            <div style={{ transform: "translateZ(10px)" }} className="shrink-0">
              <Magnetic strength={0.25}>
                <a
                  href="#"
                  className="flex items-center gap-2 py-1 px-2.5 rounded-full text-white font-bold tracking-tight text-xs sm:text-sm hover:text-accent transition-colors group whitespace-nowrap"
                >
                  {/* Rotating 3D Quantum Bead */}
                  <div className="relative w-4 h-4 flex items-center justify-center shrink-0">
                    <span className="animate-spin-slow w-3.5 h-3.5 border border-accent/80 rounded-[3px] rotate-45 group-hover:scale-125 transition-transform" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent absolute shadow-[0_0_8px_#00F0FF]" />
                  </div>
                  <span className="font-display font-black uppercase tracking-wider text-xs sm:text-sm whitespace-nowrap">
                    Abu Hosain
                  </span>
                </a>
              </Magnetic>
            </div>

            {/* Desktop Nav Items with 3D Magnetic Elevation */}
            <div
              style={{ transform: "translateZ(12px)" }}
              className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-[#12121C]/40 p-1 rounded-full border border-white/5 backdrop-blur-md shrink-0"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative px-2.5 xl:px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 group select-none whitespace-nowrap ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-neutral-400 hover:text-neutral-100 hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active3DNavIndicator"
                        className="absolute inset-0 bg-accent/20 border border-accent/50 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      <span className="text-[9px] text-accent/60 opacity-0 xl:group-hover:opacity-100 transition-opacity hidden xl:inline">
                        {item.code}
                      </span>
                      <span className="whitespace-nowrap">{item.label}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Actions: Telemetry HUD, Terminal Trigger & Contact Button */}
            <div
              style={{ transform: "translateZ(15px)" }}
              className="flex items-center gap-1.5 sm:gap-2 shrink-0"
            >
              {/* Live Scroll Telemetry Pill */}
              <div className="hidden 2xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141422]/60 border border-white/10 text-[11px] font-mono text-neutral-300 whitespace-nowrap">
                <Activity className="w-3 h-3 text-accent animate-pulse" />
                <span className="text-accent font-semibold">{scrollProgress}%</span>
              </div>

              {/* Resume / CV Drawer Trigger */}
              <Magnetic strength={0.25}>
                <button
                  onClick={() => {
                    soundFX.playClick(850);
                    setResumeOpen(true);
                  }}
                  title="View & Print Interactive Resume"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161626]/70 border border-white/15 text-neutral-300 hover:text-accent hover:border-accent/60 text-xs font-mono transition-all shadow-sm group whitespace-nowrap"
                >
                  <FileText className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-[11px] font-semibold">CV</span>
                </button>
              </Magnetic>

              {/* Terminal Palette Trigger */}
              <Magnetic strength={0.25}>
                <button
                  onClick={openTerminal}
                  title="Open Command Palette (Press '/')"
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#161626]/70 border border-white/15 text-neutral-300 hover:text-white hover:border-accent/60 text-xs font-mono transition-all shadow-sm group whitespace-nowrap"
                >
                  <Terminal className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform shrink-0" />
                  <span className="hidden sm:inline text-[11px] text-neutral-400 font-mono">/</span>
                </button>
              </Magnetic>

              {/* Holographic Magnetic CTA */}
              <Magnetic strength={0.3}>
                <a
                  href="#contact"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-accent/20 border border-accent/50 text-accent hover:bg-accent hover:text-black text-xs font-bold font-mono tracking-wide transition-all shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] whitespace-nowrap"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </a>
              </Magnetic>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full text-neutral-300 hover:text-white bg-white/5 border border-white/15 hover:border-accent/40 transition-colors shrink-0"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4 text-accent" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* 3D Mobile Deck Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl flex flex-col justify-center px-6 lg:hidden"
          >
            <div className="flex flex-col gap-3 max-w-sm mx-auto w-full p-6 rounded-3xl bg-[#0F0F1A]/90 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2">
                <span className="text-xs font-mono text-accent uppercase tracking-widest font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> 3D Cyber Nav
                </span>
                <span className="text-[11px] font-mono text-neutral-400">
                  {scrollProgress}% Scrolled
                </span>
              </div>

              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white/5 text-lg font-bold text-neutral-200 hover:text-accent font-display transition-colors border-b border-white/5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-accent/70">{item.code}</span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </motion.a>
              ))}

              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    soundFX.playClick(850);
                    setResumeOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-accent/20 border border-accent/50 text-accent font-mono text-xs flex items-center justify-center gap-2 hover:bg-accent hover:text-black transition-colors font-semibold"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Interactive Resume (CV)</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(openTerminal, 200);
                  }}
                  className="w-full py-2.5 rounded-xl bg-white/5 border border-white/15 text-neutral-300 font-mono text-xs flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Terminal Palette (/)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}

export default Navbar;
