"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { pricingPlans } from "@/data/pricing";
import { Check, X, Plus } from "lucide-react";

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="section section-top-fade py-24">
      {/* Content aligned to global layout system */}
      <div className="section-content">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`pricing-card ${plan.popular ? "pricing-card-featured" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base md:text-lg tracking-tight">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <span className="bg-foreground text-background text-xs px-2 py-0.5 rounded font-medium">
                        PRO
                      </span>
                    )}
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 md:mb-8 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <div className="space-y-1 mb-6 md:mb-8">
                <p className="font-semibold text-sm mb-4">What's included</p>
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`flex items-center gap-3 py-2 text-sm ${
                      !feature.included ? "text-muted-foreground/50" : ""
                    }`}
                  >
                    {feature.included ? (
                      <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
                    )}
                    <span className="uppercase text-xs tracking-wider">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Book a Call Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-3 px-4 rounded-lg font-medium text-sm uppercase tracking-wider transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-muted"
                }`}
              >
                Book a Call
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
