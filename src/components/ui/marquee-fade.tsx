import { cn } from "@/lib/utils";

interface MarqueeFadeProps {
  width?: "sm" | "md" | "lg";
  zIndex?: number;
}

const widthMap = {
  sm: "w-16 md:w-32",
  md: "w-32 md:w-48",
  lg: "w-48 md:w-64",
};

/**
 * Creates left and right gradient fade overlays for marquee/scroll containers
 * Used to create smooth edge transitions
 */
export function MarqueeFade({ width = "md", zIndex = 10 }: MarqueeFadeProps) {
  const widthClass = widthMap[width];

  return (
    <>
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 bg-gradient-to-r from-background to-transparent pointer-events-none",
          widthClass,
          `z-${zIndex}`,
        )}
        style={{ zIndex }}
      />
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 bg-gradient-to-l from-background to-transparent pointer-events-none",
          widthClass,
          `z-${zIndex}`,
        )}
        style={{ zIndex }}
      />
    </>
  );
}
