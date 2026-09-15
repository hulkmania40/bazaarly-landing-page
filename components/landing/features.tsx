"use client"

import { StaggerItem } from "@/components/landing/reveal"
import { FEATURES } from "@/lib/landing-content"
import { Card } from "@/components/ui/card"
import {
  CheckCircle2,
  CreditCard,
  Store,
  ShieldCheck,
  BarChart3,
  Truck,
  Users,
} from "lucide-react"

const ICON_MAP: Record<string, React.ElementType> = {
  Store,
  CheckCircle2,
  Users,
  CreditCard,
  Truck,
  BarChart3,
}

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Everything a marketplace needs
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Built from the ground up for sellers, buyers, and the team that keeps it all running.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon, title, description }, i) => {
            const Icon = ICON_MAP[icon] ?? CheckCircle2
            return (
              <StaggerItem key={title} index={i}>
                <Card className="h-full rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-base mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </Card>
              </StaggerItem>
            )
          })}
        </div>
      </div>
    </section>
  )
}
