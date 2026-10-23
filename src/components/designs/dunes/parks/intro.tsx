import { parksFacts, parksIntro } from "@/content/parks"
import { cn } from "@/lib/utils"

import { container, kicker, serif } from "../about/shared"

/** The intro body, opened with the About page's terra drop cap. */
export function DunesParksIntro() {
  return (
    <section aria-labelledby="dn-parks-intro" className="pb-16 lg:pb-24">
      <div
        className={`${container} grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10`}
      >
        <div className="lg:col-span-3">
          <h2 id="dn-parks-intro" className={kicker}>
            Introduction
          </h2>
          <div
            aria-hidden="true"
            className="mt-4 hidden h-px w-12 bg-(--dn-terra) lg:block"
          />
        </div>

        <p className="max-w-[38rem] text-lg leading-[1.75] text-pretty text-(--dn-ink) first-letter:float-left first-letter:mt-1.5 first-letter:mr-3 first-letter:font-(family-name:--font-dunes-serif) first-letter:text-[4.25rem] first-letter:leading-[0.8] first-letter:font-normal first-letter:text-(--dn-terra) sm:first-letter:text-[5rem] lg:col-span-6 lg:text-[19px]">
          {parksIntro.body}
        </p>
      </div>
    </section>
  )
}

/** The facts as big serif numerals divided by hairlines, as on About. */
export function DunesParksFacts() {
  return (
    <section aria-labelledby="dn-parks-facts" className="pb-16 lg:pb-24">
      <div className={container}>
        <h2 id="dn-parks-facts" className={kicker}>
          By the numbers
        </h2>
        <dl className="mt-5 grid grid-cols-2 border-t border-(--dn-ink) lg:grid-cols-4">
          {parksFacts.map((fact, index) => (
            <div
              key={fact.label}
              className={cn(
                "flex flex-col-reverse justify-end gap-3 border-b border-(--dn-rule) py-7 sm:py-9 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0",
                index % 2 === 0 ? "border-r pr-4 sm:pr-6" : "pl-4 sm:pl-6"
              )}
            >
              <dt className="max-w-[16rem] text-[13px] leading-snug text-(--dn-ink-soft)">
                {fact.label}
              </dt>
              <dd
                className={`${serif} text-4xl leading-none font-light tracking-[-0.02em] whitespace-nowrap text-(--dn-ink) tabular-nums sm:text-6xl lg:text-5xl xl:text-6xl`}
              >
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
