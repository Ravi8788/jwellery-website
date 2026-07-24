"use client";

import Image from "next/image";
import Link from "next/link";
import { PLACEHOLDER_IMAGES, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Visual height of the logo mark */
  size?: "sm" | "md" | "lg";
  /** Pass `false` to render without a link wrapper */
  href?: string | false;
  priority?: boolean;
};

const SIZE = {
  sm: "h-9 w-auto xs:h-10 sm:h-11",
  md: "h-10 w-auto xs:h-11 sm:h-12 md:h-14",
  lg: "h-14 w-auto sm:h-16 md:h-20",
} as const;

export function BrandLogo({
  className,
  size = "md",
  href = "/",
  priority = false,
}: BrandLogoProps) {
  const image = (
    <span
      className={cn(
        "inline-flex items-center rounded-sm bg-white/95 px-1.5 py-0.5",
        className
      )}
    >
      <Image
        src={PLACEHOLDER_IMAGES.logo}
        alt={`${SITE.name} logo`}
        width={160}
        height={160}
        priority={priority}
        quality={75}
        sizes="(max-width: 640px) 44px, (max-width: 1024px) 56px, 64px"
        className={cn(
          "object-contain object-left transition-opacity duration-300 group-hover:opacity-90",
          SIZE[size]
        )}
      />
    </span>
  );

  if (href === false) {
    return image;
  }

  return (
    <Link
      href={href}
      className="group inline-flex shrink-0 items-center"
      aria-label={`${SITE.name} home`}
    >
      {image}
    </Link>
  );
}
