export interface ProfileData {
  name: string;
  shortName: string;
  tagline: string;
  roles: string[];
  bio: string;
  detailedBio: string[];
  location: string;
  availability: {
    status: "available" | "busy" | "selective";
    label: string;
  };
  stats: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
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
  tagline: "Software Engineer & Product Builder",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Founder",
    "Product Builder",
    "IoT & Robotics Explorer",
  ],
  bio: "I don't just write code. I build scalable digital products, modern web architectures, and hardware-connected systems that turn ambitious concepts into reliable reality.",
  detailedBio: [
    "Specialized in full-stack architecture, high-performance web systems, and end-to-end product execution.",
    "Driven by the belief that exceptional software feels inevitable — combining meticulous engineering, sleek interactive design, and reliable cloud deployments.",
    "Actively exploring hardware-software convergence through microcontrollers (ESP32), IoT telemetry, and robotics."
  ],
  location: "Bangladesh",
  availability: {
    status: "selective",
    label: "Available for selected high-impact projects",
  },
  stats: [
    { label: "Engineering Scope", value: "End-to-End", sublabel: "Architecture to Deployment" },
    { label: "Core Focus", value: "Full-Stack", sublabel: "Next.js · Node · Cloud" },
    { label: "Hardware & IoT", value: "ESP32", sublabel: "Smart Systems & Robotics" },
    { label: "Product Mindset", value: "Founder", sublabel: "SystomeX & Ventures" },
  ],
  pillars: [
    {
      title: "Software Development",
      description: "Crafting resilient web architectures, modern API backends, and responsive, fluid user interfaces.",
      icon: "Code2",
      tag: "Core Engineering",
    },
    {
      title: "Product Building",
      description: "Iterating from 0 to 1 — turning real-world problem statements into intuitive, shipped digital products.",
      icon: "Boxes",
      tag: "Zero to One",
    },
    {
      title: "Startup & Venture Thinking",
      description: "Aligning technical decisions directly with user value, unit economics, and scalable business foundations.",
      icon: "Rocket",
      tag: "SystomeX",
    },
    {
      title: "Robotics & IoT",
      description: "Bridging code with physical hardware: sensor telemetry, automated relays, ESP32 microcontrollers.",
      icon: "Cpu",
      tag: "The Lab",
    },
    {
      title: "Problem Solving",
      description: "Structured debugging, architectural optimization, and continuous refinement of complex engineering stacks.",
      icon: "TerminalSquare",
      tag: "Execution",
    },
  ],
};
