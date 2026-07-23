"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-maroon text-white border border-maroon hover:bg-maroon-dark hover:border-maroon-dark shadow-soft",
  secondary:
    "bg-gold text-white border border-gold hover:bg-gold-dark hover:border-gold-dark shadow-gold",
  outline:
    "bg-transparent text-charcoal border border-charcoal hover:border-maroon hover:text-maroon",
  ghost:
    "bg-transparent text-maroon border border-maroon/30 hover:border-maroon hover:bg-maroon-soft",
};

const sizes = {
  sm: "px-3.5 py-2.5 text-[10px] tracking-[0.08em] gap-1.5 sm:px-4 sm:text-[11px]",
  md: "px-8 py-3.5 text-label-caps",
  lg: "px-10 py-4 text-label-caps",
};

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  external?: boolean;
  loading?: boolean;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  "aria-label"?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  loading,
  className,
  children,
  disabled,
  type = "button",
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "relative inline-flex min-w-0 items-center justify-center gap-2 whitespace-nowrap font-body uppercase tracking-[0.12em] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-none",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
