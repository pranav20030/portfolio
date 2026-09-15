import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-10 sm:px-6 sm:py-20">
      <SectionHeading eyebrow="Testimonials" title="What clients say" />

      <Reveal delay={100}>
        {testimonials.length === 0 ? (
          <div className="relative mt-12 flex flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-dashed border-border py-16 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent-a/5 via-transparent to-accent-c/5"
            />
            <Quote className="size-6 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">
              Testimonials coming soon — check back after a few more projects wrap up.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-xl border border-border/70 p-6 text-sm"
              >
                <blockquote className="text-foreground text-pretty">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-muted-foreground">
                  <span className="font-medium text-foreground">{t.name}</span> — {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
