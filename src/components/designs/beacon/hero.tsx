import Image from "next/image"
import { CalendarDays, Search } from "lucide-react"

import { heroImages, meetings } from "@/content/home"

const popularSearches = ["Trash pickup", "Boat launch", "Dog license", "Taxes"]

function shortDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}

export function BeaconHero() {
  const nextMeeting = meetings[0]

  return (
    <section
      aria-labelledby="beacon-hero-heading"
      className="relative overflow-hidden bg-[var(--beacon-ink)] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-[var(--beacon-amber)] opacity-[0.07] blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="lg:col-span-7">
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[var(--beacon-amber)] uppercase">
            <span
              aria-hidden="true"
              className="inline-block size-2 rounded-full bg-[var(--beacon-amber)]"
            />
            Official city website
          </p>
          <h1
            id="beacon-hero-heading"
            className="font-[family-name:var(--font-beacon-display)] text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] font-extrabold tracking-[-0.04em] text-balance"
          >
            Your city,
            <br />
            at your fingertips.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--beacon-muted-dark)] sm:text-xl">
            Pay bills, pull permits, find a meeting agenda, or report a pothole.
            Everything the City of Saugatuck does, in one place.
          </p>

          <form
            role="search"
            action="#"
            className="mt-10 max-w-2xl"
            aria-label="Search the city website"
          >
            <label htmlFor="beacon-search" className="sr-only">
              Search services, forms and departments
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-[var(--beacon-muted-dark)]"
                />
                <input
                  id="beacon-search"
                  name="q"
                  type="search"
                  placeholder="Search services, forms, departments…"
                  autoComplete="off"
                  className="h-16 w-full rounded-xl border-2 border-[var(--beacon-ink-line)] bg-[var(--beacon-ink-soft)] pr-4 pl-13 text-base text-white placeholder:text-[var(--beacon-muted-dark)] focus:border-[var(--beacon-amber)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--beacon-amber)]/30 sm:text-lg"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-16 shrink-0 items-center justify-center rounded-xl bg-[var(--beacon-amber)] px-8 text-base font-bold text-[var(--beacon-ink)] transition-colors hover:bg-[var(--beacon-amber-deep)] focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:outline-none"
              >
                Search
              </button>
            </div>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--beacon-muted-dark)]">
              <span>Popular:</span>
              {popularSearches.map((term, index) => (
                <span key={term} className="inline-flex items-center gap-2">
                  <a
                    href="#"
                    className="rounded font-medium text-white underline decoration-[var(--beacon-amber)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--beacon-amber)] focus-visible:ring-2 focus-visible:ring-[var(--beacon-amber)] focus-visible:outline-none"
                  >
                    {term}
                  </a>
                  {index < popularSearches.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-[var(--beacon-ink-line)]"
                    >
                      /
                    </span>
                  )}
                </span>
              ))}
            </p>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--beacon-ink-line)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={heroImages.lake}
              alt="Lake Michigan shoreline near Saugatuck at golden hour, with dune grass in the foreground"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[var(--beacon-ink)]/70 via-transparent to-transparent"
            />
            <a
              href="#"
              className="group absolute right-4 bottom-4 left-4 flex items-center gap-4 rounded-xl border border-white/10 bg-[var(--beacon-ink)]/85 p-3 pr-5 text-white backdrop-blur-sm transition-colors hover:border-[var(--beacon-amber)]/60 focus-visible:ring-2 focus-visible:ring-[var(--beacon-amber)] focus-visible:outline-none sm:left-auto sm:max-w-sm"
            >
              <span className="flex size-12 shrink-0 flex-col items-center justify-center rounded-lg bg-[var(--beacon-amber)] text-[var(--beacon-ink)]">
                <CalendarDays className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold tracking-[0.16em] text-[var(--beacon-amber)] uppercase">
                  Next council meeting
                </span>
                <span className="mt-0.5 block truncate text-sm font-semibold">
                  {shortDate(nextMeeting.date)} · {nextMeeting.time} ·{" "}
                  {nextMeeting.location.split(",")[0]}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
