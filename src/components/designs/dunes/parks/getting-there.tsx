import { gettingToTheBeach } from "@/content/parks"

import { container, SectionHeading, serif } from "../about/shared"
import { phoneLink, smallCaps, tel } from "../departments/entry"

/**
 * Three columns divided by hairlines on desktop, each opened by a large terra
 * numeral. Below that the columns would be too narrow, so each option becomes
 * a row with its numeral hung in the left margin.
 */
export function DunesParksGettingThere() {
  return (
    <section
      id="getting-there"
      aria-labelledby="dn-parks-getting-there"
      className="scroll-mt-56 border-t border-(--dn-rule) bg-(--dn-bg-deep)/40"
    >
      <div className={`${container} py-14 sm:py-16 lg:py-24`}>
        <SectionHeading
          id="dn-parks-getting-there"
          label="Three ways to the beach"
          title={gettingToTheBeach.title}
        />

        <ol className="mt-8 grid grid-cols-1 border-t border-(--dn-ink) sm:mt-10 lg:mt-14 lg:grid-cols-3">
          {gettingToTheBeach.options.map((option, index) => (
            <li
              key={option.label}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-(--dn-rule) py-7 last:border-b-0 sm:grid-cols-[4.5rem_1fr] sm:gap-x-6 sm:py-8 lg:block lg:border-r lg:border-b-0 lg:px-10 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span
                aria-hidden="true"
                className={`row-span-3 block ${serif} text-5xl leading-none font-light tracking-[-0.03em] text-(--dn-terra) tabular-nums sm:text-6xl lg:text-8xl`}
              >
                {index + 1}
              </span>
              <h3
                className={`col-start-2 ${serif} text-2xl leading-snug text-(--dn-ink) lg:mt-6 lg:text-[1.75rem]`}
              >
                {option.label}
              </h3>
              <p className="col-start-2 mt-2 max-w-[34rem] text-[15px] leading-relaxed text-pretty text-(--dn-ink-soft) lg:mt-3 lg:text-base">
                {option.body}
              </p>
              {"phone" in option && option.phone && (
                <p className="col-start-2 mt-4">
                  <span className={`block ${smallCaps}`}>Call for a ride</span>
                  <a
                    href={tel(option.phone)}
                    aria-label={`Call the ${option.label} for a ride at ${option.phone}`}
                    className={`mt-1 inline-block ${serif} text-xl leading-snug tabular-nums ${phoneLink}`}
                  >
                    {option.phone}
                  </a>
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
