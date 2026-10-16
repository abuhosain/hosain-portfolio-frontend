"use client";

import React, { useState } from "react";
import Image from "next/image";
import { socialsData } from "@/data/socials";
import { profileData } from "@/data/profile";
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageCircle,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(socialsData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Please enter your name.";
    if (!formState.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formState.message.trim()) newErrors.message = "Please write a message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      const mailtoUrl = `mailto:${socialsData.email}?subject=${encodeURIComponent(
        formState.subject || `Inquiry from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 400);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "email":
        return <Mail className="w-4 h-4" />;
      case "whatsapp":
        return <MessageCircle className="w-4 h-4 text-emerald-400" />;
      case "phone":
        return <Phone className="w-4 h-4 text-cyan-400" />;
      case "facebook":
        return <Facebook className="w-4 h-4 text-blue-400" />;
      case "instagram":
        return <Instagram className="w-4 h-4 text-pink-400" />;
      case "youtube":
        return <Youtube className="w-4 h-4 text-red-400" />;
      case "neexg":
        return <Globe className="w-4 h-4 text-blue-400" />;
      case "oregent":
        return <ShoppingBag className="w-4 h-4 text-amber-400" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-white/[0.08] bg-[#090A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              // Contact &amp; Inquiries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Contact Abu Hosain — Let&apos;s Build Something Meaningful Together
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-prose">
            Whether you want to build a new SaaS product, automate team workflows with n8n/Zapier, scale an e-commerce platform, or consult on technical architecture, get in touch with Abu Hosain directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Engineer & Founder Card */}
            <div className="p-5 rounded-2xl bg-[#0F111A] border border-white/[0.08] flex items-center gap-4 shadow-sm">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/20 ring-2 ring-accent/30 shrink-0">
                <Image
                  src={profileData.image}
                  alt={profileData.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover object-[center_28%]"
                />
                <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0F111A]" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white font-display">{profileData.name}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Online
                  </span>
                </div>
                <p className="text-xs text-neutral-300">Direct Founder &amp; Engineer Access</p>
                <p className="text-[11px] font-mono text-neutral-400">Response time: &lt; 24 hours</p>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold">
                  Direct Email
                </span>
                <h3 className="text-lg font-bold text-white font-display mt-0.5">
                  Send an Email
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Direct communication for consulting, contracts, and new product opportunities.
                </p>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <a
                  href={`mailto:${socialsData.email}`}
                  className="text-xs sm:text-sm font-mono text-white hover:text-accent truncate transition-colors min-h-[44px] flex items-center"
                  aria-label={`Send email to ${socialsData.email}`}
                >
                  {socialsData.email}
                </a>

                <button
                  onClick={copyEmail}
                  className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${socialsData.email}`}
                  className="flex-1 min-h-[44px] flex items-center justify-center py-2 px-3 rounded-lg bg-accent hover:bg-accent-hover text-white text-xs font-semibold text-center transition-colors shadow-sm"
                  aria-label="Open default mail client"
                >
                  Open Mail Client
                </a>

                <button
                  onClick={copyEmail}
                  className="min-h-[44px] px-4 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] text-neutral-300 text-xs font-medium transition-colors"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Direct WhatsApp & Phone */}
            <div className="p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold">
                Direct Messaging &amp; Call
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={socialsData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 min-h-[44px] rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/40 text-neutral-200 hover:text-white transition-colors group"
                  aria-label="Message Abu Hosain on WhatsApp at 01319539510"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-semibold">WhatsApp</div>
                    <div className="text-[11px] font-mono text-neutral-400">
                      {socialsData.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={socialsData.phoneTel}
                  className="flex items-center gap-2.5 p-3 min-h-[44px] rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/40 text-neutral-200 hover:text-white transition-colors group"
                  aria-label="Direct phone call to 01319539510"
                >
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-semibold">Phone</div>
                    <div className="text-[11px] font-mono text-neutral-400">
                      {socialsData.phone}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social & Professional Links with rel="me" */}
            <div className="p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                Online Profiles &amp; Ventures
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {socialsData.links
                  .filter((l) => l.platform.toLowerCase() !== "email" && l.platform.toLowerCase() !== "phone")
                  .map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel={`noopener noreferrer${link.relMe ? " me" : ""}`}
                      aria-label={link.ariaLabel}
                      className="flex items-center justify-between p-3 min-h-[44px] rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] text-neutral-300 hover:text-white transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="p-1 rounded bg-white/[0.04]">
                          {getSocialIcon(link.platform)}
                        </span>
                        <div>
                          <div className="text-xs font-medium">{link.label}</div>
                          <div className="text-[10px] font-mono text-neutral-500">
                            {link.handle}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-accent transition-colors" />
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F111A] border border-white/[0.08] shadow-sm">
              <h3 className="text-xl font-bold text-white font-display mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Fill in the details below to initiate a project or engagement conversation.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-300">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Your name or company"
                      value={formState.name}
                      onChange={(e) => {
                        setFormState({ ...formState, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#141624] border text-white text-sm focus:outline-none focus:border-accent font-sans transition-colors ${
                        errors.name ? "border-red-500/70" : "border-white/[0.08]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-300">
                      Your Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      placeholder="your.email@domain.com"
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({ ...formState, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#141624] border text-white text-sm focus:outline-none focus:border-accent font-sans transition-colors ${
                        errors.email ? "border-red-500/70" : "border-white/[0.08]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-300">
                    Subject / Topic (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Web App / SaaS / AI Automation / Branding"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#141624] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-accent font-sans transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-300">
                    Project Details &amp; Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your product requirements, scope, timeline, or engineering goals..."
                    value={formState.message}
                    onChange={(e) => {
                      setFormState({ ...formState, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#141624] border text-white text-sm focus:outline-none focus:border-accent font-sans transition-colors resize-none ${
                      errors.message ? "border-red-500/70" : "border-white/[0.08]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-red-400">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full min-h-[44px] py-3 px-4 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {isSending ? (
                    <span>Opening Draft...</span>
                  ) : isSent ? (
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Message Drafted in Email Client</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
