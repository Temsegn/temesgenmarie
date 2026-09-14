"use client"

import { education, skillGroups, strengths } from "@/lib/content"
import { FadeIn } from "./FadeIn"
import { SectionHeading } from "./SectionHeading"

export default function SkillsGrid() {
  return (
    <section id="skills" className="section-pad border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            eyebrow="Skills"
            title="Tools and patterns used in production."
            description="Grouped by surface area — not progress bars."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.04}>
              <div className="h-full rounded-card border border-border bg-background-elevated p-5 md:p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1} className="mt-10">
          <p className="mono-label text-foreground-muted mb-4">Strengths</p>
          <ul className="flex flex-wrap gap-3">
            {strengths.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border px-4 py-2 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-16" id="education">
          <div className="rounded-card border border-border bg-background-elevated p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="mono-label text-accent mb-3">Education</p>
              <h3 className="font-serif text-2xl text-foreground">
                {education.degree}
              </h3>
              <p className="mt-1 text-foreground-muted">{education.school}</p>
            </div>
            <p className="font-mono text-sm text-accent shrink-0">
              GPA {education.gpa}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
