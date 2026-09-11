"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { soundFX } from "@/lib/sound";

export type AccentTheme = "cyan" | "emerald" | "violet" | "amber" | "crimson";

export interface ThemeConfig {
  id: AccentTheme;
  name: string;
  hex: string;
  rgb: string;
  glow: string;
}

export const THEMES: ThemeConfig[] = [
  { id: "cyan", name: "Electric Cyan", hex: "#00F0FF", rgb: "0 240 255", glow: "rgba(0, 240, 255, 0.4)" },
  { id: "emerald", name: "Signal Emerald", hex: "#10B981", rgb: "16 185 129", glow: "rgba(16, 185, 129, 0.4)" },
  { id: "violet", name: "Neon Violet", hex: "#8B5CF6", rgb: "139 92 246", glow: "rgba(139, 92, 246, 0.4)" },
  { id: "amber", name: "Cyber Amber", hex: "#F59E0B", rgb: "245 158 11", glow: "rgba(245, 158, 11, 0.4)" },
  { id: "crimson", name: "Crimson Red", hex: "#EF4444", rgb: "239 68 68", glow: "rgba(239, 68, 68, 0.4)" },
];

interface ThemeContextType {
  activeTheme: ThemeConfig;
  setTheme: (themeId: AccentTheme) => void;
  availableThemes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType>({
  activeTheme: THEMES[0],
  setTheme: () => {},
  availableThemes: THEMES,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<ThemeConfig>(THEMES[0]);

  useEffect(() => {
    const saved = localStorage.getItem("abu_hosain_accent_theme");
    if (saved) {
      const match = THEMES.find((t) => t.id === saved);
      if (match) {
        setActiveTheme(match);
        applyTheme(match);
      }
    } else {
      applyTheme(THEMES[0]);
    }
  }, []);

  const applyTheme = (theme: ThemeConfig) => {
    document.documentElement.style.setProperty("--accent-rgb", theme.rgb);
    document.documentElement.style.setProperty("--accent-color", theme.hex);
    document.documentElement.style.setProperty("--accent-cyan", theme.hex);
    document.documentElement.style.setProperty("--accent-glow", theme.glow);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("theme:change", { detail: theme }));
    }
  };

  const setTheme = (themeId: AccentTheme) => {
    const theme = THEMES.find((t) => t.id === themeId);
    if (theme) {
      soundFX.playClick(950);
      setActiveTheme(theme);
      applyTheme(theme);
      localStorage.setItem("abu_hosain_accent_theme", theme.id);
    }
  };

  return (
    <ThemeContext.Provider value={{ activeTheme, setTheme, availableThemes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
