"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { socialsData } from "@/data/socials";
import { soundFX } from "@/lib/sound";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Reveal } from "../animations/Reveal";
import { TiltCard } from "../animations/TiltCard";
import { FloatingParticles } from "../animations/FloatingParticles";
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Facebook,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const copyEmail = () => {
    soundFX.playChirp();
    navigator.clipboard.writeText(socialsData.email);
    setCopied(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#00F0FF", "#8B5CF6", "#10B981"],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setIsSending(true);
    soundFX.playShockwave();

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00F0FF", "#38BDF8", "#FFFFFF"],
      });
      window.location.href = `mailto:${socialsData.email}?subject=Project Inquiry from ${encodeURIComponent(
        formState.name
      )}&body=${encodeURIComponent(formState.message)}`;
    }, 700);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "facebook":
        return <Facebook className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07070A] border-t border-white/5 tech-grid overflow-hidden">
      <FloatingParticles count={25} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-accent/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          index="11"
          badge="Get in Touch"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Have an Idea?"
          titleAccent="Let's Turn It Into Something Real."
          subtitle="Whether you have an ambitious product to build, architectural challenges to solve, or want to collaborate on hardware & software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Email Copy */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Copy Card */}
            <Reveal direction="left" delay={0.1}>
              <TiltCard maxTilt={8} glareOpacity={0.25}>
                <Card variant="glass" borderAccent className="p-6 md:p-8 bg-[#0C0C14]/40 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="live" size="sm">
                      Direct Channel
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">
                    Drop me an email
                  </h3>
                  <p className="text-xs text-neutral-300 mb-6 leading-relaxed font-normal">
                    I typically respond within 24 hours. Feel free to copy the address or click to send directly.
                  </p>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#141424]/70 border border-white/10 mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent">
                      <Mail className="w-4 h-4" />
                      <span>{socialsData.email}</span>
                    </div>

                    <button
                      onClick={copyEmail}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <Button
                    onClick={copyEmail}
                    variant={copied ? "secondary" : "cyan-glow"}
                    size="md"
                    className="w-full"
                    leftIcon={copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  >
                    {copied ? "Email Copied to Clipboard!" : "Copy Email Address"}
                  </Button>
                </Card>
              </TiltCard>
            </Reveal>

            {/* Social Grid with 3D Tilt */}
            <Reveal direction="left" delay={0.2}>
              <TiltCard maxTilt={8} glareOpacity={0.2}>
                <Card variant="glass" className="p-6 bg-[#0C0C14]/40 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
                  <h4 className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                    Connect on Social &amp; Professional Networks
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {socialsData.links
                      .filter((l) => l.platform.toLowerCase() !== "email")
                      .map((link) => (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-xl bg-[#141424]/60 border border-white/10 hover:border-accent/50 text-neutral-300 hover:text-white group transition-all"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="p-1.5 rounded-lg bg-white/5 text-neutral-400 group-hover:text-accent transition-colors">
                              {getSocialIcon(link.platform)}
                            </span>
                            <div>
                              <div className="text-xs font-semibold font-display">{link.label}</div>
                              <div className="text-[10px] font-mono text-neutral-500">{link.handle}</div>
                            </div>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-600 group-hover:text-accent transition-colors" />
                        </a>
                      ))}
                  </div>
                </Card>
              </TiltCard>
            </Reveal>
          </div>

          {/* Right Column: Instant Message Form in 3D Tilt Card */}
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.15}>
              <TiltCard maxTilt={6} glareOpacity={0.25}>
                <Card variant="glass" borderAccent className="p-6 md:p-8 bg-[#0C0C14]/40 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    <h3 className="text-xl font-bold text-white font-display">
                      Send a Direct Message
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-300 mb-6 font-normal">
                    Fill in your details below and your mail client will open with the formatted draft.
                  </p>

                  <form onSubmit={handleSendMessage} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-neutral-300">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Hunter"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#141424]/70 border border-white/10 text-white text-sm focus:outline-none focus:border-accent font-mono placeholder-neutral-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-neutral-300">Your Email</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. alex@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#141424]/70 border border-white/10 text-white text-sm focus:outline-none focus:border-accent font-mono placeholder-neutral-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-neutral-300">Project or Message Details</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Describe your project, timeline, or engineering inquiry..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141424]/70 border border-white/10 text-white text-sm focus:outline-none focus:border-accent font-mono placeholder-neutral-500 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="cyan-glow"
                      size="lg"
                      className="w-full"
                      isMagnetic
                      disabled={isSending}
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      {isSending ? "Preparing Dispatch..." : isSent ? "Draft Ready!" : "Send Message"}
                    </Button>
                  </form>
                </Card>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
