import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Tran Viet Duc | Software Engineer Portfolio",
  description:
    "Portfolio of Tran Viet Duc, a software engineer building web, mobile, backend, and AWS-oriented systems.",
  openGraph: {
    title: "Tran Viet Duc | Software Engineer Portfolio",
    description:
      "Projects, skills, AWS journey, and experience for Tran Viet Duc.",
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
      <body className="min-h-screen bg-white selection:bg-[#b9ff66] selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
