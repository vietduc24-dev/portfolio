import { ArrowUpRight } from "lucide-react";

import { SectionShell } from "@/components/shared/section-shell";
import { portfolio } from "@/data/portfolio";

export function ContactPanel() {
  return (
    <SectionShell
      eyebrow="Contact"
      title={portfolio.contact.heading}
      description="Contact links are data-driven, so you can later move them into CMS content, environment-driven config, or a backend source without rewriting the section."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {portfolio.contact.channels.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="flex items-center justify-between rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 transition-transform hover:translate-y-[-1px]"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-[color:var(--foreground)]">{item.value}</p>
            </div>
            <ArrowUpRight className="size-4 text-[color:var(--muted-foreground)]" />
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
