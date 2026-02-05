"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { metrics } from "@/data/metrics";

function AnimatedNumber({
  value,
  isInView,
}: {
  value: string;
  isInView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract number and suffix (e.g., "500M+" -> 500, "M+")
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const suffix = match[2];
    const duration = 2000;
    const steps = 60;
    const increment = targetNum / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(`${Math.floor(current)}${suffix}`);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return <>{displayValue}</>;
}

export function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="section section-dots py-16 border-y border-border relative"
    >
      {/* Content aligned to global layout system */}
      <div className="section-content">
        <div className="grid grid-cols-2 gap-6 md:flex md:flex-row md:justify-between">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.h3
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2"
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <AnimatedNumber value={metric.value} isInView={isInView} />
              </motion.h3>
              <p className="text-muted-foreground text-xs md:text-sm tracking-wider uppercase">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom gradient blend for smooth transition to Brands section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(0 0% 2% / 0.3) 30%, hsl(0 0% 2% / 0.6) 60%, hsl(0 0% 2% / 0.9) 100%)",
        }}
      />
    </section>
  );
}
