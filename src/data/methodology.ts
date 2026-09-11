export interface MethodologyStep {
  step: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export const methodologyData: MethodologyStep[] = [
  {
    step: "01",
    number: "01",
    title: "Understand",
    description: "Deconstruct the core problem, user behavior, performance goals, and business constraints before touching code.",
    details: ["Requirements scoping", "Edge case mapping", "Architecture boundaries"],
    icon: "Search",
  },
  {
    step: "02",
    number: "02",
    title: "Plan",
    description: "Design typed schemas, data flows, API contracts, component trees, and state management strategies.",
    details: ["Schema & DB modeling", "Design system tokens", "Tech stack selection"],
    icon: "Compass",
  },
  {
    step: "03",
    number: "03",
    title: "Build",
    description: "Implement clean, modular, and maintainable code with strict typing, micro-interactions, and component reusability.",
    details: ["Next.js App Router", "Framer Motion choreography", "Secure backend endpoints"],
    icon: "Code",
  },
  {
    step: "04",
    number: "04",
    title: "Test",
    description: "Validate performance, cross-browser rendering, responsiveness, input boundaries, and security edge cases.",
    details: ["Lighthouse optimization", "Mobile stress testing", "Payload validation"],
    icon: "CheckCircle2",
  },
  {
    step: "05",
    number: "05",
    title: "Deploy",
    description: "Automate builds via CI/CD, configure Nginx/Vercel edge caching, environment isolation, and production domain routing.",
    details: ["Vercel & AWS EC2", "SSL & reverse proxies", "Zero-downtime workflows"],
    icon: "Rocket",
  },
  {
    step: "06",
    number: "06",
    title: "Improve",
    description: "Monitor real-world telemetry, gather user metrics, profile latency bottlenecks, and execute continuous refinement.",
    details: ["Performance profiling", "Feature iteration", "Log auditing"],
    icon: "Sparkles",
  },
];
