"use client";

import { MessageCircle, Send } from "lucide-react";
import type { Collection } from "@/lib/types";
import { getEnquiryUrl, getWhatsAppUrl } from "@/lib/constants";
import { FadeIn } from "@/components/ui/SectionHeader";
import { SoftImage } from "@/components/ui/SoftImage";
import { Button } from "@/components/Buttons";

type CollectionCardProps = {
  collection: Collection;
  index?: number;
};

export function CollectionCard({ collection, index = 0 }: CollectionCardProps) {
  const whatsappMessage = `Hi BBS Gold!\n\nI would like to enquire about ${collection.name} for wholesale.`;

  return (
    <FadeIn delay={Math.min(index * 0.06, 0.36)}>
      <article className="group flex h-full flex-col overflow-hidden border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift">
        <div className="relative aspect-square overflow-hidden bg-cream">
          <SoftImage
            src={collection.image}
            alt={`${collection.name} — BBS GOLD wholesale collection`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 border border-gold/50 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-maroon capitalize">
            {collection.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
          <div className="flex-1 space-y-2">
            <h3 className="font-display text-lg leading-snug text-charcoal sm:text-xl">
              {collection.name}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted">
              {collection.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 xs:grid-cols-2">
            <Button
              href={getEnquiryUrl(collection.name)}
              size="sm"
              className="w-full"
              aria-label={`Enquire about ${collection.name}`}
            >
              <Send className="h-3.5 w-3.5 shrink-0" />
              <span>Enquire</span>
            </Button>
            <Button
              href={getWhatsAppUrl(whatsappMessage)}
              external
              variant="outline"
              size="sm"
              className="w-full tracking-[0.06em]"
              aria-label={`WhatsApp enquire about ${collection.name}`}
            >
              <MessageCircle className="h-3.5 w-3.5 shrink-0" />
              <span className="xs:inline">WhatsApp</span>
            </Button>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
