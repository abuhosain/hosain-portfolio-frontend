export interface ExperienceRole {
  role: string;
  scope: string;
  focus: string;
  summary: string;
  capabilities: string[];
  techUsed: string[];
}

export const experienceData: ExperienceRole[] = [
  {
    role: "Full-Stack Software Engineer",
    scope: "Product Engineering & Architecture",
    focus: "Modern Web Systems & Cloud Scale",
    summary: "Architecting and developing end-to-end web applications with high performance, strict type safety, seamless micro-animations, and bulletproof server APIs.",
    capabilities: [
      "Engineered full-stack applications with Next.js App Router, React 19, TypeScript, and Tailwind CSS",
      "Designed secure REST APIs with Node.js/Express, JWT auth, database schemas, and rate-limiting",
      "Optimized Core Web Vitals to achieve 95+ Lighthouse scores through intelligent caching & dynamic bundling",
      "Configured cloud infrastructure on AWS EC2, Vercel, PM2, and custom Linux servers",
    ],
    techUsed: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS", "AWS"],
  },
  {
    role: "Founder & Lead Builder",
    scope: "SystomeX & Ventures",
    focus: "Product Strategy, Hardware & Software",
    summary: "Spearheading early-stage product development, robotics prototypes, and custom technology solutions from initial concept to physical and digital realization.",
    capabilities: [
      "Designed embedded IoT architectures connecting ESP32 microcontrollers with cloud databases",
      "Formulated product roadmaps, MVP feature prioritization, and engineering execution workflows",
      "Created reusable design systems, component libraries, and modular full-stack boilerplates",
    ],
    techUsed: ["ESP32", "Firebase IoT", "C++", "Next.js", "Hardware Automation"],
  },
  {
    role: "Independent Software Consultant",
    scope: "Client Solutions & Platforms",
    focus: "Custom Business & E-Commerce Systems",
    summary: "Delivering mission-critical web platforms for clients across e-commerce, travel booking, operations management, and SaaS domains.",
    capabilities: [
      "Built custom multi-store e-commerce portals with payment gateways and automated inventory management",
      "Developed travel booking platforms with live third-party API aggregations and visa processing flows",
      "Maintained zero-downtime releases and responsive technical communication with international clients",
    ],
    techUsed: ["React", "Express.js", "REST APIs", "Stripe", "PostgreSQL", "Tailwind CSS"],
  },
];
