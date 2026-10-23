import { Landmark } from "lucide-react"

import type { Park } from "@/content/parks"

import { serif } from "../about/shared"
import { columnLabel, phoneLink, tel } from "../departments/entry"
import { padNumber, parkIcons } from "./shared"

/**
 * Where, Size and Features keep their own columns on wide screens, so the
 * details line up from one entry to the next like a gazetteer's tables.
 */
const detailColumn = {
  where: "lg:col-start-1",
  size: "lg:col-start-2",
  features: "lg:col-start-3",
  phone: "lg:col-start-1",
} as const

/** One gazetteer entry: number, icon, serif name, standfirst, then details. */
export function DunesParkEntry({
  park,
  number,
}: {
  park: Park
  number: number
}) {
  const Icon = parkIcons[park.icon] ?? Landmark
  const headingId = `dn-park-${park.id}`
  const hasDetails =
    park.location || park.size || park.features.length > 0 || park.phone

  return (
    <article
      id={park.id}
      aria-labelledby={headingId}
      className="scroll-mt-56 border-b border-(--dn-rule) py-10 sm:py-12"
    >
      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-x-10">
        {/* Number and icon */}
        <div className="flex items-center gap-4 lg:col-span-2 lg:flex-col lg:items-start lg:gap-5">
          <span
            className={`${serif} text-4xl leading-none font-light tracking-[-0.02em] text-(--dn-terra) tabular-nums sm:text-5xl lg:text-6xl`}
          >
            {padNumber(number)}
          </span>
          <Icon
            className="size-5 text-(--dn-teal) lg:size-6"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0 lg:col-span-10">
          <h3
            id={headingId}
            className={`${serif} text-3xl leading-[1.08] font-light tracking-[-0.02em] text-balance text-(--dn-ink) sm:text-4xl lg:text-5xl`}
          >
            {park.name}
          </h3>
          <p
            className={`mt-4 max-w-[44rem] ${serif} text-lg leading-snug font-light text-pretty text-(--dn-ink-soft) sm:text-xl lg:text-[1.375rem] lg:leading-[1.4]`}
          >
            {park.summary}
          </p>

          {hasDetails && (
            <dl className="mt-7 grid grid-cols-1 gap-x-10 gap-y-5 border-t border-(--dn-rule) pt-5 sm:grid-cols-2 lg:mt-8 lg:grid-cols-[1fr_0.75fr_1.25fr]">
              {park.location && (
                <div className={`min-w-0 ${detailColumn.where}`}>
                  <dt className={columnLabel}>Where</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-(--dn-ink)">
                    {park.location}
                  </dd>
                </div>
              )}
              {park.size && (
                <div className={`min-w-0 ${detailColumn.size}`}>
                  <dt className={columnLabel}>Size</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-(--dn-ink) tabular-nums">
                    {park.size}
                  </dd>
                </div>
              )}
              {park.features.length > 0 && (
                <div className={`min-w-0 ${detailColumn.features}`}>
                  <dt className={columnLabel}>Features</dt>
                  <dd className="mt-1">
                    <ul className="flex flex-wrap gap-x-2 text-[15px] leading-relaxed text-(--dn-ink)">
                      {park.features.map((feature, index) => (
                        <li key={feature} className="flex gap-x-2">
                          {index > 0 && (
                            <span
                              aria-hidden="true"
                              className="text-(--dn-terra)"
                            >
                              ·
                            </span>
                          )}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
              {park.phone && (
                <div className={`min-w-0 ${detailColumn.phone}`}>
                  <dt className={columnLabel}>Phone</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed tabular-nums">
                    <a
                      href={tel(park.phone)}
                      aria-label={`Call ${park.name} at ${park.phone}`}
                      className={phoneLink}
                    >
                      {park.phone}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          )}

          {park.rules && park.rules.length > 0 && (
            <div className="mt-5 flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
              <h4 className="shrink-0 text-[11px] font-semibold tracking-[0.22em] text-(--dn-terra) uppercase">
                Rules
              </h4>
              <ul className="flex flex-wrap gap-x-2 text-[14px] leading-relaxed text-(--dn-terra)">
                {park.rules.map((rule, index) => (
                  <li key={rule} className="flex gap-x-2">
                    {index > 0 && <span aria-hidden="true">·</span>}
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
