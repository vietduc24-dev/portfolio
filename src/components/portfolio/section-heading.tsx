import { cn } from "@/lib/utils";
import { AnimatedSection } from "./animated-section";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <AnimatedSection className={cn("mx-auto mb-10 flex w-full max-w-[1240px] flex-col gap-5 px-5 md:mb-[80px] md:flex-row md:items-start md:gap-10 md:px-10 lg:px-0", className)}>
      <h2 className="w-fit rounded-[7px] bg-[#b9ff66] px-[7px] text-[32px] font-medium leading-tight tracking-[0] text-black md:text-[40px]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[620px] text-[16px] leading-relaxed text-black md:text-[18px]">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
