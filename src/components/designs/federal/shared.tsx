import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * USWDS focus treatment: a 4px #2491ff outline offset from the element.
 * Applied to every interactive element in this variant.
 */
export const focusRing =
  "outline-none focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-(--focus)"

/** Standard USWDS text link: blue, underlined, darker on hover. */
export const textLink = cn(
  "text-(--primary) underline underline-offset-[3px] hover:text-(--primary-dark) hover:decoration-2",
  focusRing
)

/** Filled primary button (USWDS `usa-button`). */
export const primaryButton = cn(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-(--primary) px-5 py-3 text-[17px] leading-none font-bold text-white hover:bg-(--primary-dark) active:bg-(--primary-darker)",
  focusRing
)

/** Outline button (USWDS `usa-button--outline`). */
export const outlineButton = cn(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-white px-5 py-3 text-[17px] leading-none font-bold text-(--primary) shadow-[inset_0_0_0_2px_var(--primary)] hover:text-(--primary-dark) hover:shadow-[inset_0_0_0_2px_var(--primary-dark)]",
  focusRing
)

/** 1024px reading-width container with USWDS site margins. */
export function Container({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1024px] px-4 sm:px-6", className)}
    >
      {children}
    </div>
  )
}

/** Section heading with an optional right-aligned "view all" link. */
export function SectionHeading({
  id,
  title,
  linkLabel,
  linkHref = "#",
}: {
  id: string
  title: string
  linkLabel?: string
  linkHref?: string
}) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b-2 border-(--primary) pb-3">
      <h2
        id={id}
        className="text-[28px] leading-tight font-bold sm:text-[32px]"
      >
        {title}
      </h2>
      {linkLabel ? (
        <a href={linkHref} className={cn(textLink, "font-semibold")}>
          {linkLabel}
        </a>
      ) : null}
    </div>
  )
}
