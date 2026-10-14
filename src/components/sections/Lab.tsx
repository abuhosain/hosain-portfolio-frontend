"use client";

import React from "react";
import { labData } from "@/data/lab";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { TelemetryCard } from "../ui/TelemetryCard";
import { Reveal } from "../animations/Reveal";
import { TiltCard } from "../animations/TiltCard";
import { LabCircuitCanvas } from "../3d/LabCircuitCanvas";
import { InteractiveLabSandbox } from "../3d/InteractiveLabSandbox";
import { Cpu, Terminal, Activity, Radio, Droplets, Clock, Zap } from "lucide-react";

export function Lab() {
  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case "Activity":
        return <Activity className="w-4 h-4 text-accent" />;
      case "Clock":
        return <Clock className="w-4 h-4 text-accent" />;
      case "Droplets":
        return <Droplets className="w-4 h-4 text-accent" />;
      case "Radio":
        return <Radio className="w-4 h-4 text-accent" />;
      default:
        return <Zap className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section id="lab" className="py-24 relative bg-[#07080D] border-t border-white/[0.08] overflow-hidden">
      {/* 3D WebGL Circuit & Telemetry Network Canvas */}
      <LabCircuitCanvas />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          index="04"
          badge="The Lab & Physical Computing"
          badgeIcon={<Cpu className="w-3.5 h-3.5 text-accent" />}
          title="Building Outside the Browser:"
          titleAccent="SmartFishBreeder & IoT."
          subtitle="Connecting code directly to microcontrollers, sensors, automated relays, and live 3D cloud telemetry."
        />

        {/* Highlight Banner / Concept */}
        <Reveal direction="up" delay={0.1}>
          <TiltCard maxTilt={5} glareOpacity={0.15}>
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#11111A]/95 via-[#141422]/95 to-[#11111A]/95 border border-white/10 mb-12 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.7)]">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <Badge variant="live" size="sm">
                      ESP32 Hardware Verified
                    </Badge>
                    <span className="text-xs font-mono text-neutral-400">
                      Dual-Core 240MHz System
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {labData.name} — {labData.subtitle}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {labData.concept}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-right font-mono">
                    <div className="text-[10px] text-neutral-500 uppercase">Cloud Integration</div>
                    <div className="text-sm font-semibold text-emerald-400">Firebase RTDB</div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        {/* Interactive Firmware Sandbox Test Bench */}
        <Reveal direction="up" delay={0.15}>
          <div className="mb-12">
            <InteractiveLabSandbox />
          </div>
        </Reveal>

        {/* Main Lab Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Live Telemetry Monitor & Terminal */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="left" delay={0.15}>
              <TiltCard maxTilt={6} glareOpacity={0.2}>
                <TelemetryCard
                  metrics={labData.telemetryMetrics}
                  title="SmartFishBreeder Live Telemetry"
                  firmwareVersion="v2.4-FreeRTOS"
                />
              </TiltCard>
            </Reveal>

            {/* Terminal Log Stream */}
            <Reveal direction="left" delay={0.25}>
              <Card variant="solid" className="p-5 border-white/10 bg-[#09090E]/95 backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 font-mono text-xs">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Terminal className="w-4 h-4 text-accent" />
                    <span>serial_monitor::ttyUSB0 (115200 baud)</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">STREAMING</span>
                </div>

                <div className="font-mono text-xs space-y-1.5 text-neutral-400 max-h-48 overflow-y-auto pr-2">
                  {labData.terminalLogs.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-neutral-600 select-none">&gt;</span>
                      <span className={idx === labData.terminalLogs.length - 1 ? "text-accent font-semibold" : ""}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>

          {/* Right Column: Hardware & Firmware Specs */}
          <div className="lg:col-span-5 space-y-6">
            {/* System Features */}
            <Reveal direction="right" delay={0.2}>
              <TiltCard maxTilt={8} glareOpacity={0.2}>
                <Card variant="glass" borderAccent className="p-6 border-white/10 bg-[#0E0E16]/90 backdrop-blur-md">
                  <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>Autonomous Capabilities</span>
                  </h4>

                  <div className="space-y-3.5">
                    {labData.features.map((feat) => (
                      <div key={feat.title} className="p-3 rounded-xl bg-[#14141E]/80 border border-white/5">
                        <div className="flex items-center gap-2 mb-1">
                          {getFeatureIcon(feat.icon)}
                          <span className="text-xs font-semibold text-white">{feat.title}</span>
                        </div>
                        <p className="text-[11px] text-neutral-400 leading-relaxed pl-6">
                          {feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TiltCard>
            </Reveal>

            {/* Hardware BOM */}
            <Reveal direction="right" delay={0.3}>
              <Card variant="solid" className="p-6 border-white/10 bg-[#0E0E16]/90 backdrop-blur-md">
                <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider mb-3">
                  Embedded Hardware Specs
                </h4>
                <ul className="space-y-2 text-xs font-mono text-neutral-300">
                  {labData.hardware.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lab;
