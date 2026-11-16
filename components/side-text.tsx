"use client";

import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const letter: Variants = {
  hidden: { opacity: 0, filter: "blur(18px)", scale: 1.4, y: 24 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SideText({ text }: { text: string }) {
  return (
    <motion.div
      aria-hidden="true"
      variants={container}
      initial="hidden"
      animate="show"
      className="pointer-events-none select-none fixed bottom-4 right-0 -z-10
                 max-h-dvh overflow-hidden
                 [writing-mode:vertical-rl] rotate-180
                 whitespace-pre font-extrabold uppercase leading-none tracking-tighter
                 text-[7vw] text-slate-200 dark:text-slate-800"
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter} className="inline-block">
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
