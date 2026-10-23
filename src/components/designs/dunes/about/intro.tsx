import { aboutFacts, aboutIntro } from "@/content/about"
import { cn } from "@/lib/utils"

import { container, kicker, serif } from "./shared"

export function DunesAboutIntro() {
  return (
    <section aria-labelledby="dn-about-intro" className="pb-16 lg:pb-24">
      <div
        className={`${container} grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10`}
      >
        <div className="lg:col-span-3">
          <h2 id="dn-about-intro" className={kicker}>
            Introduction
          </h2>
          <div
            aria-hidden="true"
            className="mt-4 hidden h-px w-12 bg-(--dn-terra) lg:block"
          />
        </div>

        <div className="max-w-[38rem] space-y-6 text-lg leading-[1.75] text-pretty text-(--dn-ink) lg:col-span-6 lg:text-[19px]">
          {aboutIntro.body.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? `first-letter:float-left first-letter:mt-1.5 first-letter:mr-3 first-letter:font-(family-name:--font-dunes-serif) first-letter:text-[4.25rem] first-letter:leading-[0.8] first-letter:font-normal first-letter:text-(--dn-terra) sm:first-letter:text-[5rem]`
                  : undefined
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DunesAboutFacts() {
  return (
    <section aria-labelledby="dn-about-facts" className="pb-16 lg:pb-24">
      <div className={container}>
        <h2 id="dn-about-facts" className={kicker}>
          At a glance
        </h2>
        <dl className="mt-5 grid grid-cols-2 border-t border-(--dn-ink) lg:grid-cols-4">
          {aboutFacts.map((fact, index) => (
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
                className={`${serif} text-4xl leading-none font-light tracking-[-0.02em] text-(--dn-ink) tabular-nums sm:text-6xl lg:text-5xl xl:text-6xl`}
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
