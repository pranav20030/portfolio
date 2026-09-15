"use client";

import * as React from "react";
import Link from "next/link";
import { Loader2, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/data";
import { contactSchema } from "@/lib/validations/contact";

const links = [
  { label: site.email, href: site.socials.email, icon: Mail },
  { label: site.phone, href: site.socials.phone, icon: Phone },
  { label: "LinkedIn", href: site.socials.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: site.socials.github, icon: GithubIcon },
];

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [submitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState<FieldErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong sending your message.");
      }

      form.reset();
      toast.success("Message sent — I'll get back to you soon.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to send message.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-10 sm:px-6 sm:py-10">
      <SectionHeading
        eyebrow="Get in touch"
        title="Contact"
        description=""
      />

      <div className="mt-12 grid gap-10 sm:grid-cols-5">
        <Reveal className="sm:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  aria-invalid={!!errors.name}
                />
                {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me a bit about your project…"
                rows={5}
                aria-invalid={!!errors.message}
              />
              {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : null}
            </div>
            <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Reveal>

        <Reveal delay={120} className="sm:col-span-2">
          <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-border/70 p-6">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent-a/5 via-transparent to-accent-c/5"
            />
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex size-8 items-center justify-center rounded-lg border border-border/70 text-accent-a transition-colors group-hover:border-accent-a/40">
                  <link.icon className="size-4" />
                </span>
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
