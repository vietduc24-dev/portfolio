"use client";

import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  const { data } = useLanguage();

  return (
    <section id="contact">
      <SectionHeading title="Contact Us" subtitle="Connect with me to discuss frontend, fullstack, mobile, or AWS-oriented project work." />

      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1240px] grid-cols-1 overflow-hidden rounded-[32px] bg-[#f3f3f3] px-8 py-[50px] md:w-[calc(100%-80px)] md:grid-cols-[minmax(0,556px)_1fr] md:rounded-[45px] md:px-[100px] md:py-[60px] lg:w-full">
        <div className="flex flex-col gap-8">
          <h3 className="text-[30px] font-medium leading-tight tracking-[0] text-black">Let&apos;s build something reliable.</h3>
          <div className="flex flex-col gap-5 text-[18px]">
            <a className="rounded-[14px] border border-black bg-white px-[30px] py-[18px] text-black" href={`mailto:${data.personal.email}`}>
              Email: {data.personal.email}
            </a>
            <a className="rounded-[14px] border border-black bg-white px-[30px] py-[18px] text-black" href={`tel:${data.personal.phone}`}>
              Phone: {data.personal.phone}
            </a>
            {data.socials.map((social) => (
              <a className="rounded-[14px] border border-black bg-white px-[30px] py-[18px] text-black" href={social.url} key={social.name}>
                {social.name}
              </a>
            ))}
          </div>
          <a className="rounded-[14px] bg-[#191a23] px-[35px] py-5 text-center text-[20px] leading-7 text-white" href={`mailto:${data.personal.email}`}>
            Send Message
          </a>
        </div>
        <div className="relative ml-auto hidden h-[520px] w-full max-w-[520px] overflow-hidden md:block">
          <div className="absolute right-[-120px] top-[42px] h-[420px] w-[420px] rounded-full border-[28px] border-[#191a23]" />
          <div className="absolute right-[20px] top-[132px] h-[250px] w-[250px] rounded-full border-[20px] border-[#b9ff66]" />
          <div className="absolute right-[190px] top-[190px] text-[130px] leading-none text-black">✦</div>
        </div>
      </div>
    </section>
  );
}
