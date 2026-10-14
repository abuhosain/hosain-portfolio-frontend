"use client";

import React from "react";
import { socialsData } from "@/data/socials";
import {
  Mail,
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  ShoppingBag,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "email":
        return <Mail className="w-4 h-4" />;
      case "whatsapp":
        return <MessageCircle className="w-4 h-4" />;
      case "phone":
        return <Phone className="w-4 h-4" />;
      case "facebook":
        return <Facebook className="w-4 h-4" />;
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      case "youtube":
        return <Youtube className="w-4 h-4" />;
      case "neexg":
        return <Globe className="w-4 h-4" />;
      case "oregent":
        return <ShoppingBag className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080C] text-neutral-400 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <h3 className="font-display font-bold text-lg text-white tracking-tight">
                Abu Hosain
              </h3>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Full-stack software engineer, founder of{" "}
              <a
                href="https://neexg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent font-medium underline underline-offset-4 decoration-white/20 transition-colors"
              >
                NeexG
              </a>{" "}
              and co-founder of{" "}
              <a
                href="https://oregent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-400 font-medium underline underline-offset-4 decoration-white/20 transition-colors"
              >
                Oregent
              </a>
              . International Gold Medalist at IWC &amp; I3C. Building web apps, SaaS products, e-commerce platforms, and AI automations.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              Bogura Polytechnic Institute (CST) &bull; Bangladesh
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About &amp; Honors
                </a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-white transition-colors">
                  Startups &amp; Ventures
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services &amp; Solutions
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Direct channels & Company */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Connect &amp; Ventures
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:abuhosainmin@gmail.com"
                className="flex items-center gap-2 text-neutral-300 hover:text-accent transition-colors"
                aria-label="Email Abu Hosain at abuhosainmin@gmail.com"
              >
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>abuhosainmin@gmail.com</span>
              </a>

              <a
                href="https://wa.me/8801319539510"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-accent transition-colors"
                aria-label="Message on WhatsApp 01319539510"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>01319539510 (WhatsApp)</span>
              </a>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="https://neexg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:underline font-medium text-xs font-mono"
                  aria-label="Visit NeexG official website at neexg.com"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>neexg.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href="https://oregent.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:underline font-medium text-xs font-mono"
                  aria-label="Visit Oregent official brand store at oregent.com"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>oregent.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            &copy; {currentYear} Abu Hosain. All rights reserved. Built with precision for{" "}
            <a
              href="https://neexg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              NeexG
            </a>{" "}
            &amp;{" "}
            <a
              href="https://oregent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Oregent
            </a>
            .
          </div>

          <div className="flex items-center gap-3">
            {socialsData.links.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel={`noopener noreferrer${link.relMe ? " me" : ""}`}
                aria-label={link.ariaLabel}
                className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.06] text-neutral-400 hover:text-white hover:border-white/20 transition-colors"
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              title="Back to top"
              aria-label="Scroll back to top"
              className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.06] text-neutral-400 hover:text-white hover:border-white/20 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
