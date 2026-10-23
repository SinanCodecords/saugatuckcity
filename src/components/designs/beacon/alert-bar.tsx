import { ArrowRight, TriangleAlert } from "lucide-react"

import { alert } from "@/content/home"

export function BeaconAlertBar() {
  return (
    <section
      aria-label="Current alert"
      className="border-y border-[var(--beacon-amber-deep)] bg-[var(--beacon-amber)] text-[var(--beacon-ink)]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:gap-6 sm:px-6 lg:px-8">
        <p className="flex shrink-0 items-center gap-2 text-xs font-extrabold tracking-[0.18em] uppercase">
          <TriangleAlert className="size-4" aria-hidden="true" />
          Alert
        </p>
        <p className="flex-1 text-sm leading-snug sm:text-[15px]">
          <strong className="font-bold">{alert.title}.</strong>{" "}
          <span className="text-[var(--beacon-ink)]/85">{alert.body}</span>
        </p>
        <a
          href="#"
          className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-md text-sm font-bold underline decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--beacon-ink)]/40 focus-visible:ring-2 focus-visible:ring-[var(--beacon-ink)] focus-visible:outline-none sm:self-auto"
        >
          Details
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
