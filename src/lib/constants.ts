/**
 * Application-wide constants
 * Centralized configuration for URLs, contact info, and design values
 */

// External Links
export const CAL_LINK = "https://cal.com/vaibhav-kanda/15min" as const;

// Contact Information
export const CONTACT_EMAIL = "vaibhavkandaofficial@gmail.com" as const;

// Animation Timing
export const STAGGER_DELAYS = {
  fast: 0.1,
  normal: 0.15,
  slow: 0.2,
  extraSlow: 0.3,
} as const;

// CTA Button Text
export const CTA_TEXT = {
  primary: "Book a Discovery Call",
  short: "Book a Call",
} as const;
