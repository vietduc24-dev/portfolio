import { SectionShell } from "@/components/shared/section-shell";
import { portfolio } from "@/data/portfolio";

export function PrinciplesPanel() {
  return (
    <SectionShell
      eyebrow="Working principles"
      title="Good portfolios are edited like products."
      description="The page should be easy to scan, but the code behind it should be even easier to extend. These principles drive both the design and the architecture."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {portfolio.identity.principles.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
          >
            <h3 className="text-lg font-medium text-[color:var(--foreground)]">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
