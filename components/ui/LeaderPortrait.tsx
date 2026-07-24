"use client";

import { SoftImage } from "@/components/ui/SoftImage";
import { cn } from "@/lib/utils";

type LeaderPortraitProps = {
  src: string;
  alt: string;
  tone?: "founders" | "directors";
  size?: "sm" | "md" | "lg";
  facePosition?: string;
  className?: string;
};

const SIZE = {
  sm: "h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 md:h-24 md:w-24",
  md: "h-28 w-28 xs:h-32 xs:w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44",
  lg: "h-32 w-32 xs:h-36 xs:w-36 sm:h-40 sm:w-40 md:h-44 md:w-44 lg:h-48 lg:w-48",
} as const;

const SIZES_ATTR = {
  sm: "(max-width: 475px) 64px, (max-width: 640px) 80px, 96px",
  md: "(max-width: 475px) 112px, (max-width: 640px) 128px, (max-width: 768px) 144px, 176px",
  lg: "(max-width: 640px) 144px, 192px",
} as const;

/** Circular portrait — photo fills the full circle, no empty gaps. */
export function LeaderPortrait({
  src,
  alt,
  tone = "founders",
  size = "md",
  facePosition,
  className,
}: LeaderPortraitProps) {
  const isFounder = tone === "founders";
  const ring = isFounder ? "#D4AF37" : "#C45A6E";
  const ringSoft = isFounder ? "rgba(212,175,55,0.35)" : "rgba(196,90,110,0.4)";

  return (
    <div className={cn("relative shrink-0", SIZE[size], className)}>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: `0 0 0 2px ${ringSoft}, 0 0 0 5px #fff, 0 0 0 7px ${ring}`,
        }}
        aria-hidden
      />
      <div className="absolute inset-[5px] overflow-hidden rounded-full">
        <SoftImage
          src={src}
          alt={alt}
          fill
          sizes={SIZES_ATTR[size]}
          quality={70}
          className={cn("object-cover", facePosition ? undefined : "object-top")}
          style={facePosition ? { objectPosition: facePosition } : undefined}
          fallbackSrc="/images/placeholders/director.svg"
        />
      </div>
    </div>
  );
}
