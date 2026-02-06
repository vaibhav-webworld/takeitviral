"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Work", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
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
          <svg
            className="w-8 h-8"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="16"
              cy="16"
              r="14"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="16" cy="16" r="3" fill="currentColor" />
          </svg>
          <span>TakeItViral</span>
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
        <motion.a
          href="https://cal.com/vaibhav-kanda/15min"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-primary text-sm transition-all duration-1000 ease-out ${
            isScrolled ? "rounded-full" : "rounded-lg"
          }`}
          layout
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book a Call
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      </motion.nav>
    </motion.header>
  );
}
