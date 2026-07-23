"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SoftImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackSrc?: string;
};

export function SoftImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  sizes,
  priority,
  fallbackSrc = "/images/placeholders/jewellery.svg",
}: SoftImageProps) {
  const [current, setCurrent] = useState(src);
  const isSvg = current.endsWith(".svg");

  return (
    <Image
      src={current}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      priority={priority}
      unoptimized={isSvg}
      className={cn(className)}
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}
