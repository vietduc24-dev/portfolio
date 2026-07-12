# AWS Portfolio with Next.js, shadcn/ui, and Amplify

Personal portfolio starter focused on:

- `Next.js 16` with App Router and TypeScript
- `shadcn/ui`-style component primitives
- `AWS Amplify Hosting` for GitHub-driven CI/CD
- public-repo-safe defaults for security

## Stack

- Next.js
- React
- Tailwind CSS 4
- shadcn/ui patterns
- AWS Amplify Hosting
- GitHub Actions

## Local Development

```bash
pnpm install
pnpm dev
```

Quality checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Where to Edit

- Main page: `src/app/page.tsx`
- Portfolio content: `src/data/portfolio.ts`
- Global theme: `src/app/globals.css`
- Security headers: `next.config.ts`
- Amplify build config: `amplify.yml`

## Public Repo Security

This repo is intended to stay public, so the project includes a few baseline protections:

- `.env*` is ignored
- `SECURITY.md` defines handling rules
- GitHub Actions runs `lint`, `typecheck`, and `build`
- a separate workflow runs `gitleaks` secret scanning
- Next.js response headers include CSP, `X-Frame-Options`, `nosniff`, and a strict referrer policy

Rules to keep:

1. Never commit AWS keys, tokens, private certificates, or internal URLs.
2. Put environment values in AWS Amplify app settings, not in source.
3. Use separate Amplify branch settings for preview and production.
4. Review every PR before merging into `main`.

## Deploy to AWS Amplify

1. Push this repo to GitHub.
2. In AWS Amplify Hosting, choose `New app` and connect the GitHub repository.
3. Select the production branch, usually `main`.
4. Keep `amplify.yml` from the repo so Amplify uses `pnpm install` and `pnpm build`.
5. Add environment variables from `.env.example` inside Amplify if you use them.
6. Configure a custom domain with Route 53 and ACM if needed.

Amplify will create preview deploys for connected branches if you enable them in the Amplify console.

## Recommended AWS Add-ons

- `Route 53` for DNS
- `ACM` for TLS certificates
- `CloudWatch` for logs and operational visibility if you add backend services later
- `IAM` with least privilege for any future integration with S3, Lambda, or API Gateway

## Notes

The content is sample content. Update `src/data/portfolio.ts` with your real name, links, projects, and contact details before publishing.
