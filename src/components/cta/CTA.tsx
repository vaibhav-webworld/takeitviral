"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contact" className="section section-top-fade py-24 md:py-32 relative overflow-hidden">
      {/* Content aligned to global layout system */}
      <div className="section-content relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase tracking-tight">
            Stop Delaying Your Dreams.
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 uppercase tracking-tight">
            Start Today.
          </h2>

          <motion.a
            href="#contact"
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
