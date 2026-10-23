import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"

import { siteConfig } from "@/config/site"

import { container, focusRing, sectionHeading, textLink } from "./styles"

export function CityHall() {
  const { address, hours, phone } = siteConfig.contact
  const tel = phone.replace(/[^\d]/g, "")

  return (
    <section
      aria-labelledby="city-hall-heading"
      className="border-t border-slate-200 bg-(--lk-surface)"
    >
      <div className={`${container} py-14 sm:py-16`}>
        <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-12 lg:gap-0">
          <div className="p-6 sm:p-8 lg:col-span-6 lg:p-10">
            <h2 id="city-hall-heading" className={sectionHeading}>
              City Hall
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
              Stop in for permits, bill payments, voter registration and public
              records, or call ahead and we will point you to the right
              department.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
              <div className="flex gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--lk-blue-tint) text-(--lk-blue-text)">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                    Address
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-900">
                    {address}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--lk-blue-tint) text-(--lk-blue-text)">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                    Hours
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-900">
                    {hours}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--lk-blue-tint) text-(--lk-blue-text)">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                    Phone
                  </dt>
                  <dd className="mt-1 text-sm leading-6">
                    <a
                      href={`tel:${tel}`}
                      className={`${focusRing} rounded-sm font-medium text-slate-900 hover:text-(--lk-blue-text) hover:underline`}
                    >
                      {phone}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#"
                className={`${focusRing} inline-flex h-10 items-center rounded-full bg-(--lk-blue) px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-(--lk-blue-hover)`}
              >
                Get directions
              </Link>
              <Link href="#" className={`${textLink} h-10 px-1`}>
                Staff directory
              </Link>
            </div>
          </div>

          <div className="relative min-h-64 lg:col-span-6 lg:min-h-full">
            <div
              className="absolute inset-0 bg-linear-to-br from-sky-100 via-(--lk-surface) to-blue-100"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:32px_32px] opacity-60"
              aria-hidden="true"
            />
            <div className="relative flex h-full min-h-64 flex-col items-center justify-center p-8 text-center">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-(--lk-blue) text-white shadow-[0_12px_30px_-10px_rgba(13,106,239,0.6)]">
                <MapPin className="size-7" aria-hidden="true" />
              </span>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                102 Butler Street
              </p>
              <p className="mt-0.5 text-xs text-slate-600">
                Downtown Saugatuck, one block from the harbor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
