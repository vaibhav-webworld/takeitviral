import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Youtube, Instagram, Linkedin, Twitter } from "lucide-react";
import mainAvatar from "@/assets/main-avatar.png";
import { socialCards } from "@/data/socials";

const platformIcons = {
  youtube: Youtube,
  instagram: Instagram,
  twitter: Twitter,
  pinterest: Youtube, // fallback
  linkedin: Linkedin,
  x: Twitter,
};

const platformColors = {
  youtube: "#FF0000",
  instagram: "#E4405F",
  twitter: "#1DA1F2",
  pinterest: "#BD081C",
  linkedin: "#0A66C2",
  x: "#1DA1F2",
};

// Card positions: [x%, y%] from center, representing where cards appear
const cardPositions = [
  { x: -35, y: -25 }, // Top left
  { x: 35, y: -20 }, // Top right
  { x: -38, y: 20 }, // Bottom left
  { x: 38, y: 15 }, // Bottom right
];

export function AvatarOrbit() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden gradient-smooth-blue"
    >
      {/* Top gradient fade to blend with previous section */}
      <div
        className="absolute top-0 left-0 right-0 h-48 md:h-64 lg:h-80 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(0 0% 2%) 0%, hsl(0 0% 2% / 0.95) 10%, hsl(0 0% 2% / 0.85) 20%, hsl(0 0% 2% / 0.7) 30%, hsl(0 0% 2% / 0.5) 45%, hsl(0 0% 2% / 0.25) 65%, hsl(0 0% 2% / 0.1) 80%, transparent 100%)",
        }}
      />

      {/* Bottom gradient fade to blend with next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 md:h-64 lg:h-80 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(0deg, hsl(0 0% 2%) 0%, hsl(0 0% 2% / 0.95) 10%, hsl(0 0% 2% / 0.85) 20%, hsl(0 0% 2% / 0.7) 30%, hsl(0 0% 2% / 0.5) 45%, hsl(0 0% 2% / 0.25) 65%, hsl(0 0% 2% / 0.1) 80%, transparent 100%)",
        }}
      />

      {/* Blurred gradient overlay - smooth transitions */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, hsl(220 90% 30% / 0.5) 0%, hsl(220 85% 28% / 0.35) 20%, transparent 60%), radial-gradient(circle at 70% 60%, hsl(240 80% 25% / 0.4) 0%, hsl(240 75% 22% / 0.25) 20%, transparent 60%)",
          filter: "blur(120px)",
        }}
      />
      {/* Social Media Client Cards - Radial Expansion */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        {socialCards.map((card, index) => {
          const Icon = platformIcons[card.platform];
          const color = platformColors[card.platform];
          const position = cardPositions[index % cardPositions.length];

          // Convert percentage to viewport units
          const translateX = (position.x / 100) * window.innerWidth * 0.8;
          const translateY = (position.y / 100) * window.innerHeight * 0.8;

          return (
            <motion.div
              key={card.id}
              className="absolute pointer-events-auto"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              animate={
                isInView
                  ? {
                      x: translateX,
                      y: translateY,
                      scale: 1,
                      opacity: 1,
                    }
                  : {
                      x: 0,
                      y: 0,
                      scale: 0,
                      opacity: 0,
                    }
              }
              whileHover={{ scale: 1.2 }}
              transition={{
                duration: 1.2,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
                type: "spring",
                stiffness: 60,
                damping: 15,
              }}
            >
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 md:gap-4 px-3 md:px-6 py-2 md:py-4 rounded-full bg-card/60 backdrop-blur-xl border border-border/30 shadow-lg transition-all duration-300 animate-float cursor-pointer hover:bg-card/80 hover:shadow-2xl hover:z-50"
                style={{
                  boxShadow: `0 0 30px hsl(0 0% 0% / 0.5)`,
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                {/* Avatar */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-border/50 flex-shrink-0">
                  <img
                    src={card.avatar}
                    alt={card.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col">
                  <span className="text-foreground text-xs md:text-base tracking-wide uppercase">
                    {card.name}
                  </span>
                  <div className="flex items-center gap-1 md:gap-2">
                    <Icon className="w-3 h-3 md:w-5 md:h-5" style={{ color }} />
                    <span className="text-muted-foreground text-[10px] md:text-sm">
                      {card.followers}
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* Full-screen Avatar - centered and scaled larger */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={mainAvatar}
          alt="Creator Avatar"
          className="w-full max-w-none object-contain h-[100%]"
          style={{
            minWidth: "auto",
          }}
        />
      </div>
    </section>
  );
}
