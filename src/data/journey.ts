export interface JourneyStage {
  phase: string;
  title: string;
  period: string;
  description: string;
  milestones: string[];
  current?: boolean;
}

export const journeyData: JourneyStage[] = [
  {
    phase: "Stage 01",
    title: "Foundations & Curiosity",
    period: "Early Phase",
    description: "Deep-dived into core computer science fundamentals, algorithmic problem solving, modern JavaScript semantics, and foundational web protocols.",
    milestones: [
      "Mastered core data structures and asynchronous programming",
      "Built dozens of vanilla JavaScript & DOM manipulation prototypes",
      "Developed an unyielding obsession with high-craft UI and system design",
    ],
  },
  {
    phase: "Stage 02",
    title: "Full-Stack Mastery & Scalable Web",
    period: "Expansion Phase",
    description: "Expanded into enterprise-grade full-stack architectures: React, Next.js, Node.js APIs, relational & NoSQL databases, and cloud deployment pipelines.",
    milestones: [
      "Engineered multi-tenant e-commerce architectures and SaaS applications",
      "Configured production Linux VPS, Nginx reverse proxies, and automated CI/CD",
      "Adopted strict TypeScript for robust, bulletproof enterprise codebases",
    ],
  },
  {
    phase: "Stage 03",
    title: "Client Platforms & Product Delivery",
    period: "Growth Phase",
    description: "Shipped customized business software, travel reservation engines, e-commerce storefronts, and internal operations dashboards for real clients.",
    milestones: [
      "Delivered end-to-end OTA booking systems with multi-API integrations",
      "Built custom enterprise management & inventory suites with granular RBAC",
      "Honed the ability to translate complex stakeholder needs into shipped products",
    ],
  },
  {
    phase: "Stage 04",
    title: "Hardware Convergence & SystomeX",
    period: "Current Stage",
    description: "Ventured into hardware engineering, microcontrollers (ESP32), IoT telemetry, and founded SystomeX to build hardware-software robotics products.",
    milestones: [
      "Developed the SmartFishBreeder autonomous aquaculture IoT ecosystem",
      "Integrating FreeRTOS firmware with real-time web telemetry",
      "Pioneering autonomous technology solutions and hardware venture initiatives",
    ],
    current: true,
  },
];
