"use client";

import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./section-heading";
import { AnimatedSection } from "./animated-section";
import { Code, Terminal } from "lucide-react";

export function AboutSection() {
  const { data } = useLanguage();
  
  const stats = [
    { label: "Years Experience", value: "1+", icon: Terminal },
    { label: "Projects Completed", value: "3+", icon: Code },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="A brief introduction to who I am and what I do." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimatedSection animation="slide-up">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-[color:var(--muted-foreground)] leading-relaxed text-lg">
                {data.personal.about}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection
                  key={stat.label}
                  delay={`stagger-${(index % 3) + 1}` as "stagger-1" | "stagger-2" | "stagger-3"}
                  animation="slide-up"
                  className="bg-[color:var(--surface)] border border-[color:var(--border)] p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:border-[color:var(--primary)]/30 transition-colors"
                >
                  <div className="h-12 w-12 rounded-xl bg-[color:var(--primary)]/10 flex items-center justify-center text-[color:var(--primary)]">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-[color:var(--on-surface)] mb-1">{stat.value}</h4>
                    <p className="text-sm font-medium text-[color:var(--muted-foreground)]">{stat.label}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
