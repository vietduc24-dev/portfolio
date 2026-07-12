"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { ArrowUp, Terminal } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PortfolioFooter() {
  const { data } = useLanguage();

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface-container-lowest)] py-16 mt-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-6">
            <Link href="#" className="flex items-center gap-2 text-[color:var(--on-surface)] group cursor-pointer transition-colors hover:text-[color:var(--primary)]">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--primary-container)] text-[color:var(--on-primary-container)] transition-transform group-hover:scale-105">
                <Terminal size={18} />
              </div>
              <span className="font-display font-semibold tracking-tight text-lg">
                Duc.dev
              </span>
            </Link>
            <p className="text-sm text-[color:var(--muted-foreground)] max-w-xs leading-relaxed">
              {data.personal.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="font-semibold mb-6 text-[color:var(--on-surface)]">Navigation</h3>
              <ul className="space-y-4">
                {data.navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors cursor-pointer">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-[color:var(--on-surface)]">More</h3>
              <ul className="space-y-4">
                {data.navigation.slice(4).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors cursor-pointer">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[color:var(--border)] flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <div className="text-sm font-medium text-[color:var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} {data.personal.name}. All rights reserved.
          </div>
          <div className="flex gap-4">
            {data.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors cursor-pointer"
                aria-label={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
