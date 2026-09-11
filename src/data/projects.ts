export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "SaaS / Platform" | "E-Commerce" | "IoT / Robotics" | "Enterprise / Admin" | "Travel Tech";
  description: string;
  highlights: string[];
  techStack: string[];
  role: string;
  status: "Live" | "In Development" | "Production Architecture";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accentColor: string;
  stats?: { label: string; value: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "oregent",
    title: "Oregent",
    tagline: "Premium E-commerce Brand Experience",
    category: "E-Commerce",
    description: "A high-performance modern digital storefront built with cutting-edge front-end aesthetics, instant transitions, dynamic product management, and unified checkout architecture.",
    highlights: [
      "Ultra-fast page loads with optimized server components & dynamic caching",
      "Interactive product visualizer & slick micro-interactions",
      "Full administrative dashboard for catalog and order management"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Stripe API", "PostgreSQL"],
    role: "Full-Stack Architect & Lead Developer",
    status: "Production Architecture",
    liveUrl: "https://oregent.example.com",
    githubUrl: "https://github.com/abuhosain",
    featured: true,
    accentColor: "#00F0FF",
    stats: [
      { label: "Performance", value: "99/100" },
      { label: "Architecture", value: "SSR / ISR" },
    ],
  },
  {
    id: "typingboss",
    title: "TypingBoss",
    tagline: "High-Precision SaaS Typing & Speed Mastery Platform",
    category: "SaaS / Platform",
    description: "A feature-packed real-time typing platform featuring live keystroke telemetry, speed analytics, custom test modes, leaderboard tracking, and modular cloud architecture.",
    highlights: [
      "Sub-millisecond latency input tracking and WPM calculation engine",
      "Real-time analytics graphs & historic progress dashboards",
      "User authentication, competitive leaderboards, and custom text generation"
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB", "Vercel"],
    role: "Creator & Full-Stack Developer",
    status: "Live",
    liveUrl: "https://typingboss.example.com",
    githubUrl: "https://github.com/abuhosain",
    featured: true,
    accentColor: "#38BDF8",
    stats: [
      { label: "Input Telemetry", value: "<1ms" },
      { label: "Engine", value: "Realtime" },
    ],
  },
  {
    id: "smartfishbreeder",
    title: "SmartFishBreeder",
    tagline: "Automated Aquaculture IoT Telemetry & Control System",
    category: "IoT / Robotics",
    description: "An automated intelligent aquarium and breeding ecosystem powered by ESP32 microcontrollers, real-time Firebase syncing, multi-sensor telemetry (temperature, pH), servo feeders, and relay water pumps.",
    highlights: [
      "Dual-zone temperature & pH monitoring with automated threshold alerts",
      "Servo-motorized scheduled feeding and automated water cycle management",
      "Live mobile/web dashboard synced with Firebase Realtime Database"
    ],
    techStack: ["ESP32", "C++ / Arduino", "Firebase IoT", "Next.js", "Tailwind CSS", "Sensors & Relays"],
    role: "IoT System Architect & Hardware Engineer",
    status: "Live",
    liveUrl: "#lab",
    githubUrl: "https://github.com/abuhosain",
    featured: true,
    accentColor: "#10B981",
    stats: [
      { label: "Telemetry", value: "Live Sync" },
      { label: "Hardware", value: "ESP32 Core" },
    ],
  },
  {
    id: "travel-ota-platform",
    title: "Travel & OTA Booking Engine",
    tagline: "Comprehensive Multi-Service Booking & Visa Platform",
    category: "Travel Tech",
    description: "An integrated travel engine supporting flight aggregations, international eSIM provisioning, global visa processing, and curated holiday package bookings with multi-tier pricing.",
    highlights: [
      "Dynamic external API ingestion for live travel rates and eSIM activations",
      "Step-by-step visa application workflow with document upload validations",
      "Custom role-based administrative control panel for travel operators"
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    role: "Full-Stack Engineer",
    status: "Production Architecture",
    featured: false,
    accentColor: "#8B5CF6",
    stats: [
      { label: "APIs Integrated", value: "Multi-Partner" },
      { label: "Modules", value: "4 Services" },
    ],
  },
  {
    id: "enterprise-management",
    title: "Enterprise Management & Dashboard Suite",
    tagline: "Internal Operations, Inventory & Team Workflow Engine",
    category: "Enterprise / Admin",
    description: "Robust internal business management software built for tracking real-time operations, inventory movement, sales analytics, employee roles, and audit logging.",
    highlights: [
      "Granular RBAC (Role-Based Access Control) security layer",
      "Interactive data tables with instant filtering, sorting, and export capabilities",
      "Automated PDF reporting and activity stream feeds"
    ],
    techStack: ["React", "Next.js", "TypeScript", "Express.js", "PostgreSQL", "Tailwind CSS"],
    role: "Lead Full-Stack Developer",
    status: "Production Architecture",
    featured: false,
    accentColor: "#F59E0B",
    stats: [
      { label: "Security", value: "Strict RBAC" },
      { label: "Reports", value: "Automated" },
    ],
  },
  {
    id: "ecommerce-multiplatform",
    title: "Scalable Multi-Store E-Commerce Engine",
    tagline: "High-Conversion Multi-Tenant E-Commerce Infrastructure",
    category: "E-Commerce",
    description: "Custom e-commerce infrastructure built from scratch to support high-volume transaction processing, automated inventory synchronization, discount logic, and custom payment gateway integrations.",
    highlights: [
      "Modular catalog schema supporting customizable variants and tiered discounts",
      "Lightning-fast cart state management and guest/authenticated checkout flows",
      "Comprehensive merchant portal with sales telemetry and order fulfillment tools"
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe API", "AWS S3", "Tailwind CSS"],
    role: "Full-Stack Developer",
    status: "Production Architecture",
    featured: false,
    accentColor: "#EC4899",
    stats: [
      { label: "Checkout", value: "Instant" },
      { label: "Scale", value: "Multi-Store" },
    ],
  },
];
