"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

const OFFSET = 12
const DURATION = 0.5
const STAGGER = 0.08

const revealVariants = {
  hidden: { opacity: 0, y: OFFSET },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({
  children,
  delay = 0,
  className,
}: RevealProps) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={delay}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: {
  children: ReactNode
  className?: string
  index?: number
}) {
  return (
    <Reveal delay={index * STAGGER} className={className}>
      {children}
    </Reveal>
  )
}
