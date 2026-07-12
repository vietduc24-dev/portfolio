"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: "none" | "stagger-1" | "stagger-2" | "stagger-3" | "stagger-4" | "stagger-5";
  animation?: "slide-up" | "fade-in";
}

export function AnimatedSection({ 
  children, 
  className, 
  delay = "none",
  animation = "slide-up" 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible to only animate once
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && `animate-${animation}`,
        delay !== "none" && delay,
        className
      )}
    >
      {children}
    </div>
  );
}
