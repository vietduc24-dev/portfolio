"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./section-heading";
import { AnimatedSection } from "./animated-section";

export function CareerTimeline() {
  const { data } = useLanguage();
  return (
    <section id="journey" className="py-16 md:py-24 bg-[color:var(--surface-container-lowest)] relative border-y border-[color:var(--border)]">
      <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
        <SectionHeading title="Career Journey" subtitle="The path I've taken to become the developer I am today." />
        
        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[color:var(--border)] -translate-x-1/2" />
          
          <div className="space-y-12">
            {data.careerTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-center group">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[color:var(--primary)] -translate-x-1/2 shadow-[0_0_0_4px_var(--surface-container-lowest)] ring-1 ring-[color:var(--border)] z-10 transition-transform group-hover:scale-125" />
                  
                  {/* Content Container */}
                  <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <AnimatedSection animation="slide-up">
                      <div className="bg-[color:var(--surface)] border border-[color:var(--border)] p-6 rounded-2xl shadow-sm hover:border-[color:var(--primary)]/30 transition-colors">
                        <div className="text-sm font-bold text-[color:var(--primary)] mb-2">Phase {item.id}</div>
                        <h4 className="text-xl font-bold text-[color:var(--on-surface)] mb-2">{item.title}</h4>
                        <p className="text-[color:var(--muted-foreground)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
