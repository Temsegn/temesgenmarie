"use client"

import Image from "next/image"
import { about, siteConfig } from "@/lib/content"
import { FadeIn } from "./FadeIn"
import { SectionHeading } from "./SectionHeading"

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="Engineering systems that stay correct under pressure."
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-stretch">
          <FadeIn delay={0.08} className="flex h-full flex-col justify-center space-y-5">
            {about.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-foreground-muted text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <p className="pt-2 text-sm text-foreground-muted">
              Based in {siteConfig.location}. Fluent in{" "}
              {siteConfig.languages.join(" and ")}.
            </p>
          </FadeIn>

          <FadeIn delay={0.14} className="h-full">
            <div className="flex h-full flex-col rounded-card border border-border bg-background-elevated overflow-hidden">
              <div className="relative min-h-[280px] flex-1 border-b border-border bg-[#0d0d0f]">
                <Image
                  src="/images/temesgen-profile.jpg"
                  alt="Temesgen Marie"
                  fill
                  className="object-cover object-top grayscale contrast-110 opacity-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-elevated via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(201,167,104,0.12)_100%)] mix-blend-overlay" />
              </div>

              <dl className="divide-y divide-border shrink-0">
                {about.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[110px_1fr] gap-3 px-5 py-3.5"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent pt-0.5">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-foreground leading-snug">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
