"use client"

import { StaggerItem } from "@/components/landing/reveal"
import { BRAND_PLACEHOLDERS } from "@/lib/landing-content"

export default function SocialProof() {
  return (
    <section className="py-10 md:py-14 border-y">
      <div className="mx-auto max-w-6xl px-6">
        <StaggerItem>
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Trusted by 2,000+ independent sellers
          </p>
        </StaggerItem>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {BRAND_PLACEHOLDERS.map((brand, i) => (
            <StaggerItem key={brand} index={i}>
              <span
                className={`
                  font-mono text-sm uppercase tracking-widest text-muted-foreground/60
                  transition-colors
                `}
              >
                {brand}
              </span>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  )
}
