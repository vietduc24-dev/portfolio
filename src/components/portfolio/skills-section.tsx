"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./section-heading";
import { AnimatedSection } from "./animated-section";

const serviceTones = [
  { card: "bg-[#f3f3f3]", label: "bg-[#b9ff66]", dark: false },
  { card: "bg-[#b9ff66]", label: "bg-white", dark: false },
  { card: "bg-[#191a23] text-white", label: "bg-white text-black", dark: true },
  { card: "bg-[#f3f3f3]", label: "bg-[#b9ff66]", dark: false },
  { card: "bg-[#b9ff66]", label: "bg-white", dark: false },
  { card: "bg-[#191a23] text-white", label: "bg-[#b9ff66] text-black", dark: true },
];

export function SkillsSection() {
  const { data } = useLanguage();

  return (
    <section id="skills">
      <SectionHeading title="Skills" subtitle="Technologies and tools I use to build practical web, mobile, backend, and cloud solutions." />

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-2 gap-4 px-5 md:grid-cols-4 md:px-10 lg:grid-cols-7 lg:px-0">
        {data.skills.map((skill) => (
          <div className="flex h-12 items-center justify-center rounded-[14px] bg-[#f3f3f3] px-4 text-center text-[16px] font-medium text-black/70 grayscale md:text-[18px]" key={skill.category}>
            {skill.category}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-[70px] grid w-full max-w-[1240px] grid-cols-1 gap-10 px-5 md:px-10 lg:grid-cols-2 lg:px-0">
        {data.skills.slice(0, 6).map((skillGroup, index) => {
          const Icon = skillGroup.icon;
          const tone = serviceTones[index % serviceTones.length];
          return (
            <AnimatedSection
              key={skillGroup.category}
              delay={`stagger-${(index % 3) + 1}` as "stagger-1" | "stagger-2" | "stagger-3"}
              animation="slide-up"
            >
              <article className={`${tone.card} grid min-h-[310px] grid-cols-1 gap-8 rounded-[32px] border border-[#191a23] p-8 shadow-[0_5px_0_#191a23] md:grid-cols-[1fr_150px] md:rounded-[45px] md:p-[50px]`}>
                <div className="flex flex-col justify-between gap-10">
                  <div>
                    <h3 className="mb-6 flex flex-col items-start text-[26px] font-medium leading-tight tracking-[0] md:text-[30px]">
                      <span className={`${tone.label} rounded-[7px] px-[7px]`}>{skillGroup.category}</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item) => (
                        <span className={`rounded-full border px-3 py-1 text-[14px] ${tone.dark ? "border-white/40 text-white" : "border-[#191a23]/20 text-black"}`} key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a className="flex items-center gap-4 text-[18px]" href="#projects">
                    <span className={`flex h-[41px] w-[41px] items-center justify-center rounded-full ${tone.dark ? "bg-white text-black" : "bg-[#191a23] text-[#b9ff66]"}`}>
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                    <span className={tone.dark ? "text-white" : "text-black"}>See proof</span>
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <div className={`flex h-[140px] w-[140px] items-center justify-center rounded-full ${tone.dark ? "bg-white text-[#191a23]" : "bg-white/80 text-[#191a23]"} border border-[#191a23] shadow-[0_5px_0_#191a23]`}>
                    <Icon size={58} strokeWidth={1.7} />
                  </div>
                </div>
              </article>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
