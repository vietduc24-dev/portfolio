"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Sparkle } from "lucide-react";
import { useLanguage } from "@/context/language-context";

function SocialIcon({ name }: { name: string }) {
  if (name === "GitHub") return <Github className="h-5 w-5" />;
  if (name === "LinkedIn") return <Linkedin className="h-5 w-5" />;
  return <Mail className="h-5 w-5" />;
}

export function PortfolioFooter() {
  const { data } = useLanguage();

  return (
    <footer className="mx-auto mt-[140px] w-full max-w-[1240px] px-5 md:px-10 lg:px-0">
      <div className="rounded-t-[45px] bg-[#191a23] px-8 py-[50px] text-white md:px-[60px] md:pt-[55px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Link href="#" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#191a23]">
              <Sparkle size={20} />
            </span>
            <span className="text-[25px] font-medium leading-none">Tran Viet Duc</span>
          </Link>
          <nav className="flex flex-col gap-5 text-[18px] underline md:flex-row md:gap-10">
            {data.navigation.filter((item) => item.href !== "#home").slice(0, 5).map((item) => (
              <a href={item.href} key={item.href}>
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            {data.socials.map((social) => (
              <a className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-[#191a23]" href={social.url} key={social.name} aria-label={social.name}>
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-[66px] grid gap-10 lg:grid-cols-[332px_1fr] lg:gap-[154px]">
          <div className="flex flex-col gap-[27px]">
            <h2 className="w-fit rounded-[7px] bg-[#b9ff66] px-[7px] text-[20px] font-medium leading-tight tracking-[0] text-black">Contact:</h2>
            <div className="flex flex-col gap-5 text-[18px] leading-normal">
              <p>Email: {data.personal.email}</p>
              <p>Phone: {data.personal.phone}</p>
              <p>{data.personal.title}</p>
            </div>
          </div>
          <div className="rounded-[14px] bg-[#292a32] p-8 md:p-[58px_40px]">
            <p className="max-w-[600px] text-[22px] leading-relaxed">
              {data.personal.description}
            </p>
          </div>
        </div>

        <div className="mt-[50px] flex flex-col gap-[50px] border-t border-white pt-[50px] text-[18px] leading-7 md:flex-row md:gap-10">
          <p>© 2026 {data.personal.name}. All Rights Reserved.</p>
          <a className="underline" href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
