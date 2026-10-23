import { Landmark } from "lucide-react"

import type { Park } from "@/content/parks"

import { serif } from "../about/shared"
import { columnLabel, phoneLink, tel } from "../departments/entry"
import { padNumber, parkIcons } from "./shared"

/**
 * Where, Size, Features and Phone always read in this order and fill the row
 * from the left, so a park with only some details never shows empty columns.
 * On phones Where and Size share a row when both exist; otherwise each one,
 * like Features, takes the full width.
 */
const fullOnPhones = "col-span-2 sm:col-span-1"

/** An inline list whose separators trail each item, so no wrapped line starts with a dot. */
function DotList({
  items,
  className,
  dotClassName = "",
}: {
  items: readonly string[]
  className: string
  dotClassName?: string
}) {
  return (
    <ul className={`flex flex-wrap gap-x-2 ${className}`}>
      {items.map((item, index) => (
        <li key={item}>
          {item}
          {index < items.length - 1 && (
            <span aria-hidden="true" className={`ml-2 ${dotClassName}`}>
              ·
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

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
  const pairOnPhones = Boolean(park.location && park.size)
  const hasDetails =
    park.location || park.size || park.features.length > 0 || park.phone

  return (
    <article
      id={park.id}
      aria-labelledby={headingId}
      className="scroll-mt-56 border-b border-(--dn-rule) py-9 sm:py-12"
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
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-(--dn-rule) pt-5 sm:mt-7 sm:gap-x-10 lg:mt-8 lg:grid-cols-3">
              {park.location && (
                <div className={`min-w-0 ${pairOnPhones ? "" : fullOnPhones}`}>
                  <dt className={columnLabel}>Where</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-(--dn-ink)">
                    {park.location}
                  </dd>
                </div>
              )}
              {park.size && (
                <div className={`min-w-0 ${pairOnPhones ? "" : fullOnPhones}`}>
                  <dt className={columnLabel}>Size</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-(--dn-ink) tabular-nums">
                    {park.size}
                  </dd>
                </div>
              )}
              {park.features.length > 0 && (
                <div
                  className={`min-w-0 ${fullOnPhones} ${pairOnPhones ? "" : "lg:col-span-2"}`}
                >
                  <dt className={columnLabel}>Features</dt>
                  <dd className="mt-1">
                    <DotList
                      items={park.features}
                      className="text-[15px] leading-relaxed text-(--dn-ink)"
                      dotClassName="text-(--dn-terra)"
                    />
                  </dd>
                </div>
              )}
              {park.phone && (
                <div className="min-w-0">
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
            <div className="mt-5">
              <h4 className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-terra) uppercase">
                Rules
              </h4>
              <DotList
                items={park.rules}
                className="mt-1 text-[14px] leading-relaxed text-(--dn-terra)"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
