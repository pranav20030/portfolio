import { Briefcase } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-10 sm:px-6 sm:py-10">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've shipped"
        description="Production work, not just side projects — dashboards and real-time features used by real teams."
      />

      <div className="relative mt-12 space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[19px] before:hidden before:w-px before:bg-gradient-to-b before:from-accent-a before:via-accent-b before:to-accent-c/0 sm:before:block">
        {experience.map((role, i) => (
          <Reveal key={`${role.company}-${role.period}`} delay={i * 100} className="relative sm:pl-14">
            <span className="absolute top-6 left-0 hidden size-10 items-center justify-center rounded-full border border-border bg-background text-accent-a shadow-sm sm:flex">
              <Briefcase className="size-4" />
            </span>
            <Card className="border-border/70 transition-colors hover:border-accent-a/40">
              <CardContent className="flex flex-col gap-3">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-base font-semibold text-foreground">
                    {role.role} · <span className="text-muted-foreground">{role.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{role.period}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-2 text-pretty">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-a" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
