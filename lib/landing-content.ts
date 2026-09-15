export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#sellers", label: "Sellers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const

export const FEATURES = [
  {
    icon: "Store",
    title: "Seller storefronts",
    description:
      "Every seller gets their own customizable page with a brand story, product catalog, and direct customer contact.",
  },
  {
    icon: "CheckCircle2",
    title: "Admin-approved listings",
    description:
      "Only quality products make it live. Our admin team reviews every listing before it goes public.",
  },
  {
    icon: "Users",
    title: "Role-based dashboards",
    description:
      "Customer, seller, and admin views — each tailored to what that person actually needs to do.",
  },
  {
    icon: "CreditCard",
    title: "Built-in cart & checkout",
    description:
      "Smooth, secure, single-flow payments. Customers check out without leaving the marketplace.",
  },
  {
    icon: "Truck",
    title: "Order tracking",
    description:
      "From paid to delivered in real time. Sellers update status, customers stay informed.",
  },
  {
    icon: "BarChart3",
    title: "Insights & analytics",
    description:
      "Know what's selling, what's not. Sellers get simple dashboards — no data science degree required.",
  },
] as const

export const STEPS = [
  {
    number: "01",
    title: "Sellers list their products",
    description:
      "Upload photos, write descriptions, set prices, and publish a storefront in minutes.",
  },
  {
    number: "02",
    title: "Admin reviews & approves",
    description:
      "Every listing is checked by our team before going live — protecting buyers and building trust.",
  },
  {
    number: "03",
    title: "Customers discover & buy",
    description:
      "Browse curated sellers, add to cart, pay securely, and track orders — all in one place.",
  },
] as const

export const ROLES = [
  {
    icon: "ShoppingBag",
    title: "Customer",
    description:
      "Discover unique sellers, build a cart, check out securely, and track every order.",
    cta: "See customer flow",
    target: "#how-it-works",
  },
  {
    icon: "Store",
    title: "Seller",
    description:
      "List products, manage orders, get paid on time, and grow a brand with built-in analytics.",
    cta: "See seller flow",
    target: "#how-it-works",
  },
  {
    icon: "ShieldCheck",
    title: "Admin",
    description:
      "Approve listings, oversee marketplace quality, and keep the community thriving.",
    cta: "See admin flow",
    target: "#how-it-works",
  },
] as const

export const PRICING_PLANS = [
  {
    name: "Seller",
    price: "$0",
    period: "/month",
    description: "Everything you need to get started selling.",
    features: [
      "Up to 25 active listings",
      "Basic seller dashboard",
      "Standard payouts",
      "Email support",
    ],
    missing: ["Custom storefront branding", "Priority payouts", "Advanced analytics"],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Seller Pro",
    price: "$19",
    period: "/month",
    description: "For serious makers ready to scale.",
    features: [
      "Unlimited listings",
      "Custom storefront branding",
      "Priority payouts (48 hr)",
      "Advanced analytics & insights",
      "Priority support",
    ],
    missing: [],
    cta: "Go Pro",
    popular: true,
  },
] as const

export const FAQS = [
  {
    question: "How do I become a seller?",
    answer:
      "Create an account, choose the seller role, fill in your store details, and submit your first listings. Each listing goes through a quick admin review before going live — usually within 24 hours.",
  },
  {
    question: "How long does product approval take?",
    answer:
      "Most listings are reviewed within 24 hours. Our team checks for accurate descriptions, appropriate imagery, and compliance with our seller guidelines. You'll get a notification as soon as your listing is approved.",
  },
  {
    question: "What payment methods do you support?",
    answer:
      "We support all major credit and debit cards via our payment processor. Additional methods may be available depending on your region. All transactions are encrypted and PCI-compliant.",
  },
  {
    question: "How do sellers get paid?",
    answer:
      "Payouts are processed automatically after each order is delivered. Standard sellers receive payouts weekly; Pro sellers get priority 48-hour payouts. Funds go directly to your linked bank account.",
  },
  {
    question: "Can I buy from multiple sellers in one order?",
    answer:
      "Yes. Customers can add items from any number of sellers into a single cart. At checkout, each seller's items are grouped into separate sub-orders for individual fulfillment.",
  },
  {
    question: "Is there a fee for customers?",
    answer:
      "No. Customers browse, cart, and checkout for free. We never charge buyers fees — our revenue comes from optional seller subscription plans.",
  },
] as const

export const FOOTER_COLUMNS = [
  {
    title: "Brand",
    links: [
      { label: "About Bazaarly", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
] as const

export const SOCIAL_LINKS = [
  { label: "Twitter", icon: "Twitter" },
  { label: "GitHub", icon: "Github" },
  { label: "LinkedIn", icon: "Linkedin" },
  { label: "Instagram", icon: "Instagram" },
] as const

export const BRAND_PLACEHOLDERS = [
  "VERDANT",
  "MERAKI",
  "LOOM & CO",
  "SABLE",
  "FERN & FIELD",
  "TERRA NOVA",
] as const
