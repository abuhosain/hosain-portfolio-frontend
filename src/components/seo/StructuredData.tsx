import React from "react";
import { projectsData } from "@/data/projects";
import { profileData } from "@/data/profile";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abu Hosain",
    alternateName: "Abu Hosain (Hosain)",
    url: "https://abuhosain.dev",
    image: profileData.image,
    jobTitle: "Software Engineer",
    description:
      "Full-stack software engineer, founder of NeexG and co-founder of Oregent, specializing in web apps, SaaS products, branding, AI automation (n8n, Zapier) and video editing.",
    email: "mailto:abuhosainmin@gmail.com",
    telephone: "+8801319539510",
    nationality: {
      "@type": "Country",
      name: "Bangladesh",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bogura Polytechnic Institute",
      sameAs: "https://bpi.edu.bd",
    },
    award: [
      "International Gold Medal — Innovation World Cup (IWC)",
      "International Gold Medal — International Invention and Innovation Competition (I3C)",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "NeexG",
        url: "https://neexg.com",
        jobTitle: "Founder & CEO",
      },
      {
        "@type": "Organization",
        name: "Oregent",
        url: "https://oregent.com",
        jobTitle: "Co-Founder",
      },
    ],
    sameAs: [
      "https://www.facebook.com/abuhosain25",
      "https://instagram.com/abuhosain25",
      "https://youtube.com/@hosainfo",
      "https://neexg.com",
      "https://oregent.com",
      "https://github.com/abuhosain",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "PostgreSQL",
      "n8n",
      "Zapier",
      "AI Automation",
      "Machine Learning",
      "Video Editing",
      "Branding",
      "Brand Strategy",
      "Brand Identity",
      "ESP32",
      "Embedded Systems",
      "Docker",
      "AWS",
    ],
  };

  const neexgOrgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NeexG",
    url: "https://neexg.com",
    logo: "https://neexg.com/logo.png",
    founder: {
      "@type": "Person",
      name: "Abu Hosain",
      url: "https://abuhosain.dev",
    },
    description:
      "A Bangladesh-based digital product and web engineering agency building websites, SaaS platforms, e-commerce systems, and AI automation solutions.",
    sameAs: ["https://neexg.com"],
  };

  const oregentOrgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oregent",
    url: "https://oregent.com",
    logo: "https://oregent.com/logo.png",
    founder: {
      "@type": "Person",
      name: "Abu Hosain",
      url: "https://abuhosain.dev",
    },
    description:
      "A modern fashion and sneaker e-commerce brand delivering custom apparel, footwear, and curated streetwear.",
    sameAs: ["https://oregent.com"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abu Hosain Portfolio",
    url: "https://abuhosain.dev",
    author: {
      "@type": "Person",
      name: "Abu Hosain",
    },
    description:
      "Official portfolio and engineering catalog of Abu Hosain — Software Engineer, Founder of NeexG, and Co-Founder of Oregent.",
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "Web & SaaS Development",
        provider: {
          "@type": "Organization",
          name: "NeexG",
          url: "https://neexg.com",
        },
        description:
          "Custom websites, e-commerce platforms and SaaS products with React, Next.js and Node.js.",
      },
      {
        "@type": "Service",
        name: "Branding & Brand Identity",
        provider: {
          "@type": "Organization",
          name: "NeexG",
          url: "https://neexg.com",
        },
        description:
          "Positioning, visual identity, brand voice and social media presence for scalable businesses.",
      },
      {
        "@type": "Service",
        name: "AI Automation (n8n & Zapier)",
        provider: {
          "@type": "Organization",
          name: "NeexG",
          url: "https://neexg.com",
        },
        description:
          "Automate lead capture, CRM sync, email/WhatsApp follow-ups, and operational reporting.",
      },
      {
        "@type": "Service",
        name: "Video Editing",
        provider: {
          "@type": "Organization",
          name: "NeexG",
          url: "https://neexg.com",
        },
        description:
          "Promo videos, reels/shorts, explainer and brand videos.",
      },
    ],
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        url: project.liveUrl,
        description: project.description,
        applicationCategory: project.category,
        operatingSystem: "Web Browser",
        author: {
          "@type": "Person",
          name: "Abu Hosain",
          url: "https://abuhosain.dev",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(neexgOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(oregentOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </>
  );
}

export default StructuredData;
