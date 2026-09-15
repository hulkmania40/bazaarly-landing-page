import type { Metadata } from "next"

import Navbar from "@/components/landing/navbar"
import Hero from "@/components/landing/hero"
import SocialProof from "@/components/landing/social-proof"
import Features from "@/components/landing/features"
import HowItWorks from "@/components/landing/how-it-works"
import Roles from "@/components/landing/roles"
import Pricing from "@/components/landing/pricing"
import FAQ from "@/components/landing/faq"
import CTA from "@/components/landing/cta"
import Footer from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Bazaarly - A bazaar built for makers",
  description:
    "Bazaarly is a curated marketplace for independent sellers. Discover unique products, manage your storefront, and support independent makers.",
  openGraph: {
    title: "Bazaarly - A bazaar built for makers",
    description:
      "Discover independent sellers, browse curated storefronts, and shop with confidence.",
    type: "website",
  },
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Roles />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
