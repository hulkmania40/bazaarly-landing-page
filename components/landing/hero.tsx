"use client"

import { StaggerItem } from "@/components/landing/reveal"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight, Store } from "lucide-react"

const TRUSTS = [
  "No listing fees",
  "Admin-vetted sellers",
  "Instant payouts",
] as const

const MOCK_PRODUCTS = [
  { name: "Hand-thrown ceramic mug", price: "$28", color: "bg-amber-100" },
  { name: "Organic linen apron", price: "$42", color: "bg-emerald-100" },
  { name: "Scented soy candle", price: "$18", color: "bg-violet-100" },
]

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="max-w-xl">
            <StaggerItem>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                A bazaar built{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  for makers
                </span>
                .
              </h1>
            </StaggerItem>

            <StaggerItem index={1}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Discover independent sellers, browse curated storefronts, and shop
                with confidence. Every product is reviewed and approved before
                going live.
              </p>
            </StaggerItem>

            <StaggerItem index={2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" onClick={() => scrollTo("#pricing")}>
                  Start selling
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollTo("#features")}
                >
                  Browse products
                </Button>
              </div>
            </StaggerItem>

            <StaggerItem index={3}>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                {TRUSTS.map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {t}
                  </span>
                ))}
              </div>
            </StaggerItem>
          </div>

          {/* Right: mock product cards */}
          <div className="relative flex min-h-[25rem] items-center justify-center lg:min-h-[28rem]">
            <div className="relative w-full max-w-sm">
              {MOCK_PRODUCTS.map((product, i) => (
                <div
                  key={product.name}
                  className="absolute top-0 left-0 w-full transition-transform duration-500"
                  style={{
                    transform: `translateY(${i * 12}px) rotate(${i % 2 === 0 ? "-1.5" : "1.5"}deg)`,
                    zIndex: MOCK_PRODUCTS.length - i,
                  }}
                >
                  <div className="rounded-2xl border bg-card shadow-lg overflow-hidden">
                    <div className={`h-32 ${product.color} flex items-center justify-center`}>
                      <Store className="h-10 w-10 text-muted-foreground/40" />
                    </div>
                    <div className="p-4">
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
