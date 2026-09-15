"use client"

import { StaggerItem } from "@/components/landing/reveal"
import { ROLES } from "@/lib/landing-content"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Store, ShieldCheck } from "lucide-react"

const ICON_MAP: Record<string, React.ElementType> = {
  ShoppingBag,
  Store,
  ShieldCheck,
}

export function Roles() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="sellers" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Built for all three sides of the market
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Whether you're buying, selling, or managing — there's a place for you here.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROLES.map(({ icon, title, description, cta, target }, i) => {
            const Icon = ICON_MAP[icon]
            return (
              <StaggerItem key={title} index={i}>
                <Card className="h-full rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {description}
                  </p>
                  <button
                    onClick={() => scrollTo(target)}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    {cta} <ChevronRightIcon />
                  </button>
                </Card>
              </StaggerItem>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ChevronRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
