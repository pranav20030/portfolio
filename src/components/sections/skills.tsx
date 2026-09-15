"use client";

import { Braces, Code2, Database, Server, Wrench } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, revealItem } from "@/components/reveal";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

const icons = [Braces, Code2, Server, Database, Wrench];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-10 sm:px-6 sm:py-10">
      <SectionHeading
        eyebrow="Skills"
        title="A stack built for shipping real products"
        description="Grouped by where each piece actually shows up in a project, not just a list of logos."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal
              key={group.title}
              delay={(i % 2) * 80}
              className="rounded-xl border border-border/70 bg-background p-6 transition-colors hover:border-accent-a/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-gradient-to-br from-accent-a/15 to-accent-b/15 text-accent-a">
                  <Icon className="size-4" />
                </span>
                <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground text-pretty">
                {group.description}
              </p>
              <RevealGroup className="mt-4 flex flex-wrap gap-1.5" stagger={0.04}>
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={revealItem}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="rounded-full border border-border/70 bg-secondary px-2.5 py-1 text-xs font-normal text-secondary-foreground"
                  >
                    {item}
                  </motion.span>
                ))}
              </RevealGroup>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
