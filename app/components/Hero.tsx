"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { hero } from "@/lib/content"

export default function Hero() {
  const reduce = useReducedMotion()

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden noise-bg pt-24 pb-16 md:pt-28"
    >
      {/* Dark mesh — low opacity, no bright colors */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,167,104,0.08),transparent_65%)]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[480px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(76,100,180,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,#0A0A0B_100%)]" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.p
          className="mono-label text-accent mb-6"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          className="font-serif text-[clamp(2.75rem,8vw,5.75rem)] leading-[1.05] tracking-tight text-foreground text-balance max-w-4xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          {hero.name}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg md:text-xl text-foreground leading-relaxed"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.p
          className="mt-4 max-w-2xl text-base md:text-lg text-foreground-muted leading-relaxed"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
        >
          {hero.support}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
        >
          <button
            type="button"
            onClick={() => scrollTo("#projects")}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:brightness-110 transition-[filter]"
          >
            View Projects
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm text-foreground hover:border-accent/50 hover:text-accent transition-colors"
          >
            Get in Touch
          </button>
        </motion.div>

        <motion.ul
          className="mt-14 md:mt-20 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-8"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {hero.stats.map((stat) => (
            <li
              key={stat.label}
              className="font-mono text-xs sm:text-sm text-foreground-muted tracking-wide"
            >
              <span className="text-accent mr-2" aria-hidden>
                /
              </span>
              {stat.label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
