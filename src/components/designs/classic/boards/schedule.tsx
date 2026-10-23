import { SectionHeading } from "../about/ui"
import { boardIcons, fallbackBoardIcon } from "./icons"
import { countLabel, scheduledBoards, scheduleId } from "./utils"

const titleId = `${scheduleId}-title`
const cellClass = "px-4 py-3 align-top sm:px-5"
const headClass = `${cellClass} text-[11px] font-semibold tracking-[0.2em] text-(--ink) uppercase`

/** Every board with a regular meeting time, as one compact table. */
export function MeetingSchedule() {
  return (
    <section id={scheduleId} aria-labelledby={titleId} className="scroll-mt-32">
      <SectionHeading
        id={titleId}
        aside={countLabel(scheduledBoards.length, "board", "boards")}
      >
        Meeting schedule at a glance
      </SectionHeading>

      {/* Narrow screens scroll the table inside this box, never the page */}
      <div
        role="region"
        aria-labelledby={titleId}
        tabIndex={0}
        className="mt-6 overflow-x-auto rounded-md border border-(--rule) bg-white focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
      >
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
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
                      className="group inline-flex items-start gap-2.5 text-(--ink) hover:text-(--blue-text) focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
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
                  <td className={`${cellClass} text-(--body)`}>
                    {board.meets}
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
