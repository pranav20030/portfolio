"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { GithubIcon } from "@/components/icons";
import { ProjectCover } from "@/components/project-cover";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-10 sm:px-6 sm:py-10">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects built end-to-end, in production"
        description="Framed here by the problem, the solution, and what it did once it shipped."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 100}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group h-full overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm transition-colors hover:border-accent-a/40 hover:shadow-lg"
            >
              {/* Browser-frame mockup */}
              <div className="border-b border-border/70 bg-muted/40 p-3">
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-muted-foreground/30" />
                  <span className="size-2 rounded-full bg-muted-foreground/30" />
                  <span className="size-2 rounded-full bg-muted-foreground/30" />
                </div>
                <ProjectCover
                  slug={project.slug}
                  className="relative aspect-video overflow-hidden rounded-md transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                  <div className="flex shrink-0 items-center gap-3">
                    {project.link ? (
                      <Link
                        href={project.link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={project.link.label}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ArrowUpRight className="size-4" />
                      </Link>
                    ) : null}
                    {project.repo ? (
                      <Link
                        href={project.repo.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={project.repo.label}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <GithubIcon className="size-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>

                <p className="font-mono text-xs text-accent-a">
                  Tech Stack: <span className="text-muted-foreground">{project.tags.join(", ")}</span>
                </p>

                <p className="text-sm text-muted-foreground text-pretty">{project.description}</p>

                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Problem
                    </dt>
                    <dd className="mt-1 text-muted-foreground text-pretty">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Solution
                    </dt>
                    <dd className="mt-1 text-muted-foreground text-pretty">{project.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Impact
                    </dt>
                    <dd className="mt-1 text-foreground text-pretty">{project.impact}</dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
