import { motion } from "framer-motion";
import { CAL_LINK, CTA_TEXT } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  variant?: "primary" | "accent";
  text?: "primary" | "short" | string;
  className?: string;
  showArrow?: boolean;
}

export function CTAButton({
  variant = "primary",
  text = "primary",
  className,
  showArrow = false,
}: CTAButtonProps) {
  const buttonText =
    text === "primary"
      ? CTA_TEXT.primary
      : text === "short"
        ? CTA_TEXT.short
        : text;

  const baseClass = variant === "accent" ? "btn-accent" : "btn-primary";

  return (
    <motion.a
      href={CAL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseClass, className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonText}
      {showArrow && (
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
      )}
    </motion.a>
  );
}
