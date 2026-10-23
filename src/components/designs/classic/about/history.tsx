import Image from "next/image"

import { aboutImages, history } from "@/content/about"

import { SectionHeading } from "./ui"

export function AboutHistory() {
  const first = history[0].year
  const last = history[history.length - 1].year

  return (
    <section aria-labelledby="classic-about-history">
      <SectionHeading id="classic-about-history" aside={`${first} – ${last}`}>
        History
      </SectionHeading>

      <div className="relative mt-6 aspect-[21/9] overflow-hidden rounded-md border border-(--rule) bg-(--band)">
        <Image
          src={aboutImages.history}
          alt="Autumn trees reflected in still water"
          fill
          sizes="(min-width: 1152px) 768px, (min-width: 1024px) 66vw, 100vw"
          className="object-cover"
        />
      </div>

      <ol className="mt-8">
        {history.map((entry) => (
          <li
            key={entry.year}
            className="group grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-x-6"
          >
            <p className="pt-px text-right text-base font-semibold text-(--blue-text) tabular-nums sm:text-lg">
              <time dateTime={entry.year}>{entry.year}</time>
            </p>
            <div className="relative border-l border-(--rule) pb-8 pl-6 group-last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[6px] size-[11px] rounded-full border-2 border-(--blue) bg-white"
              />
              <h3 className="text-base leading-snug font-semibold text-(--ink)">
                {entry.title}
              </h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-(--body)">
                {entry.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
