import { gettingToTheBeach } from "@/content/parks"

import { container, SectionHeading, serif } from "../about/shared"
import { phoneLink, smallCaps, tel } from "../departments/entry"

/** Three columns divided by hairlines, each opened by a large terra numeral. */
export function DunesParksGettingThere() {
  return (
    <section
      id="getting-there"
      aria-labelledby="dn-parks-getting-there"
      className="scroll-mt-56 border-t border-(--dn-rule) bg-(--dn-bg-deep)/40"
    >
      <div className={`${container} py-16 lg:py-24`}>
        <SectionHeading
          id="dn-parks-getting-there"
          label="Three ways to the beach"
          title={gettingToTheBeach.title}
        />

        <ol className="mt-10 grid grid-cols-1 border-t border-(--dn-ink) md:grid-cols-3 lg:mt-14">
          {gettingToTheBeach.options.map((option, index) => (
            <li
              key={option.label}
              className="border-b border-(--dn-rule) py-8 md:border-r md:border-b-0 md:px-6 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:px-10"
            >
              <span
                aria-hidden="true"
                className={`block ${serif} text-6xl leading-none font-light tracking-[-0.03em] text-(--dn-terra) tabular-nums sm:text-7xl lg:text-8xl`}
              >
                {index + 1}
              </span>
              <h3
                className={`mt-5 ${serif} text-2xl leading-snug text-(--dn-ink) lg:mt-6 lg:text-[1.75rem]`}
              >
                {option.label}
              </h3>
              <p className="mt-3 max-w-[30rem] text-[15px] leading-relaxed text-pretty text-(--dn-ink-soft) lg:text-base">
                {option.body}
              </p>
              {"phone" in option && option.phone && (
                <p className="mt-4">
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
