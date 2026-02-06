"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faqs";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section section-top-fade py-24">
      {/* Content aligned to global layout system */}
      <div className="section-content">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-foreground">
              FAQ
            </h2>
            <p className="text-muted-foreground mt-4">
              Got specific questions?
            </p>
            <a href="#contact" className="text-primary hover:underline">
              Contact Us
            </a>
          </motion.div>

          {/* Right side - Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between text-left py-2"
                >
                  <span className="text-base md:text-lg font-medium pr-4 md:pr-8">
                    {faq.question}
                  </span>
                  <span className="text-primary flex-shrink-0">
                    {openId === faq.id ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground text-sm md:text-base pb-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
