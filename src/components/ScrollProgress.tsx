import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  if (reduce) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[70] h-0.5 w-full origin-left bg-sacred-gold"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
