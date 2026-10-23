import Image from "next/image"
import { ArrowDown } from "lucide-react"

import { parksImages } from "@/content/parks"

import { container, focusRing, kicker, SectionHeading } from "../about/shared"
import { DunesParkEntry } from "./entry"
import { gazetteer, padNumber } from "./shared"

const partLabels = [
  "Part one",
  "Part two",
  "Part three",
  "Part four",
  "Part five",
]

function countLabel(count: number) {
  return `${count} ${count === 1 ? "place" : "places"}`
}

/** "01–04", or just "15" for an area with one place. */
function rangeLabel(numbers: number[]) {
  const first = padNumber(numbers[0] ?? 0)
  const last = padNumber(numbers[numbers.length - 1] ?? 0)
  return first === last ? first : `${first}–${last}`
}

/** Every park, grouped by area, numbered 01–15 across the whole gazetteer. */
export function DunesParksGazetteer() {
  const total = gazetteer.reduce((sum, area) => sum + area.parks.length, 0)

  return (
    <div id="gazetteer" className="scroll-mt-56 border-t border-(--dn-ink)">
      {/* A short index of the areas: the gazetteer's own contents line. */}
      <nav
        aria-labelledby="dn-parks-gazetteer-index"
        className={`${container} pt-10 lg:pt-14`}
      >
        <p id="dn-parks-gazetteer-index" className={kicker}>
          The gazetteer · {total} places, {padNumber(1)}–{padNumber(total)}
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-6">
          {gazetteer.map((area) => (
            <li key={area.id}>
              <a
                href={`#${area.id}`}
                className={`group inline-block rounded-sm py-1 text-[15px] leading-snug font-medium text-(--dn-ink) transition-colors hover:text-(--dn-teal) ${focusRing}`}
              >
                {area.title}{" "}
                <span className="whitespace-nowrap">
                  <span className="ml-0.5 text-[13px] font-normal text-(--dn-ink-soft) tabular-nums">
                    <span className="sr-only">, </span>
                    {rangeLabel(area.parks.map(({ number }) => number))}
                  </span>
                  <ArrowDown
                    className="ml-1.5 inline-block size-3.5 align-[-0.125em] text-(--dn-terra) transition-transform duration-200 group-hover:translate-y-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {gazetteer.map((area, areaIndex) => {
        const headingId = `dn-parks-${area.id}`
        const isNature = area.id === "nature"
        return (
          <section
            key={area.id}
            id={area.id}
            aria-labelledby={headingId}
            className={`scroll-mt-56 ${areaIndex > 0 ? "border-t border-(--dn-rule)" : ""}`}
          >
            <div className={`${container} py-14 lg:py-20`}>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end lg:gap-10">
                <div className="lg:col-span-7">
                  <SectionHeading
                    id={headingId}
                    label={`${partLabels[areaIndex] ?? `Part ${areaIndex + 1}`} · ${countLabel(area.parks.length)}`}
                    title={area.title}
                  />
                  {isNature && (
                    <p className="mt-5 max-w-md text-[15px] leading-relaxed text-(--dn-ink-soft)">
                      {area.description}
                    </p>
                  )}
                </div>

                {isNature ? (
                  /* The woods photograph sits beside the nature preserves. */
                  <figure className="mt-6 lg:col-span-5 lg:mt-0">
                    <div className="relative aspect-3/2 overflow-hidden rounded-sm bg-(--dn-bg-deep)">
                      <Image
                        src={parksImages.woods}
                        alt="Autumn woods in red and gold reflected in still water"
                        fill
                        sizes="(min-width: 1280px) 30rem, (min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-[11px] tracking-[0.14em] text-(--dn-ink-soft) uppercase">
                      Still water, autumn woods
                    </figcaption>
                  </figure>
                ) : (
                  <p className="max-w-md text-[15px] leading-relaxed text-(--dn-ink-soft) lg:col-span-4 lg:col-start-9">
                    {area.description}
                  </p>
                )}
              </div>

              {/* The next area's top rule closes the last entry. */}
              <ol
                start={area.parks[0]?.number}
                className="mt-8 border-t border-(--dn-ink) lg:mt-12 [&>li:last-child>article]:border-b-0 [&>li:last-child>article]:pb-0"
              >
                {area.parks.map(({ park, number }) => (
                  <li key={park.id}>
                    <DunesParkEntry park={park} number={number} />
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )
      })}
    </div>
  )
}
