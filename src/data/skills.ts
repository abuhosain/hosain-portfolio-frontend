export interface SkillGroup {
  id: string;
  category: string;
  badge?: string;
  statusBadge?: string;
  proofLink?: {
    label: string;
    url: string;
  };
  description: string;
  skills: string[];
}

export const skillsData: SkillGroup[] = [
  {
    id: "full-stack",
    category: "Full-Stack Development",
    badge: "Core Engineering",
    description: "Developing scalable web applications, robust APIs, and modern front-end architectures.",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Firebase",
    ],
  },
  {
    id: "ai-automation",
    category: "AI Automation & Workflows",
    badge: "Operations & Efficiency",
    description: "Connecting platforms and eliminating repetitive manual tasks with automated pipelines.",
    skills: [
      "Zapier",
      "n8n",
      "API Integrations",
      "Webhooks",
      "Workflow Automation",
      "AI Agents & LLM Automations",
    ],
  },
  {
    id: "machine-learning",
    category: "Machine Learning",
    statusBadge: "Currently Learning",
    description: "Actively studying machine learning foundations and practical Python implementations (hands-on exploration, not claiming expert status).",
    skills: [
      "ML Fundamentals",
      "Python for ML",
      "Model Training & Evaluation",
    ],
  },
  {
    id: "video-editing",
    category: "Video Editing & Content Creation",
    badge: "Visual Storytelling",
    proofLink: {
      label: "Proof of Work (YouTube @hosainfo)",
      url: "https://youtube.com/@hosainfo",
    },
    description: "Crafting engaging short-form reels, product explainers, and high-impact brand promo assets.",
    skills: [
      "Promo Videos",
      "Short-Form Content (Reels/Shorts)",
      "Brand Videos",
      "Motion & Editing",
    ],
  },
  {
    id: "branding",
    category: "Branding & Brand Identity",
    badge: "Design Strategy",
    description: "Establishing cohesive brand presence across digital touchpoints, positioning, and visual guidelines.",
    skills: [
      "Brand Strategy",
      "Logo & Visual Identity Direction",
      "Brand Guidelines",
      "Social Media Branding",
      "Content Planning",
      "Brand Voice & Messaging",
      "Launch Branding for Businesses",
    ],
  },
  {
    id: "devops",
    category: "DevOps & Cloud",
    badge: "Deployment & Systems",
    description: "Deploying secure, resilient web systems with automated continuous integration and edge hosting.",
    skills: [
      "Docker",
      "AWS",
      "Vercel",
      "Linux",
      "Git & CI/CD",
    ],
  },
  {
    id: "embedded-iot",
    category: "Embedded & IoT",
    badge: "Physical Computing",
    description: "Prototyping microcontroller telemetry, firmware logic, and physical-digital sensor integrations.",
    skills: [
      "ESP32",
      "Embedded Systems",
      "C++ / Arduino",
      "Hardware Telemetry",
    ],
  },
];
