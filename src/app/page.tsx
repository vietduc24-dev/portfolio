import { AboutSection } from "@/components/portfolio/about-section";
import { AwsJourneySection } from "@/components/portfolio/aws-journey-section";
import { BackToTop } from "@/components/portfolio/back-to-top";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer";
import { PortfolioHeader } from "@/components/portfolio/portfolio-header";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { SmoothScroll } from "@/components/portfolio/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white font-[var(--font-positivus)] text-[#191a23]">
        <PortfolioHeader />
        <main className="flex flex-col gap-[70px] pb-0 md:gap-[100px]">
          <HeroSection />
          <SkillsSection />
          <AboutSection />
          <ProjectsSection />
          <AwsJourneySection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <PortfolioFooter />
        <BackToTop />
      </div>
    </SmoothScroll>
  );
}
