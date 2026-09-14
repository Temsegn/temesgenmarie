import { Github, Linkedin, Mail } from "lucide-react"
import { siteConfig } from "@/lib/content"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="container-narrow flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-lg text-foreground">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-foreground-muted">
            Backend, mobile & web systems — built for production.
          </p>
          <p className="mt-3 text-xs text-foreground-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground-muted hover:text-accent hover:border-accent/40 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground-muted hover:text-accent hover:border-accent/40 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground-muted hover:text-accent hover:border-accent/40 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
