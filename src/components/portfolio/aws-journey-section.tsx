"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./section-heading";

export function AwsJourneySection() {
  const { data } = useLanguage();
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section id="aws">
      <SectionHeading title="AWS Journey" subtitle="A step-by-step view of how I connect application work with deployment, security, delivery, and optimization." />

      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-[30px] px-5 md:px-10 lg:px-0">
        {data.awsJourney.map((step, index) => {
          const isActive = activeItem === index;
          return (
            <article
              className={`rounded-[32px] border border-[#191a23] px-8 py-[30px] shadow-[0_5px_0_#191a23] transition-colors md:rounded-[45px] md:px-[60px] ${
                isActive ? "bg-[#b9ff66]" : "bg-[#f3f3f3]"
              }`}
              key={step.service}
            >
              <button className="flex w-full items-center justify-between gap-5 text-left" onClick={() => setActiveItem(isActive ? -1 : index)} type="button">
                <div className="flex items-center gap-5 md:gap-[25px]">
                  <span className="text-[36px] font-medium leading-none md:text-[60px]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-[20px] font-medium leading-tight tracking-[0] md:text-[30px]">{step.service}</h3>
                </div>
                <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#191a23] bg-[#f3f3f3] md:h-[58px] md:w-[58px]">
                  {isActive ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                </span>
              </button>
              {isActive ? (
                <div className="mt-[30px] border-t border-[#191a23] pt-[30px] text-[18px] leading-relaxed text-black">
                  {step.description}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
