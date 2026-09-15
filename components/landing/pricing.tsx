"use client"

import { StaggerItem } from "@/components/landing/reveal"
import { PRICING_PLANS } from "@/lib/landing-content"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Start free. Upgrade when you're ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <StaggerItem key={plan.name} index={i}>
              <Card
                className={`
                  h-full rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow relative
                  ${plan.popular ? "ring-2 ring-primary" : ""}
                `}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-6">Most popular</Badge>
                )}
                <h3 className="font-semibold text-lg">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.missing.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <X className="h-4 w-4 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-6 w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Card>
            </StaggerItem>
          ))}
        </div>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          Customers always buy for free. No buyer fees.
        </p>
      </div>
    </section>
  )
}
