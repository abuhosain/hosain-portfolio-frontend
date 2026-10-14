export interface Achievement {
  title: string;
  organization: string;
  year?: string;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period?: string;
}

export interface ProfileData {
  name: string;
  shortName: string;
  headline: string;
  mobileHeadline: string;
  tagline: string;
  roles: {
    title: string;
    organization: string;
    url: string;
  }[];
  website: string;
  bio: string;
  detailedBio: string[];
  location: string;
  achievements: Achievement[];
  education: EducationItem[];
  availability: {
    status: "available" | "busy" | "selective";
    label: string;
  };
  pillars: {
    title: string;
    description: string;
    icon: string;
    tag: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Abu Hosain",
  shortName: "Hosain",
  headline: "Software Engineer · Branding · AI Automation · Founder of NeexG · Co-Founder of Oregent",
  mobileHeadline: "Software Engineer · Founder of NeexG & Oregent",
  tagline: "Software Engineer, Branding & AI Automation",
  roles: [
    {
      title: "Founder & CEO",
      organization: "NeexG",
      url: "https://neexg.com",
    },
    {
      title: "Co-Founder",
      organization: "Oregent",
      url: "https://oregent.com",
    },
  ],
  website: "abuhosain.dev",
  bio: "Full-stack software engineer, founder of NeexG and co-founder of Oregent, building web apps, SaaS products and e-commerce platforms. I also do branding, AI automation (n8n, Zapier) and video editing. International Gold Medalist at IWC and I3C. Diploma in Computer Science & Technology from Bogura Polytechnic Institute.",
  detailedBio: [
    "Full-stack software engineer, founder of NeexG and co-founder of Oregent, engineering dependable web apps, scalable SaaS products and high-conversion e-commerce storefronts.",
    "Specialized in modern front-end architecture, API design, brand identity systems, automated workflows (n8n, Zapier), and video content production.",
    "Dual International Gold Medalist at the Innovation World Cup (IWC) and the International Invention and Innovation Competition (I3C). Proud alumnus of Bogura Polytechnic Institute with a Diploma in Computer Science & Technology."
  ],
  location: "Bangladesh",
  achievements: [
    {
      title: "International Gold Medalist",
      organization: "IWC (Innovation World Cup)",
      badge: "Gold Medal",
    },
    {
      title: "International Gold Medalist",
      organization: "I3C (International Invention and Innovation Competition)",
      badge: "Gold Medal",
    },
    {
      title: "Founder & CEO",
      organization: "NeexG (neexg.com)",
      badge: "Leadership",
    },
    {
      title: "Co-Founder",
      organization: "Oregent (oregent.com)",
      badge: "Commerce & Brand",
    },
  ],
  education: [
    {
      degree: "Diploma in Computer Science and Technology (CST)",
      institution: "Bogura Polytechnic Institute",
    },
  ],
  availability: {
    status: "available",
    label: "Available for SaaS, web engineering & AI automation",
  },
  pillars: [
    {
      title: "Full-Stack & SaaS Engineering",
      description: "Building production React/Next.js platforms and robust Node.js APIs designed for speed, type safety, and real business uptime.",
      icon: "Code2",
      tag: "Engineering",
    },
    {
      title: "Branding & Visual Direction",
      description: "Crafting distinct brand identities, positioning, and design systems so your website, product, and content feel like one cohesive brand.",
      icon: "Palette",
      tag: "Brand Identity",
    },
    {
      title: "AI & Workflow Automation",
      description: "Connecting n8n, Zapier, LLMs, and custom webhooks to automate lead capture, CRM sync, notifications, and operational pipelines.",
      icon: "Cpu",
      tag: "Automation",
    },
  ],
};
