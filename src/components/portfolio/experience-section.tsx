"use client";

import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  const { data } = useLanguage();

  return (
    <section id="experience">
      <SectionHeading title="Experience" subtitle="Practical production work across frontend, fullstack, mobile maintenance, and platform delivery." />

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1240px] rounded-[32px] bg-[#191a23] p-8 text-white md:w-[calc(100%-80px)] md:rounded-[45px] md:px-[60px] md:py-[70px] lg:w-full">
        <div className="grid gap-8 lg:grid-cols-3">
          {data.experience.map((item) => (
            <article className="border-[#b9ff66] lg:border-r lg:pr-8 last:lg:border-r-0" key={item.id}>
              <p className="mb-2 text-[20px] font-medium text-[#b9ff66]">{item.period}</p>
              <h3 className="text-[25px] font-medium leading-tight tracking-[0] text-white">{item.role}</h3>
              <p className="mt-1 text-[18px] text-white/80">{item.company}</p>
              <p className="mt-5 text-[18px] leading-relaxed text-white">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.techStack.map((tech) => (
                  <span className="rounded-full border border-white/30 px-3 py-1 text-[14px]" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
