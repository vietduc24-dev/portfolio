import type { Metadata } from "next";
import "./globals.css";
import { PortfolioHeader } from "@/components/portfolio/portfolio-header";
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer";
import { SmoothScroll } from "@/components/portfolio/smooth-scroll";
import { BackToTop } from "@/components/portfolio/back-to-top";
import { LanguageProvider } from "@/context/language-context";

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
    <html lang="en" className="antialiased">
      <body className="min-h-screen selection:bg-[color:var(--primary-container)] selection:text-[color:var(--on-primary-container)]">
        <LanguageProvider>
          <SmoothScroll>
            <div className="py-2 md:py-6 px-2 md:px-6 w-full min-h-screen flex justify-center">
              {/* The Floating Window */}
              <div className="w-full max-w-[1440px] rounded-3xl md:rounded-[40px] bg-[color:var(--background)] shadow-2xl border border-[color:var(--border)] relative flex flex-col min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-3rem)]">
                <PortfolioHeader />
                <main className="flex-1 flex flex-col">{children}</main>
                <PortfolioFooter />
                <BackToTop />
              </div>
            </div>
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
