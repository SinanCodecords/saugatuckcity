import { Trees } from "lucide-react"

import { parkAreas, parks } from "@/content/parks"

import { departmentAnchor } from "../departments/shared"
import { parkAreaIcons } from "./icons"
import { ParkCard } from "./park-card"

const areas = parkAreas.map((area) => ({
  ...area,
  anchor: `parks-area-${area.id}`,
  parks: parks.filter((park) => park.area === area.id),
}))

function countLabel(count: number) {
  return `${count} ${count === 1 ? "place" : "places"}`
}

export function ParkAreas() {
  return (
    <div className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section
          aria-labelledby="harbor-parks-directory-heading"
          className="rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
            <h2
              id="harbor-parks-directory-heading"
              className="flex items-center gap-2.5 text-2xl font-semibold tracking-tight text-(--navy)"
            >
              <Trees aria-hidden="true" className="size-6 text-(--gold)" />
              Every park, by area
            </h2>
            <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
              {countLabel(parks.length)}
            </p>
          </div>
          <nav aria-label="Park areas" className="mt-4">
            <ul className="flex flex-wrap gap-2">
              {areas.map((area) => {
                const Icon = parkAreaIcons[area.id]
                return (
                  <li key={area.id}>
                    <a
                      href={`#${area.anchor}`}
                      className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white py-1.5 pr-1.5 pl-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:border-(--navy) hover:text-(--navy) focus-visible:border-(--navy) focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-4 text-(--gold)"
                      />
                      {area.title}
                      <span className="rounded-full bg-(--navy) px-2 py-0.5 text-xs font-semibold text-white tabular-nums">
                        <span className="sr-only">(</span>
                        {area.parks.length}
                        <span className="sr-only">)</span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </section>

        <div className="mt-12 space-y-14 lg:mt-16 lg:space-y-20">
          {areas.map((area) => {
            const Icon = parkAreaIcons[area.id]
            const headingId = `${area.anchor}-heading`

            return (
              <section
                key={area.id}
                id={area.anchor}
                aria-labelledby={headingId}
                className={departmentAnchor}
              >
                <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b-2 border-(--navy) pb-3">
                  <div className="min-w-0">
                    <h2
                      id={headingId}
                      className="flex items-center gap-2.5 text-2xl font-semibold tracking-tight text-(--navy) sm:text-3xl"
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-(--gold)"
                      />
                      {area.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      {area.description}
                    </p>
                  </div>
                  <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                    {countLabel(area.parks.length)}
                  </p>
                </div>

                <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {area.parks.map((park) => (
                    <li key={park.id}>
                      <ParkCard park={park} />
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
