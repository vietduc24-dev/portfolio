import { SectionShell } from "@/components/shared/section-shell";
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/data/portfolio";

export function CapabilityGrid() {
  return (
    <SectionShell
      eyebrow="Capabilities"
      title="The codebase is meant to scale beyond a single marketing page."
      description="The current implementation is intentionally structured so new sections, blog entries, case studies, or backend-backed content can be added without rewriting the whole site."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {portfolio.capabilities.map((item) => (
          <article
            key={item.title}
            className="flex h-full flex-col rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
          >
            <h3 className="text-xl font-medium text-[color:var(--foreground)]">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-[color:var(--muted-foreground)]">
              {item.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
