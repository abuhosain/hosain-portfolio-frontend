"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "project" | "text">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest("[data-cursor='project']")) {
        setCursorType("project");
      } else if (target.closest("button, a, input, textarea, [data-cursor='pointer']")) {
        setCursorType("hover");
      } else if (target.closest("[data-cursor='text']")) {
        setCursorType("text");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!mounted || isTouchDevice || shouldReduceMotion) {
    return null;
  }

  const cursorVariants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: "#00F0FF",
      border: "0px solid transparent",
      boxShadow: "0 0 10px rgba(0, 240, 255, 0.8)",
    },
    hover: {
      width: 42,
      height: 42,
      backgroundColor: "rgba(0, 240, 255, 0.15)",
      border: "1px solid rgba(0, 240, 255, 0.6)",
      boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)",
    },
    project: {
      width: 70,
      height: 70,
      backgroundColor: "rgba(0, 240, 255, 0.9)",
      border: "0px solid transparent",
      boxShadow: "0 0 30px rgba(0, 240, 255, 0.6)",
    },
    text: {
      width: 4,
      height: 24,
      borderRadius: 2,
      backgroundColor: "#00F0FF",
      border: "0px solid transparent",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      variants={cursorVariants}
      animate={cursorType}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      {cursorType === "project" && (
        <span className="text-[10px] font-bold tracking-widest text-black uppercase font-mono">
          VIEW
        </span>
      )}
    </motion.div>
  );
}
