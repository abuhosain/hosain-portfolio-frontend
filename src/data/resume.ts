export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  summary: string;
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
    period: string;
  }[];
}

export const resumeData: ResumeData = {
  name: "Abu Hosain",
  title: "Software Engineer · Full-Stack Developer · Founder",
  location: "Dhaka, Bangladesh (UTC+06:00)",
  email: "abuhosain.dev@gmail.com",
  summary: "Multidisciplinary Software Engineer with comprehensive expertise in full-stack web architectures, Next.js, Node.js APIs, cloud deployments, and IoT hardware engineering (ESP32 microcontrollers). Proven track record of architecting and shipping mission-critical client software, scalable platforms, and connected physical prototypes.",
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "Framer Motion", "Three.js", "HTML5/CSS3"],
    },
    {
      category: "Backend & Systems",
      items: ["Node.js", "Express.js", "RESTful APIs", "Authentication (JWT, Cookies)", "Microservices", "Serverless Functions"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase Realtime DB", "Prisma ORM", "Redis"],
    },
    {
      category: "DevOps & Cloud",
      items: ["AWS (EC2, S3)", "Vercel", "Linux / Ubuntu Server", "Nginx", "PM2", "Git / GitHub Actions"],
    },
    {
      category: "IoT & Hardware",
      items: ["ESP32 Microcontroller", "FreeRTOS", "C++ / Arduino", "Sensor Telemetry (pH, Temp)", "Servo / Relay Control"],
    },
  ],
  experience: [
    {
      role: "Lead Full-Stack Software Engineer",
      organization: "Product & Platform Engineering",
      period: "2024 – Present",
      bullets: [
        "Architected and deployed scalable full-stack applications with Next.js App Router, TypeScript, and high-performance server APIs.",
        "Engineered multi-store e-commerce systems, travel reservation engines with multi-partner API aggregations, and business management suites.",
        "Optimized Web Vitals to achieve 98+ Lighthouse scores across enterprise web portals.",
      ],
    },
    {
      role: "Founder & Lead Hardware Architect",
      organization: "SystomeX & The Lab",
      period: "2025 – Present",
      bullets: [
        "Designed and implemented the SmartFishBreeder autonomous IoT ecosystem using ESP32, FreeRTOS, and Firebase Realtime Database.",
        "Pioneered embedded hardware kits, automated aquaculture sensor loops, and web telemetry dashboards.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "University / Academic Institution",
      period: "Completed",
    },
  ],
};
