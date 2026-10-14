export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  achievements: { title: string; organization: string }[];
  skills: { category: string; items: string[] }[];
  experience: {
    role: string;
    organization: string;
    period: string;
    bullets: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period?: string;
  }[];
}

export const resumeData: ResumeData = {
  name: "Abu Hosain",
  title: "Software Engineer · Branding · AI Automation · Founder of NeexG · Co-Founder of Oregent",
  location: "Bangladesh (UTC+06:00)",
  email: "abuhosainmin@gmail.com",
  phone: "01319539510",
  website: "abuhosain.dev",
  summary: "Full-stack software engineer, founder of NeexG and co-founder of Oregent, building web apps, SaaS products and e-commerce platforms. Also specializing in branding, AI automation (n8n, Zapier), and video editing. Dual International Gold Medalist at IWC and I3C with a Diploma in Computer Science & Technology from Bogura Polytechnic Institute.",
  achievements: [
    {
      title: "International Gold Medalist",
      organization: "IWC (Innovation World Cup)",
    },
    {
      title: "International Gold Medalist",
      organization: "I3C (International Invention and Innovation Competition)",
    },
    {
      title: "Founder & CEO",
      organization: "NeexG (https://neexg.com)",
    },
    {
      title: "Co-Founder",
      organization: "Oregent (https://oregent.com)",
    },
  ],
  skills: [
    {
      category: "Full-Stack Development",
      items: ["React", "Next.js", "Node.js", "Express.js", "TypeScript", "JavaScript", "MongoDB", "PostgreSQL", "Supabase", "Firebase"],
    },
    {
      category: "AI Automation & Workflows",
      items: ["Zapier", "n8n", "API Integrations", "Webhooks", "Workflow Automation", "AI Agents & LLMs"],
    },
    {
      category: "Branding & Visual Direction",
      items: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Social Media Branding", "Brand Voice"],
    },
    {
      category: "Video Editing & Content",
      items: ["Promo Videos", "Short-Form Content (Reels/Shorts)", "Brand Videos", "Motion Graphics"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "AWS", "Vercel", "Linux / Ubuntu Server", "Git & CI/CD"],
    },
    {
      category: "Hardware & IoT",
      items: ["ESP32 / Embedded Systems", "C++ / Arduino", "Sensor Telemetry"],
    },
  ],
  experience: [
    {
      role: "Founder & CEO",
      organization: "NeexG (neexg.com)",
      period: "Present",
      bullets: [
        "Founded and lead NeexG, building custom web applications, SaaS platforms, e-commerce storefronts, and AI automation solutions for clients in Bangladesh and abroad.",
        "Architected multi-tenant SaaS engines, workflow automation pipelines (n8n & Zapier), and high-conversion e-commerce storefronts.",
        "Delivered production systems including FlyKorun, Obiram, TypingBoss, eExam App, and Evanio AI.",
      ],
    },
    {
      role: "Co-Founder",
      organization: "Oregent (oregent.com)",
      period: "Present",
      bullets: [
        "Co-founded Oregent, a modern fashion and sneaker e-commerce brand.",
        "Directed end-to-end product architecture, e-commerce storefront engineering, brand identity, and customer experience.",
        "Engineered mobile-first high-speed shopping flows and inventory integrations.",
      ],
    },
    {
      role: "Full-Stack Software Consultant",
      organization: "Client Solutions & Production Systems",
      period: "2023 – Present",
      bullets: [
        "Constructed high-speed web platforms with React, Next.js, Node.js, and relational / document databases.",
        "Engineered responsive, accessible client interfaces adhering strictly to WCAG standards.",
        "Automated business workflows via webhooks, n8n, and custom API microservices.",
      ],
    },
  ],
  education: [
    {
      degree: "Diploma in Computer Science and Technology (CST)",
      institution: "Bogura Polytechnic Institute",
      period: "Completed",
    },
  ],
};
