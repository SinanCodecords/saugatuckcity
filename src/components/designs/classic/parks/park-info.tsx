import type { ReactNode } from "react"
import {
  ArrowUp,
  CalendarDays,
  ClipboardList,
  PartyPopper,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { masterPlan, parkEvents, parkRules, reservePark } from "@/content/parks"

import { SectionHeading } from "../about/ui"
import { countLabel } from "../boards/utils"
import { PhoneLink } from "../departments/department-panel"
import { Note } from "./ui"
import { eventsId, rulesId } from "./utils"

/** Annual events, each jumping to the park that hosts it. */
export function ParkEvents() {
  const titleId = `${eventsId}-title`
  return (
    <section id={eventsId} aria-labelledby={titleId} className="scroll-mt-38">
      <SectionHeading
        id={titleId}
        aside={countLabel(parkEvents.length, "event", "events")}
      >
        Events in the parks
      </SectionHeading>

      {/* 1px gaps over a rule-colored background give thin dividers in any grid shape */}
      <ul className="mt-6 grid gap-px overflow-hidden rounded-md border border-(--rule) bg-(--rule) sm:grid-cols-2">
        {parkEvents.map((event) => (
          <li key={event.name} className="bg-white">
            <a
              href={`#${event.parkId}`}
              className="group flex h-full items-start gap-3 px-5 py-4 transition-colors hover:bg-(--blue-pale) focus-visible:bg-(--blue-pale) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none focus-visible:ring-inset"
            >
              <CalendarDays
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-(--blue)"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-sm leading-snug font-semibold text-(--ink) group-hover:text-(--blue-text) group-hover:underline">
                  {event.name}
                </span>
                <span className="mt-1 block text-xs text-(--muted)">
                  <span className="sr-only">, at </span>
                  {event.where}
                </span>
              </span>
              <ArrowUp
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-(--muted) transition-colors group-hover:text-(--blue-text)"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** City-wide park rules as a bordered list, plus the ordinance note. */
export function ParkRules() {
  const titleId = `${rulesId}-title`
  return (
    <section id={rulesId} aria-labelledby={titleId} className="scroll-mt-38">
      <SectionHeading id={titleId}>Park rules</SectionHeading>
      <ul className="mt-6 divide-y divide-(--rule) overflow-hidden rounded-md border border-(--rule) bg-white">
        {parkRules.general.map((rule) => (
          <li
            key={rule}
            className="flex gap-3 px-5 py-3.5 text-sm leading-relaxed text-(--body)"
          >
            <ShieldCheck
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-(--blue)"
            />
            <span>{rule}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <Note>{parkRules.note}</Note>
      </div>
    </section>
  )
}

function Callout({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string
  icon: LucideIcon
  title: string
  children: ReactNode
}) {
  return (
    <section
      aria-labelledby={id}
      className="flex h-full flex-col rounded-md border border-l-4 border-(--rule) border-l-(--blue) bg-(--blue-pale) px-5 py-6 sm:px-6"
    >
      <h2
        id={id}
        className="flex items-start gap-2.5 text-xl font-semibold tracking-tight text-balance text-(--ink)"
      >
        <Icon
          aria-hidden="true"
          className="mt-1 size-5 shrink-0 text-(--blue-text)"
        />
        {title}
      </h2>
      {children}
    </section>
  )
}

/** "Host an event in a park" and the master plan, as blue-pale callouts like "Serve on a board". */
export function ParkCallouts() {
  const { phone } = siteConfig.contact
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Callout
        id="classic-parks-reserve"
        icon={PartyPopper}
        title={reservePark.title}
      >
        <p className="mt-3 text-sm leading-relaxed text-(--body)">
          {reservePark.body}
        </p>
        <p className="mt-4 text-sm">
          <PhoneLink phone={phone} who="City Hall about a park event permit" />
        </p>
      </Callout>

      <Callout
        id="classic-parks-master-plan"
        icon={ClipboardList}
        title={masterPlan.title}
      >
        <p className="mt-3 text-sm leading-relaxed text-(--body)">
          {masterPlan.body}
        </p>
      </Callout>
    </div>
  )
}
