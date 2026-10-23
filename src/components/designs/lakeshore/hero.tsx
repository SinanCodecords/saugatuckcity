import Link from "next/link"
import { Search } from "lucide-react"

import { container, focusRing } from "./styles"

const popularSearches = [
  "Pay water bill",
  "Trash pickup",
  "Building permit",
  "Agendas",
  "Parking",
] as const

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-slate-200 bg-(--lk-surface)"
    >
      <div className={`${container} py-14 sm:py-20 lg:py-24`}>
        <div className="mx-auto max-w-3xl text-center">
          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-6xl"
          >
            How can we help you today?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
            Search city services, documents, and departments, or pick a popular
            request below.
          </p>

          <form
            role="search"
            action="#"
            method="get"
            className="relative mx-auto mt-8 w-full max-w-2xl"
          >
            <label htmlFor="site-search" className="sr-only">
              Search the City of Saugatuck website
            </label>
            <Search
              className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-slate-400 sm:size-6"
              aria-hidden="true"
            />
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Search services, permits, meetings…"
              autoComplete="off"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-white pr-28 pl-13 text-base text-slate-900 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] outline-none placeholder:text-slate-400 focus-visible:border-(--lk-blue) focus-visible:ring-4 focus-visible:ring-(--lk-blue)/15 sm:h-16 sm:pl-14 sm:text-lg"
            />
            <button
              type="submit"
              className={`${focusRing} absolute top-2 right-2 inline-flex h-10 items-center rounded-xl bg-(--lk-blue) px-4 text-sm font-medium text-white transition-colors hover:bg-(--lk-blue-hover) sm:top-2.5 sm:h-11 sm:px-5`}
            >
              Search
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-medium tracking-wide text-slate-500 uppercase">
              Popular
            </span>
            {popularSearches.map((term) => (
              <Link
                key={term}
                href="#"
                className={`${focusRing} inline-flex h-8 items-center rounded-full border border-slate-200 bg-white px-3.5 text-sm text-slate-700 transition-colors hover:border-(--lk-blue) hover:text-(--lk-blue-text)`}
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
