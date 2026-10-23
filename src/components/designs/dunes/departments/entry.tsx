import {
  ArrowUpRight,
  Calculator,
  Flame,
  HardHat,
  Landmark,
  Map as MapIcon,
  ShieldCheck,
  TriangleAlert,
  Truck,
  Vote,
  Wallet,
  type LucideIcon,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import type { Department } from "@/content/departments"

import { focusRing, Phrases, serif } from "../about/shared"

const icons: Record<string, LucideIcon> = {
  Landmark,
  Vote,
  Wallet,
  Calculator,
  Map: MapIcon,
  Truck,
  HardHat,
  ShieldCheck,
  Flame,
}

export const columnLabel =
  "text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink-soft) uppercase"

export const smallCaps =
  "text-[11px] tracking-[0.18em] text-(--dn-ink-soft) uppercase"

export const phoneLink = `rounded-sm text-(--dn-teal) underline decoration-(--dn-teal)/40 underline-offset-4 transition-colors hover:text-(--dn-teal-deep) hover:decoration-(--dn-teal-deep) ${focusRing}`

export function tel(phone: string) {
  return `tel:${phone.replace(/\D/g, "")}`
}

function isEmergency(note: string) {
  return /emergency|911/i.test(note)
}

/** Offices with no location of their own work from City Hall. */
const cityHall = {
  name: "City Hall",
  address: siteConfig.contact.address,
  hours: siteConfig.contact.hours,
  phone: undefined,
}

/** One full-width directory entry: number, name, standfirst, then three columns. */
export function DunesDepartmentEntry({
  department,
  number,
}: {
  department: Department
  number: number
}) {
  const Icon = icons[department.icon] ?? Landmark
  const headingId = `dn-department-${department.id}`
  const location =
    department.location ??
    (department.group === "city-hall" ? cityHall : undefined)
  const hasPeople = department.contacts.length > 0

  return (
    <article
      id={department.id}
      aria-labelledby={headingId}
      className="scroll-mt-56 border-b border-(--dn-rule) py-9 sm:py-12 lg:py-14"
    >
      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-x-10">
        {/* Number and icon */}
        <div className="flex items-center gap-4 lg:col-span-2 lg:flex-col lg:items-start lg:gap-5">
          <span
            className={`${serif} text-4xl leading-none font-light tracking-[-0.02em] text-(--dn-terra) tabular-nums sm:text-5xl lg:text-6xl`}
          >
            {String(number).padStart(2, "0")}
          </span>
          <Icon
            className="size-5 text-(--dn-teal) lg:size-6"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0 lg:col-span-10">
          {/* Name and standfirst */}
          <h3
            id={headingId}
            className={`${serif} text-3xl leading-[1.08] font-light tracking-[-0.02em] text-balance text-(--dn-ink) sm:text-4xl lg:text-5xl`}
          >
            {department.name}
          </h3>
          <p
            className={`mt-4 max-w-[44rem] ${serif} text-lg leading-snug font-light text-pretty text-(--dn-ink-soft) sm:text-xl lg:text-[1.375rem] lg:leading-[1.4]`}
          >
            {department.summary}
          </p>

          {/*
           * Three columns on desktop. On tablets "What we handle" runs down
           * the left while People and Where stack on the right, so no column
           * is left with an empty cell beside it.
           */}
          <div className="mt-7 grid grid-cols-1 gap-7 border-t border-(--dn-rule) pt-6 sm:mt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:mt-10 lg:grid-cols-3 lg:gap-10 lg:pt-8">
            <div className="sm:row-span-2 lg:row-span-1">
              <h4 className={columnLabel}>What we handle</h4>
              <ul className="mt-3 space-y-2">
                {department.services.map((service) => (
                  <li
                    key={service}
                    className="flex gap-3 text-[15px] leading-relaxed text-(--dn-ink)"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] h-px w-3 shrink-0 bg-(--dn-terra)"
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {hasPeople && (
              <div>
                <h4 className={columnLabel}>People</h4>
                <ul className="mt-3 space-y-5">
                  {department.contacts.map((contact) => (
                    <li key={contact.name}>
                      <p
                        className={`${serif} text-xl leading-snug text-(--dn-ink)`}
                      >
                        {contact.name}
                      </p>
                      <p className={`mt-0.5 ${smallCaps}`}>{contact.title}</p>
                      {contact.phone && (
                        <p className="mt-1.5 text-[15px] tabular-nums">
                          <a
                            href={tel(contact.phone)}
                            aria-label={`Call ${contact.name} at ${contact.phone}`}
                            className={phoneLink}
                          >
                            {contact.phone}
                          </a>
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className={columnLabel}>{location ? "Where" : "Contact"}</h4>
              {location && (
                <dl className="mt-3 space-y-3">
                  <div>
                    <dt className="sr-only">Office</dt>
                    <dd>
                      <span
                        className={`block ${serif} text-xl leading-snug text-(--dn-ink)`}
                      >
                        {location.name}
                      </span>
                      <span className="mt-0.5 block text-[15px] leading-relaxed text-(--dn-ink-soft)">
                        <Phrases text={location.address} />
                      </span>
                    </dd>
                  </div>
                  {location.hours && (
                    <div>
                      <dt className={smallCaps}>Hours</dt>
                      <dd className="mt-0.5 text-[15px] leading-relaxed text-(--dn-ink)">
                        <Phrases text={location.hours} />
                      </dd>
                    </div>
                  )}
                  {location.phone && (
                    <div>
                      <dt className={smallCaps}>Phone</dt>
                      <dd className="mt-0.5 text-[15px] tabular-nums">
                        <a
                          href={tel(location.phone)}
                          aria-label={`Call ${location.name === cityHall.name ? department.name : location.name} at ${location.phone}`}
                          className={phoneLink}
                        >
                          {location.phone}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              )}

              {department.note &&
                (isEmergency(department.note) ? (
                  <p className="mt-4 flex items-start gap-2 border-l-2 border-(--dn-terra) pl-3 text-[15px] leading-relaxed font-semibold text-(--dn-terra)">
                    <TriangleAlert
                      className="mt-1 size-3.5 shrink-0"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    {department.note}
                  </p>
                ) : (
                  <p className="mt-4 border-l-2 border-(--dn-rule) pl-3 text-[15px] leading-relaxed text-(--dn-ink-soft)">
                    {department.note}
                  </p>
                ))}

              {department.website && (
                <p className="mt-4 text-[15px]">
                  <a
                    href={department.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-1.5 font-medium ${phoneLink}`}
                  >
                    {new URL(department.website).hostname.replace(/^www\./, "")}
                    <ArrowUpRight
                      className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
