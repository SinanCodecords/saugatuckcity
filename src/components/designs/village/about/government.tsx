import {
  CalendarDays,
  Landmark,
  MapPin,
  ScrollText,
  Users,
  Vote,
} from "lucide-react"

import { government } from "@/content/about"
import { cn } from "@/lib/utils"

import { Container, SectionHeading, heading } from "../shared"
import { cardShadow, initials, sectionAnchor, tint } from "./shared"

/** A friendly three-step reading of `government.summary`. */
const steps = [
  { label: "Residents elect the Council", icon: Vote },
  { label: "The Council sets policy and the budget", icon: Users },
  { label: "The City Manager runs the day to day", icon: ScrollText },
]

export function VillageAboutGovernment() {
  const { manager, council, meetings, summary, where } = government

  return (
    <section
      id="village-government"
      aria-labelledby="village-gov-title"
      className={cn(sectionAnchor, "py-12 sm:py-16")}
    >
      <Container>
        <SectionHeading
          id="village-gov-title"
          eyebrow="Your local government"
          title="How the City is run"
          description="Who makes the decisions, who carries them out, and when you can drop in."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <article
            aria-labelledby="village-gov-explainer"
            className={cn(
              cardShadow,
              "rounded-3xl border border-(--v-line) bg-(--v-card) p-6 sm:p-8"
            )}
          >
            <span className="inline-flex size-13 items-center justify-center rounded-full bg-(--v-lavender) text-[#4a3a8a]">
              <Landmark className="size-6" aria-hidden="true" />
            </span>
            <h3
              id="village-gov-explainer"
              className={cn(
                heading,
                "mt-4 text-2xl font-extrabold tracking-tight text-(--v-text)"
              )}
            >
              A Council&ndash;Manager city
            </h3>
            <p className="mt-3 text-base leading-relaxed text-(--v-muted) sm:text-[1.05rem]">
              {summary}
            </p>

            <ol className="mt-6 grid gap-3 sm:grid-cols-3">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <li
                    key={step.label}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl p-4 sm:flex-col sm:items-start",
                      tint(index + 1)
                    )}
                  >
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/70">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span
                      className={cn(
                        heading,
                        "text-[0.95rem] leading-snug font-bold text-(--v-text)"
                      )}
                    >
                      <span className="sr-only">Step {index + 1}: </span>
                      {step.label}
                    </span>
                  </li>
                )
              })}
            </ol>
          </article>

          <div className="flex flex-col gap-5">
            <article
              aria-labelledby="village-gov-manager"
              className={cn(
                cardShadow,
                "flex flex-col gap-5 rounded-3xl border border-(--v-line) bg-(--v-card) p-6 sm:flex-row sm:items-start sm:p-7"
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  heading,
                  "inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-(--v-primary) text-xl font-extrabold text-white ring-4 ring-(--v-mint)"
                )}
              >
                {initials(manager.name)}
              </span>
              <div>
                <p
                  className={cn(
                    heading,
                    "text-xs font-bold tracking-wide text-(--v-primary) uppercase"
                  )}
                >
                  {manager.title}
                </p>
                <h3
                  id="village-gov-manager"
                  className={cn(
                    heading,
                    "mt-0.5 text-xl font-extrabold text-(--v-text)"
                  )}
                >
                  {manager.name}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-(--v-muted)">
                  {manager.summary}
                </p>
              </div>
            </article>

            <aside
              aria-labelledby="village-gov-meetings"
              className="flex-1 rounded-3xl border border-(--v-mint-dark) bg-(--v-mint) p-6 sm:p-7"
            >
              <h3
                id="village-gov-meetings"
                className={cn(
                  heading,
                  "text-xl font-extrabold text-(--v-primary)"
                )}
              >
                Come to a meeting
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {meetings.map((meeting) => (
                  <li key={meeting.label} className="flex items-start gap-3">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-(--v-primary)">
                      <CalendarDays className="size-4.5" aria-hidden="true" />
                    </span>
                    <span>
                      <span
                        className={cn(
                          heading,
                          "block font-bold text-(--v-text)"
                        )}
                      >
                        {meeting.label}
                      </span>
                      <span className="block text-[0.95rem] text-(--v-text)/80">
                        {meeting.when}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex items-start gap-3 border-t border-(--v-mint-dark) pt-4 text-[0.95rem] leading-relaxed text-(--v-text)">
                <MapPin
                  className="mt-0.5 size-4.5 shrink-0 text-(--v-primary)"
                  aria-hidden="true"
                />
                {where}
              </p>
            </aside>
          </div>
        </div>

        <div className="mt-12">
          <h3
            id="village-council-title"
            className={cn(
              heading,
              "text-2xl font-extrabold tracking-tight text-(--v-text)"
            )}
          >
            Meet your City Council
          </h3>
          <p className="mt-1 text-base text-(--v-muted)">
            {council.length} neighbors, elected at large.
          </p>

          <ul
            aria-labelledby="village-council-title"
            className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
          >
            {council.map((member, index) => {
              const featured = index === 0
              return (
                <li
                  key={member.name}
                  className={cn(
                    cardShadow,
                    "flex items-center gap-4 rounded-3xl border border-(--v-line) bg-(--v-card) p-5",
                    featured &&
                      "border-(--v-mint-dark) bg-(--v-mint)/60 sm:col-span-2"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      heading,
                      "inline-flex size-14 shrink-0 items-center justify-center rounded-full text-lg font-extrabold",
                      featured
                        ? "bg-(--v-primary) text-white ring-4 ring-white"
                        : tint(index)
                    )}
                  >
                    {initials(member.name)}
                  </span>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        heading,
                        "text-lg leading-tight font-extrabold text-(--v-text)",
                        featured && "sm:text-xl"
                      )}
                    >
                      {member.name}
                    </p>
                    <p
                      className={cn(
                        heading,
                        "mt-0.5 text-sm font-bold text-(--v-primary)"
                      )}
                    >
                      {member.role}
                    </p>
                    <p className="mt-0.5 text-sm text-(--v-muted)">
                      Term ends {member.termEnds}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
