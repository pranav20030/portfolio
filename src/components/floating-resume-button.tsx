"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";

import { site } from "@/lib/data";

export function FloatingResumeButton() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={site.resumeUrl}
      download
      aria-label="Download Resume"
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed right-6 bottom-6 z-40 flex size-12 items-center justify-center gap-2 rounded-full bg-foreground text-background shadow-lg shadow-black/10 transition-shadow hover:shadow-[0_0_28px_-4px_var(--accent-a)] sm:h-11 sm:w-auto sm:px-5"
    >
      <Download className="size-5 shrink-0 sm:size-4" />
      <span className="hidden text-sm font-medium sm:inline">Download Resume</span>
    </motion.a>
  );
}
