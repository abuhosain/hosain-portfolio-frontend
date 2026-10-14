import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Ventures } from "@/components/sections/Ventures";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Lab } from "@/components/sections/Lab";
import { HowIBuild } from "@/components/sections/HowIBuild";
import { Journey } from "@/components/sections/Journey";
import { Experience } from "@/components/sections/Experience";
import { Philosophy } from "@/components/sections/Philosophy";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Articles } from "@/components/sections/Articles";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#090A0F]">
      {/* 1. Hero: Headline, Name, CTAs, Honors, Education */}
      <Hero />

      {/* 2. About & Core Background */}
      <About />

      {/* 3. Startups & Ventures: NeexG & Oregent */}
      <Ventures />

      {/* 4. Services: What I Can Do For You, 3-Step Methodology, SVG Automation Pipeline */}
      <Services />

      {/* 5. Grouped Skills & Stack */}
      <Skills />

      {/* 6. Projects Showcase: Curated Live Production Systems */}
      <Projects />

      {/* 7. The Lab: Hardware & Embedded Systems (ESP32) */}
      <Lab />

      {/* 8. How I Build (01-06 Engineering Methodology) */}
      <HowIBuild />

      {/* 9. Journey & Milestones */}
      <Journey />

      {/* 10. Architectural Experience & Production Roles */}
      <Experience />

      {/* 11. Engineering Philosophy */}
      <Philosophy />

      {/* 12. GitHub Code Activity */}
      <GitHubActivity />

      {/* 13. Articles & Technical Notes */}
      <Articles />

      {/* 14. Contact Hub */}
      <Contact />
    </div>
  );
}
