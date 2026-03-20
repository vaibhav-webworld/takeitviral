"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { MarqueeFade } from "@/components/ui/marquee-fade";

export function Testimonials() {
  // Duplicate for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="section section-top-fade py-24 overflow-hidden relative">
      {/* Blur gradients */}
      <MarqueeFade width="sm" zIndex={20} />

      {/* Header aligned to global layout system */}
      <div className="section-content mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
         
          <h2 className="text-2xl md:text-4xl lg:text-5xl">
            What Our Users Say
          </h2>
        </motion.div>
      </div>

      {/* Full-bleed marquee - background extends edge-to-edge */}
      <div className="relative">
        {/* Gradient masks */}
        <MarqueeFade width="sm" zIndex={10} />

        {/* Scrolling testimonials */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6 py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="testimonial-card flex-shrink-0 min-w-[280px] md:min-w-[320px] max-w-[320px] md:max-w-[380px]"
              >
                {/* Quote icon */}
                <div className="text-muted-foreground/30 text-3xl md:text-4xl font-serif mb-4">
                  "
                </div>

                {/* Content */}
                <p className="text-xs md:text-sm leading-relaxed mb-6 min-h-[60px] md:min-h-[80px]">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm md:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
