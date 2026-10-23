import type { ReactNode } from "react"
import {
  CalendarDays,
  ChevronDown,
  ShieldCheck,
  Ship,
  Sun,
  type LucideIcon,
} from "lucide-react"

import { chainFerry, ovalBeach, parks } from "@/content/parks"

import { countLabel } from "../boards/utils"
import { Chevron, linkClass } from "../departments/jump-nav"
import { areaIcons } from "./icons"
import {
  areaId,
  chainFerryId,
  eventsId,
  groupedParks,
  ovalBeachId,
  rulesId,
} from "./utils"

function JumpLink({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: LucideIcon
  children: ReactNode
}) {
  return (
    <a href={href} className={linkClass}>
      <Icon
        aria-hidden="true"
        className="mt-0.5 size-4 shrink-0 text-(--blue)"
      />
      <span className="min-w-0 flex-1">{children}</span>
      <Chevron />
    </a>
  )
}

/** The jump list, in main-column order. `idPrefix` keeps ids unique per copy. */
function JumpLinks({ idPrefix }: { idPrefix: string }) {
  const areasLabelId = `${idPrefix}-areas`
  return (
    <ul>
      <li>
        <JumpLink href={`#${ovalBeachId}`} icon={Sun}>
          {ovalBeach.name}
        </JumpLink>
      </li>
      <li className="border-b border-(--rule)">
        <JumpLink href={`#${chainFerryId}`} icon={Ship}>
          {chainFerry.name}
        </JumpLink>
      </li>
      <li className="border-b border-(--rule)">
        <p
          id={areasLabelId}
          className="px-5 pt-3.5 pb-1 text-[11px] font-semibold tracking-[0.2em] text-(--muted) uppercase"
        >
          Parks by area
        </p>
        <ul aria-labelledby={areasLabelId} className="pb-1.5">
          {groupedParks.map((area) => (
            <li key={area.id}>
              <JumpLink href={`#${areaId(area.id)}`} icon={areaIcons[area.id]}>
                {area.title}
                <span className="ml-1.5 text-xs font-normal text-(--muted)">
                  ({area.parks.length})
                </span>
              </JumpLink>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <JumpLink href={`#${eventsId}`} icon={CalendarDays}>
          Events in the parks
        </JumpLink>
      </li>
      <li>
        <JumpLink href={`#${rulesId}`} icon={ShieldCheck}>
          Park rules
        </JumpLink>
      </li>
    </ul>
  )
}

/** Desktop sidebar version: always open, styled like the home page widgets. */
export function ParksJumpNav() {
  return (
    <nav
      aria-labelledby="classic-parks-jump-nav"
      className="overflow-hidden rounded-md border border-(--rule) bg-white"
    >
      <h2
        id="classic-parks-jump-nav"
        className="border-b border-(--rule) bg-(--band) px-5 py-3 text-[11px] font-semibold tracking-[0.25em] text-(--ink) uppercase"
      >
        On this page
      </h2>
      <JumpLinks idPrefix="classic-parks-jump" />
    </nav>
  )
}

/** Mobile version: the same links in a disclosure so they don't push content down. */
export function ParksJumpNavDisclosure() {
  return (
    <details className="group overflow-hidden rounded-md border border-(--rule) bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 bg-(--band) px-5 py-3.5 text-[11px] font-semibold tracking-[0.25em] text-(--ink) uppercase group-open:border-b group-open:border-(--rule) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none focus-visible:ring-inset [&::-webkit-details-marker]:hidden">
        <span>
          On this page
          <span className="ml-2 font-medium tracking-normal text-(--muted) normal-case">
            ({countLabel(parks.length, "park", "parks")})
          </span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className="size-4 shrink-0 text-(--blue-text) transition-transform group-open:rotate-180"
        />
      </summary>
      <nav aria-label="On this page">
        <JumpLinks idPrefix="classic-parks-jump-mobile" />
      </nav>
    </details>
  )
}
