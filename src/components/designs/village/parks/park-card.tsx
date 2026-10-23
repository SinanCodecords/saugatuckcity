import { ArrowUp, MapPin, Ruler, ShieldCheck } from "lucide-react"

import type { Park } from "@/content/parks"
import { cn } from "@/lib/utils"

import { PillLink, heading } from "../shared"
import { cardShadow, sectionAnchor } from "../about/shared"
import { CallPill } from "../departments/call-pill"
import { ParkIcon, beachAnchor, parkTint } from "./shared"

const label = cn(
  heading,
  "text-xs font-bold tracking-wide text-(--v-muted) uppercase"
)

/** Parks with more detail in the "Plan a beach day" section above. */
const moreAbove: Record<string, string> = {
  "oval-beach": "Passes & hours",
  "chain-ferry": "Ferry fares",
}

export function VillageParkCard({ park }: { park: Park }) {
  const { id, name, summary, location, size, features, rules, phone } = park
  const titleId = `${id}-title`
  const more = moreAbove[id]

  const details = [
    location && {
      label: "Location",
      value: location,
      icon: MapPin,
      pill: "bg-(--v-sky)",
      iconTone: "text-[#1f4f6b]",
    },
    size && {
      label: "Size",
      value: size,
      icon: Ruler,
      pill: "bg-(--v-peach)",
      iconTone: "text-[#8a4b12]",
    },
  ].filter((detail) => Boolean(detail)) as {
    label: string
    value: string
    icon: typeof MapPin
    pill: string
    iconTone: string
  }[]

  return (
    <article
      id={id}
      aria-labelledby={titleId}
      className={cn(
        sectionAnchor,
        cardShadow,
        "flex h-full flex-col rounded-3xl border border-(--v-line) bg-(--v-card) p-5 sm:p-7"
      )}
    >
      <div className="flex items-center gap-4">
        <span
          className={cn(
            "inline-flex size-14 shrink-0 items-center justify-center rounded-2xl",
            parkTint(park)
          )}
        >
          <ParkIcon park={park} className="size-6" />
        </span>
        <h3
          id={titleId}
          className={cn(
            heading,
            "min-w-0 text-xl leading-tight font-extrabold tracking-tight text-(--v-text) sm:text-2xl"
          )}
        >
          {name}
        </h3>
      </div>

      <p className="mt-4 text-[0.95rem] leading-relaxed text-(--v-muted) sm:text-base">
        {summary}
      </p>

      {details.length > 0 ? (
        <ul
          aria-label={`${name} details`}
          className="mt-5 flex flex-wrap gap-2"
        >
          {details.map((detail) => {
            const Icon = detail.icon
            return (
              <li
                key={detail.label}
                className={cn(
                  "inline-flex max-w-full items-start gap-1.5 rounded-2xl px-3 py-1.5 text-sm leading-snug font-semibold text-(--v-text)",
                  detail.pill
                )}
              >
                <Icon
                  className={cn("mt-0.5 size-3.5 shrink-0", detail.iconTone)}
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="sr-only">{detail.label}: </span>
                  {detail.value}
                </span>
              </li>
            )
          })}
        </ul>
      ) : null}

      {features.length > 0 ? (
        <>
          <h4 id={`${id}-features`} className={cn(label, "mt-6")}>
            What you&rsquo;ll find
          </h4>
          <ul
            aria-labelledby={`${id}-features`}
            className="mt-3 flex flex-wrap gap-2"
          >
            {features.map((feature) => (
              <li
                key={feature}
                className="rounded-full border border-(--v-mint-dark) bg-(--v-mint)/60 px-3 py-1 text-sm leading-snug font-semibold text-(--v-primary)"
              >
                {feature}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {rules && rules.length > 0 ? (
        <div className="mt-6 rounded-2xl border border-[#f1dfa6] bg-(--v-butter) p-4">
          <h4
            id={`${id}-rules`}
            className={cn(label, "flex items-center gap-2 text-[#6b5410]")}
          >
            <ShieldCheck className="size-4" aria-hidden="true" />
            Good to know
          </h4>
          <ul
            aria-labelledby={`${id}-rules`}
            className="mt-2.5 flex flex-col gap-1.5"
          >
            {rules.map((rule) => (
              <li
                key={rule}
                className="flex items-start gap-2.5 text-[0.95rem] leading-snug text-(--v-text)"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-[#6b5410]"
                />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {phone || more ? (
        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-5">
          {phone ? (
            <>
              <CallPill
                phone={phone}
                who={name}
                className="focus-visible:ring-offset-(--v-card)"
              />
              <span className="text-sm font-semibold text-(--v-text)">
                {phone}
              </span>
            </>
          ) : null}
          {more ? (
            <PillLink
              href={`#${beachAnchor}`}
              tone="secondary"
              className="h-9 px-4 text-sm focus-visible:ring-offset-(--v-card)"
            >
              {more}
              <ArrowUp className="size-4" aria-hidden="true" />
            </PillLink>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}
