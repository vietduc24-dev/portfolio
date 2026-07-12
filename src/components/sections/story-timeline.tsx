import { StoryGrid } from "@/components/illustrations/story-grid";
import { SectionShell } from "@/components/shared/section-shell";
import { portfolio } from "@/data/portfolio";

export function StoryTimeline() {
  return (
    <SectionShell
      eyebrow="Narrative flow"
      title="The portfolio is structured like a product story, not a pile of sections."
      description="Each block has a job: establish context, explain the working style, prove execution quality, and end with a clean call to action."
    >
      <div className="space-y-8">
        <StoryGrid />
        <div className="grid gap-4 lg:grid-cols-3">
          {portfolio.timeline.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
            >
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                {item.step}
              </p>
              <h3 className="mt-4 text-lg font-medium text-[color:var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
