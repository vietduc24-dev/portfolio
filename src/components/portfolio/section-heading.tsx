import { cn } from "@/lib/utils";
import { AnimatedSection } from "./animated-section";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <AnimatedSection className={cn("mb-12 md:mb-16", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[color:var(--on-surface)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[color:var(--muted-foreground)] max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-1 w-20 rounded bg-[color:var(--primary)] bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--tertiary)]" />
    </AnimatedSection>
  );
}
