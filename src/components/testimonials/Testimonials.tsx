"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { MarqueeFade } from "@/components/ui/marquee-fade";
import { Star } from "lucide-react";
import client1 from "@/assets/placeholders/client-1.png";
import client2 from "@/assets/placeholders/client-2.png";
import client3 from "@/assets/placeholders/client-3.png";
import client4 from "@/assets/placeholders/client-4.png";
import client5 from "@/assets/placeholders/client-5.png";
import client6 from "@/assets/placeholders/client-6.png";

const testimonialAvatars = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <div className="testimonial-card flex-shrink-0 min-w-[300px] md:min-w-[360px] max-w-[360px] md:max-w-[400px] group hover:border-primary/30 transition-all duration-500">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5 fill-primary text-primary"
          />
        ))}
      </div>

      {/* Quote */}
      <div className="relative mb-4">
        <span className="absolute -top-3 -left-1 text-5xl text-primary/15 font-accent leading-none select-none">
          &ldquo;
        </span>
        <p className="text-sm md:text-base leading-relaxed text-foreground/90 pl-4 min-h-[72px]">
          {testimonial.content}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-4" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonialAvatars[index % 6]}
          alt={testimonial.name}
          className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/30 transition-all"
        />
        <div>
          <p className="font-semibold text-sm md:text-base font-display">
            {testimonial.name}
          </p>
          <p className="text-muted-foreground text-xs">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  // Split testimonials into two rows
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section className="section section-top-fade py-24 overflow-hidden relative">
      {/* Blur gradients */}
      <MarqueeFade width="sm" zIndex={20} />

      {/* Header */}
      <div className="section-content mb-14">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm font-medium mb-4 tracking-wider uppercase">
            {"{ Testimonials }"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display">
            Hear It From{" "}
            <span className="heading-accent">Our Clients</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Real stories from creators and brands we've helped go viral
          </p>
        </motion.div>
      </div>

      {/* Two-row marquee */}
      <div className="relative space-y-4 md:space-y-6">
        {/* Gradient masks */}
        <MarqueeFade width="md" zIndex={10} />

        {/* Row 1 - scrolls left */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6 py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {row1.map((testimonial, index) => (
              <TestimonialCard
                key={`row1-${testimonial.id}-${index}`}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - scrolls right (reverse) */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6 py-2"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 55,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {row2.map((testimonial, index) => (
              <TestimonialCard
                key={`row2-${testimonial.id}-${index}`}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
