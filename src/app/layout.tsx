import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Tran Viet Duc | AWS Portfolio",
  description:
    "Portfolio built with Next.js, shadcn/ui, and AWS Amplify deployment workflows.",
  openGraph: {
    title: "Tran Viet Duc | AWS Portfolio",
    description:
      "AWS-focused portfolio with Next.js, security hardening, and GitHub-driven deployment on Amplify.",
    url: siteUrl,
    siteName: "Tran Viet Duc Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
