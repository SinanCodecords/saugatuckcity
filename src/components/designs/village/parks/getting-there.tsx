import { Bus, Footprints, Ship, type LucideIcon } from "lucide-react"

import { gettingToTheBeach } from "@/content/parks"
import { cn } from "@/lib/utils"

import { Container, SectionHeading, heading } from "../shared"
import { sectionAnchor } from "../about/shared"
import { CallPill } from "../departments/call-pill"
import { gettingThereAnchor } from "./shared"

/** Pastel per step; text tones pass AA on each tint. */
const steps: { icon: LucideIcon; card: string; ink: string; ring: string }[] = [
  {
    icon: Ship,
    card: "border-[#c4e0ef] bg-(--v-sky)",
    ink: "text-[#1f4f6b]",
    ring: "focus-visible:ring-offset-(--v-sky)",
  },
  {
    icon: Footprints,
    card: "border-(--v-mint-dark) bg-(--v-mint)",
    ink: "text-(--v-primary)",
    ring: "focus-visible:ring-offset-(--v-mint)",
  },
  {
    icon: Bus,
    card: "border-[#f6cfb2] bg-(--v-peach)",
    ink: "text-[#8a4b12]",
    ring: "focus-visible:ring-offset-(--v-peach)",
  },
]

export function VillageGettingThere() {
  return (
    <section
      id={gettingThereAnchor}
      aria-labelledby={`${gettingThereAnchor}-title`}
      className={cn(sectionAnchor, "py-10 sm:py-14")}
    >
      <Container>
        <SectionHeading
          id={`${gettingThereAnchor}-title`}
          eyebrow="Leave the car at home"
          title={gettingToTheBeach.title}
          description="Three easy ways to reach the sand, and skip the hunt for a parking spot."
        />

        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {gettingToTheBeach.options.map((option, index) => {
            const step = steps[index % steps.length]
            const Icon = step.icon
            const phone = "phone" in option ? option.phone : undefined
            return (
              <li
                key={option.label}
                className={cn(
                  "flex flex-col rounded-3xl border p-6 sm:p-7",
                  step.card
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    aria-hidden="true"
                    className={cn(
                      heading,
                      "inline-flex size-12 items-center justify-center rounded-full bg-white text-xl font-extrabold",
                      step.ink
                    )}
                  >
                    {index + 1}
                  </span>
                  <Icon className={cn("size-7", step.ink)} aria-hidden="true" />
                </div>
                <h3
                  className={cn(
                    heading,
                    "mt-5 text-xl leading-tight font-extrabold tracking-tight text-(--v-text) sm:text-2xl"
                  )}
                >
                  <span className="sr-only">Option {index + 1}: </span>
                  {option.label}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-(--v-text) sm:text-base">
                  {option.body}
                </p>
                {phone ? (
                  <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-5">
                    <CallPill
                      phone={phone}
                      who={`the ${option.label}`}
                      className={step.ring}
                    />
                    <span className="text-sm font-semibold text-(--v-text)">
                      {phone}
                    </span>
                  </div>
                ) : null}
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
