"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { MobileNavigation } from "./mobile-navigation";
import { Terminal } from "lucide-react";

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
        "sticky top-0 z-50 w-full transition-all duration-300 rounded-t-3xl md:rounded-t-[40px]",
        isScrolled 
          ? "bg-[color:var(--surface)]/80 backdrop-blur-md shadow-sm border-b border-[color:var(--border)] py-4"
          : "bg-[color:var(--background)] py-6"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2 text-[color:var(--on-surface)] group cursor-pointer transition-colors hover:text-[color:var(--primary)]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--primary-container)] text-[color:var(--on-primary-container)] transition-transform group-hover:scale-105">
            <Terminal size={18} />
          </div>
          <span className="font-display font-semibold tracking-tight text-lg">
            Duc<span className="text-[color:var(--primary)]">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {data.navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[color:var(--primary)] cursor-pointer",
                    activeSection === item.href.substring(1) 
                      ? "text-[color:var(--primary)]" 
                      : "text-[color:var(--muted-foreground)]"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-5 w-px bg-[color:var(--border)]" />
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-sm font-semibold text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors"
              aria-label="Toggle language"
            >
              {language === "en" ? "VI" : "EN"}
            </button>
            <a href={data.personal.resumeUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "sm" }), "rounded-full text-white cursor-pointer hover:bg-blue-700 bg-blue-600 shadow-md shadow-blue-500/20")}>
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile Nav */}
        <MobileNavigation activeSection={activeSection} />
      </div>
    </header>
  );
}
