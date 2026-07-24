"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./section-heading";

function SocialIcon({ name }: { name: string }) {
  if (name === "GitHub") return <Github className="h-5 w-5" />;
  if (name === "LinkedIn") return <Linkedin className="h-5 w-5" />;
  return <Mail className="h-5 w-5" />;
}

export function AboutSection() {
  const { data } = useLanguage();

  return (
    <section id="about">
      <SectionHeading title="About Me" subtitle="A concise view of how I think about building useful software and production-ready delivery." />

      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1240px] grid-cols-1 items-center gap-8 rounded-[32px] bg-[#f3f3f3] px-8 py-[50px] md:w-[calc(100%-80px)] md:grid-cols-[1fr_320px] md:rounded-[45px] md:px-[60px] lg:w-full">
        <div className="flex flex-col items-start gap-[26px]">
          <h3 className="text-[30px] font-medium leading-tight tracking-[0] text-black">
            Building clear interfaces with cloud-aware delivery.
          </h3>
          <p className="text-[18px] leading-relaxed text-black">
            {data.personal.about}
          </p>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[#191a23] bg-white p-6 shadow-[0_5px_0_#191a23]">
              <p className="text-[42px] font-medium leading-none">1+</p>
              <p className="mt-3 text-[18px]">Years Experience</p>
            </div>
            <div className="rounded-[24px] border border-[#191a23] bg-[#b9ff66] p-6 shadow-[0_5px_0_#191a23]">
              <p className="text-[42px] font-medium leading-none">3+</p>
              <p className="mt-3 text-[18px]">Projects Completed</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.socials.map((social) => (
              <a className="flex items-center gap-2 rounded-[14px] border border-[#191a23] bg-white px-4 py-3 text-[16px] transition-colors hover:bg-[#b9ff66]" href={social.url} key={social.name}>
                <SocialIcon name={social.name} />
                {social.name}
              </a>
            ))}
          </div>
        </div>
        <div className="relative hidden min-h-[360px] overflow-hidden rounded-[45px] border border-[#191a23] bg-white shadow-[0_5px_0_#191a23] md:block">
          <div className="absolute -right-20 top-8 h-72 w-72 rounded-full border-[24px] border-[#191a23]" />
          <div className="absolute right-10 top-24 h-56 w-56 rounded-full border-[18px] border-[#b9ff66]" />
          <div className="absolute bottom-8 left-8 text-[84px] leading-none">✦</div>
        </div>
      </div>
    </section>
  );
}
