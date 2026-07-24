/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Minus,
  Plus,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { imageUrl } from "@/lib/images";

const serviceImages = [
  "/positivus/service-search.svg",
  "/positivus/service-click.svg",
  "/positivus/service-social.svg",
  "/positivus/service-email.svg",
  "/positivus/service-content.svg",
  "/positivus/service-analytics.svg",
  "/positivus/service-analytics.svg",
];

const serviceTones = [
  { card: "bg-[#f3f3f3]", label: "bg-[#b9ff66]", dark: false },
  { card: "bg-[#b9ff66]", label: "bg-white", dark: false },
  { card: "bg-[#191a23] text-white", label: "bg-white text-black", dark: true },
  { card: "bg-[#f3f3f3]", label: "bg-[#b9ff66]", dark: false },
  { card: "bg-[#b9ff66]", label: "bg-white", dark: false },
  { card: "bg-[#191a23] text-white", label: "bg-[#b9ff66] text-black", dark: true },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a className="flex items-center gap-3" href="#home">
      <img
        alt=""
        className="h-7 w-7 md:h-9 md:w-9"
        src={footer ? "/positivus/footer-logo-icon.svg" : "/positivus/logo-icon.svg"}
      />
      <span className={`text-[25px] font-medium leading-none ${footer ? "text-white" : "text-black"}`}>
        Tran Viet Duc
      </span>
    </a>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "GitHub") return <Github className="h-5 w-5" />;
  if (name === "LinkedIn") return <Linkedin className="h-5 w-5" />;
  return <Mail className="h-5 w-5" />;
}

function SectionHeading({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-5 px-5 md:flex-row md:items-start md:gap-10 md:px-10 lg:px-0">
      <h2 className="w-fit rounded-[7px] bg-[#b9ff66] px-[7px] text-[32px] font-medium leading-tight tracking-[0] text-black md:text-[40px]">
        {title}
      </h2>
      <p className="max-w-[620px] text-[16px] leading-relaxed text-black md:text-[18px]">
        {children}
      </p>
    </div>
  );
}

export function PositivusLandingPage() {
  const { data, language, toggleLanguage } = useLanguage();
  const navigation = data.navigation.filter((item) =>
    ["#about", "#skills", "#projects", "#aws", "#experience", "#contact"].includes(item.href),
  );
  const processSteps = data.awsJourney.map((item, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: item.service,
    body: item.description,
  }));

  return (
    <div className="min-h-screen bg-white font-[var(--font-positivus)] text-[#191a23]">
      <header id="home" className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-5 py-8 md:px-10 lg:px-0 lg:py-[60px]">
        <Logo />
        <nav className="hidden items-center gap-8 text-[19px] leading-7 lg:flex">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.name}
            </a>
          ))}
          <button className="rounded-[14px] border border-[#191a23] px-5 py-4" onClick={toggleLanguage} type="button">
            {language === "en" ? "VI" : "EN"}
          </button>
        </nav>
        <button className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#191a23] lg:hidden" aria-label="Open navigation">
          <Menu className="h-6 w-6" />
        </button>
      </header>

      <main className="flex flex-col gap-[70px] pb-0 md:gap-[100px]">
        <section className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 px-5 md:px-10 lg:grid-cols-[531px_1fr] lg:items-start lg:px-0">
          <div className="flex flex-col items-start gap-[35px]">
            <p className="w-fit rounded-[7px] bg-[#b9ff66] px-[7px] text-[20px] font-medium text-black">
              {data.personal.title}
            </p>
            <h1 className="text-[43px] font-medium leading-[1.12] tracking-[0] text-black md:text-[60px]">
              {data.personal.name}
            </h1>
            <p className="max-w-[540px] text-[18px] leading-7 text-black md:text-[20px]">
              {data.personal.about}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a className="rounded-[14px] bg-[#191a23] px-[35px] py-5 text-center text-[20px] leading-7 text-white" href="#projects">
                View projects
              </a>
              <a className="rounded-[14px] border border-[#191a23] px-[35px] py-5 text-center text-[20px] leading-7 text-black" href={`mailto:${data.personal.email}`}>
                Contact me
              </a>
            </div>
          </div>
          <div className="relative mx-auto min-h-[430px] w-full max-w-[560px] overflow-hidden">
            <div className="absolute left-[12%] top-[15%] h-[68%] w-[78%] rounded-[50%] border-[22px] border-[#191a23] rotate-[29deg]" />
            <div className="absolute left-[7%] top-[28%] h-[68%] w-[78%] rounded-[50%] border-[22px] border-[#191a23] rotate-[29deg]" />
            <div className="absolute left-[2%] top-[41%] h-[68%] w-[78%] rounded-[50%] border-[22px] border-[#191a23] rotate-[29deg]" />
            <div className="absolute left-[22%] top-[2%] h-[360px] w-[270px] overflow-hidden rounded-[45px] border border-[#191a23] bg-[#f3f3f3] shadow-[0_5px_0_#191a23]">
              <img alt={data.personal.name} className="h-full w-full object-cover" src={imageUrl("images/home.JPG")} />
            </div>
            <div className="absolute left-[67%] top-[8%] flex h-20 w-20 items-center justify-center rounded-full bg-[#b9ff66] text-[36px] font-medium">★</div>
            <div className="absolute left-[7%] top-[9%] text-[52px]">✦</div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1240px] grid-cols-2 gap-4 px-5 md:grid-cols-4 md:px-10 lg:grid-cols-8 lg:px-0">
          {data.skills.slice(0, 8).map((skill) => (
            <div className="flex h-12 items-center justify-center rounded-[14px] bg-[#f3f3f3] px-4 text-center text-[18px] font-medium text-black/70 grayscale" key={skill.category}>
              {skill.category}
            </div>
          ))}
        </section>

        <section id="skills">
          <SectionHeading title="Skills">
            {data.personal.description}
          </SectionHeading>
        </section>

        <section className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 px-5 md:px-10 lg:grid-cols-2 lg:px-0">
          {data.skills.slice(0, 6).map((skill, index) => {
            const tone = serviceTones[index % serviceTones.length];
            return (
              <article
                className={`${tone.card} grid min-h-[310px] grid-cols-1 gap-8 rounded-[32px] border border-[#191a23] p-8 shadow-[0_5px_0_#191a23] md:grid-cols-[1fr_190px] md:rounded-[45px] md:p-[50px]`}
                key={skill.category}
              >
                <div className="flex flex-col justify-between gap-10">
                  <div>
                    <h3 className="mb-6 flex flex-col items-start text-[26px] font-medium leading-tight md:text-[30px]">
                      <span className={`${tone.label} rounded-[7px] px-[7px]`}>{skill.category}</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span className={`rounded-full border px-3 py-1 text-[14px] ${tone.dark ? "border-white/40 text-white" : "border-[#191a23]/20 text-black"}`} key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a className="flex items-center gap-4 text-[18px]" href="#projects">
                    <span className={`flex h-[41px] w-[41px] items-center justify-center rounded-full ${tone.dark ? "bg-white text-black" : "bg-[#191a23] text-[#b9ff66]"}`}>
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                    <span className={tone.dark ? "text-white" : "text-black"}>See proof</span>
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <img alt="" className="h-[170px] w-[190px] object-contain" src={serviceImages[index % serviceImages.length]} />
                </div>
              </article>
            );
          })}
        </section>

        <section id="about" className="mx-auto grid w-[calc(100%-40px)] max-w-[1240px] grid-cols-1 items-center gap-8 rounded-[32px] bg-[#f3f3f3] px-8 py-[50px] md:w-[calc(100%-80px)] md:grid-cols-[560px_1fr] md:rounded-[45px] md:px-[60px] lg:w-full">
          <div className="flex flex-col items-start gap-[26px]">
            <h2 className="text-[30px] font-medium leading-tight text-black">About {data.personal.name}</h2>
            <p className="text-[18px] leading-relaxed text-black">{data.personal.about}</p>
            <div className="flex flex-wrap gap-3">
              {data.socials.map((social) => (
                <a className="flex items-center gap-2 rounded-[14px] border border-[#191a23] bg-white px-4 py-3 text-[16px]" href={social.url} key={social.name}>
                  <SocialIcon name={social.name} />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          <img alt="" className="mx-auto hidden max-h-[340px] w-full object-contain md:block" src="/positivus/cta.svg" />
        </section>

        <section id="projects">
          <SectionHeading title="Projects">
            Selected work across construction SaaS, mobile video, and B2B ecommerce systems.
          </SectionHeading>
        </section>

        <section className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 px-5 md:px-10 lg:grid-cols-3 lg:px-0">
          {data.projects.map((project) => (
            <article className="overflow-hidden rounded-[32px] border border-[#191a23] bg-white shadow-[0_5px_0_#191a23] md:rounded-[45px]" key={project.id}>
              <img alt={project.title} className="h-52 w-full object-cover" src={project.image} />
              <div className="flex min-h-[360px] flex-col gap-5 p-8">
                <h3 className="text-[26px] font-medium leading-tight">{project.title}</h3>
                <p className="text-[17px] leading-relaxed">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span className="rounded-full bg-[#b9ff66] px-3 py-1 text-[14px]" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a className="flex items-center gap-3 text-[18px]" href={project.github}>
                  View source <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </article>
          ))}
        </section>

        <section id="aws">
          <SectionHeading title="AWS Journey">
            A step-by-step view of how I connect application work with cloud deployment, delivery, security, and optimization.
          </SectionHeading>
        </section>

        <section className="mx-auto flex w-full max-w-[1240px] flex-col gap-[30px] px-5 md:px-10 lg:px-0">
          {processSteps.map((step, index) => (
            <article
              className={`rounded-[32px] border border-[#191a23] px-8 py-[30px] shadow-[0_5px_0_#191a23] md:rounded-[45px] md:px-[60px] ${
                index === 0 ? "bg-[#b9ff66]" : "bg-[#f3f3f3]"
              }`}
              key={step.number}
            >
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-5 md:gap-[25px]">
                  <span className="text-[36px] font-medium leading-none md:text-[60px]">{step.number}</span>
                  <h3 className="text-[20px] font-medium leading-tight md:text-[30px]">{step.title}</h3>
                </div>
                <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#191a23] bg-[#f3f3f3] md:h-[58px] md:w-[58px]">
                  {index === 0 ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                </span>
              </div>
              {index === 0 ? (
                <div className="mt-[30px] border-t border-[#191a23] pt-[30px] text-[18px] leading-relaxed text-black">
                  {step.body}
                </div>
              ) : null}
            </article>
          ))}
        </section>

        <section id="experience">
          <SectionHeading title="Experience">
            Practical production work across frontend, fullstack, mobile maintenance, and platform delivery.
          </SectionHeading>
        </section>

        <section className="mx-auto w-[calc(100%-40px)] max-w-[1240px] rounded-[32px] bg-[#191a23] p-8 text-white md:w-[calc(100%-80px)] md:rounded-[45px] md:px-[60px] md:py-[70px] lg:w-full">
          <div className="grid gap-8 lg:grid-cols-3">
            {data.experience.map((item) => (
              <article className="border-[#b9ff66] lg:border-r lg:pr-8 last:lg:border-r-0" key={item.id}>
                <p className="mb-2 text-[20px] font-medium text-[#b9ff66]">{item.period}</p>
                <h3 className="text-[25px] font-medium leading-tight">{item.role}</h3>
                <p className="mt-1 text-[18px] text-white/80">{item.company}</p>
                <p className="mt-5 text-[18px] leading-relaxed">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span className="rounded-full border border-white/30 px-3 py-1 text-[14px]" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <SectionHeading title="Contact Us">
            Connect with me to discuss frontend, fullstack, mobile, or AWS-oriented project work.
          </SectionHeading>
        </section>

        <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1240px] grid-cols-1 overflow-hidden rounded-[32px] bg-[#f3f3f3] px-8 py-[50px] md:w-[calc(100%-80px)] md:grid-cols-[556px_1fr] md:rounded-[45px] md:px-[100px] md:py-[60px] lg:w-full">
          <div className="flex flex-col gap-8">
            <h2 className="text-[30px] font-medium leading-tight text-black">Let&apos;s build something reliable.</h2>
            <div className="flex flex-col gap-5 text-[18px]">
              <a className="rounded-[14px] border border-black bg-white px-[30px] py-[18px]" href={`mailto:${data.personal.email}`}>
                Email: {data.personal.email}
              </a>
              <a className="rounded-[14px] border border-black bg-white px-[30px] py-[18px]" href={`tel:${data.personal.phone}`}>
                Phone: {data.personal.phone}
              </a>
              {data.socials.map((social) => (
                <a className="rounded-[14px] border border-black bg-white px-[30px] py-[18px]" href={social.url} key={social.name}>
                  {social.name}
                </a>
              ))}
            </div>
            <a className="rounded-[14px] bg-[#191a23] px-[35px] py-5 text-center text-[20px] leading-7 text-white" href={`mailto:${data.personal.email}`}>
              Send Message
            </a>
          </div>
          <img alt="" className="ml-auto hidden h-[648px] max-w-none object-contain md:block" src="/positivus/contact.svg" />
        </section>
      </main>

      <footer className="mx-auto mt-[140px] w-full max-w-[1240px] px-5 md:px-10 lg:px-0">
        <div className="rounded-t-[45px] bg-[#191a23] px-8 py-[50px] text-white md:px-[60px] md:pt-[55px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <Logo footer />
            <nav className="flex flex-col gap-5 text-[18px] underline md:flex-row md:gap-10">
              {navigation.slice(0, 5).map((item) => (
                <a href={item.href} key={item.href}>
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex gap-3">
              {data.socials.map((social) => (
                <a className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-[#191a23]" href={social.url} key={social.name}>
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-[66px] grid gap-10 lg:grid-cols-[332px_1fr] lg:gap-[154px]">
            <div className="flex flex-col gap-[27px]">
              <h2 className="w-fit rounded-[7px] bg-[#b9ff66] px-[7px] text-[20px] font-medium text-black">Contact:</h2>
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
    </div>
  );
}
