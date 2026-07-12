"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { Cloud, Server, Lock, Activity, Layers, Terminal, ArrowUpRight } from "lucide-react";

export function AwsJourneySection() {
  const { data } = useLanguage();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const icons = [Layers, Terminal, Server, Cloud, Lock, Activity];

  return (
    <section id="aws" className="py-20 md:py-32 bg-white relative rounded-[40px] mt-12 overflow-hidden shadow-sm">
      {/* <div className="absolute top-10 left-0 right-0 w-full flex justify-center overflow-hidden pointer-events-none opacity-[0.03]">
         <h2 className="text-[15vw] font-bold whitespace-nowrap text-slate-900">ARCHITECTURE</h2>
      </div> */}

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-slate-900">
            /AWS Journey
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.awsJourney.map((step, index) => {
            const Icon = icons[index % icons.length];
            const isActive = activeItem === step.service;

            return (
              <motion.div
                key={step.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-slate-200"
              >
                <button
                  onClick={() => setActiveItem(isActive ? null : step.service)}
                  className="w-full py-8 flex items-center justify-between group cursor-pointer text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <Icon size={32} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <h3 className="text-xl md:text-4xl font-bold text-slate-900 group-hover:text-blue-500 transition-colors uppercase">
                      {step.service}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 bg-slate-100 rounded-full text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors flex-shrink-0"
                  >
                    <ArrowUpRight size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pt-4 px-4 md:px-16 flex flex-col md:flex-row gap-8 items-start">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl w-full">
                          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
