"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data } = useLanguage();

  return (
    <section id="experience" ref={containerRef} className="py-20 md:py-32 bg-slate-50 relative rounded-[40px] mt-12 overflow-hidden transition-colors duration-700 shadow-sm">
      {/* <div className="absolute top-10 left-0 right-0 w-full flex justify-center overflow-hidden pointer-events-none opacity-[0.03]">
        <h2 className="text-[15vw] font-bold whitespace-nowrap text-slate-900">EXPERIENCE</h2>
      </div> */}

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-slate-900">
            /Experience
          </h2>
          <span className="text-blue-600 font-medium">My Professional Journey</span>
        </motion.div>

        <div className="flex flex-col">
          {data.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-slate-200 hover:bg-white hover:shadow-sm px-6 rounded-2xl transition-all cursor-pointer relative"
            >
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{exp.company}</h3>
                <div className="text-slate-600">{exp.role}</div>
              </div>

              <div className="mt-4 md:mt-0 text-blue-600 font-medium">
                {exp.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
