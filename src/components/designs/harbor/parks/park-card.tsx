import { ChevronDown, MapPin, Phone, Ruler, ShieldCheck } from "lucide-react"

import type { Park } from "@/content/parks"

import { PhoneLink } from "../boards/attend-and-serve"
import { DetailRow, targetHighlight } from "../boards/board-card"
import { departmentAnchor } from "../departments/shared"
import { parkIcons } from "./icons"

export function ParkCard({ park }: { park: Park }) {
  const Icon = parkIcons[park.icon]
  const headingId = `${park.id}-heading`
  const { location, size, features, rules, phone } = park
  const hasDetails = Boolean(location || size || phone)

  return (
    <article
      id={park.id}
      aria-labelledby={headingId}
      className={`${departmentAnchor} flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm ${targetHighlight} @2xl:flex-row`}
    >
      <div className={`p-5 sm:p-6 @2xl:flex-1 ${hasDetails ? "" : "flex-1"}`}>
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm"
          >
            {Icon ? <Icon className="size-6" /> : null}
          </span>
          <div className="min-w-0">
            <h3
              id={headingId}
              className="text-lg leading-snug font-semibold tracking-tight text-(--navy) sm:text-xl"
            >
              {park.name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              {park.summary}
            </p>
          </div>
        </div>

        {features.length > 0 ? (
          <ul
            aria-label={`${park.name} features`}
            className="mt-4 flex flex-wrap gap-1.5"
          >
            {features.map((feature) => (
              <li
                key={feature}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs leading-none font-medium text-slate-700"
              >
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        {rules && rules.length > 0 ? (
          <details className="group mt-4 rounded-md border border-slate-200 bg-white open:border-(--navy)/30 open:bg-slate-50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md px-3 py-2.5 text-sm font-semibold text-(--navy) hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck
                  aria-hidden="true"
                  className="size-4 text-(--gold)"
                />
                Park rules
                <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[0.6875rem] leading-none font-semibold text-slate-600 group-open:bg-white">
                  {rules.length}
                </span>
              </span>
              <ChevronDown
                aria-hidden="true"
                className="size-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
              />
            </summary>
            <ul className="space-y-1.5 border-t border-slate-200 px-3 py-3">
              {rules.map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-2 text-sm leading-snug text-slate-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-(--gold)"
                  />
                  {rule}
                </li>
              ))}
            </ul>
          </details>
        ) : null}
      </div>

      {hasDetails ? (
        <div className="flex-1 border-t border-slate-200 bg-slate-50 p-5 sm:px-6 @2xl:w-80 @2xl:flex-none @2xl:border-t-0 @2xl:border-l @2xl:py-6">
          <dl className="space-y-3">
            {location ? (
              <DetailRow icon={MapPin} label="Location" value={location} />
            ) : null}
            {size ? <DetailRow icon={Ruler} label="Size" value={size} /> : null}
            {phone ? (
              <div className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-(--navy) shadow-sm"
                >
                  <Phone className="size-4" />
                </span>
                <div className="min-w-0">
                  <dt className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                    Phone
                  </dt>
                  <dd className="mt-0.5">
                    <PhoneLink
                      phone={phone}
                      label={`Call ${park.name} at ${phone}`}
                    />
                  </dd>
                </div>
              </div>
            ) : null}
          </dl>
        </div>
      ) : null}
    </article>
  )
}
