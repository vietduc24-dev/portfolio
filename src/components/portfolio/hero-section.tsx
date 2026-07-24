/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { imageUrl } from "@/lib/images";

export function HeroSection() {
  const { data } = useLanguage();

  return (
    <section id="home" className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 px-5 md:px-10 lg:grid-cols-[531px_1fr] lg:items-start lg:px-0">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start gap-[35px]"
      >
        <p className="w-fit rounded-[7px] bg-[#b9ff66] px-[7px] text-[20px] font-medium leading-tight text-black">
          {data.personal.title}
        </p>
        <h1 className="max-w-[560px] text-[43px] font-medium leading-[1.12] tracking-[0] text-black md:text-[60px]">
          {data.personal.name}
        </h1>
        <p className="max-w-[540px] text-[18px] leading-7 text-black md:text-[20px]">
          {data.personal.about}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-3 rounded-[14px] bg-[#191a23] px-[35px] py-5 text-center text-[20px] leading-7 !text-white" href="#projects">
            View projects
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <a className="rounded-[14px] border border-[#191a23] px-[35px] py-5 text-center text-[20px] leading-7 text-black transition-colors hover:bg-[#b9ff66]" href={`mailto:${data.personal.email}`}>
            Contact me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative mx-auto min-h-[430px] w-full max-w-[560px] overflow-hidden"
      >
        <div className="absolute left-[12%] top-[15%] h-[68%] w-[78%] rotate-[29deg] rounded-[50%] border-[22px] border-[#191a23]" />
        <div className="absolute left-[7%] top-[28%] h-[68%] w-[78%] rotate-[29deg] rounded-[50%] border-[22px] border-[#191a23]" />
        <div className="absolute left-[2%] top-[41%] h-[68%] w-[78%] rotate-[29deg] rounded-[50%] border-[22px] border-[#191a23]" />
        <div className="absolute left-[22%] top-[2%] h-[360px] w-[270px] overflow-hidden rounded-[45px] border border-[#191a23] bg-[#f3f3f3] shadow-[0_5px_0_#191a23]">
          <img alt={data.personal.name} className="h-full w-full object-cover" src={imageUrl("images/home.JPG")} />
        </div>
        <div className="absolute left-[67%] top-[8%] flex h-20 w-20 items-center justify-center rounded-full bg-[#b9ff66] text-[36px] font-medium">★</div>
        <div className="absolute left-[7%] top-[9%] text-[52px] leading-none">✦</div>
      </motion.div>
    </section>
  );
}
