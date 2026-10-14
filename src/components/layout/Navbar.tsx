"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText, Globe, ShoppingBag } from "lucide-react";
import { ResumeModal } from "../modals/ResumeModal";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = scrollY + 220;

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,padding] duration-200 ease-out ${
          scrolled
            ? "bg-[#090A0F]/90 backdrop-blur-md border-white/[0.08] py-3 shadow-md"
            : "bg-transparent border-white/0 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand identifier */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white hover:text-white/90 transition-colors group min-h-[44px]"
            aria-label="Abu Hosain - Home"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-accent transition-colors">
                Abu Hosain
              </span>
              <span className="text-[11px] text-neutral-400 font-mono hidden sm:inline">
                NeexG &amp; Oregent
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1 bg-[#13151F]/80 px-3 py-1.5 rounded-full border border-white/[0.08]"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-150 min-h-[36px] flex items-center ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}

            {/* External link to NeexG */}
            <a
              href="https://neexg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors min-h-[36px]"
              aria-label="Visit NeexG official agency website"
            >
              <span>NeexG</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* External link to Oregent */}
            <a
              href="https://oregent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors min-h-[36px]"
              aria-label="Visit Oregent official brand store"
            >
              <span>Oregent</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-lg border border-white/[0.1] hover:border-white/20 text-neutral-300 hover:text-white text-xs font-medium transition-colors"
              aria-label="View interactive curriculum vitae"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[44px] rounded-lg bg-accent hover:bg-accent-hover text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button (>= 44x44px tap targets) */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setResumeOpen(true)}
              className="px-3 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-white/10 text-neutral-300 text-xs font-medium"
              aria-label="View Resume"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-neutral-300 hover:text-white border border-white/10 bg-white/[0.04]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile Slide-in Drawer with Scroll Lock */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xs md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-x-0 top-[62px] z-50 bg-[#090A0F]/98 border-b border-white/10 p-6 shadow-2xl md:hidden max-h-[calc(100dvh-62px)] overflow-y-auto"
            >
              <div className="flex flex-col gap-2 max-w-md mx-auto">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 px-3.5 min-h-[44px] rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-neutral-600">→</span>
                  </a>
                ))}

                <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2">
                  <a
                    href="https://neexg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 min-h-[44px] rounded-xl text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" /> NeexG
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://oregent.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 min-h-[44px] rounded-xl text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-1.5">
                      <ShoppingBag className="w-3.5 h-3.5" /> Oregent
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setResumeOpen(true);
                    }}
                    className="w-full py-3 min-h-[44px] rounded-xl border border-white/15 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-white/5"
                  >
                    <FileText className="w-4 h-4" /> View Resume (CV)
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 min-h-[44px] rounded-xl bg-accent hover:bg-accent-hover text-white text-xs font-semibold flex items-center justify-center shadow-sm"
                  >
                    Contact Abu Hosain
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}

export default Navbar;
