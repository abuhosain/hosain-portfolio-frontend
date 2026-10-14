import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#090A0F] text-[#EDEDEF]">
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
