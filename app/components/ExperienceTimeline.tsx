"use client"

import { experience } from "@/lib/content"
import { FadeIn } from "./FadeIn"
import { SectionHeading } from "./SectionHeading"

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section-pad border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            eyebrow="Experience"
            title="Roles where production systems were the product."
            description="Timeline of engagements spanning CRM platforms, live streaming, mobile backends, and client delivery."
          />
        </FadeIn>

        <ol className="relative space-y-4 md:space-y-5">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-border md:left-[11px]"
            aria-hidden
          />

          {experience.map((item, index) => (
            <FadeIn key={`${item.company}-${item.role}`} delay={index * 0.05} as="li">
              <article className="relative grid grid-cols-[24px_1fr] md:grid-cols-[32px_1fr] gap-3 md:gap-4">
                <div className="relative flex justify-center pt-4">
                  <span
                    className={`mt-1 h-3 w-3 rounded-full border-2 ${
                      item.current
                        ? "border-success bg-success/30"
                        : "border-accent bg-background"
                    }`}
                    aria-hidden
                  />
                </div>

                <div className="rounded-card border border-border bg-background-elevated p-4 md:p-5 transition-colors hover:border-accent/40">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {item.current ? (
                      <span className="inline-flex items-center rounded-md bg-success/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-success">
                        Current
                      </span>
                    ) : null}
                    <time className="font-mono text-xs text-foreground-muted">
                      {item.period}
                    </time>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{item.company}</p>
                  <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  )
}
