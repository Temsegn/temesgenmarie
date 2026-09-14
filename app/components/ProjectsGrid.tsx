"use client"

import { ExternalLink } from "lucide-react"
import { additionalProjects, featuredProjects } from "@/lib/content"
import { FadeIn } from "./FadeIn"
import ProjectCard from "./ProjectCard"
import { SectionHeading } from "./SectionHeading"

export default function ProjectsGrid() {
  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            eyebrow="Projects"
            title="Systems with real engineering constraints."
            description="SaaS platforms, fintech-style payments, and real-time infrastructure — built for correctness, auth, and scale."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.04} className="h-full">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.08} className="mt-14 md:mt-16">
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-4">
            <h3 className="font-serif text-xl md:text-2xl text-foreground">
              Additional work
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
              {additionalProjects.length} projects
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {additionalProjects.map((project) => (
              <article
                key={project.name}
                className="grid grid-rows-[auto_1fr_auto] gap-3 rounded-card border border-border bg-background-elevated p-4 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-serif text-base text-foreground truncate">
                    {project.name}
                  </h4>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                    {project.tag}
                  </span>
                </div>

                <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-foreground-muted"
                      >
                        {tech}
                      </li>
                    ))}
                    {project.stack.length > 4 ? (
                      <li className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-accent">
                        +{project.stack.length - 4}
                      </li>
                    ) : null}
                  </ul>

                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent hover:brightness-110"
                    >
                      Live site
                      <ExternalLink className="h-3 w-3" aria-hidden />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
