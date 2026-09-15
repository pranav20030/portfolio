import Link from "next/link";
import { Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { nav, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm font-medium text-foreground">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{site.role}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </Link>
          <Link
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-4" />
          </Link>
          <Link
            href={site.socials.email}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-8 sm:px-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind CSS, and shadcn/ui.
        </p>
      </div>
    </footer>
  );
}
