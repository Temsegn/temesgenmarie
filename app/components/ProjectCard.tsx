"use client"

import { useState } from "react"
import { ChevronDown, ExternalLink } from "lucide-react"
import type { FeaturedProject } from "@/lib/content"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  project: FeaturedProject
}

const MAX_STACK = 5

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false)
  const visibleStack = project.stack.slice(0, MAX_STACK)
  const hiddenCount = project.stack.length - visibleStack.length

  return (
    <article className="group flex h-full flex-col rounded-card border border-border bg-background-elevated transition-colors hover:border-accent/45">
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent leading-relaxed">
            {project.category}
          </p>
          <span className="shrink-0 rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-foreground-muted">
            {project.role}
          </span>
        </div>

        <h3 className="font-serif text-xl md:text-2xl text-foreground tracking-tight">
          {project.name}
        </h3>

        <p className="mt-3 text-sm text-foreground-muted leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {visibleStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-foreground-muted"
            >
              {tech}
            </li>
          ))}
          {hiddenCount > 0 ? (
            <li className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-accent">
              +{hiddenCount}
            </li>
          ) : null}
        </ul>

        <div className="mt-auto pt-5">
          <div className="border-t border-border pt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors"
              aria-expanded={open}
            >
              {open ? "Hide details" : "View details"}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  open && "rotate-180"
                )}
                aria-hidden
              />
            </button>

            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:brightness-110 transition-[filter]"
              >
                Live site
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : null}
          </div>

          {open ? (
            <ul className="mt-3 space-y-2">
              {project.highlights.map((point) => (
                <li
                  key={point.slice(0, 40)}
                  className="flex gap-2.5 text-sm text-foreground-muted leading-relaxed"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  )
}
