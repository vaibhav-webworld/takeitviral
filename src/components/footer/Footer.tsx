"use client";

import { motion } from "framer-motion";
import logo from "@/assets/kandatheking/kanda-logo.png";
import { socialCards } from "@/data/socials";
import { SocialIcon } from "@/components/ui/social-icons";
import { CAL_LINK, CONTACT_EMAIL } from "@/lib/constants";

const footerLinks = {
  sections: [
    { label: "Our Work", href: "#work" },
    { label: "Steps", href: "#steps" },
    { label: "Plans", href: "#plans" },
    { label: "About Us", href: "#about" },
  ],
  pages: [
    { label: "Home", href: "/" },
    { label: "Book a Call", href: CAL_LINK },
  ],
};

export function Footer() {
  // Get social media URLs from socialCards data
  const instagramUrl =
    socialCards.find((card) => card.platform === "instagram")?.url || "#";
  const youtubeUrl =
    socialCards.find((card) => card.platform === "youtube")?.url || "#";
  const linkedinUrl =
    socialCards.find((card) => card.platform === "linkedin")?.url || "#";

  return (
    <footer className="relative overflow-hidden gradient-footer-bg border-t border-border/50">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Content aligned to global layout system */}
      <div className="section-content py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain rounded-lg" />
              <span className="text-xl font-semibold">Kanda Speaks</span>
            </motion.div>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm leading-relaxed">
              We don't just edit; we engineer growth. The strategic partner for
              personal brands and startups ready to dominate the feed.
            </p>
            <div className="mb-6">
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Get in Touch</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
              >
                <span className="text-sm">{CONTACT_EMAIL}</span>
                <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Social icons */}
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <SocialIcon platform="instagram" />
                </a>
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <SocialIcon platform="youtube" />
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <SocialIcon platform="linkedin" />
                </a>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">Sections</h4>
            <ul className="space-y-3">
              {footerLinks.sections.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">Pages</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Neura. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
