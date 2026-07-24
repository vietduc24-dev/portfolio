"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

interface MobileNavigationProps {
  activeSection: string;
}

export function MobileNavigation({ activeSection }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { data, language, toggleLanguage } = useLanguage();

  return (
    <div className="md:hidden">
      <button
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-[8px] border border-[#191a23] bg-white text-black"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 top-[72px] z-40 bg-[color:var(--background)]/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu */}
      <div
        className={cn(
          "fixed left-0 right-0 top-[72px] z-50 flex flex-col items-center border-b border-[#191a23] bg-white px-6 py-8 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0 shadow-xl" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-6 p-6">
          <ul className="flex flex-col gap-4">
            {data.navigation.filter((item) => item.href !== "#home").map((item) => (
              <li key={item.name} className="w-full text-center">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block w-full py-2 text-lg font-medium transition-colors hover:text-black",
                    activeSection === item.href.substring(1) 
                      ? "text-black" 
                      : "text-[#191a23]/70"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="h-px w-full bg-[#191a23]" />
          
          <div className="flex items-center justify-between">
            <button
              onClick={toggleLanguage}
              className="rounded-[14px] border border-[#191a23] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#b9ff66]"
            >
              Language: {language === "en" ? "EN" : "VI"}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
