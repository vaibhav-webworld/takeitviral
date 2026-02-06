"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      id="contact"
      className="section py-24 md:py-32 relative overflow-hidden"
    >
      {/* Blue gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at center, hsl(220 80% 15%) 0%, hsl(220 75% 12%) 20%, hsl(220 70% 9%) 40%, hsl(220 65% 6%) 60%, hsl(220 60% 4%) 80%, hsl(0 0% 2%) 100%)",
        }}
      />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 md:h-48 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(0 0% 2%) 0%, hsl(0 0% 2% / 0.8) 20%, hsl(0 0% 2% / 0.4) 50%, transparent 100%)",
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 md:h-48 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(0deg, hsl(0 0% 2%) 0%, hsl(0 0% 2% / 0.8) 20%, hsl(0 0% 2% / 0.4) 50%, transparent 100%)",
        }}
      />

      {/* Blurred accent overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, hsl(220 90% 30% / 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, hsl(240 80% 25% / 0.25) 0%, transparent 50%)",
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

          <motion.a
            href="https://cal.com/vaibhav-kanda/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-base md:text-lg px-8 md:px-12 py-3 md:py-4 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Discovery Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
