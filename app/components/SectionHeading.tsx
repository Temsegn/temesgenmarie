import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="mono-label text-accent mb-4">{eyebrow}</p>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-foreground-muted text-base md:text-lg leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  )
}
