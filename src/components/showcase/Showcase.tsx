"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { shortFormVideos, longFormVideos } from "@/data/showcase";

// Import showcase images
import reel1 from "@/assets/shortVideos/1.mp4";
import reel2 from "@/assets/shortVideos/2.mp4";
import reel3 from "@/assets/shortVideos/3.mp4";
import reel4 from "@/assets/shortVideos/4.mp4";
import longform1 from "@/assets/longVideos/1.mp4";
import longform2 from "@/assets/longVideos/2.mp4";
import longform3 from "@/assets/longVideos/3.mp4";

const reelImages = [reel1, reel2, reel3, reel4];
const longformImages = [longform1, longform2, longform3];

export function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showcase" ref={ref} className="section section-top-fade py-24">
      {/* Content aligned to global layout system */}
      <div className="section-content">
        {/* Short Form Videos */}
        <div className="mb-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Short Form Videos That{" "}
              <span className="text-gradient">Go Viral</span>
              <span className="inline-block ml-2 animate-float">✨</span>
            </h2>
            <p className="text-muted-foreground">
              We clip content and add our touch to make them viral
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {shortFormVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card-glass overflow-hidden aspect-[9/16]">
                  <video
                    src={reelImages[index]}
                    controls
                    className="w-full h-full object-cover"
                    preload="metadata"
                    muted
                    autoPlay
                    loop
                    playsInline
                    onMouseEnter={(e) => {
                      e.currentTarget.muted = false;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.muted = true;
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Long Form Videos */}
        <div className="mb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Trailers and <span className="text-gradient">Long form</span>
              <span className="inline-block ml-2 animate-float">🎬</span>
            </h2>
            <p className="text-muted-foreground">
              Podcast trailers, B2B videos and more
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {longFormVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              >
                <div className="card-glass overflow-hidden aspect-video">
                  <video
                    src={longformImages[index]}
                    controls
                    className="w-full h-full object-cover"
                    preload="metadata"
                    muted
                    autoPlay
                    loop
                    playsInline
                    onMouseEnter={(e) => {
                      e.currentTarget.muted = false;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.muted = true;
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
