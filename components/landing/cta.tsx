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
        >
          {/* Gradient background */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
          />

          <StaggerItem>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Ready to open your stall?
            </h2>
          </StaggerItem>
          <StaggerItem index={1}>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Join 2,000+ independent sellers already growing their brand on Bazaarly.
            </p>
          </StaggerItem>
          <StaggerItem index={2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" onClick={() => scrollTo("#pricing")}>
                <Store className="mr-2 h-4 w-4" />
                Create your store
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("#features")}
              >
                <Search className="mr-2 h-4 w-4" />
                Explore the marketplace
              </Button>
            </div>
          </StaggerItem>
        </div>
      </div>
    </section>
  )
}
