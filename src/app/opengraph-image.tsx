import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abu Hosain — Software Engineer, Branding & AI Automation | NeexG & Oregent";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#090A0F",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(9,10,15,0) 70%)",
          }}
        />

        {/* Top Tag Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "999px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#93C5FD",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#3B82F6" }} />
            <span>abuhosain.dev</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#FCD34D",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            <span>★ Dual International Gold Medalist (IWC &amp; I3C)</span>
          </div>
        </div>

        {/* Middle Main Narrative */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ color: "#FFFFFF", fontSize: "64px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Abu Hosain
          </div>
          <div style={{ color: "#D1D5DB", fontSize: "28px", fontWeight: 600, lineHeight: 1.3 }}>
            Software Engineer · Branding · AI Automation
          </div>
          <div style={{ color: "#9CA3AF", fontSize: "20px", maxWidth: "900px", lineHeight: 1.4 }}>
            Founder of <span style={{ color: "#60A5FA", fontWeight: 700 }}>NeexG</span> &amp; Co-Founder of{" "}
            <span style={{ color: "#FBBF24", fontWeight: 700 }}>Oregent</span>. Building high-performance SaaS platforms,
            web applications, and n8n/Zapier automations.
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
            color: "#6B7280",
            fontSize: "15px",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <span>React / Next.js / Node.js</span>
            <span>·</span>
            <span>n8n &amp; Zapier Automations</span>
            <span>·</span>
            <span>Brand Identity Direction</span>
          </div>
          <div style={{ color: "#9CA3AF" }}>Bogura Polytechnic Institute (CST)</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
