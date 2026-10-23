import Image from "next/image"

import { aboutImages, history } from "@/content/about"

import { container, SectionHeading, serif } from "./shared"

export function DunesAboutHistory() {
  const first = history[0].year
  const last = history[history.length - 1].year

  return (
    <section
      id="history"
      aria-labelledby="dn-about-history"
      className="scroll-mt-56 border-t border-(--dn-rule) bg-(--dn-bg-deep)/40"
    >
      <div className={`${container} py-16 lg:py-24`}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Heading and photograph; the photo stays in view beside the long timeline. */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-56">
              <SectionHeading
                id="dn-about-history"
                label={`History · ${first}–${last}`}
                title="A village, then a city."
              />
              <figure className="mt-10 max-w-md lg:max-w-sm">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -top-3 -left-3 h-full w-full rounded-sm border border-(--dn-terra) sm:-top-4 sm:-left-4"
                  />
                  <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-(--dn-bg-deep) lg:aspect-5/6">
                    <Image
                      src={aboutImages.history}
                      alt="Autumn trees in red and gold reflected in still water"
                      fill
                      sizes="(min-width: 1024px) 24rem, (min-width: 640px) 28rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 text-[11px] tracking-[0.14em] text-(--dn-ink-soft) uppercase">
                  Autumn along the Kalamazoo
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Timeline */}
          <ol className="border-t border-(--dn-ink) lg:col-span-7">
            {history.map((entry) => (
              <li
                key={entry.year}
                className="grid grid-cols-1 gap-3 border-b border-(--dn-rule) py-8 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:py-10 xl:grid-cols-[11rem_1fr]"
              >
                <p
                  className={`${serif} text-5xl leading-none font-light tracking-[-0.03em] text-(--dn-ink) tabular-nums sm:text-6xl xl:text-7xl`}
                >
                  <time dateTime={entry.year}>{entry.year}</time>
                </p>
                <div className="sm:pt-1">
                  <h3
                    className={`${serif} text-2xl leading-snug text-(--dn-ink)`}
                  >
                    {entry.title}
                  </h3>
                  <p className="mt-2 max-w-[34rem] text-[17px] leading-relaxed text-(--dn-ink-soft)">
                    {entry.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
