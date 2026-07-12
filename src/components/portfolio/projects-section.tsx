"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data } = useLanguage();

  return (
    <section id="projects" ref={containerRef} className="py-16 md:py-24 bg-[#f4f4f5] relative rounded-[40px] mt-12 overflow-hidden shadow-sm">
      {/* Background huge text */}
      {/* <div className="absolute top-10 left-0 right-0 w-full flex justify-center overflow-hidden pointer-events-none opacity-[0.03]">
         <h2 className="text-[15vw] font-bold whitespace-nowrap">PORTFOLIO</h2>
       </div> */}

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase">
            /Selected Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: (index % 2) * 0.2 }}
                className="group flex flex-col gap-6"
              >
                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 relative group-hover:shadow-xl transition-all duration-500">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech: string) => (
                      <span key={tech} className="text-xs font-semibold bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
