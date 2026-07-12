"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const { data } = useLanguage();
  return (
    <section id="contact" className="py-24 md:py-40 bg-white relative rounded-b-[40px] mt-12 overflow-hidden flex items-center justify-center text-center">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full font-medium mb-10"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Available for New Project
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-600 mb-8 tracking-tight uppercase"
        >
          Have a project in mind?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-500 max-w-2xl mb-12"
        >
          {data.personal.description}
        </motion.p>

        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href={`mailto:${data.personal.email}`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-[0_10px_40px_rgba(37,99,235,0.4)]"
        >
          Contact Me <ArrowUpRight size={20} />
        </motion.a>
      </div>
    </section>
  );
}
