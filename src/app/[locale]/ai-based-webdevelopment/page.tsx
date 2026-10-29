import type { Metadata } from "next";
import { CoursePageClient } from "@/components/course/CoursePageClient";

export const metadata: Metadata = {
  title: "AI-Based Web Design & Development | Abu Hosain",
  description:
    "Master modern web development, React 19, Next.js App Router, and cutting-edge AI tools (Cursor, Google Antigravity, Claude, v0) with Abu Hosain — Founder of NeexG & Systomex.",
  keywords: [
    "AI-Based Web Design & Development",
    "Abu Hosain",
    "Abu Hosain Course",
    "Web Development Course Bangladesh",
    "Next.js App Router Course",
    "React 19 Course",
    "Cursor AI Web Development",
    "Google Antigravity",
    "Vibe Coding",
    "NeexG",
    "Systomex",
    "Full-Stack Development Course",
    "Vercel Deployment",
    "Cloud Edge Hosting",
    "Freelancing Mentorship Bangladesh",
  ],
  alternates: {
    canonical: "https://abuhosain.dev/ai-based-webdevelopment",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abuhosain.dev/ai-based-webdevelopment",
    title: "AI-Based Web Design & Development | Abu Hosain",
    description:
      "A 3-month practical engineering mentorship. Build real SaaS platforms, deploy to Vercel edge & custom domains, and master modern AI vibe coding workflows with Abu Hosain (Founder, NeexG & Systomex).",
    siteName: "Abu Hosain",
    images: [
      {
        url: "https://abuhosain.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI-Based Web Design & Development with Abu Hosain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Based Web Design & Development | Abu Hosain",
    description:
      "3-Month intensive web engineering mentorship. Master Next.js, AI Vibe Coding (Cursor, Antigravity, Claude), and production cloud deployment.",
    images: ["https://abuhosain.dev/og-image.png"],
    creator: "@abuhosain25",
  },
};

export default function CoursePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI-Based Web Design & Development",
    description:
      "A hands-on, 3-month engineering mentorship on modern full-stack web development, React 19, Next.js, AI Vibe Coding (Cursor, Google Antigravity, Claude, v0), Vercel cloud deployment, and client business workflows.",
    provider: {
      "@type": "Person",
      name: "Abu Hosain",
      jobTitle: "Founder of NeexG & Systomex · Software Engineer",
      url: "https://abuhosain.dev",
      sameAs: [
        "https://neexg.com",
        "https://oregent.com",
        "https://youtube.com/@hosainfo",
        "https://www.facebook.com/abuhosain25",
      ],
    },
    educationalCredentialAwarded: "Course Completion Certificate & Production Portfolio",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      duration: "P12W",
    },
  };

  return (
    <div className="relative min-h-screen bg-[#090A0F] text-[#EDEDEF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursePageClient />
    </div>
  );
}
