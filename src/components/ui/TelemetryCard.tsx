"use client";

import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Activity, Radio, Cpu, ShieldCheck } from "lucide-react";

interface TelemetryMetric {
  label: string;
  value: string;
  unit: string;
  status: "optimal" | "active" | "standby";
  change?: string;
}

interface TelemetryCardProps {
  metrics: TelemetryMetric[];
  title?: string;
  firmwareVersion?: string;
}

export function TelemetryCard({
  metrics,
  title = "ESP32 Live Telemetry Monitor",
  firmwareVersion = "v2.4-RTOS",
}: TelemetryCardProps) {
  // Live simulated micro-jitter for telemetry readings to give realistic alive feel
  const [jitter, setJitter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJitter((prev) => (prev > 5 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card variant="glass" borderAccent className="p-6 border-white/10 bg-[#0C0C12]/90">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-accent/10 text-accent border border-accent/30">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide font-mono">{title}</h4>
            <p className="text-[11px] text-neutral-400 font-mono">Kernel {firmwareVersion} · Telemetry Pipe Active</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs text-emerald-400 font-medium">LIVE STREAM</span>
        </div>
      </div>

      {/* Metric Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
        {metrics.map((metric, i) => {
          const isOptimal = metric.status === "optimal";
          const isActive = metric.status === "active";

          return (
            <div
              key={metric.label}
              className="p-3.5 rounded-xl bg-[#14141E]/80 border border-white/5 hover:border-accent/30 transition-colors"
            >
              <div className="text-[11px] font-mono text-neutral-400 mb-1 flex items-center justify-between">
                <span>{metric.label}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isOptimal ? "bg-emerald-400" : isActive ? "bg-accent" : "bg-amber-400"
                  }`}
                />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl md:text-2xl font-bold font-mono text-white tracking-tight">
                  {/* Subtle dynamic variance for temperature/pH */}
                  {metric.unit === "°C"
                    ? (parseFloat(metric.value) + (jitter % 2 === 0 ? 0.1 : -0.1)).toFixed(1)
                    : metric.unit === "pH"
                    ? (parseFloat(metric.value) + (jitter % 3 === 0 ? 0.02 : 0)).toFixed(2)
                    : metric.value}
                </span>
                <span className="text-xs font-mono text-accent/80">{metric.unit}</span>
              </div>
              {metric.change && (
                <p className="text-[10px] text-neutral-500 font-mono mt-1 truncate">
                  {metric.change}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer status bar */}
      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-1.5 text-accent/90">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>Syncing via Firebase RTDB (48ms latency)</span>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Security Handshake: OK</span>
        </div>
      </div>
    </Card>
  );
}
