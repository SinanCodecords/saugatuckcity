import { ArrowDown } from "lucide-react"

import { siteConfig } from "@/config/site"
import { masterPlan, parkEvents, parkRules, reservePark } from "@/content/parks"

import {
  container,
  focusRing,
  kicker,
  SectionHeading,
  serif,
} from "../about/shared"
import { phoneLink, smallCaps, tel } from "../departments/entry"

/** Events as a hairline list; each one jumps to its park in the gazetteer. */
export function DunesParksEvents() {
  return (
    <section
      id="events"
      aria-labelledby="dn-parks-events"
      className="scroll-mt-56 border-t border-(--dn-rule) bg-(--dn-bg-deep)/40"
    >
      <div
        className={`${container} grid grid-cols-1 gap-10 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24`}
      >
        <div className="lg:col-span-4">
          <SectionHeading
            id="dn-parks-events"
            label="On the lawn"
            title="Events in the parks"
          />
        </div>

        <ul className="border-t border-(--dn-ink) lg:col-span-8">
          {parkEvents.map((event) => (
            <li key={event.name} className="border-b border-(--dn-rule)">
              <a
                href={`#${event.parkId}`}
                className="group grid grid-cols-[1fr_auto] items-start gap-x-4 rounded-sm py-5 transition-colors hover:bg-(--dn-bg-deep)/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-(--dn-teal) sm:grid-cols-[1fr_14rem_auto] sm:items-baseline sm:px-3 sm:py-6"
              >
                <span
                  className={`${serif} text-xl leading-snug text-(--dn-ink) transition-colors group-hover:text-(--dn-teal) sm:text-2xl`}
                >
                  {event.name}
                </span>
                <span
                  className={`col-start-1 row-start-2 mt-1.5 ${smallCaps} sm:col-start-2 sm:row-start-1 sm:mt-0`}
                >
                  <span className="sr-only">At </span>
                  {event.where}
                </span>
                <ArrowDown
                  className="col-start-2 row-start-1 mt-1.5 size-4 shrink-0 self-start text-(--dn-terra) transition-transform duration-200 group-hover:translate-y-0.5 sm:col-start-3 sm:mt-0 sm:self-center"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** The General Park Rules, set small like the fine print at the back of a guide. */
export function DunesParksRules() {
  return (
    <section
      id="rules"
      aria-labelledby="dn-parks-rules"
      className="scroll-mt-56 border-t border-(--dn-rule)"
    >
      <div
        className={`${container} grid grid-cols-1 gap-6 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16`}
      >
        <div className="lg:col-span-4">
          <p className={kicker}>The fine print</p>
          <h2
            id="dn-parks-rules"
            className={`mt-3 ${serif} text-2xl leading-tight font-light tracking-[-0.01em] text-(--dn-ink) sm:text-3xl`}
          >
            General park rules
          </h2>
        </div>

        <div className="lg:col-span-8">
          <ol className="grid grid-cols-1 gap-x-10 gap-y-4 border-t border-(--dn-ink) pt-5 sm:grid-cols-2">
            {parkRules.general.map((rule, index) => (
              <li
                key={rule}
                className="grid grid-cols-[1.75rem_1fr] gap-x-2 text-[14px] leading-relaxed text-pretty text-(--dn-ink)"
              >
                <span
                  aria-hidden="true"
                  className={`${serif} text-[15px] text-(--dn-terra) tabular-nums`}
                >
                  {index + 1}.
                </span>
                {rule}
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-(--dn-rule) pt-4 text-[13px] leading-relaxed text-pretty text-(--dn-ink-soft)">
            {parkRules.note}
          </p>
        </div>
      </div>
    </section>
  )
}

const { phone } = siteConfig.contact

/** Two short columns: reserving a park, and the master plan. */
export function DunesParksPlanning() {
  return (
    <div className="border-t border-(--dn-rule)">
      <div
        className={`${container} grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:gap-0 lg:py-20`}
      >
        <section
          id="host-an-event"
          aria-labelledby="dn-parks-host"
          className="scroll-mt-56 md:border-r md:border-(--dn-rule) md:pr-10 lg:pr-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-terra) uppercase">
            Weddings &amp; festivals
          </p>
          <h2
            id="dn-parks-host"
            className={`mt-3 ${serif} text-3xl leading-tight font-light tracking-[-0.01em] text-balance text-(--dn-ink) sm:text-4xl`}
          >
            {reservePark.title}
          </h2>
          <p className="mt-4 max-w-[34rem] text-[17px] leading-[1.7] text-pretty text-(--dn-ink)">
            {reservePark.body}
          </p>
          <p className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[15px]">
            <a
              href={tel(phone)}
              aria-label={`Call City Hall about a park permit at ${phone}`}
              className={`${serif} text-lg tabular-nums ${phoneLink}`}
            >
              {phone}
            </a>
            <a
              href="#visit"
              className={`group inline-flex items-center gap-1.5 rounded-sm font-medium text-(--dn-ink) transition-colors hover:text-(--dn-teal) ${focusRing}`}
            >
              Visit City Hall
              <ArrowDown
                className="size-3.5 shrink-0 text-(--dn-terra) transition-transform duration-200 group-hover:translate-y-0.5"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </a>
          </p>
        </section>

        <section
          id="master-plan"
          aria-labelledby="dn-parks-master-plan"
          className="scroll-mt-56 border-t border-(--dn-rule) pt-12 md:border-t-0 md:pt-0 md:pl-10 lg:pl-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-terra) uppercase">
            Looking ahead
          </p>
          <h2
            id="dn-parks-master-plan"
            className={`mt-3 ${serif} text-3xl leading-tight font-light tracking-[-0.01em] text-balance text-(--dn-ink) sm:text-4xl`}
          >
            {masterPlan.title}
          </h2>
          <p className="mt-4 max-w-[34rem] text-[17px] leading-[1.7] text-pretty text-(--dn-ink)">
            {masterPlan.body}
          </p>
        </section>
      </div>
    </div>
  )
}
