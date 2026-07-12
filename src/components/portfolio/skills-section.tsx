"use client";

import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./section-heading";
import { AnimatedSection } from "./animated-section";

export function SkillsSection() {
  const { data } = useLanguage();
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Technical Arsenal" subtitle="Technologies and tools I use to build solutions." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <AnimatedSection 
                key={skillGroup.category} 
                delay={`stagger-${(index % 3) + 1}` as "stagger-1" | "stagger-2" | "stagger-3"}
                animation="slide-up"
              >
                <div className="bg-[color:var(--surface)] border border-[color:var(--border)] p-8 rounded-2xl h-full shadow-sm hover:border-[color:var(--primary)]/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[color:var(--primary-container)] text-[color:var(--on-primary-container)] rounded-lg">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[color:var(--on-surface)]">{skillGroup.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map(item => (
                      <span 
                        key={item} 
                        className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-container)] px-4 py-1.5 text-sm font-medium text-[color:var(--foreground)] hover:border-[color:var(--primary)] transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
