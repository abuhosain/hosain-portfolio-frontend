"use client";

import React, { useState } from "react";
import { soundFX } from "@/lib/sound";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Sliders, Cpu, Activity, Zap, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export function InteractiveLabSandbox() {
  const [temp, setTemp] = useState<number>(26.5);
  const [ph, setPh] = useState<number>(7.2);
  const [aerationRelay, setAerationRelay] = useState<boolean>(true);
  const [feedServoOpen, setFeedServoOpen] = useState<boolean>(false);

  // Status computation
  const isTempNominal = temp >= 24 && temp <= 28;
  const isPhNominal = ph >= 6.8 && ph <= 7.8;

  const triggerFeedServo = () => {
    soundFX.playChirp();
    setFeedServoOpen(true);
    setTimeout(() => {
      setFeedServoOpen(false);
    }, 1800);
  };

  const toggleAeration = () => {
    soundFX.playClick(aerationRelay ? 500 : 900);
    setAerationRelay(!aerationRelay);
  };

  return (
    <Card variant="glass" borderAccent className="p-6 md:p-8 bg-[#0D0D16]/95 border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-accent/15 text-accent border border-accent/40">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              ESP32 Interactive Telemetry Sandbox
            </h4>
            <p className="text-[11px] text-neutral-400 font-mono">
              Simulate sensor changes &amp; watch firmware react in real time
            </p>
          </div>
        </div>

        <Badge variant={isTempNominal && isPhNominal ? "live" : "default"} size="sm">
          {isTempNominal && isPhNominal ? "Aquaculture Optimal" : "Threshold Alert Triggered"}
        </Badge>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Temperature Sensor Slider */}
        <div className="p-4 rounded-xl bg-[#141422]/80 border border-white/5 space-y-2.5">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-neutral-300 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-accent" /> DS18B20 Temp Probe
            </span>
            <span className={`font-bold ${isTempNominal ? "text-emerald-400" : "text-amber-400"}`}>
              {temp.toFixed(1)} °C
            </span>
          </div>
          <input
            type="range"
            min="20"
            max="34"
            step="0.1"
            value={temp}
            onChange={(e) => {
              setTemp(parseFloat(e.target.value));
              soundFX.playClick(600);
            }}
            className="w-full accent-cyan-400 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-neutral-500">
            <span>20°C (Cold)</span>
            <span>Nominal: 24–28°C</span>
            <span>34°C (Overheat)</span>
          </div>
        </div>

        {/* pH Sensor Slider */}
        <div className="p-4 rounded-xl bg-[#141422]/80 border border-white/5 space-y-2.5">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-neutral-300 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-purple-400" /> Analog pH Sensor
            </span>
            <span className={`font-bold ${isPhNominal ? "text-emerald-400" : "text-amber-400"}`}>
              {ph.toFixed(2)} pH
            </span>
          </div>
          <input
            type="range"
            min="5.0"
            max="9.0"
            step="0.05"
            value={ph}
            onChange={(e) => {
              setPh(parseFloat(e.target.value));
              soundFX.playClick(750);
            }}
            className="w-full accent-purple-400 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-neutral-500">
            <span>5.0 (Acidic)</span>
            <span>Nominal: 6.8–7.8</span>
            <span>9.0 (Alkaline)</span>
          </div>
        </div>
      </div>

      {/* Actuator & Relay Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <button
          onClick={toggleAeration}
          className={`p-3.5 rounded-xl border font-mono text-xs flex items-center justify-between transition-all ${
            aerationRelay
              ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              : "bg-[#14141E] border-white/10 text-neutral-400 hover:text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Pump Relay #1 (Aerator)</span>
          </div>
          <span className="font-bold">{aerationRelay ? "ENGAGED" : "OFF"}</span>
        </button>

        <button
          onClick={triggerFeedServo}
          disabled={feedServoOpen}
          className={`p-3.5 rounded-xl border font-mono text-xs flex items-center justify-between transition-all ${
            feedServoOpen
              ? "bg-accent/20 border-accent text-accent shadow-[0_0_20px_rgba(0,240,255,0.3)] animate-pulse"
              : "bg-[#14141E] border-white/10 text-neutral-300 hover:border-accent/40 hover:text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-accent" />
            <span>Feeder SG90 Servo</span>
          </div>
          <span className="font-bold">{feedServoOpen ? "DISPENSING (90°)" : "TEST FEED"}</span>
        </button>
      </div>
    </Card>
  );
}

export default InteractiveLabSandbox;
