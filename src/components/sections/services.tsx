"use client";

import { motion } from "framer-motion";
import { Code2, Database, Gauge, Zap } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/data";

const icons = [Code2, Database, Zap, Gauge];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-10 sm:px-6 sm:py-10">
      <SectionHeading
        eyebrow="Services"
        title="How I can help"
        description="Available for freelance and contract engagements — from a single integration to a full build."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={service.title} delay={(i % 2) * 100}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full overflow-hidden rounded-xl border border-border/70 p-6 transition-colors hover:border-accent-a/40 hover:shadow-md"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent-a to-accent-b text-white shadow-sm">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">
                  {service.description}
                </p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
