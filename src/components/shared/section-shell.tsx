import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-7 shadow-[0_12px_40px_rgba(24,32,47,0.08)] md:p-9",
        className,
      )}
    >
      <div className={cn("space-y-8", contentClassName)}>
        <header className="max-w-3xl space-y-3">
          {eyebrow ? (
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[color:var(--foreground)]">
            {title}
          </h2>
          {description ? (
            <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
