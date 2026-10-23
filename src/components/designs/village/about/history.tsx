import Image from "next/image"

import { aboutImages, history } from "@/content/about"
import { cn } from "@/lib/utils"

import { Container, SectionHeading, heading } from "../shared"
import { cardShadow, sectionAnchor, tint } from "./shared"

export function VillageAboutHistory() {
  const first = history[0].year
  const last = history[history.length - 1].year

  return (
    <section
      id="village-history"
      aria-labelledby="village-history-title"
      className={cn(sectionAnchor, "py-12 sm:py-16")}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-14">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <SectionHeading
              id="village-history-title"
              eyebrow="Our story"
              title="From village to city"
              description={`A few moments that shaped Saugatuck, ${first} to ${last}.`}
            />
            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_24px_50px_-24px_rgba(29,92,74,0.5)] sm:block">
              <Image
                src={aboutImages.history}
                alt="Autumn trees reflected in still water"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <ol className="relative flex flex-col gap-4 sm:gap-5">
            <span
              aria-hidden="true"
              className="absolute top-6 bottom-6 left-[1.6rem] w-1 rounded-full bg-(--v-line) sm:left-[1.85rem]"
            />
            {history.map((entry, index) => (
              <li
                key={entry.year}
                className="relative flex items-start gap-3 sm:gap-5"
              >
                <span
                  className={cn(
                    heading,
                    "relative z-10 inline-flex h-10 w-[3.4rem] shrink-0 items-center justify-center rounded-full text-sm font-extrabold ring-4 ring-(--v-bg) sm:h-11 sm:w-[3.9rem] sm:text-base",
                    tint(index)
                  )}
                >
                  {entry.year}
                </span>
                <div
                  className={cn(
                    cardShadow,
                    "min-w-0 flex-1 rounded-3xl border border-(--v-line) bg-(--v-card) p-5 sm:p-6"
                  )}
                >
                  <h3
                    className={cn(
                      heading,
                      "text-lg leading-snug font-extrabold text-(--v-text) sm:text-xl"
                    )}
                  >
                    {entry.title}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-(--v-muted)">
                    {entry.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
