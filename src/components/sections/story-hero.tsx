import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { HeroOrbit } from "@/components/illustrations/hero-orbit";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

export function StoryHero() {
  const { hero, identity } = portfolio;

  return (
    <header className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/8 p-6 text-white shadow-[0_24px_80px_rgba(17,24,39,0.22)] backdrop-blur md:grid-cols-[1.15fr_0.85fr] md:p-10">
      <div className="space-y-7">
        <div className="space-y-4">
          <Badge className="border-white/20 bg-white/10 text-white/80">{hero.eyebrow}</Badge>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">
              {identity.name}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">{identity.role}</p>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
            {hero.intro}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href={hero.primaryCta.href}>
            <Button size="lg" className="bg-[#f78f59] text-[#142031] hover:bg-[#ff9b69]">
              {hero.primaryCta.label}
              <Mail className="size-4" />
            </Button>
          </a>
          <a href={hero.secondaryCta.href} target="_blank" rel="noreferrer">
            <Button
              variant="secondary"
              size="lg"
              className="border-white/20 bg-white/8 text-white hover:bg-white/12"
            >
              {hero.secondaryCta.label}
              <ArrowUpRight className="size-4" />
            </Button>
          </a>
        </div>

        <div className="grid gap-3 rounded-[1.75rem] border border-white/15 bg-black/20 p-5 text-sm text-white/76">
          <div className="flex items-center gap-3">
            <MapPin className="size-4" />
            <span>{hero.location}</span>
          </div>
          {hero.highlights.map((item) => (
            <p key={item} className="border-t border-white/10 pt-3 leading-7 first:border-t-0 first:pt-0">
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6">
        <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
          <HeroOrbit />
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-white/56">
            Operating principle
          </p>
          <p className="mt-3 text-sm leading-7 text-white/74">{identity.summary}</p>
        </div>
      </div>
    </header>
  );
}
