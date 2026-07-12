export const portfolio = {
  profile: {
    name: "Tran Viet Duc",
    role: "AWS-focused Full Stack Engineer",
    location: "Japan / Remote",
    intro:
      "I design and ship fast web experiences on AWS with strong attention to security, DX, and CI/CD.",
    summary:
      "This portfolio is built with Next.js and shadcn/ui, then deployed from GitHub to AWS Amplify. The architecture stays simple for a public profile site, but still follows production habits: typed UI, automated checks, no committed secrets, and security headers at the edge.",
    primaryCta: {
      label: "Discuss a project",
      href: "mailto:hello@example.com",
    },
    secondaryCta: {
      label: "View GitHub",
      href: "https://github.com/your-handle",
    },
  },
  metrics: [
    { label: "AWS services used", value: "Amplify, Route 53, ACM, CloudWatch" },
    { label: "Delivery style", value: "GitHub-driven CI/CD with preview branches" },
    { label: "Security baseline", value: "CSP, secret hygiene, automated checks" },
  ],
  services: [
    {
      title: "Frontend engineering",
      description:
        "Next.js App Router, TypeScript, accessible UI patterns, responsive build quality, and component systems based on shadcn/ui.",
    },
    {
      title: "AWS delivery",
      description:
        "Static and SSR deployments with Amplify Hosting, custom domain setup, branch previews, environment isolation, and release discipline.",
    },
    {
      title: "DevSecOps mindset",
      description:
        "Public-repo-safe configuration, least-privilege thinking, environment separation, and CI checks before every merge.",
    },
  ],
  projects: [
    {
      name: "Cloud-native Portfolio",
      period: "2026",
      stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "AWS Amplify"],
      outcome:
        "A fast personal site with branch previews, production deploys from GitHub, and a security checklist suitable for an open repository.",
    },
    {
      name: "Internal Delivery Starter",
      period: "2025",
      stack: ["GitHub Actions", "TypeScript", "AWS"],
      outcome:
        "Standardized lint, typecheck, and build gates to reduce regressions before cloud deployment.",
    },
    {
      name: "Frontend Platform Refresh",
      period: "2024",
      stack: ["Design System", "Component Library", "Accessibility"],
      outcome:
        "Reduced UI inconsistency by building reusable primitives and a clearer design language for product teams.",
    },
  ],
  awsHighlights: [
    "Amplify Hosting for CI/CD and preview environments",
    "Route 53 + ACM for custom domain and TLS",
    "CloudWatch for runtime visibility when the stack grows",
    "IAM-based least privilege for any future backend integration",
  ],
  skills: [
    "Next.js",
    "TypeScript",
    "shadcn/ui",
    "Tailwind CSS",
    "AWS Amplify",
    "GitHub Actions",
    "Security Headers",
    "Responsive UI",
  ],
  contact: [
    { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
    { label: "GitHub", value: "github.com/your-handle", href: "https://github.com/your-handle" },
    { label: "LinkedIn", value: "linkedin.com/in/your-handle", href: "https://linkedin.com/in/your-handle" },
  ],
};
