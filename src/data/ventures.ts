export interface VentureItem {
  id: string;
  name: string;
  role: string;
  tagline: string;
  brief: string;
  link: string;
  tags: string[];
  accentColor: string;
  badge: string;
}

export const venturesData: VentureItem[] = [
  {
    id: "neexg",
    name: "NeexG",
    role: "Founder & CEO",
    badge: "Agency & Digital Products",
    tagline: "Web development and digital product agency.",
    brief: "A Bangladesh-based agency building websites, SaaS platforms, e-commerce systems and AI automation solutions for clients.",
    link: "https://neexg.com",
    tags: ["Web & SaaS Development", "E-Commerce Systems", "AI Automation (n8n & Zapier)", "Digital Products"],
    accentColor: "#2563EB",
  },
  {
    id: "systomex",
    name: "Systomex",
    role: "Founder",
    badge: "Bulk Email Sender & SaaS",
    tagline: "High-volume bulk email sending and marketing delivery platform.",
    brief: "A high-performance bulk email sender engineered for automated bulk email marketing campaigns, cold outreach delivery, and contact list segmentation.",
    link: "https://systomex.com",
    tags: ["Bulk Email Sender", "Deliverability & SMTP", "Cold Outreach", "Email Marketing SaaS"],
    accentColor: "#059669",
  },
  {
    id: "oregent",
    name: "Oregent",
    role: "Co-Founder",
    badge: "D2C Brand & E-Commerce",
    tagline: "Fashion & sneaker e-commerce brand.",
    brief: "A modern fashion and sneaker brand and online store, built from branding to storefront. I co-founded it and handle the product, tech and brand side.",
    link: "https://oregent.com",
    tags: ["Brand Identity", "Storefront Architecture", "Product Strategy", "Fashion E-Commerce"],
    accentColor: "#D97706",
  },
];
