export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: "Architecture" | "IoT / Hardware" | "Performance" | "Systems";
  readTime: string;
  date: string;
  highlights: string[];
  link?: string;
}

export const articlesData: ArticleItem[] = [
  {
    id: "esp32-freertos-telemetry",
    title: "Dual-Core FreeRTOS & Real-Time IoT Telemetry on ESP32",
    slug: "esp32-freertos-telemetry",
    summary: "How to decouple sensor polling loops from cloud WebSocket pipelines using FreeRTOS task pinning, ring buffers, and non-blocking Firebase synchronization.",
    category: "IoT / Hardware",
    readTime: "6 min read",
    date: "August 2026",
    highlights: [
      "Task pinning to Core 0 for WiFi networking and Core 1 for analog sensor sampling",
      "Ring-buffer memory state management for offline sensor resilience",
      "Sub-50ms sub-second latency telemetry streaming",
    ],
  },
  {
    id: "nextjs-app-router-performance",
    title: "Next.js App Router Architecture: Zero-Overhead Server Components",
    slug: "nextjs-app-router-performance",
    summary: "Architectural patterns for segregating server and client boundaries, optimizing core web vitals, and eliminating layout reflows in animated portfolios.",
    category: "Performance",
    readTime: "5 min read",
    date: "July 2026",
    highlights: [
      "Static vs Dynamic Server Component rendering hierarchies",
      "Framer Motion layout projection with minimal hydration footprints",
      "Achieving consistent 98+ Lighthouse performance audits",
    ],
  },
  {
    id: "scalable-ecommerce-architecture",
    title: "Designing Multi-Tenant E-Commerce Engines with PostgreSQL & Node",
    slug: "scalable-ecommerce-architecture",
    summary: "Engineering transactional safety, race-condition-free inventory decrementing, and modular payment gateway abstraction for modern storefronts.",
    category: "Architecture",
    readTime: "7 min read",
    date: "June 2026",
    highlights: [
      "ACID transactional boundaries and inventory locking techniques",
      "Unified webhook ingestion with idempotent replay prevention",
      "Microservice separation between merchant admin and buyer portals",
    ],
  },
];
