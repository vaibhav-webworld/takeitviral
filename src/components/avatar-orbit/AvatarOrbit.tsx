import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Youtube, Instagram } from "lucide-react";
import mainAvatar from "@/assets/main-avatar.png";
import orbitBackground from "@/assets/orbit-background.png";
import { socialCards } from "@/data/socials";

const platformIcons = {
  youtube: Youtube,
  instagram: Instagram,
  twitter: Youtube, // fallback
  pinterest: Youtube, // fallback
};

const platformColors = {
  youtube: "#FF0000",
  instagram: "#E4405F",
  twitter: "#1DA1F2",
  pinterest: "#BD081C",
};

// Card positions: [x%, y%] from center, representing where cards appear
const cardPositions = [
  { x: -35, y: -25 },  // Top left
  { x: 35, y: -20 },   // Top right
  { x: -38, y: 20 },   // Bottom left
  { x: 38, y: 15 },    // Bottom right
];

export function AvatarOrbit() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 });

  return (
    <section 
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden"
      style={{ 
        backgroundImage: `url(${orbitBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Social Media Client Cards - Radial Expansion */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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
              animate={isInView ? {
                x: translateX,
                y: translateY,
                scale: 1,
                opacity: 1,
              } : {
                x: 0,
                y: 0,
                scale: 0,
                opacity: 0,
              }}
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
                className="flex items-center gap-3 px-4 py-3 rounded-full bg-card/60 backdrop-blur-xl border border-border/30 shadow-lg hover:scale-105 transition-transform duration-300"
                style={{
                  boxShadow: `0 0 30px hsl(0 0% 0% / 0.5)`,
                }}
              >
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border/50 flex-shrink-0">
                  <img 
                    src={card.avatar} 
                    alt={card.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                </div>
                
                {/* Info */}
                <div className="flex flex-col">
                  <span className="text-foreground font-bold text-sm tracking-wide uppercase">
                    {card.name}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Icon 
                      className="w-4 h-4" 
                      style={{ color }}
                    />
                    <span className="text-muted-foreground text-xs">
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
          className="w-auto max-w-none object-cover"
          style={{
            height: '115%',
            minWidth: 'auto',
          }}
        />
      </div>
    </section>
  );
}
