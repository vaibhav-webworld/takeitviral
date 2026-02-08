"use client";

import { motion } from "framer-motion";
import { heroClients } from "@/data/heroClients";

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export function Hero() {
  // Get client images from data
  const clientImages = heroClients.map((client) => client.image);

  // Duplicate images for seamless loop
  const column1Images = [
    ...clientImages.slice(0, 3),
    ...clientImages.slice(0, 3),
  ];
  const column2Images = [
    ...clientImages.slice(3, 6),
    ...clientImages.slice(3, 6),
  ];

  return (
    <section className="section-grid relative min-h-screen flex items-center pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden">
      {/* Content aligned to global layout system */}
      <div className="section-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            className="max-w-xl lg:max-w-lg xl:max-w-xl pb-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-loose mb-4 md:mb-20">
              We Don't Just Post{" "}
              <span className="text-muted-foreground">Content</span>. We Make
              Your Brand{" "}
              <span className="text-gradient">
                <em>Take It Viral.</em>
              </span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Don't just share your story—Take It Viral. We engineer high-impact
              organic content for Personal Brands, Startups, and Creators who
              are done with average views and ready for massive reach.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="https://cal.com/vaibhav-kanda/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Discovery Call
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Infinite scroll gallery */}
          <div className="relative h-[400px] md:h-[600px] lg:h-[700px] hidden md:flex justify-center">
            <div className="absolute inset-0 flex gap-4 md:gap-5 justify-center scroll-container">
              {/* Column 1 - scrolling up */}
              <div className="relative w-44 md:w-56 lg:w-60 overflow-hidden">
                <div className="animate-scroll-up flex flex-col gap-4 md:gap-5">
                  {column1Images.map((img, index) => (
                    <motion.div
                      key={`col1-${index}`}
                      className="relative rounded-2xl overflow-hidden h-60 md:h-72 lg:h-80 w-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <img
                        src={img}
                        alt={heroClients[index % 3]?.name || "Client"}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <div
                          className="p-1 rounded-lg"
                          style={{
                            background:
                              "linear-gradient(135deg, hsl(340 82% 52%) 0%, hsl(340 80% 50%) 25%, hsl(330 70% 48%) 50%, hsl(280 65% 45%) 75%, hsl(270 60% 42%) 100%)",
                          }}
                        >
                          <InstagramIcon />
                        </div>
                        <div className="text-xs">
                          <p className="font-semibold">
                            {heroClients[index % 3]?.name}
                          </p>
                          <p className="text-muted-foreground">
                            {heroClients[index % 3]?.followers}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Column 2 - scrolling down */}
              <div className="relative w-44 md:w-56 lg:w-60 overflow-hidden">
                <div className="animate-scroll-down flex flex-col gap-4 md:gap-5">
                  {column2Images.map((img, index) => (
                    <motion.div
                      key={`col2-${index}`}
                      className="relative rounded-2xl overflow-hidden h-60 md:h-72 lg:h-80 w-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    >
                      <img
                        src={img}
                        alt={heroClients[(index % 3) + 3]?.name || "Client"}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <div
                          className="p-1 rounded-lg"
                          style={{
                            background:
                              "linear-gradient(135deg, hsl(340 82% 52%) 0%, hsl(340 80% 50%) 25%, hsl(330 70% 48%) 50%, hsl(280 65% 45%) 75%, hsl(270 60% 42%) 100%)",
                          }}
                        >
                          <InstagramIcon />
                        </div>
                        <div className="text-xs">
                          <p className="font-semibold">
                            {heroClients[(index % 3) + 3]?.name}
                          </p>
                          <p className="text-muted-foreground">
                            {heroClients[(index % 3) + 3]?.followers}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
