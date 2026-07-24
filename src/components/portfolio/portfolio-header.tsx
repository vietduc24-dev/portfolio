"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import { MobileNavigation } from "./mobile-navigation";
import { Sparkle } from "lucide-react";

export function PortfolioHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { data, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = data.navigation.map(nav => nav.href.substring(1));
      let currentSection = sections[0];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.navigation]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "border-b border-[#191a23] bg-white/90 py-4 backdrop-blur-md"
          : "bg-white py-6 md:py-[34px]"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-5 md:px-10 lg:px-0">
        <Link href="#" className="group flex items-center gap-3 text-black">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#191a23] text-[#b9ff66] transition-transform group-hover:rotate-12">
            <Sparkle size={20} />
          </div>
          <span className="text-[25px] font-medium leading-none tracking-[0]">
            Tran Viet Duc
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8 text-[18px] leading-7">
            {data.navigation.filter((item) => item.href !== "#home").map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-black",
                    activeSection === item.href.substring(1) 
                      ? "text-black" 
                      : "text-[#191a23]/75"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleLanguage}
            className="rounded-[14px] border border-[#191a23] px-[24px] py-[14px] text-[18px] leading-7 text-black transition-colors hover:bg-[#b9ff66]"
            aria-label="Toggle language"
          >
            {language === "en" ? "VI" : "EN"}
          </button>
        </nav>

        <MobileNavigation activeSection={activeSection} />
      </div>
    </header>
  );
}
