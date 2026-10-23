import * as React from "react"

import { cn } from "@/lib/utils"

/** Heading typeface (Nunito) loaded in the page file via next/font. */
export const heading = "font-(family-name:--font-village-heading)"

/** Shared focus ring for all interactive elements in this variant. */
export const focusRing =
  "outline-none focus-visible:ring-4 focus-visible:ring-(--v-secondary)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--v-bg)"

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  )
}

/**
 * "Jump to" pill rows in page heroes. On phones the pills sit in a tidy
 * two-column grid (long labels wrap inside the pill) instead of stacking
 * unevenly; under 360px they go full width, and from `sm` up they flow as a
 * normal wrapping row.
 */
export const jumpList =
  "grid gap-2.5 min-[360px]:grid-cols-2 sm:flex sm:flex-wrap"

/**
 * With an odd count one pill spans the full row: the first by default, or the
 * last when that is the longest label.
 */
export function jumpItem(
  index: number,
  count: number,
  span: "first" | "last" = "first"
) {
  if (count % 2 === 0) return undefined
  const spanned = span === "first" ? 0 : count - 1
  return index === spanned ? "min-[360px]:col-span-2" : undefined
}

export const jumpPill =
  "h-auto min-h-11 w-full px-3.5 py-2 text-center text-[0.9rem] leading-tight whitespace-normal sm:h-11 sm:w-auto sm:px-4 sm:py-0 sm:whitespace-nowrap"

/**
 * Two-column masonry for directory cards (departments, parks) whose lengths
 * vary a lot. Items keep their natural height, so no card is stretched into
 * a mostly empty box to match its neighbour.
 */
export const masonryList = "mt-8 md:columns-2 md:gap-5"
export const masonryItem = "mb-5 break-inside-avoid last:mb-0"

type PillProps = React.ComponentProps<"a"> & {
  tone?: "primary" | "secondary" | "ghost" | "inverse"
  size?: "md" | "lg"
}

export function PillLink({
  className,
  tone = "primary",
  size = "md",
  children,
  ...props
}: PillProps) {
  return (
    <a
      className={cn(
        heading,
        focusRing,
        "inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition-[background-color,color,transform,box-shadow] duration-200 active:translate-y-px",
        size === "md" ? "h-11 px-5 text-[0.95rem]" : "h-13 px-7 text-base",
        tone === "primary" &&
          "bg-(--v-primary) text-white shadow-[0_6px_16px_-6px_rgba(29,92,74,0.55)] hover:bg-(--v-primary-dark)",
        tone === "secondary" &&
          "bg-(--v-mint) text-(--v-primary) hover:bg-(--v-mint-dark)",
        tone === "ghost" &&
          "bg-transparent text-(--v-primary) hover:bg-(--v-mint)",
        tone === "inverse" && "bg-white text-(--v-primary) hover:bg-(--v-mint)",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  as: Tag = "h2",
  id,
}: {
  eyebrow?: string
  title: string
  description?: string
  action?: React.ReactNode
  as?: "h2" | "h3"
  id: string
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p
            className={cn(
              heading,
              "mb-1 text-sm font-bold tracking-wide text-(--v-primary) uppercase"
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <Tag
          id={id}
          className={cn(
            heading,
            "text-3xl font-extrabold tracking-tight text-(--v-text) sm:text-4xl"
          )}
        >
          {title}
        </Tag>
        {description ? (
          <p className="mt-2 text-base text-(--v-muted) sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
