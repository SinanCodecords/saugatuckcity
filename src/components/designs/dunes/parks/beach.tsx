import Image from "next/image"

import { chainFerry, ovalBeach, parksImages } from "@/content/parks"

import { container, kicker, serif } from "../about/shared"
import { columnLabel, phoneLink, smallCaps, tel } from "../departments/entry"

const columnHead =
  "pb-3 text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink-soft) uppercase"

/** A printed price list: hairline rows, the label left, a serif price right. */
function RateCard({
  caption,
  itemHeading,
  rows,
  size = "large",
}: {
  caption: string
  itemHeading: string
  rows: readonly { label: string; price: string; note?: string }[]
  size?: "large" | "small"
}) {
  return (
    <table className="w-full border-collapse">
      <caption className={`${columnLabel} pb-4 text-left`}>{caption}</caption>
      <thead>
        <tr className="border-b border-(--dn-ink)">
          <th scope="col" className={`${columnHead} pr-4 text-left`}>
            {itemHeading}
          </th>
          <th scope="col" className={`${columnHead} text-right`}>
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="border-b border-(--dn-rule)">
            <th
              scope="row"
              className="py-4 pr-4 text-left align-baseline font-normal"
            >
              <span
                className={`block ${serif} leading-snug text-(--dn-ink) ${size === "large" ? "text-xl sm:text-[22px]" : "text-lg"}`}
              >
                {row.label}
              </span>
              {row.note && (
                <span className={`mt-1 block ${smallCaps}`}>{row.note}</span>
              )}
            </th>
            <td
              className={`py-4 text-right align-baseline ${serif} leading-none font-light tracking-[-0.02em] whitespace-nowrap text-(--dn-ink) tabular-nums ${size === "large" ? "text-4xl sm:text-5xl" : "text-3xl"}`}
            >
              {row.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const beachDetails = [
  { label: "Season", value: ovalBeach.season },
  { label: "Hours", value: ovalBeach.hours },
  { label: "Address", value: ovalBeach.address },
] as const

/** "The beach" as the feature article, with "The ferry" as its sidebar. */
export function DunesParksBeach() {
  return (
    <div className="border-t border-(--dn-rule)">
      <div
        className={`${container} grid grid-cols-1 gap-16 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24`}
      >
        <section
          id="beach"
          aria-labelledby="dn-parks-beach"
          className="min-w-0 scroll-mt-56 lg:col-span-8"
        >
          <p className={kicker}>The beach · Lake Michigan</p>
          <h2
            id="dn-parks-beach"
            className={`mt-4 ${serif} text-5xl leading-[0.98] font-light tracking-[-0.03em] text-balance text-(--dn-ink) sm:text-6xl lg:text-7xl`}
          >
            {ovalBeach.name}
          </h2>
          <p
            className={`mt-6 max-w-[40rem] ${serif} text-xl leading-snug font-light text-pretty text-(--dn-ink-soft) sm:text-2xl lg:leading-[1.35]`}
          >
            {ovalBeach.summary}
          </p>

          <figure className="mt-10 lg:mt-12">
            <div className="relative aspect-3/2 overflow-hidden rounded-sm bg-(--dn-bg-deep)">
              <Image
                src={parksImages.water}
                alt="A white-sailed boat on open water under a pale sky"
                fill
                sizes="(min-width: 1280px) 52rem, (min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[11px] tracking-[0.14em] text-(--dn-ink-soft) uppercase">
              Under sail off the Saugatuck shore
            </figcaption>
          </figure>

          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-12 sm:gap-8 lg:mt-14 lg:gap-10">
            <div className="sm:col-span-7">
              <RateCard
                caption="Rate card · Parking passes"
                itemHeading="Pass"
                rows={ovalBeach.passes}
              />
            </div>

            <div className="sm:col-span-5">
              <h3 className={columnLabel}>Before you go</h3>
              <dl className="mt-4 border-t border-(--dn-ink)">
                {beachDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="border-b border-(--dn-rule) py-4"
                  >
                    <dt className={smallCaps}>{detail.label}</dt>
                    <dd
                      className={`mt-1.5 ${serif} text-lg leading-snug text-(--dn-ink) tabular-nums`}
                    >
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-10 max-w-[40rem] border-l-2 border-(--dn-terra) pl-5">
            <h3 className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-terra) uppercase">
              Parking
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-pretty text-(--dn-ink)">
              {ovalBeach.parkingNote}
            </p>
          </div>
        </section>

        <section
          id="ferry"
          aria-labelledby="dn-parks-ferry"
          className="min-w-0 scroll-mt-56 self-start border-t border-(--dn-ink) pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:border-(--dn-rule) lg:pt-0 lg:pl-10"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-terra) uppercase">
            The ferry · Across the river
          </p>
          <h2
            id="dn-parks-ferry"
            className={`mt-3 ${serif} text-4xl leading-tight font-light tracking-[-0.02em] text-(--dn-ink) sm:text-5xl`}
          >
            {chainFerry.name}
          </h2>
          <p
            className={`mt-4 ${serif} text-lg leading-snug font-light text-pretty text-(--dn-ink-soft)`}
          >
            {chainFerry.summary}
          </p>

          <div className="mt-8">
            <RateCard
              caption="Fares, one way"
              itemHeading="Rider"
              rows={chainFerry.fares}
              size="small"
            />
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-pretty text-(--dn-ink-soft)">
            {chainFerry.note}
          </p>

          <dl className="mt-6 space-y-4 border-t border-(--dn-rule) pt-5">
            <div>
              <dt className={smallCaps}>Landing</dt>
              <dd
                className={`mt-1 ${serif} text-lg leading-snug text-(--dn-ink)`}
              >
                {chainFerry.address}
              </dd>
            </div>
            <div>
              <dt className={smallCaps}>Phone</dt>
              <dd className={`mt-1 ${serif} text-lg leading-snug tabular-nums`}>
                <a
                  href={tel(chainFerry.phone)}
                  aria-label={`Call the ${chainFerry.name} at ${chainFerry.phone}`}
                  className={phoneLink}
                >
                  {chainFerry.phone}
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  )
}
