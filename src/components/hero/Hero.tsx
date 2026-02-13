"use client";

import { motion } from "framer-motion";
import { heroClients } from "@/data/heroClients";
import { CTAButton } from "@/components/ui/cta-button";
import { InstagramIcon } from "@/components/ui/social-icons";

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
              <CTAButton />
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
                        <div className="p-1 rounded-lg gradient-instagram">
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
                        <div className="p-1 rounded-lg gradient-instagram">
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
