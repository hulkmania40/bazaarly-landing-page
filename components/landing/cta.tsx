"use client"

import { StaggerItem } from "@/components/landing/reveal"
import { Button } from "@/components/ui/button"
import { Store, Search } from "lucide-react"

export default function CTA() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center"
          style={{
            background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0a0a0a 100%)",
          }}
        >
          {/* Subtle dot-grid overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Glow orbs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative z-10">
            <StaggerItem>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Ready to open your stall?
              </h2>
            </StaggerItem>
            <StaggerItem index={1}>
              <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
                Join 2,000+ independent sellers already growing their brand on Bazaarly.
              </p>
            </StaggerItem>
            <StaggerItem index={2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button size="lg" onClick={() => scrollTo("#pricing")} className="shadow-lg">
                  <Store className="mr-2 h-4 w-4" />
                  Create your store
                </Button>
                <Button
                  size="lg"
                  onClick={() => scrollTo("#features")}
                  className="border border-white/20 bg-transparent text-white hover:bg-white/10 shadow-lg"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Explore the marketplace
                </Button>
              </div>
            </StaggerItem>
          </div>
        </div>
      </div>
    </section>
  )
}
