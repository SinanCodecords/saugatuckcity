import { ArrowRight } from "lucide-react"

import { ovalBeach } from "@/content/parks"

import { textLink, Widget } from "../about/ui"
import { dayPass, ovalBeachId } from "./utils"

const termClass =
  "text-[11px] font-semibold tracking-[0.2em] text-(--muted) uppercase"

/** Sidebar summary of the beach basics: season, hours and the day pass price. */
export function OvalBeachTodayWidget({ id }: { id: string }) {
  return (
    <Widget id={id} title={`${ovalBeach.name} today`}>
      <dl className="space-y-3 text-sm">
        <div>
          <dt className={termClass}>Season</dt>
          <dd className="mt-1 text-(--body)">{ovalBeach.season}</dd>
        </div>
        <div>
          <dt className={termClass}>Hours</dt>
          <dd className="mt-1 font-semibold text-(--ink) tabular-nums">
            {ovalBeach.hours}
          </dd>
        </div>
        <div>
          <dt className={termClass}>{dayPass.label}</dt>
          <dd className="mt-1 flex flex-wrap items-baseline gap-x-2">
            <span className="text-2xl font-semibold tracking-tight text-(--blue-text) tabular-nums">
              {dayPass.price}
            </span>
            {"note" in dayPass ? (
              <span className="text-xs text-(--muted)">{dayPass.note}</span>
            ) : null}
          </dd>
        </div>
      </dl>
      <a href={`#${ovalBeachId}`} className={`${textLink} mt-4`}>
        All passes and parking
        <ArrowRight aria-hidden="true" className="size-4" />
      </a>
    </Widget>
  )
}
