export const portfolio = {
  hero: {
    eyebrow: "AWS • Next.js • Amplify",
    title: "I build portfolio-grade products with production-grade delivery.",
    intro:
      "My work sits between interface craft and cloud discipline. I design clear user journeys, structure maintainable component systems, and ship them through AWS with CI/CD and security guardrails already in place.",
    location: "Japan / Remote",
    primaryCta: {
      label: "Start a conversation",
      href: "mailto:hello@example.com",
    },
    secondaryCta: {
      label: "See GitHub",
      href: "https://github.com/your-handle",
    },
    highlights: [
      "App Router architecture with typed sections and reusable UI primitives",
      "GitHub to Amplify delivery flow with branch previews and protected production",
      "Public-repo-safe setup with secret scanning and security headers",
    ],
  },
  identity: {
    name: "Tran Viet Duc",
    role: "AWS-focused Full Stack Engineer",
    summary:
      "I care about the parts that usually get skipped in portfolio projects: structure, deployment discipline, and the ability to evolve the codebase without turning it into a landing-page monolith.",
    principles: [
      {
        title: "Story first",
        description:
          "The page should read like a narrative: context, capabilities, proof, and then a clean path to contact.",
      },
      {
        title: "System second",
        description:
          "Every visual block should be reusable, data-driven, and easy to move as the portfolio grows.",
      },
      {
        title: "Cloud aware",
        description:
          "Frontend decisions are made with deployment, DNS, TLS, branch strategy, and repository safety in mind.",
      },
    ],
  },
  timeline: [
    {
      step: "01",
      title: "Shape the story",
      description:
        "Define what the visitor should understand in under a minute: who I am, how I think, and what I can ship reliably.",
    },
    {
      step: "02",
      title: "Build the system",
      description:
        "Split the UI into App Router-friendly sections, typed content modules, and isolated illustrations instead of inline decoration.",
    },
    {
      step: "03",
      title: "Ship with guardrails",
      description:
        "Use GitHub CI and AWS Amplify so every content or code change moves through the same predictable release path.",
    },
  ],
  capabilities: [
    {
      title: "Narrative UI architecture",
      description:
        "Storytelling page structures, section sequencing, and interfaces that feel intentional instead of generic template output.",
      tags: ["App Router", "Section composition", "Responsive systems"],
    },
    {
      title: "Component discipline",
      description:
        "Clear separation between data, section components, primitives, and decorative assets such as SVG scenes and dividers.",
      tags: ["shadcn/ui patterns", "Typed props", "Design tokens"],
    },
    {
      title: "AWS delivery workflow",
      description:
        "Amplify Hosting, Route 53, ACM, environment variables, preview branches, and production deployment review habits.",
      tags: ["Amplify", "Route 53", "CI/CD"],
    },
  ],
  projects: [
    {
      name: "Cloud-native Portfolio",
      period: "2026",
      summary:
        "A personal site rebuilt as a storytelling application with component boundaries, deploy-ready AWS configuration, and a public-repo-safe baseline.",
      stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "AWS Amplify"],
      impact: [
        "Moved from a single hardcoded page to a section-based architecture",
        "Pinned package manager and CI behavior for stable cloud builds",
        "Prepared custom domain and Route 53 friendly deployment flow",
      ],
    },
    {
      name: "Delivery Starter",
      period: "2025",
      summary:
        "A reference setup for frontend teams that need predictable checks before anything reaches production hosting.",
      stack: ["GitHub Actions", "TypeScript", "Security scans"],
      impact: [
        "Automated lint, typecheck, and build verification",
        "Added secret scanning for public repositories",
        "Reduced ad-hoc release steps across projects",
      ],
    },
  ],
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "AWS Amplify",
    "Route 53",
    "ACM",
    "GitHub Actions",
    "Security Headers",
  ],
  contact: {
    heading: "If the site should feel sharp in the browser and stable in production, we should talk.",
    channels: [
      { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
      { label: "GitHub", value: "github.com/your-handle", href: "https://github.com/your-handle" },
      { label: "LinkedIn", value: "linkedin.com/in/your-handle", href: "https://linkedin.com/in/your-handle" },
    ],
  },
} as const;
