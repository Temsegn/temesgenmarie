"use client"

import { Download, Github, Linkedin, Mail, Phone } from "lucide-react"
import { contact, siteConfig } from "@/lib/content"
import { FadeIn } from "./FadeIn"

const links = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    value: siteConfig.email,
    icon: Mail,
  },
  {
    label: "Phone",
    href: siteConfig.phoneHref,
    value: siteConfig.phone,
    icon: Phone,
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    value: "GitHub",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    value: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <p className="mono-label text-accent mb-4">Contact</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground tracking-tight text-balance max-w-3xl">
            {contact.headline}
          </h2>
          <p className="mt-5 max-w-xl text-foreground-muted text-base md:text-lg leading-relaxed">
            {contact.subtext}
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-12 grid gap-3 sm:grid-cols-2">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-4 rounded-card border border-border bg-background-elevated px-5 py-5 transition-all hover:border-accent/50 hover:scale-[1.01]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-accent group-hover:border-accent/40">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-muted mb-1">
                    {link.label}
                  </span>
                  <span className="text-foreground text-sm md:text-base">
                    {link.value}
                  </span>
                </span>
              </a>
            )
          })}
        </FadeIn>

        <FadeIn delay={0.12} className="mt-8">
          <a
            href={siteConfig.cvPath}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:brightness-110 transition-[filter]"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download CV
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
