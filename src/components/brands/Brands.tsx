"use client";

import { motion } from "framer-motion";
import { brands } from "@/data/brands";

export function Brands() {
  // Duplicate for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="section section-top-fade py-16 md:py-20 overflow-hidden border-b border-border/50 relative">
      {/* Gradient background overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "linear-gradient(90deg, hsl(0 0% 8% / 0.5) 0%, transparent 20%, transparent 80%, hsl(0 0% 8% / 0.5) 100%)",
        }}
      />

      {/* Blur gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Content aligned to global layout system */}
      <div className="section-content mb-12 relative z-10">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/50 to-border" />
          <p className="text-muted-foreground/80 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
            As Featured In
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent via-primary/50 to-border" />
        </div>
      </div>

      {/* Full-bleed marquee - background extends edge-to-edge */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10" />

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
                className="flex items-center justify-center min-w-[180px] md:min-w-[200px] px-8 md:px-10"
              >
                <span
                  className="text-lg md:text-2xl tracking-wide hover:opacity-100 transition-all duration-500 whitespace-nowrap bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(0 0% 60%) 0%, hsl(0 0% 50%) 50%, hsl(0 0% 40%) 100%)",
                    filter: "drop-shadow(0 0 20px hsl(0 0% 100% / 0.1))",
                  }}
                >
                  {brand.id === "3" && "✳︎ "}
                  {brand.name}
                  {brand.id === "5" && <span className="ml-2">◎</span>}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
