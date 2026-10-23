import Image from "next/image"
import { Search } from "lucide-react"

import { heroImages } from "@/content/home"

const popular = [
  "Pay utility bill",
  "Meeting agendas",
  "Building permits",
  "Parking",
]

export function Hero() {
  return (
    <section
      aria-labelledby="harbor-hero-heading"
      className="relative isolate overflow-hidden bg-(--navy-dark) text-white"
    >
      <Image
        src={heroImages.harbor}
        alt="Boats moored in the Kalamazoo River harbor at Saugatuck with the shoreline behind"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-[rgba(5,20,42,0.92)] via-[rgba(5,20,42,0.72)] to-[rgba(5,20,42,0.35)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[rgba(5,20,42,0.85)] to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-balance text-(--gold) uppercase">
            Official website of the City of Saugatuck
          </p>
          <h1
            id="harbor-hero-heading"
            className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Welcome to Saugatuck
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-200 sm:text-lg">
            City services, meetings, permits and news for residents, businesses
            and visitors to our harbor town on Lake Michigan.
          </p>

          <form
            role="search"
            action="#"
            className="mt-8 flex flex-col gap-2 sm:flex-row"
          >
            <label htmlFor="harbor-hero-search" className="sr-only">
              Search services, forms and meetings
            </label>
            <div className="relative flex-1">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-slate-500"
              />
              <input
                id="harbor-hero-search"
                type="search"
                placeholder="Services, forms, meetings…"
                className="h-14 w-full rounded-md border border-white/40 bg-white pr-4 pl-12 text-base text-slate-900 shadow-lg placeholder:text-slate-500 focus-visible:border-(--gold) focus-visible:ring-4 focus-visible:ring-(--gold)/40 focus-visible:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-14 shrink-0 items-center justify-center rounded-md bg-(--gold) px-7 text-base font-semibold text-(--navy-dark) shadow-lg transition-colors hover:bg-(--gold-light) focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:outline-none"
            >
              Search
            </button>
          </form>

          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-200">
            <span className="text-slate-300">Popular:</span>
            {popular.map((term, index) => (
              <span key={term} className="inline-flex items-center gap-2">
                <a
                  href="#"
                  className="rounded underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-(--gold) focus-visible:ring-2 focus-visible:ring-(--gold) focus-visible:outline-none"
                >
                  {term}
                </a>
                {index < popular.length - 1 && (
                  <span aria-hidden="true" className="text-slate-400">
                    ·
                  </span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
