"use client";

import { motion } from "framer-motion";
import { brands } from "@/data/brands";

export function Brands() {
  // Duplicate for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="section section-top-fade py-24 overflow-hidden border-b border-border relative">
      {/* Blur gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      {/* Content aligned to global layout system */}
      <div className="section-content mb-8">
        <p className="text-muted-foreground text-sm uppercase tracking-wider text-center">
          As Featured In
        </p>
      </div>

      {/* Full-bleed marquee - background extends edge-to-edge */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="marquee"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex items-center justify-center min-w-[160px] px-8"
              >
                <span className="text-muted-foreground text-xl font-semibold opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">
                  {brand.id === "3" && "✳︎"}
                  {brand.name}
                  {brand.id === "5" && (
                    <span className="ml-1">◎</span>
                  )}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
