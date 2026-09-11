"use client";

import React, { useState, useEffect } from "react";
import { soundFX } from "@/lib/sound";
import { useTheme, THEMES, AccentTheme } from "@/contexts/ThemeContext";
import { Volume2, VolumeX, Zap, Palette, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CyberHUD() {
  const { activeTheme, setTheme } = useTheme();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [latency, setLatency] = useState(38);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(32 + Math.floor(Math.random() * 12));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFX.enabled = next;
    if (next) soundFX.playChirp();
  };

  const triggerHyperdrive = () => {
    soundFX.playShockwave();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("hero:pulse_core"));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Theme Color Palette Picker Flyout */}
      <AnimatePresence>
        {paletteOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-2 p-3 rounded-2xl bg-[#0F0F1A]/95 border border-white/20 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] space-y-2"
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pb-1 border-b border-white/10">
              <span className="flex items-center gap-1 text-white font-bold">
                <Sparkles className="w-3 h-3 text-accent" /> Accent Themes
              </span>
              <button onClick={() => setPaletteOpen(false)}>
                <X className="w-3 h-3 hover:text-white" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id as AccentTheme);
                    setPaletteOpen(false);
                  }}
                  title={theme.name}
                  className={`w-6 h-6 rounded-full border-2 transition-all ${
                    activeTheme.id === theme.id ? "border-white scale-125 shadow-lg" : "border-transparent opacity-75 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: theme.hex }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating HUD Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#0C0C14]/85 border border-white/15 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_15px_rgba(0,240,255,0.05)]"
      >
        {/* Hyperspace Pulse Trigger */}
        <button
          onClick={triggerHyperdrive}
          title="Trigger 3D Quantum Shockwave"
          className="p-2 rounded-full bg-accent/15 text-accent hover:bg-accent hover:text-black border border-accent/40 transition-all group"
        >
          <Zap className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
        </button>

        {/* Theme Palette Switcher */}
        <button
          onClick={() => {
            soundFX.playClick(700);
            setPaletteOpen(!paletteOpen);
          }}
          title="Change Live Accent Theme Color"
          className="p-2 rounded-full bg-[#161626] border border-white/10 text-neutral-300 hover:text-accent transition-all"
        >
          <Palette className="w-3.5 h-3.5" />
        </button>

        {/* Audio FX Toggle */}
        <button
          onClick={toggleSound}
          title={soundEnabled ? "Mute Sci-Fi Audio FX" : "Unmute Sci-Fi Audio FX"}
          className={`p-2 rounded-full border transition-all ${
            soundEnabled
              ? "bg-[#161626] border-white/10 text-neutral-300 hover:text-white"
              : "bg-red-950/40 border-red-500/30 text-red-400"
          }`}
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </button>

        {/* Telemetry Indicator */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/5 font-mono text-[10px] text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>{latency}ms</span>
        </div>
      </motion.div>
    </div>
  );
}

export default CyberHUD;
