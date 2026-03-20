"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import MLogo from "@/assets/brands/TIV-logo.svg";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Work", href: "#showcase" },
  { label: "Pricing", href: "#plans" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6"
      initial={false}
    >
      <motion.nav
        className={`flex items-center justify-between transition-all duration-1000 ease-out ${
          isScrolled ? "navbar-collapsed px-6 py-3" : "navbar-full px-0 py-0"
        }`}
        layout
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2 text-foreground text-xl"
          layout
        >
          <img
            src={MLogo}
            alt="TakeItViral"
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />
          {/* <span>TakeItViral</span> */}
        </motion.a>

        {/* Nav Links */}
        <motion.div className="hidden md:flex items-center gap-8" layout>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <CTAButton
          text="short"
          className={`text-sm transition-all duration-1000 ease-out ${
            isScrolled ? "rounded-full" : "rounded-lg"
          }`}
          showArrow
        />
      </motion.nav>
    </motion.header>
  );
}
