"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

interface MobileNavigationProps {
  activeSection: string;
}

export function MobileNavigation({ activeSection }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { data, language, toggleLanguage } = useLanguage();

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        className="px-2 cursor-pointer text-[color:var(--foreground)]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

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
          "fixed left-0 right-0 top-[72px] z-50 flex flex-col items-center bg-[color:var(--surface-container)] border-b border-[color:var(--border)] px-6 py-8 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0 shadow-xl" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-6 p-6">
          <ul className="flex flex-col gap-4">
            {data.navigation.map((item) => (
              <li key={item.name} className="w-full text-center">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block w-full py-2 text-lg font-medium transition-colors hover:text-[color:var(--primary)]",
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
          
          <div className="h-px w-full bg-[color:var(--border)]" />
          
          <div className="flex items-center justify-between">
            <button
              onClick={toggleLanguage}
              className="text-sm font-semibold text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors"
            >
              Language: {language === "en" ? "EN" : "VI"}
            </button>
            <a href={data.personal.resumeUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "sm" }), "w-full mt-4 justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md")}>
              Resume
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
