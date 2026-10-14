export interface FounderData {
  ventureName: string;
  tagline: string;
  statement: string;
  websiteUrl: string;
  thesis: string[];
  focusAreas: {
    title: string;
    description: string;
    badge: string;
  }[];
}

export const founderData: FounderData = {
  ventureName: "NeexG",
  tagline: "Building Web Apps, SaaS Products & E-Commerce Solutions",
  statement: "Turning Ambitious Ideas Into Scalable, Production-Ready Digital Products.",
  websiteUrl: "https://neexg.com",
  thesis: [
    "At NeexG, we build technology products that solve tangible business problems. From multi-tenant SaaS tools to high-conversion e-commerce engines, our mission is to deliver dependable, high-craft engineering for clients across Bangladesh and worldwide.",
    "Driven by disciplined architecture, modern full-stack workflows, and founder-level accountability from initial scoping to cloud deployment."
  ],
  focusAreas: [
    {
      title: "SaaS & Web Platforms",
      description: "Engineering multi-tenant platforms, subscription logic, automated data pipelines, and responsive web portals.",
      badge: "SaaS Systems",
    },
    {
      title: "E-Commerce & Digital Commerce",
      description: "Crafting customized online storefronts, inventory syncing, and high-conversion payment workflows.",
      badge: "Commerce",
    },
    {
      title: "Embedded & Connected Systems",
      description: "Prototyping physical-digital bridges, ESP32 microcontrollers, and real-time telemetry dashboards.",
      badge: "IoT & Hardware",
    },
  ],
};
