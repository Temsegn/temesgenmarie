"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type FadeInProps = {
  delay?: number
  className?: string
  children: React.ReactNode
  as?: "div" | "li" | "article"
  id?: string
}

export function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
  id,
}: FadeInProps) {
  const reduce = useReducedMotion()
  const shared = {
    className: cn(className),
    id,
    initial: reduce ? false : { opacity: 0, y: 18 },
    whileInView: reduce ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" as const },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
  }

  if (as === "li") {
    return <motion.li {...shared}>{children}</motion.li>
  }
  if (as === "article") {
    return <motion.article {...shared}>{children}</motion.article>
  }
  return <motion.div {...shared}>{children}</motion.div>
}
