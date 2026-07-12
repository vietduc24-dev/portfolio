import { SectionShell } from "@/components/shared/section-shell";
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/data/portfolio";

export function StackStrip() {
  return (
    <SectionShell
      eyebrow="Toolkit"
      title="Chosen for maintainability, not trend chasing."
      description="The stack here reflects how I like to work: clear boundaries in the codebase, predictable deployment, and enough flexibility to grow into richer application surfaces later."
    >
      <div className="flex flex-wrap gap-3">
        {portfolio.stack.map((skill) => (
          <Badge key={skill} className="px-4 py-2 text-[0.7rem] text-[color:var(--foreground)]">
            {skill}
          </Badge>
        ))}
      </div>
    </SectionShell>
  );
}
