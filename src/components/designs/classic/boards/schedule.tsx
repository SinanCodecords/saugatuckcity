import { CalendarClock, MapPin } from "lucide-react"

import { keepTimes, SectionHeading } from "../about/ui"
import { boardIcons, fallbackBoardIcon } from "./icons"
import { countLabel, scheduledBoards, scheduleId } from "./utils"

const titleId = `${scheduleId}-title`
const cellClass = "px-4 py-3 align-top sm:px-5"
const headClass = `${cellClass} text-[11px] font-semibold tracking-[0.2em] text-(--ink) uppercase`

/** Every board with a regular meeting time, as one compact table. */
export function MeetingSchedule() {
  return (
    <section id={scheduleId} aria-labelledby={titleId} className="scroll-mt-38">
      <SectionHeading
        id={titleId}
        aside={countLabel(scheduledBoards.length, "board", "boards")}
      >
        Meeting schedule at a glance
      </SectionHeading>

      {/* Phones: one stacked row per board, so nothing is hidden behind a sideways scroll */}
      <ul className="mt-6 divide-y divide-(--rule) overflow-hidden rounded-md border border-(--rule) bg-white sm:hidden">
        {scheduledBoards.map((board) => {
          const Icon = boardIcons[board.icon] ?? fallbackBoardIcon
          return (
            <li key={board.id} className="flex gap-3 px-4 py-3.5">
              <Icon
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-(--blue)"
              />
              <div className="min-w-0 flex-1 text-sm">
                <a
                  href={`#${board.id}`}
                  className="inline-block py-0.5 font-semibold text-(--ink) hover:text-(--blue-text) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
                >
                  {board.name}
                </a>
                <dl className="mt-1 space-y-1 text-(--body)">
                  <div className="flex gap-2">
                    <dt className="shrink-0">
                      <CalendarClock
                        aria-hidden="true"
                        className="mt-0.5 size-3.5 text-(--muted)"
                      />
                      <span className="sr-only">When</span>
                    </dt>
                    <dd className="min-w-0">{keepTimes(board.meets ?? "")}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0">
                      <MapPin
                        aria-hidden="true"
                        className="mt-0.5 size-3.5 text-(--muted)"
                      />
                      <span className="sr-only">Where</span>
                    </dt>
                    <dd className="min-w-0">
                      {board.where ?? "To be announced"}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="mt-6 hidden overflow-hidden rounded-md border border-(--rule) bg-white sm:block">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            Regular meeting times and places for each board. Select a board to
            jump to its details.
          </caption>
          <thead className="border-b border-(--rule) bg-(--band)">
            <tr>
              <th scope="col" className={`${headClass} w-[38%]`}>
                Board
              </th>
              <th scope="col" className={`${headClass} w-[34%]`}>
                When
              </th>
              <th scope="col" className={headClass}>
                Where
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-(--rule)">
            {scheduledBoards.map((board) => {
              const Icon = boardIcons[board.icon] ?? fallbackBoardIcon
              return (
                <tr key={board.id} className="hover:bg-(--blue-pale)/60">
                  <th scope="row" className={`${cellClass} font-semibold`}>
                    <a
                      href={`#${board.id}`}
                      className="group -my-0.5 inline-flex items-start gap-2.5 py-0.5 text-(--ink) hover:text-(--blue-text) focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
                    >
                      <Icon
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-(--blue)"
                      />
                      <span className="group-hover:underline">
                        {board.name}
                      </span>
                    </a>
                  </th>
                  <td className={`${cellClass} text-pretty text-(--body)`}>
                    {keepTimes(board.meets ?? "")}
                  </td>
                  <td className={`${cellClass} text-(--body)`}>
                    {board.where ?? "To be announced"}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
