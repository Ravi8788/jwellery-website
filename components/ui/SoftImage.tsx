"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SoftImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  loading?: "lazy" | "eager";
  fallbackSrc?: string;
};

export function SoftImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  style,
  sizes,
  priority,
  quality = 65,
  loading,
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
      sizes={sizes ?? (fill ? "100vw" : undefined)}
      priority={priority}
      quality={quality}
      loading={priority ? undefined : loading ?? "lazy"}
      unoptimized={isSvg}
      className={cn(className)}
      style={style}
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}
