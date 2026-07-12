"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { data } = useLanguage();

  return (
    <section id="home" className="relative flex flex-col h-auto min-h-[750px] md:min-h-[700px] md:h-[90vh] w-full overflow-hidden rounded-t-[2.5rem] bg-[color:var(--background)]">
      {/* Huge Background Text */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-[8%] md:top-[12%] left-0 right-0 w-full flex justify-center select-none pointer-events-none z-0"
      >
        <h1
          className="text-[16vw] md:text-[13vw] font-black text-transparent leading-[0.85] text-center whitespace-pre-wrap"
          style={{ WebkitTextStroke: "2px rgba(37, 99, 235, 0.2)" }}
        >
          {data.personal.name.split(" ").slice(0,).join(" ").toUpperCase()}
        </h1>
      </motion.div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end z-20 px-6 lg:px-12 pb-[380px] md:pb-12 pointer-events-none">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between w-full pb-10 gap-8 md:gap-0">

          {/* Left side: Role & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 max-w-sm pointer-events-auto items-center md:items-start text-center md:text-left bg-white/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-2xl w-full"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              {data.personal.title}
            </h2>
            <p className="text-lg text-slate-600">
              {data.personal.description}
            </p>
            <div className="mt-4">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 shadow-[0_8px_30px_rgb(37,99,235,0.3)]">
                Let&apos;s collaborate <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right side: Socials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap md:flex-col gap-3 justify-center md:items-end pointer-events-auto mt-4 md:mt-0"
          >
            {data.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:shadow-sm transition-all"
              >
                <span className="w-7 flex justify-center group-hover:scale-110 transition-transform">
                  {social.name === 'GitHub' && <Github size={18} />}
                  {social.name === 'LinkedIn' && <Linkedin size={18} />}
                  {social.name === 'Email' && <Mail size={18} />}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Center Portrait - Pinned to bottom */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[350px] md:w-[480px] md:h-[600px] z-10 flex justify-center items-end"
      >
        <div className="w-full h-full bg-slate-100 rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden shadow-2xl flex flex-col items-center justify-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home.jpg"
            alt="Portrait"
            className="w-full h-full object-cover object-center transition-all duration-700"
          />
        </div>
      </motion.div>
    </section>
  );
}
