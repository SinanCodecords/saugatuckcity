import { CalendarClock, ExternalLink, MapPin, UsersRound } from "lucide-react"

import type { Board } from "@/content/boards"

import { keepTimes, textLink } from "../about/ui"
import { SubHeading, websiteLabel } from "../departments/department-panel"
import { boardIcons, fallbackBoardIcon } from "./icons"

/** One current board as a bordered panel with a grey title band, like the Departments panels. */
export function BoardPanel({ board }: { board: Board }) {
  const { id, name, summary, meets, where, members, website } = board
  const Icon = boardIcons[board.icon] ?? fallbackBoardIcon
  const titleId = `${id}-title`

  const details = [
    { label: "Meets", value: meets, icon: CalendarClock },
    { label: "Where", value: where, icon: MapPin },
    { label: "Members", value: members, icon: UsersRound },
  ].filter((detail) => detail.value)
  const hasAside = details.length > 0 || website

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="scroll-mt-38 overflow-hidden rounded-md border border-(--rule) bg-white"
    >
      <div className="flex items-center gap-3 border-b border-(--rule) bg-(--band) px-5 py-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-(--rule) bg-white text-(--blue-text)">
          <Icon aria-hidden="true" className="size-[18px]" />
        </span>
        <h3
          id={titleId}
          className="min-w-0 text-base leading-snug font-semibold text-balance text-(--ink) sm:text-lg"
        >
          {name}
        </h3>
      </div>

      <div
        className={
          hasAside
            ? "grid divide-y divide-(--rule) md:grid-cols-2 md:divide-x md:divide-y-0"
            : undefined
        }
      >
        {/* Left: what the board does */}
        <div className="px-5 py-5">
          <p className="text-sm leading-relaxed text-(--body)">{summary}</p>
        </div>

        {/* Right: when, where and who */}
        {hasAside ? (
          <div className="space-y-5 px-5 py-5">
            {details.length > 0 ? (
              <div>
                <SubHeading>Details</SubHeading>
                <dl className="mt-2.5 space-y-2.5 text-sm">
                  {details.map((detail) => (
                    <div key={detail.label} className="flex gap-3">
                      <detail.icon
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-(--blue)"
                      />
                      <div className="min-w-0">
                        <dt className="sr-only">{detail.label}</dt>
                        <dd className="text-(--body)">
                          {keepTimes(detail.value ?? "")}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}

            {website ? (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className={textLink}
              >
                Visit {websiteLabel(website)}
                <ExternalLink aria-hidden="true" className="size-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
