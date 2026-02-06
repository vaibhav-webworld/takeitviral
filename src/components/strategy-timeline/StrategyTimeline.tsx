"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { strategySteps } from "@/data/strategySteps";
import kanda from "@/assets/kanda.jpeg";

export function StrategyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // When section comes into view, mark as entered
    if (latest > 0 && !hasEntered) {
      setHasEntered(true);
    }

    const totalSteps = strategySteps.length;
    // Map scroll progress (0-1) to steps (1 to totalSteps)
    const stepProgress = latest * totalSteps;
    const newCount = Math.min(Math.ceil(stepProgress), totalSteps);

    if (newCount !== visibleCount && newCount > 0) {
      setVisibleCount(newCount);
    }
  });

  // Show first step when entering the section
  useEffect(() => {
    if (hasEntered && visibleCount === 0) {
      setVisibleCount(1);
    }
  }, [hasEntered, visibleCount]);

  const totalSteps = strategySteps.length;
  // Fixed height for smooth scroll to next section
  const containerHeight = `${totalSteps * 70}vh`;

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: containerHeight }}
      id="features"
    >
      <div className="sticky top-0 section py-16 md:py-24 lg:py-32 min-h-screen flex items-center bg-background">
        {/* Content aligned to global layout system */}
        <div className="section-content">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left side - Title and Image */}
            <div>
              <motion.span
                className="text-primary text-sm font-medium mb-4 block"
                initial={{ opacity: 0 }}
                animate={{ opacity: hasEntered ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              >
                {"{ How We Work }"}
              </motion.span>
              <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hasEntered ? 1 : 0,
                  y: hasEntered ? 0 : 20,
                }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                STRATEGIC STEPS TO{" "}
                <span className="block">IMPACTFUL RESULTS</span>
              </motion.h2>

              {/* Decorative Image */}
              <motion.div
                className="relative rounded-3xl overflow-hidden aspect-square max-w-md hidden lg:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: hasEntered ? 1 : 0,
                  scale: hasEntered ? 1 : 0.9,
                }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <img
                  src={kanda}
                  alt="Strategy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-white">
                    <p className="text-lg font-semibold">Your Success</p>
                    <p className="text-sm opacity-80">Is Our Priority</p>
                  </div>
                </div>
              </motion.div>

              {/* Progress indicator */}
              <div className="mt-8 flex lg:hidden items-center gap-2 mb-8">
                <span className="text-sm text-muted-foreground">Step</span>
                <span className="text-2xl text-primary">{visibleCount}</span>
                <span className="text-sm text-muted-foreground">
                  of {totalSteps}
                </span>
              </div>
              <div className="mt-8 hidden lg:flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Step</span>
                <span className="text-2xl text-primary">{visibleCount}</span>
                <span className="text-sm text-muted-foreground">
                  of {totalSteps}
                </span>
              </div>
            </div>

            {/* Right side - Timeline steps */}
            <div className="space-y-8 md:space-y-12 lg:space-y-16">
              {strategySteps.map((step, index) => {
                const isVisible = index < visibleCount;
                return (
                  <motion.div
                    key={step.id}
                    className="relative pl-6 md:pl-8 border-l-2 border-border"
                    initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : 40,
                      filter: isVisible ? "blur(0px)" : "blur(4px)",
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                      pointerEvents: isVisible ? "auto" : "none",
                      visibility: index <= visibleCount ? "visible" : "hidden",
                    }}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute -left-[30px] top-0 w-4 h-4 rounded-full border-2 border-primary bg-background"
                      animate={
                        isVisible
                          ? {
                              backgroundColor: "hsl(var(--primary))",
                              boxShadow: "0 0 20px hsl(var(--primary) / 0.6)",
                              scale: 1.1,
                            }
                          : {
                              backgroundColor: "hsl(var(--background))",
                              boxShadow: "none",
                              scale: 1,
                            }
                      }
                      transition={{ duration: 0.4 }}
                    />

                    {/* Step number */}
                    <motion.span
                      className="text-4xl md:text-6xl text-primary/20 absolute -left-2 -top-4"
                      animate={{
                        opacity: isVisible ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {step.number}
                    </motion.span>

                    {/* Content */}
                    <div className="pt-2">
                      <h3 className="text-lg md:text-xl lg:text-2xl mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
