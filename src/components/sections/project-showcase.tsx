import { SectionShell } from "@/components/shared/section-shell";
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/data/portfolio";

export function ProjectShowcase() {
  return (
    <SectionShell
      eyebrow="Selected work"
      title="Proof should be concrete, even in a portfolio."
      description="Project entries are structured as case-study cards so you can keep adding outcomes, links, metrics, and screenshots later without changing the page architecture."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {portfolio.projects.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl font-medium text-[color:var(--foreground)]">{project.name}</h3>
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                {project.period}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
            <ul className="mt-6 space-y-3">
              {project.impact.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-3 text-sm leading-7 text-[color:var(--foreground)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
