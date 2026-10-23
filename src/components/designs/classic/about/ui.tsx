import type { ReactNode } from "react"

/** Glue "6:30 pm" together so a wrap never strands "pm" on its own line. */
export function keepTimes(text: string) {
  return text.replace(/(\d) (am|pm)\b/g, "$1 $2")
}

export const textLink =
  "inline-flex items-center gap-1 py-0.5 text-sm font-semibold text-(--blue-text) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"

export const inlineLink =
  "hover:text-(--blue-text) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"

/** Bordered box with a grey title bar, matching the home page sidebar widgets. */
export function Widget({
  id,
  title,
  level = 2,
  children,
  bodyClassName = "px-5 py-4",
}: {
  id: string
  title: string
  level?: 2 | 3
  children: ReactNode
  bodyClassName?: string
}) {
  const Heading = level === 2 ? "h2" : "h3"
  return (
    <section
      aria-labelledby={id}
      className="overflow-hidden rounded-md border border-(--rule) bg-white"
    >
      <Heading
        id={id}
        className="border-b border-(--rule) bg-(--band) px-5 py-3 text-[11px] font-semibold tracking-[0.25em] text-balance text-(--ink) uppercase"
      >
        {title}
      </Heading>
      <div className={bodyClassName}>{children}</div>
    </section>
  )
}

/** Section title with the heavy ink rule used by "Announcements" on the home page. */
export function SectionHeading({
  id,
  children,
  aside,
}: {
  id: string
  children: ReactNode
  aside?: ReactNode
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1 border-b-2 border-(--ink) pb-3">
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-balance text-(--ink)"
      >
        {children}
      </h2>
      {aside ? <p className="text-sm text-(--muted)">{aside}</p> : null}
    </div>
  )
}
