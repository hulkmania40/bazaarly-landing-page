"use client"

import { StaggerItem } from "@/components/landing/reveal"
import { STEPS } from "@/lib/landing-content"
import { Card } from "@/components/ui/card"
import { ShieldCheck, ShoppingCart, Store } from "lucide-react"

const TABS = [
  {
    key: "seller",
    label: "Seller",
    icon: Store,
    description:
      "Create a storefront in minutes. List products with photos and prices, manage orders, and watch sales grow.",
  },
  {
    key: "admin",
    label: "Admin",
    icon: ShieldCheck,
    description:
      "Review every new listing before it goes public. Flag issues, approve quality products, and keep the marketplace safe.",
  },
  {
    key: "customer",
    label: "Customer",
    icon: ShoppingCart,
    description:
      "Browse curated sellers, save favorites, and check out securely. Track orders from paid to delivered.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            How it works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Three sides of the same marketplace, each with a flow built just for them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: steps */}
          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <StaggerItem key={step.number} index={i}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                      {step.number}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 bg-border my-1" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-semibold text-base">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>

          {/* Right: role tabs */}
          <div>
            <RoleTabs />
          </div>
        </div>
      </div>
    </section>
  )
}

function RoleTabs() {
  return (
    <div className="space-y-3">
      {TABS.map(({ key, label, icon: Icon, description }) => (
        <Card
          key={key}
          className="rounded-2xl border bg-card p-5 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">{label}</h4>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
