import { Building2, Clock, MapPin, Navigation, Phone } from "lucide-react"

import { siteConfig } from "@/config/site"

const { address, phone, hours } = siteConfig.contact

const telHref = `tel:+1${phone.replace(/\D/g, "")}`
const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

const iconChip =
  "flex size-10 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm"

export function VisitCityHall() {
  return (
    <section
      aria-labelledby="harbor-visit-heading"
      className="border-t border-slate-200 bg-slate-50 py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_12px_40px_-12px_rgba(11,37,69,0.25)]">
          <div aria-hidden="true" className="h-1 bg-(--gold)" />
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12 lg:p-10">
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-(--navy) uppercase">
                <Building2
                  aria-hidden="true"
                  className="size-4 text-(--gold)"
                />
                City Hall
              </p>
              <h2
                id="harbor-visit-heading"
                className="mt-2 text-2xl font-semibold tracking-tight text-(--navy) sm:text-3xl"
              >
                Visit City Hall
              </h2>

              <address className="mt-6 grid gap-5 not-italic sm:grid-cols-3 sm:gap-6">
                <div className="flex gap-3">
                  <span aria-hidden="true" className={iconChip}>
                    <MapPin className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                      Address
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-900">
                      {address}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span aria-hidden="true" className={iconChip}>
                    <Phone className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                      Phone
                    </p>
                    <p className="mt-1 text-sm">
                      <a
                        href={telHref}
                        className="rounded font-medium text-(--navy) underline decoration-(--gold) decoration-2 underline-offset-4 hover:text-(--navy-dark) focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none"
                      >
                        {phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span aria-hidden="true" className={iconChip}>
                    <Clock className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                      Hours
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-900">
                      {hours}
                    </p>
                  </div>
                </div>
              </address>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:w-56 lg:grid-cols-1">
              <a
                href={directionsHref}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-(--navy) px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-(--navy-dark) focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Navigation aria-hidden="true" className="size-4" />
                Get directions
              </a>
              <a
                href={telHref}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-(--navy) bg-white px-4 text-sm font-semibold text-(--navy) transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Phone aria-hidden="true" className="size-4" />
                Call City Hall
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
