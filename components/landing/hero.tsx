"use client"

import Image from "next/image"

import { StaggerItem } from "@/components/landing/reveal"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight } from "lucide-react"

const TRUSTS = [
  "No listing fees",
  "Admin-vetted sellers",
  "Instant payouts",
] as const

const MOCK_PRODUCTS = [
  {
    name: "Handwoven cotton tote",
    maker: "Thread & Form",
    price: "₹2,799",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Organic linen apron",
    maker: "Loom & Field",
    price: "₹3,499",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Scented soy candle",
    maker: "Northwick Studio",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80",
  },
]

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Gradient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -left-48 w-125 h-125 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-48 w-100 h-100 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle dot-grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
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
                <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
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

          {/* Right: product card stack */}
          <div className="relative flex min-h-[25rem] items-center justify-center lg:min-h-[28rem]">
            <div
              className="relative h-[23rem] w-full max-w-sm"
              aria-label="Featured marketplace products"
            >
              {MOCK_PRODUCTS.map((product, index) => (
                <div
                  key={product.name}
                  className="absolute left-0 top-0 w-full"
                  style={{
                    transform: `translateY(${index * 16}px) rotate(${
                      index % 2 === 0 ? "-1.5" : "1.5"
                    }deg)`,
                    zIndex: MOCK_PRODUCTS.length - index,
                  }}
                >
                  <div className="overflow-hidden rounded-2xl border bg-card shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        unoptimized
                        sizes="(min-width: 1024px) 384px, 90vw"
                        priority={index === 0}
                        className="object-cover"
                      />
                      {index === 0 && (
                        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium shadow-sm backdrop-blur">
                          Admin approved
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-sm">{product.name}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            by {product.maker}
                          </p>
                        </div>
                        <p className="text-sm font-semibold">{product.price}</p>
                      </div>
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
