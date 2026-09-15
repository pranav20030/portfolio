import { GraduationCap } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { about, aboutStats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-10 sm:px-6 sm:py-10">
      <SectionHeading
        eyebrow="About"
        title="I ship the whole application, not just the screens"
        description={about.bio}
      />

      <Reveal delay={80} className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <GraduationCap className="size-4 text-accent-a" />
        {about.education}
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {aboutStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100}>
            <Card className="h-full overflow-hidden border-border/70">
              <CardContent className="flex h-full flex-col gap-1.5 pt-1">
                <p className="text-3xl font-semibold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground text-pretty">{stat.label}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
