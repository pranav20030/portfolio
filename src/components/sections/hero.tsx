"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { site } from "@/lib/data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLElement>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${event.clientX - rect.left}px`);
    ref.current.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative isolate scroll-mt-16 overflow-hidden"
    >
      {/* Mesh gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -top-32 -left-24 size-[26rem] rounded-full bg-accent-a/30 blur-[100px] dark:bg-accent-a/25" />
        <div className="absolute -top-10 right-[-8rem] size-[22rem] rounded-full bg-accent-b/25 blur-[100px] dark:bg-accent-b/20" />
        <div className="absolute top-40 left-1/3 size-[20rem] rounded-full bg-accent-c/20 blur-[110px] dark:bg-accent-c/20" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black_30%,transparent_100%)] opacity-60"
      />

      {/* Cursor-follow glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden sm:block"
        style={{
          background:
            "radial-gradient(500px circle at var(--x, 50%) var(--y, 10%), color-mix(in oklch, var(--accent-a), transparent 88%), transparent 70%)",
        }}
      />

      <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 px-4 pt-20 pb-10 sm:px-6 sm:pt-28 sm:pb-20 md:flex-row md:items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex max-w-3xl flex-col items-start"
        >
          {/* <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-a/70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent-a" />
            </span>
            {site.location}
          </motion.span> */}

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">{site.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 font-mono text-sm text-muted-foreground sm:text-base"
          >
            {site.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_28px_-6px_var(--accent-a)]"
            >
              <Link href="#work">
                <span className="relative z-10 inline-flex items-center gap-1.5">
                  View Work
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">
                Hire Me
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto shrink-0 md:mx-0"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-accent-a via-accent-b to-accent-c opacity-70 blur-2xl"
          />
          <Avatar className="size-36 border-4 border-background shadow-xl ring-1 ring-border sm:size-44">
            <AvatarImage
              src={site.headshotUrl}
              alt={site.fullName}
              className="object-[38%_32%]"
            />
            <AvatarFallback className="bg-gradient-to-br from-accent-a via-accent-b to-accent-c text-2xl font-semibold text-white sm:text-3xl">
              {site.initials}
            </AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
    </section>
  );
}
