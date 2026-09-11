import { Variants, Transition } from "framer-motion";

// Custom cubic-bezier easing as specified in design system
export const EASINGS = {
  expoOut: [0.16, 1, 0.3, 1] as const,
  smoothOut: [0.22, 1, 0.36, 1] as const,
  springy: [0.34, 1.56, 0.64, 1] as const,
  snappy: [0.4, 0, 0.2, 1] as const,
};

export const TRANSITIONS = {
  micro: {
    duration: 0.18,
    ease: EASINGS.snappy,
  } satisfies Transition,
  fast: {
    duration: 0.35,
    ease: EASINGS.expoOut,
  } satisfies Transition,
  normal: {
    duration: 0.6,
    ease: EASINGS.expoOut,
  } satisfies Transition,
  slow: {
    duration: 0.9,
    ease: EASINGS.expoOut,
  } satisfies Transition,
  hero: {
    duration: 1.1,
    ease: EASINGS.expoOut,
  } satisfies Transition,
};

export const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: custom * 0.08,
      ease: EASINGS.expoOut,
    },
  }),
};

export const fadeInScaleVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: custom * 0.08,
      ease: EASINGS.expoOut,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
