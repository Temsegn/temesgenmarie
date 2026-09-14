"use client"

import { useEffect, useState } from "react"
import { Download, Menu, X } from "lucide-react"
import { navLinks, siteConfig } from "@/lib/content"
import { cn } from "@/lib/utils"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 24)
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const scrollTo = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />

      <nav className="container-narrow flex h-16 md:h-[4.25rem] items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollTo("#home")
          }}
          className="flex items-center gap-3 group"
          aria-label="Temesgen Marie — home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background-elevated font-mono text-sm text-accent transition-colors group-hover:border-accent/50">
            {siteConfig.monogram}
          </span>
          <span className="hidden sm:block text-sm text-foreground-muted group-hover:text-foreground transition-colors">
            {siteConfig.name}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className="text-sm text-foreground-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.cvPath}
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-sm text-foreground hover:border-accent/60 hover:text-accent transition-colors"
          >
            <Download className="h-3.5 w-3.5" aria-hidden />
            Download CV
          </a>

          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="container-narrow flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(link.href)
                  }}
                  className="block rounded-lg px-3 py-3 text-base text-foreground-muted hover:bg-background-elevated hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={siteConfig.cvPath}
                download
                className="flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-3 text-sm text-foreground"
              >
                <Download className="h-3.5 w-3.5" aria-hidden />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
