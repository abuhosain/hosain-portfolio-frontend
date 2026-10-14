export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  featured?: boolean;
  tags: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-saas",
    title: "Web & SaaS Development",
    description: "Custom websites, e-commerce platforms and SaaS products with React, Next.js and Node.js.",
    iconName: "Code2",
    featured: true,
    tags: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL/MongoDB"],
  },
  {
    id: "branding",
    title: "Branding & Brand Identity",
    description: "Positioning, visual identity, brand voice and social media presence, so your website, product and content feel like one brand.",
    iconName: "Palette",
    featured: true,
    tags: ["Brand Strategy", "Visual Identity", "Brand Voice", "Social Media Branding"],
  },
  {
    id: "ai-automation",
    title: "AI Automation (n8n & Zapier)",
    description: "Automate lead capture, CRM sync, email/WhatsApp follow-ups, reporting and content pipelines so teams save hours every week.",
    iconName: "Workflow",
    tags: ["n8n", "Zapier", "Webhooks", "CRM Sync", "WhatsApp Automation"],
  },
  {
    id: "ai-apps",
    title: "AI-Powered Apps",
    description: "Chatbots, content generation, image/video tools and smart assistants built into products.",
    iconName: "Bot",
    tags: ["LLM Integrations", "Chatbots", "Content Pipelines", "Smart Assistants"],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Promo videos, reels/shorts, explainer and brand videos.",
    iconName: "Video",
    tags: ["Promo Videos", "Reels & Shorts", "Explainer Videos", "Brand Stories"],
  },
  {
    id: "mvp-launch",
    title: "MVP to Launch",
    description: "From idea to working MVP with clean UI, fast delivery and scalable architecture.",
    iconName: "Rocket",
    tags: ["Product Scoping", "Fast Iteration", "Clean UI/UX", "Deployment"],
  },
];

export const brandBuildAutomateSteps = [
  {
    step: "01",
    phase: "Brand",
    title: "Brand Strategy & Identity",
    description: "Strategy, positioning, visual identity direction, and social presence that define clear market authority.",
  },
  {
    step: "02",
    phase: "Build",
    title: "Production Web & SaaS",
    description: "Modern websites, e-commerce stores, or SaaS applications engineered with speed, type safety, and clean code.",
  },
  {
    step: "03",
    phase: "Automate",
    title: "AI & Workflow Engines",
    description: "n8n and Zapier automations, CRM pipelines, webhook integrations, and AI features that save teams hours weekly.",
  },
];

export const automationFlowNodes = [
  { step: 1, title: "Form Submission", desc: "User lead or order arrives", icon: "FileText" },
  { step: 2, title: "n8n / Webhook", desc: "Parses & routes data payload", icon: "Cpu" },
  { step: 3, title: "Google Sheets", desc: "Logs row for audit & backups", icon: "Table" },
  { step: 4, title: "WhatsApp / Email", desc: "Sends instant trigger alert", icon: "MessageSquare" },
  { step: 5, title: "CRM & Analytics", desc: "Auto-creates deal & syncs pipeline", icon: "Database" },
];
