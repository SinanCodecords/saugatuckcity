import { ArrowRight, CalendarDays, MapPin } from "lucide-react"

import { parkEvents } from "@/content/parks"

export function ParkEvents() {
  return (
    <section
      aria-labelledby="harbor-park-events-heading"
      className="overflow-hidden rounded-lg border border-t-3 border-slate-200 border-t-(--gold) bg-white shadow-sm"
    >
      <div className="flex items-start gap-4 border-b border-slate-200 px-5 py-5 sm:px-7 lg:px-8">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm"
        >
          <CalendarDays className="size-5" />
        </span>
        <div className="min-w-0">
          <h2
            id="harbor-park-events-heading"
            className="text-xl font-semibold tracking-tight text-(--navy) sm:text-2xl"
          >
            Events in the parks
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Select an event to see the park where it happens.
          </p>
        </div>
      </div>

      <ul className="grid gap-x-8 px-3 py-3 sm:px-5 md:grid-cols-2 lg:px-6">
        {parkEvents.map((event) => (
          <li
            key={event.name}
            className="border-b border-slate-100 last:border-b-0 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
          >
            <a
              href={`#${event.parkId}`}
              className="group flex items-center justify-between gap-4 rounded-md px-2 py-3.5 transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none"
            >
              <span className="flex min-w-0 flex-col">
                <span className="text-sm font-semibold text-slate-900 group-hover:text-(--navy) sm:text-base">
                  {event.name}
                </span>
                <span className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-600">
                  <MapPin aria-hidden="true" className="size-3.5 shrink-0" />
                  <span className="sr-only">, at </span>
                  {event.where}
                </span>
              </span>
              <ArrowRight
                aria-hidden="true"
                className="size-5 shrink-0 text-(--gold) transition-transform group-hover:translate-x-0.5 group-hover:text-(--navy)"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
