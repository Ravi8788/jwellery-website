"use client";

import { useMemo, useState } from "react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/constants/products";
import { CollectionCard } from "@/components/Collections/CollectionCard";
import { cn } from "@/lib/utils";

export function CollectionsGrid() {
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    if (category === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === category);
  }, [category]);

  return (
    <div>
      <div
        className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 xs:-mx-5 xs:px-5 sm:mx-0 sm:mb-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
        role="tablist"
        aria-label="Filter by category"
      >
        {PRODUCT_CATEGORIES.map((cat) => {
          const active = category === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setCategory(cat.id)}
              className={cn(
                "shrink-0 border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 xs:px-4 xs:text-[11px] sm:tracking-[0.14em]",
                active
                  ? "border-maroon bg-maroon text-white"
                  : "border-border bg-white text-charcoal hover:border-gold hover:text-maroon"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <p className="mb-6 text-center text-sm text-muted">
        Showing {filtered.length} of {PRODUCTS.length} wholesale pieces
      </p>

      <div className="grid gap-5 xs:gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product, index) => (
          <CollectionCard
            key={product.id}
            collection={product}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
