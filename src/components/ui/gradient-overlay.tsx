import { cn } from "@/lib/utils";

interface GradientOverlayProps {
  direction: "top" | "bottom";
  extended?: boolean;
  zIndex?: number;
  height?: string;
  className?: string;
}

/**
 * Creates gradient overlays for smooth section transitions
 * Used to blend sections together seamlessly
 */
export function GradientOverlay({
  direction,
  extended = false,
  zIndex = 10,
  height = "h-32 md:h-48",
  className,
}: GradientOverlayProps) {
  const gradientClass = extended
    ? direction === "top"
      ? "gradient-fade-top-extended"
      : "gradient-fade-bottom-extended"
    : direction === "top"
      ? "gradient-fade-top"
      : "gradient-fade-bottom";

  const positionClass = direction === "top" ? "top-0" : "bottom-0";

  return (
    <div
      className={cn(
        "absolute left-0 right-0 pointer-events-none",
        gradientClass,
        positionClass,
        height,
        className,
      )}
      style={{ zIndex }}
    />
  );
}
