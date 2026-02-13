"use client";

import { motion } from "framer-motion";
import logo from "@/assets/kandatheking/kanda-logo.jpeg";
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
    <footer className="py-16 border-t border-border relative gradient-footer-bg">
      {/* Content aligned to global layout system */}
      <div className="section-content">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              <span className="text-lg">Kanda Speaks</span>
            </motion.div>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              We don't just edit; we engineer growth. The strategic partner for
              personal brands and startups ready to dominate the feed.
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Get in Touch:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <SocialIcon platform="instagram" />
              </a>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <SocialIcon platform="youtube" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <SocialIcon platform="linkedin" />
              </a>
            </div>
          </div>

          {/* Sections */}
          <div>
            <h4 className="font-semibold mb-4">Sections</h4>
            <ul className="space-y-3">
              {footerLinks.sections.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
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
