export type ProjectCategory = "SaaS" | "E-commerce" | "EdTech" | "Corporate" | "AI" | "Branding";

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  description: string;
  brief: string;
  highlights: string[];
  techStack: string[];
  role: string;
  status: "Live" | "Production" | "Beta";
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  accentColor: string;
  gradient: {
    from: string;
    to: string;
  };
  stats?: { label: string; value: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "flykorun",
    title: "FlyKorun",
    tagline: "Flight & travel booking platform.",
    category: "SaaS",
    description: "A travel platform to search flights, compare options and book trips with a smooth booking flow and admin-side management.",
    brief: "A modern travel booking platform engineered to streamline flight search, price comparison, ticket reservations, and backend customer record administration with instant booking updates.",
    highlights: [
      "Sub-second flight search and multi-airline aggregation",
      "Streamlined passenger booking flow with instant verification",
      "Comprehensive administration operations panel"
    ],
    techStack: ["Travel", "Booking", "Full-stack", "Next.js", "Node.js"],
    role: "Full-Stack Architect & Developer",
    status: "Live",
    liveUrl: "https://flykorun.com",
    featured: true,
    accentColor: "#0284C7",
    gradient: {
      from: "#0369A1",
      to: "#0EA5E9",
    },
    stats: [
      { label: "Domain", value: "Travel Tech" },
      { label: "Workflow", value: "Instant Booking" },
    ],
  },
  {
    id: "obiram",
    title: "Obiram",
    tagline: "Multi-store e-commerce SaaS.",
    category: "SaaS",
    description: "A Shopify-inspired multi-tenant SaaS where merchants launch and manage their own online stores with products, orders and storefront customization from one dashboard.",
    brief: "A scalable multi-tenant SaaS platform empowering independent merchants to spin up branded online storefronts in minutes with product management, orders, and storefront customization.",
    highlights: [
      "Multi-tenant database tenancy and storefront routing",
      "Unified merchant management suite for orders & inventory",
      "Optimized mobile-first customer storefront templates"
    ],
    techStack: ["SaaS", "E-commerce", "MERN", "React", "Node.js", "MongoDB"],
    role: "Founding Engineer & Architect",
    status: "Live",
    liveUrl: "https://obiram.io",
    featured: true,
    accentColor: "#2563EB",
    gradient: {
      from: "#1D4ED8",
      to: "#3B82F6",
    },
    stats: [
      { label: "Architecture", value: "Multi-Tenant" },
      { label: "Role", value: "Full-Stack SaaS" },
    ],
  },
  {
    id: "typingboss",
    title: "TypingBoss",
    tagline: "Typing practice & speed-test platform.",
    category: "EdTech",
    description: "An interactive typing platform to practice, test speed and accuracy, and track progress in a clean, distraction-free interface.",
    brief: "A high-performance typing training application delivering low-latency keystroke detection, real-time WPM/accuracy tracking, custom practice modules, and visual progress analytics.",
    highlights: [
      "Microsecond-level keystroke telemetry and live calculation",
      "Distraction-free minimal UI with theme customizability",
      "Granular analytical reports on weak keystroke patterns"
    ],
    techStack: ["EdTech", "Web App", "Interactive", "React", "TypeScript", "Tailwind CSS"],
    role: "Creator & Frontend Engineer",
    status: "Live",
    liveUrl: "https://typingboss.com",
    featured: true,
    accentColor: "#10B981",
    gradient: {
      from: "#047857",
      to: "#10B981",
    },
    stats: [
      { label: "Latency", value: "Zero-Lag Input" },
      { label: "Focus", value: "Interactive EdTech" },
    ],
  },
  {
    id: "eexam",
    title: "eExam App",
    tagline: "Online exam & assessment platform.",
    category: "EdTech",
    description: "A digital examination system to create, take and evaluate exams online with timed tests, instant results and admin controls.",
    brief: "An academic examination platform designed for institutions and educators to configure timed assessments, randomize question banks, and instantly generate analytical scorecards.",
    highlights: [
      "Anti-cheat timer synchronization and auto-submission safeguards",
      "Dynamic question builder supporting multiple question types",
      "Instant grading engine with detailed student performance metrics"
    ],
    techStack: ["EdTech", "Exam System", "Web App", "Next.js", "TypeScript", "Node.js"],
    role: "Lead Full-Stack Developer",
    status: "Live",
    liveUrl: "https://eexamapp.app",
    featured: false,
    accentColor: "#6366F1",
    gradient: {
      from: "#4338CA",
      to: "#818CF8",
    },
    stats: [
      { label: "Sector", value: "EdTech Assessments" },
      { label: "Security", value: "Timed Evaluation" },
    ],
  },
  {
    id: "evanio",
    title: "Evanio AI",
    tagline: "AI image & video creation studio.",
    category: "AI",
    description: "An AI-powered creative SaaS for generating images and UGC-style videos, with credits, subscription plans and a user dashboard.",
    brief: "A full-featured creative generative SaaS suite engineered for creators and marketing teams. Enables automated AI image synthesis, UGC video generation pipelines, credit billing tiers, and a streamlined personal asset library.",
    highlights: [
      "Asynchronous generative media job queue orchestration",
      "Credit wallet and subscription entitlement enforcement",
      "Responsive generation dashboard with instant previews"
    ],
    techStack: ["AI", "SaaS", "PERN", "PostgreSQL", "Express", "React", "Node.js"],
    role: "Full-Stack Engineer & AI Architect",
    status: "Live",
    liveUrl: "https://evanio.ai",
    featured: true,
    accentColor: "#8B5CF6",
    gradient: {
      from: "#6D28D9",
      to: "#A78BFA",
    },
    stats: [
      { label: "Tech", value: "Generative Media" },
      { label: "Billing", value: "Credits & Tiers" },
    ],
  },
  {
    id: "amlaamart",
    title: "Amlaamart",
    tagline: "Online shopping store.",
    category: "E-commerce",
    description: "A fast, mobile-friendly e-commerce website with organized categories, easy ordering and a simple management panel.",
    brief: "A direct-to-consumer online shopping platform built with high usability in mind. Delivers structured product hierarchies, localized checkout options, search optimization, and a lightweight management portal for store owners.",
    highlights: [
      "Organized multi-tier category navigation for rapid product discovery",
      "Frictionless order placement designed for high mobile conversion",
      "Merchant-friendly product and order update interface"
    ],
    techStack: ["E-commerce", "Web App", "React", "Next.js", "Node.js", "MongoDB"],
    role: "Full-Stack Developer",
    status: "Live",
    liveUrl: "https://amlaamart.com",
    featured: false,
    accentColor: "#14B8A6",
    gradient: {
      from: "#0F766E",
      to: "#2DD4BF",
    },
    stats: [
      { label: "Platform", value: "D2C Store" },
      { label: "Optimization", value: "Fast Checkout" },
    ],
  },
  {
    id: "nephrocareindia",
    title: "Nephro Care India",
    tagline: "Healthcare & kidney-care website.",
    category: "Corporate",
    description: "A trustworthy, professional healthcare website presenting services, doctor/clinic information and easy ways for patients to get in touch.",
    brief: "A specialized healthcare web presence built to deliver clinical trust and accessibility. Communicates kidney-care treatments, doctor credentials, clinic locations, and straightforward patient appointment inquiries.",
    highlights: [
      "Accessible typography and medical information hierarchy",
      "Doctor and specialist profiles with treatment domain breakdowns",
      "Direct patient contact and consultation inquiry channels"
    ],
    techStack: ["Healthcare", "Corporate Website", "Next.js", "React", "Tailwind CSS"],
    role: "Frontend Engineer",
    status: "Live",
    liveUrl: "https://www.nephrocareindia.com/",
    featured: false,
    accentColor: "#06B6D4",
    gradient: {
      from: "#0E7490",
      to: "#22D3EE",
    },
    stats: [
      { label: "Sector", value: "Healthcare" },
      { label: "Compliance", value: "Accessible UI" },
    ],
  },
  {
    id: "neurix",
    title: "Neurix",
    tagline: "Modern tech/business website.",
    category: "Corporate",
    description: "A clean, responsive company website that communicates services and brand identity with polished layout and performance focus.",
    brief: "A corporate technology website presenting enterprise digital services and engineering competencies. Features refined grid layouts, smooth micro-interactions, responsive typography, and optimal Core Web Vitals.",
    highlights: [
      "Crisp corporate layout communicating technical value propositions",
      "Modern dark-mode aesthetic with high typographic legibility",
      "Fully responsive layout optimized for mobile and desktop browsers"
    ],
    techStack: ["Corporate Website", "Responsive", "Next.js", "React", "Tailwind CSS"],
    role: "Frontend Architect",
    status: "Live",
    liveUrl: "https://www.neurix.net/",
    featured: false,
    accentColor: "#3B82F6",
    gradient: {
      from: "#1D4ED8",
      to: "#60A5FA",
    },
    stats: [
      { label: "Style", value: "Corporate Modern" },
      { label: "Performance", value: "Fast Load" },
    ],
  },
  {
    id: "thechinta",
    title: "The Chinta",
    tagline: "Organization/community platform.",
    category: "Corporate",
    description: "An organization website sharing its mission, activities and updates with clear structure and easy navigation.",
    brief: "A community and organization platform built to articulate initiatives, publish editorial articles, and coordinate public outreach with an emphasis on readable content architecture.",
    highlights: [
      "Editorial reading layout with comfortable typography and spacing",
      "Structured content taxonomy for activities, news, and initiatives",
      "Lightweight, SEO-optimized markup for high search visibility"
    ],
    techStack: ["Organization", "Community", "Website", "Next.js", "React", "Tailwind CSS"],
    role: "Web Engineer",
    status: "Live",
    liveUrl: "https://thechinta.org/",
    featured: false,
    accentColor: "#EAB308",
    gradient: {
      from: "#A16207",
      to: "#FACC15",
    },
    stats: [
      { label: "Focus", value: "Community Editorial" },
      { label: "Layout", value: "High Readability" },
    ],
  },
  {
    id: "neexgschool",
    title: "NeexG School",
    tagline: "School management & academic website.",
    category: "EdTech",
    description: "A school website/portal showcasing academics, notices and information in a clean, accessible layout.",
    brief: "An academic institutional portal engineered for schools to showcase programs, broadcast official notices, and provide students and guardians with transparent access to campus information.",
    highlights: [
      "Structured academic noticeboard with categorized updates",
      "Institutional program guides and faculty directories",
      "Accessible design adhering to WCAG contrast standards"
    ],
    techStack: ["Education", "School", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Full-Stack Developer",
    status: "Live",
    liveUrl: "https://neexg-school.vercel.app/",
    featured: false,
    accentColor: "#10B981",
    gradient: {
      from: "#059669",
      to: "#34D399",
    },
    stats: [
      { label: "Type", value: "Academic Portal" },
      { label: "Audience", value: "Students & Parents" },
    ],
  },
  {
    id: "mantra",
    title: "Mantra",
    tagline: "Brand/product website.",
    category: "Branding",
    description: "A visually driven website built around the Mantra brand with a strong layout and smooth user experience.",
    brief: "A brand showcase platform developed to articulate product aesthetic, brand narrative, and visual craftsmanship. Focuses on balanced whitespace, editorial typography, and immersive brand imagery.",
    highlights: [
      "Visual storytelling layout emphasizing brand values and products",
      "Harmonious typographic scale with comfortable line heights",
      "Refined hover states and lightweight page transitions"
    ],
    techStack: ["Branding", "Website", "React", "Next.js", "Tailwind CSS"],
    role: "Frontend Developer & Designer",
    status: "Live",
    liveUrl: "https://dummy.socalbird.com/",
    featured: false,
    accentColor: "#EC4899",
    gradient: {
      from: "#BE185D",
      to: "#F472B6",
    },
    stats: [
      { label: "Style", value: "Brand Showcase" },
      { label: "Design", value: "Editorial" },
    ],
  },
  {
    id: "cooality",
    title: "Cooality",
    tagline: "Modern web platform frontend.",
    category: "SaaS",
    description: "A responsive frontend for the Cooality platform focused on clean UI, performance and scalable component structure.",
    brief: "A modern web application interface for Cooality. Engineered with a scalable atomic component system, responsive data views, strict TypeScript contracts, and fluid user interactions.",
    highlights: [
      "Modular design system with reusable atomic UI primitives",
      "Optimized client rendering and state management pipelines",
      "Strict type safety and high accessibility standard"
    ],
    techStack: ["Frontend", "Next.js", "Web App", "React", "TypeScript", "Tailwind CSS"],
    role: "Frontend Engineer",
    status: "Live",
    liveUrl: "https://cooality-frontend.vercel.app/",
    featured: false,
    accentColor: "#059669",
    gradient: {
      from: "#047857",
      to: "#34D399",
    },
    stats: [
      { label: "Framework", value: "Next.js App" },
      { label: "Code Standard", value: "TypeScript" },
    ],
  },
  {
    id: "majlishfinder",
    title: "Majlish Finder",
    tagline: "Geospatial feast & event discovery map platform.",
    category: "SaaS",
    description: "A real-time geospatial discovery platform to explore and locate local feasts, community events, and social gatherings on an interactive map.",
    brief: "A community-driven event discovery platform designed to connect people with local feasts, weddings, and cultural celebrations within a 5–100km radius. Integrates interactive Leaflet geospatial maps, category filters, real-time event submissions, and a viral member pass generator ('Khadok Card') with client-side canvas rendering.",
    highlights: [
      "Interactive Leaflet geospatial map engine with dynamic 5km–100km radius filtering",
      "Dynamic event categorization and instant distance and date sorting",
      "Viral digital food-pass card generator ('Khadok Card' / ভোজনরসিক ছাড়পত্র) with high-res PNG export"
    ],
    techStack: ["Geospatial", "Leaflet", "Web App", "Next.js", "React", "Tailwind CSS"],
    role: "Full-Stack Engineer & Creator",
    status: "Live",
    liveUrl: "https://majlishfinder.vercel.app",
    featured: true,
    accentColor: "#166534",
    gradient: {
      from: "#14532D",
      to: "#166534",
    },
    stats: [
      { label: "Engine", value: "Geospatial Map" },
      { label: "Feature", value: "Viral Pass Gen" },
    ],
  },
  {
    id: "projonmo",
    title: "Projonmo Tech",
    tagline: "Modern tech & digital solutions platform.",
    category: "Corporate",
    description: "A responsive technology and digital solutions platform engineered for smooth user interaction and modern service presentation.",
    brief: "A modern web and technology platform built for the Projonmo brand. Features an interactive web interface, service architecture, and high-performance frontend engineering.",
    highlights: [
      "Interactive modern web interface with responsive cross-device compatibility",
      "Clean component hierarchy optimized for fast loading and low latency",
      "Streamlined digital presentation communicating services and capabilities"
    ],
    techStack: ["Corporate", "Web App", "Interactive UI", "React", "Next.js", "Tailwind CSS"],
    role: "Frontend Engineer",
    status: "Live",
    liveUrl: "https://projonmo.tech",
    featured: false,
    accentColor: "#0284C7",
    gradient: {
      from: "#0369A1",
      to: "#38BDF8",
    },
    stats: [
      { label: "Type", value: "Tech Platform" },
      { label: "Focus", value: "Interactive Web" },
    ],
  },
  {
    id: "ndcsdc",
    title: "Notre Dame Career & Skill Development Club",
    tagline: "Academic summit & institutional career platform.",
    category: "EdTech",
    description: "Official web portal of Notre Dame Career & Skill Development Club (NDCSDC) and the 1st National Academic Career Summit 2026 (NACS 2026).",
    brief: "Official digital platform and summit management portal engineered for Notre Dame Career & Skill Development Club (NDCSDC) at Notre Dame College, Dhaka. Features delegate seat registrations for NACS 2026 across IBA, BUET, Medical and Abroad tracks, academic admission resource libraries, panel directories, and official college announcements. Engineered in partnership with NeexG.",
    highlights: [
      "Online delegate registration & ticketing workflow for 1st National Academic & Career Summit 2026",
      "Curated higher-education admission playbook repository (IBA DU, BUET, Medical & Scholarships)",
      "Club administration panel directory, alumni mentorship roster, and official event bulletin system"
    ],
    techStack: ["EdTech", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Full-Stack Engineer & Technical Partner (NeexG)",
    status: "Live",
    liveUrl: "https://ndcsdc-frontend.vercel.app/",
    featured: true,
    accentColor: "#DC2626",
    gradient: {
      from: "#991B1B",
      to: "#EF4444",
    },
    stats: [
      { label: "Institution", value: "Notre Dame College" },
      { label: "Partner", value: "NeexG Infrastructure" },
    ],
  },
];

