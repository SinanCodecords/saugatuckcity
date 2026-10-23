import { ChevronRight, Info, PartyPopper, ShieldCheck } from "lucide-react"

import { parkEvents, parkRules } from "@/content/parks"
import { cn } from "@/lib/utils"

import { Container, focusRing, heading } from "../shared"
import { cardShadow, sectionAnchor } from "../about/shared"
import {
  ParkIcon,
  eventsAnchor,
  findPark,
  parkTint,
  rulesAnchor,
} from "./shared"

const eyebrow = cn(heading, "text-sm font-bold tracking-wide uppercase")
const cardTitle = cn(
  heading,
  "mt-4 text-2xl font-extrabold tracking-tight text-(--v-text) sm:text-3xl"
)

/** A cheerful events list card beside a soft rose park-rules card. */
export function VillageEventsAndRules() {
  return (
    <div className="py-10 sm:py-14">
      <Container className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <section
          id={eventsAnchor}
          aria-labelledby={`${eventsAnchor}-title`}
          className={cn(
            sectionAnchor,
            cardShadow,
            "rounded-[2rem] border border-(--v-line) bg-(--v-card) p-6 sm:p-8"
          )}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-(--v-butter) text-[#6b5410]">
              <PartyPopper className="size-5" aria-hidden="true" />
            </span>
            <p className={cn(eyebrow, "text-(--v-primary)")}>Bring a blanket</p>
          </div>
          <h2 id={`${eventsAnchor}-title`} className={cardTitle}>
            Happening in the parks
          </h2>
          <p className="mt-2 text-base leading-relaxed text-(--v-muted)">
            Concerts, art fairs and community ceremonies. Pick one to see where
            it happens.
          </p>

          <ul
            aria-labelledby={`${eventsAnchor}-title`}
            className="mt-5 flex flex-col gap-1"
          >
            {parkEvents.map((event) => {
              const park = findPark(event.parkId)
              return (
                <li key={event.name}>
                  <a
                    href={`#${event.parkId}`}
                    className={cn(
                      focusRing,
                      "group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-(--v-text) transition-colors hover:bg-(--v-mint) focus-visible:ring-offset-(--v-card)"
                    )}
                  >
                    {park ? (
                      <span
                        className={cn(
                          "inline-flex size-10 shrink-0 items-center justify-center rounded-full",
                          parkTint(park)
                        )}
                      >
                        <ParkIcon park={park} className="size-5" />
                      </span>
                    ) : null}
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          heading,
                          "block text-base leading-snug font-bold sm:text-[1.05rem]"
                        )}
                      >
                        {event.name}
                      </span>
                      <span className="block text-sm text-(--v-muted)">
                        <span className="sr-only">, at </span>
                        {event.where}
                      </span>
                    </span>
                    <ChevronRight
                      className="size-5 shrink-0 text-(--v-muted) transition-transform group-hover:translate-x-0.5 group-hover:text-(--v-primary)"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </section>

        <section
          id={rulesAnchor}
          aria-labelledby={`${rulesAnchor}-title`}
          className={cn(
            sectionAnchor,
            "flex flex-col rounded-[2rem] border border-[#f3c3cb] bg-(--v-rose)/60 p-6 sm:p-8"
          )}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#8a2e3c]">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <p className={cn(eyebrow, "text-[#8a2e3c]")}>Be a good neighbor</p>
          </div>
          <h2 id={`${rulesAnchor}-title`} className={cardTitle}>
            Park rules
          </h2>
          <ul
            aria-labelledby={`${rulesAnchor}-title`}
            className="mt-4 flex flex-col gap-3"
          >
            {parkRules.general.map((rule) => (
              <li
                key={rule}
                className="flex items-start gap-3 rounded-2xl bg-white p-4 text-[0.95rem] leading-snug text-(--v-text)"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.4rem] size-2 shrink-0 rounded-full bg-[#8a2e3c]"
                />
                {rule}
              </li>
            ))}
          </ul>
          <p className="mt-auto flex items-start gap-3 pt-5 text-[0.95rem] leading-snug text-(--v-text)">
            <Info
              className="mt-0.5 size-4 shrink-0 text-[#8a2e3c]"
              aria-hidden="true"
            />
            <span>{parkRules.note}</span>
          </p>
        </section>
      </Container>
    </div>
  )
}
