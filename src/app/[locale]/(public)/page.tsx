import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Lab } from "@/components/sections/Lab";
import { Founder } from "@/components/sections/Founder";
import { HowIBuild } from "@/components/sections/HowIBuild";
import { Journey } from "@/components/sections/Journey";
import { Experience } from "@/components/sections/Experience";
import { Philosophy } from "@/components/sections/Philosophy";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Articles } from "@/components/sections/Articles";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#0A0A0D]">
      {/* 1. Hero */}
      <Hero />

      {/* 2. About & Core Pillars */}
      <About />

      {/* 3. Skills / Tech Stack */}
      <Skills />

      {/* 4. Projects Showcase */}
      <Projects />

      {/* 5. The Lab — Building Outside the Browser */}
      <Lab />

      {/* 6. Founder / SystomeX */}
      <Founder />

      {/* 7. How I Build (01-06 Methodology) */}
      <HowIBuild />

      {/* 8. Journey (Evolution & Milestones) */}
      <Journey />

      {/* 9. Experience & Architectural Capabilities */}
      <Experience />

      {/* 10. Engineering Philosophy */}
      <Philosophy />

      {/* 11. GitHub & Code Activity */}
      <GitHubActivity />

      {/* 12. Articles & Technical Notes */}
      <Articles />

      {/* 13. Contact Hub */}
      <Contact />
    </div>
  );
}
