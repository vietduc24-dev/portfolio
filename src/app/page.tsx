import { ArrowUpRight, Cloud, GitBranch, Lock, Mail, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  const { profile, metrics, services, projects, awsHighlights, skills, contact } =
    portfolio;

  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(247,143,89,0.24),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(44,76,222,0.18),_transparent_32%),linear-gradient(180deg,_#f8f2e8_0%,_#f4efe8_45%,_#eef2f6_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[linear-gradient(135deg,_rgba(24,32,47,0.92),_rgba(31,51,86,0.82))]" />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16 pt-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/8 p-6 text-white shadow-[0_24px_80px_rgba(17,24,39,0.22)] backdrop-blur md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl space-y-5">
              <Badge className="border-white/20 bg-white/10 text-white/80">
                AWS • Next.js • Amplify
              </Badge>
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">
                  {profile.location}
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-7xl">
                  {profile.name}
                </h1>
                <p className="text-lg text-white/80 sm:text-xl">{profile.role}</p>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
                {profile.intro}
              </p>
            </div>

            <div className="grid gap-3 rounded-[1.75rem] border border-white/15 bg-black/20 p-5 text-sm text-white/76 md:min-w-72">
              <div className="flex items-center gap-3">
                <MapPin className="size-4" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <GitBranch className="size-4" />
                <span>CI/CD from GitHub to AWS Amplify</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="size-4" />
                <span>Public-repo-safe delivery baseline</span>
              </div>
              <div className="flex items-center gap-3">
                <Cloud className="size-4" />
                <span>Ready for domain, TLS, previews, and scale</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3">
              <a href={profile.primaryCta.href}>
                <Button size="lg" className="bg-[#f78f59] text-[#142031] hover:bg-[#ff9b69]">
                  {profile.primaryCta.label}
                  <Mail className="size-4" />
                </Button>
              </a>
              <a href={profile.secondaryCta.href} target="_blank" rel="noreferrer">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/20 bg-white/8 text-white hover:bg-white/12"
                >
                  {profile.secondaryCta.label}
                  <ArrowUpRight className="size-4" />
                </Button>
              </a>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/70">{profile.summary}</p>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-[0_12px_40px_rgba(24,32,47,0.08)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-[color:var(--muted-foreground)]">
                {metric.label}
              </p>
              <p className="mt-4 text-lg font-medium leading-8 text-[color:var(--foreground)]">
                {metric.value}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-7 shadow-[0_12px_40px_rgba(24,32,47,0.08)] md:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
              What I build
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[color:var(--foreground)]">
              Web experiences that can survive real delivery constraints
            </h2>
            <div className="mt-8 grid gap-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
                >
                  <h3 className="text-lg font-medium text-[color:var(--foreground)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-7 shadow-[0_12px_40px_rgba(24,32,47,0.08)] md:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
              AWS stack
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[color:var(--foreground)]">
              Designed for Amplify first
            </h2>
            <ul className="mt-8 space-y-4">
              {awsHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.35rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-4 text-sm leading-7 text-[color:var(--foreground)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-7 shadow-[0_12px_40px_rgba(24,32,47,0.08)] md:p-9">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[color:var(--foreground)]">
                Projects focused on delivery, not demos
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[color:var(--muted-foreground)]">
              Replace these sample entries with your real work. The data lives in
              {" "}
              <code>src/data/portfolio.ts</code>.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-medium text-[color:var(--foreground)]">
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                    {project.period}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {project.outcome}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-7 shadow-[0_12px_40px_rgba(24,32,47,0.08)] md:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
              Toolkit
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[color:var(--foreground)]">
              Focused on maintainable stacks
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="px-4 py-2 text-[0.7rem] text-[color:var(--foreground)]"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-7 shadow-[0_12px_40px_rgba(24,32,47,0.08)] md:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[color:var(--foreground)]">
              Available for freelance, product build-out, and platform work
            </h2>
            <div className="mt-8 grid gap-4">
              {contact.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-between rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 transition-transform hover:translate-y-[-1px]"
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-[color:var(--foreground)]">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 text-[color:var(--muted-foreground)]" />
                </a>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
