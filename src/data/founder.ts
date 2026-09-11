export interface FounderData {
  ventureName: string;
  tagline: string;
  statement: string;
  thesis: string[];
  focusAreas: {
    title: string;
    description: string;
    badge: string;
  }[];
}

export const founderData: FounderData = {
  ventureName: "SystomeX",
  tagline: "Robotics, Autonomous Hardware & Modern Technology Solutions",
  statement: "Building products is not only my profession. It's how I think.",
  thesis: [
    "Software reaches its true leverage when it interacts with real-world physical systems, automates manual bottlenecks, and creates direct tangible value.",
    "SystomeX represents an early-stage venture trajectory: developing practical robotics solutions, automated hardware kits, hands-on engineering education, and custom software systems."
  ],
  focusAreas: [
    {
      title: "Applied Robotics & Hardware",
      description: "Designing real-world embedded controllers, autonomous actuators, and smart telemetry kits for industrial & consumer use.",
      badge: "Hardware Systems",
    },
    {
      title: "Scalable Web & Cloud Platforms",
      description: "Engineering robust full-stack software that powers hardware fleet management, e-commerce, and enterprise operational efficiency.",
      badge: "Cloud & Web",
    },
    {
      title: "Tech Education & Knowledge Hub",
      description: "Demystifying embedded programming, IoT, and full-stack development through practical, hands-on project builds.",
      badge: "Knowledge",
    },
  ],
};
