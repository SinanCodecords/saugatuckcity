import { ClipboardList, Tent } from "lucide-react"

import { siteConfig } from "@/config/site"
import { masterPlan, reservePark } from "@/content/parks"
import { cn } from "@/lib/utils"

import { Container, heading } from "../shared"
import { initials, sectionAnchor } from "../about/shared"
import { CallPill } from "../departments/call-pill"
import { planAnchor, reserveAnchor } from "./shared"

const eyebrow = cn(heading, "text-sm font-bold tracking-wide uppercase")
const cardTitle = cn(
  heading,
  "mt-4 text-2xl font-extrabold tracking-tight text-(--v-text) sm:text-3xl"
)

/** A peach "Host an event" card beside a lavender master plan card. */
export function VillageHostAndPlan() {
  const { phone } = siteConfig.contact

  return (
    <div className="pb-4 sm:pb-6">
      <Container className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <section
          id={reserveAnchor}
          aria-labelledby={`${reserveAnchor}-title`}
          className={cn(
            sectionAnchor,
            "flex flex-col rounded-[2rem] border border-[#f6cfb2] bg-(--v-peach) p-6 sm:p-8"
          )}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#8a4b12]">
              <Tent className="size-5" aria-hidden="true" />
            </span>
            <p className={cn(eyebrow, "text-[#8a4b12]")}>Plan a gathering</p>
          </div>
          <h2 id={`${reserveAnchor}-title`} className={cardTitle}>
            {reservePark.title}
          </h2>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-(--v-text)">
            {reservePark.body}
          </p>

          <div className="mt-auto pt-6">
            <div className="flex flex-wrap items-center gap-3 rounded-3xl bg-white p-4">
              <span
                aria-hidden="true"
                className={cn(
                  heading,
                  "inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-(--v-peach) text-sm font-extrabold text-[#8a4b12]"
                )}
              >
                {initials("City Hall")}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={cn(
                    heading,
                    "leading-snug font-extrabold text-(--v-text)"
                  )}
                >
                  City Hall
                </p>
                <p className="text-sm leading-snug text-(--v-muted)">
                  Ask about a Private Event Use Permit
                </p>
                <p className="mt-0.5 text-sm font-semibold text-(--v-text)">
                  {phone}
                </p>
              </div>
              <CallPill
                phone={phone}
                who="City Hall about a park event permit"
                className="focus-visible:ring-offset-white"
              />
            </div>
          </div>
        </section>

        <section
          id={planAnchor}
          aria-labelledby={`${planAnchor}-title`}
          className={cn(
            sectionAnchor,
            "rounded-[2rem] border border-[#d6d0f2] bg-(--v-lavender) p-6 sm:p-8"
          )}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#4a3a8a]">
              <ClipboardList className="size-5" aria-hidden="true" />
            </span>
            <p className={cn(eyebrow, "text-[#4a3a8a]")}>Looking ahead</p>
          </div>
          <h2 id={`${planAnchor}-title`} className={cardTitle}>
            {masterPlan.title}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-(--v-text)">
            {masterPlan.body}
          </p>
        </section>
      </Container>
    </div>
  )
}
