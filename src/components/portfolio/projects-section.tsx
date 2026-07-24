/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./section-heading";
import { AnimatedSection } from "./animated-section";

export function ProjectsSection() {
  const { data } = useLanguage();

  return (
    <section id="projects">
      <SectionHeading title="Projects" subtitle="Selected work across construction SaaS, mobile video, and B2B ecommerce systems." />

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 px-5 md:px-10 lg:grid-cols-3 lg:px-0">
        {data.projects.map((project, index) => (
          <AnimatedSection
            animation="slide-up"
            delay={`stagger-${(index % 3) + 1}` as "stagger-1" | "stagger-2" | "stagger-3"}
            key={project.id}
          >
            <article className="group h-full overflow-hidden rounded-[32px] border border-[#191a23] bg-white shadow-[0_5px_0_#191a23] md:rounded-[45px]">
              <div className="h-52 overflow-hidden bg-[#f3f3f3]">
                <img alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" src={project.image} />
              </div>
              <div className="flex min-h-[360px] flex-col gap-5 p-8">
                <h3 className="text-[26px] font-medium leading-tight tracking-[0] text-black">{project.title}</h3>
                <p className="text-[17px] leading-relaxed text-black">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span className="rounded-full bg-[#b9ff66] px-3 py-1 text-[14px] text-black" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a className="flex items-center gap-3 text-[18px] text-black" href={project.github}>
                  View source <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
