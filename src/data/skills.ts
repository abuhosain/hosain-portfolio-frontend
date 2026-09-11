export interface SkillGroup {
  id: string;
  category: string;
  badge: string;
  description: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    highlight?: boolean;
    iconName?: string;
  }[];
}

export const skillsData: SkillGroup[] = [
  {
    id: "frontend",
    category: "Frontend Engineering",
    badge: "User Interface",
    description: "Creating fluid, hyper-responsive client interfaces with pixel-level precision, micro-animations, and clean architecture.",
    skills: [
      { name: "React", level: "Core", highlight: true },
      { name: "Next.js (App Router)", level: "Core", highlight: true },
      { name: "TypeScript", level: "Core", highlight: true },
      { name: "Tailwind CSS", level: "Core", highlight: true },
      { name: "JavaScript (ES6+)", level: "Core" },
      { name: "Framer Motion", level: "Advanced", highlight: true },
      { name: "HTML5 / Semantic UI", level: "Core" },
      { name: "CSS3 / Modern Layouts", level: "Core" },
    ],
  },
  {
    id: "backend",
    category: "Backend & Systems",
    badge: "Architecture",
    description: "Designing resilient REST endpoints, microservices, authentication pipelines, and transactional backend logic.",
    skills: [
      { name: "Node.js", level: "Core", highlight: true },
      { name: "Express.js", level: "Core", highlight: true },
      { name: "RESTful API Design", level: "Core", highlight: true },
      { name: "JWT & Cookie Auth", level: "Core" },
      { name: "Serverless Functions", level: "Advanced" },
      { name: "API Gateways & Caching", level: "Proficient" },
    ],
  },
  {
    id: "database",
    category: "Databases & Storage",
    badge: "Data Layer",
    description: "Modeling schemas for transactional integrity, low-latency querying, real-time syncing, and cloud persistence.",
    skills: [
      { name: "MongoDB / Mongoose", level: "Core", highlight: true },
      { name: "PostgreSQL", level: "Advanced", highlight: true },
      { name: "Supabase", level: "Advanced" },
      { name: "Firebase Firestore", level: "Core", highlight: true },
      { name: "Redis", level: "Proficient" },
      { name: "Prisma ORM", level: "Advanced" },
    ],
  },
  {
    id: "devops",
    category: "DevOps & Cloud Infrastructure",
    badge: "Deployment",
    description: "Setting up CI/CD automation, production Linux servers, cloud hosting, process managers, and domain routing.",
    skills: [
      { name: "AWS (EC2, S3)", level: "Advanced", highlight: true },
      { name: "Vercel", level: "Core", highlight: true },
      { name: "Linux / Ubuntu Server", level: "Core", highlight: true },
      { name: "Nginx Reverse Proxy", level: "Advanced" },
      { name: "PM2 Process Manager", level: "Core" },
      { name: "Git & GitHub CI", level: "Core", highlight: true },
      { name: "Docker Basics", level: "Proficient" },
    ],
  },
  {
    id: "hardware",
    category: "Robotics & Embedded Systems",
    badge: "Physical Computing",
    description: "Writing firmware, configuring microcontrollers, reading analog/digital sensors, and streaming live telemetry to the cloud.",
    skills: [
      { name: "ESP32 Microcontroller", level: "Core", highlight: true },
      { name: "Firebase IoT Sync", level: "Core", highlight: true },
      { name: "C++ / Arduino IDE", level: "Advanced", highlight: true },
      { name: "Sensor Telemetry (pH, Temp)", level: "Core" },
      { name: "Servo Motors & Relays", level: "Core" },
      { name: "Circuit Design Basics", level: "Proficient" },
    ],
  },
  {
    id: "methodology",
    category: "Workflow & Product Tools",
    badge: "Execution",
    description: "Leveraging modern AI tooling, design-to-code workflows, agile sprints, and founder-level prioritization.",
    skills: [
      { name: "AI-Assisted Engineering", level: "Core", highlight: true },
      { name: "System Architecture", level: "Core", highlight: true },
      { name: "Figma to Code", level: "Advanced" },
      { name: "Clean Code & Refactoring", level: "Core" },
      { name: "Performance Optimization", level: "Advanced", highlight: true },
    ],
  },
];
