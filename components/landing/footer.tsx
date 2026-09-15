"use client"

import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/lib/landing-content"
import { Camera, Code2, MessageCircle, Network } from "lucide-react"

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  Twitter: MessageCircle,
  Github: Code2,
  Linkedin: Network,
  Instagram: Camera,
}

export default function Footer() {
  return (
    <footer className="border-t py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <span className="font-bold text-xl tracking-tight">Bazaarly</span>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              A curated marketplace for independent makers and the people who love
              what they make.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map(({ label, icon }) => {
                const Icon = SOCIAL_ICONS[icon]
                return (
                  <button
                    key={label}
                    aria-label={label}
                    className="h-9 w-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold mb-3">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            (c) 2026 Bazaarly. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Made for makers</p>
        </div>
      </div>
    </footer>
  )
}
