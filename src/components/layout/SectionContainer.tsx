"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  /** Use full-width for backgrounds but still constrain content */
  fullBleed?: boolean;
  /** ID for anchor navigation */
  id?: string;
  /** Additional wrapper element props */
  as?: "section" | "div" | "footer" | "header";
}

/**
 * SectionContainer - Unified layout wrapper based on Hero section
 * 
 * Layout reference (from Hero):
 * - container mx-auto
 * - px-4 md:px-8 lg:px-16
 * 
 * This component enforces consistent horizontal spacing site-wide.
 */
export function SectionContainer({
  children,
  className,
  fullBleed = false,
  id,
  as: Component = "section",
}: SectionContainerProps) {
  if (fullBleed) {
    return (
      <Component id={id} className={cn("relative", className)}>
        {children}
      </Component>
    );
  }

  return (
    <Component id={id} className={cn("relative", className)}>
      <div className="section-content">
        {children}
      </div>
    </Component>
  );
}

/**
 * ContentWrapper - Inner content constraint matching Hero layout
 * Use this inside full-bleed sections to align content to the global grid
 */
export function ContentWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("section-content", className)}>
      {children}
    </div>
  );
}
