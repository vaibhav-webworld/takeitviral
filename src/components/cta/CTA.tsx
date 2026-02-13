"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { GradientOverlay } from "@/components/ui/gradient-overlay";

export function CTA() {
  return (
    <section
      id="contact"
      className="section py-24 md:py-32 relative overflow-hidden gradient-blue-radial"
    >
      {/* Top gradient fade */}
      <GradientOverlay direction="top" height="h-32 md:h-48" />

      {/* Bottom gradient fade */}
      <GradientOverlay direction="bottom" height="h-32 md:h-48" />

      {/* Blurred accent overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background: "var(--gradient-blue-radial-overlay)",
          filter: "blur(100px)",
        }}
      />

      {/* Content aligned to global layout system */}
      <div className="section-content relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl mb-4 uppercase tracking-tight">
            Stop Delaying Your Dreams.
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8 md:mb-12 uppercase tracking-tight">
            Start Today.
          </h2>

          <CTAButton className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4 inline-block" />
        </motion.div>
      </div>
    </section>
  );
}
