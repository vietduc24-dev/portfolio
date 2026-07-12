import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { CareerTimeline } from "@/components/portfolio/career-timeline";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { AwsJourneySection } from "@/components/portfolio/aws-journey-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ContactSection } from "@/components/portfolio/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden relative">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* <CareerTimeline /> */}
      <SkillsSection />
      <AwsJourneySection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
