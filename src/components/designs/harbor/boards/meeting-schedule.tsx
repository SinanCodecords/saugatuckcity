import { CalendarClock } from "lucide-react"

import { boards } from "@/content/boards"

const scheduled = boards.filter((board) => board.meets)

const columnHeading =
  "px-3 py-3 text-left text-xs font-semibold tracking-wide text-(--navy) uppercase first:pl-5 last:pr-5 sm:px-4 sm:first:pl-7 sm:last:pr-7 lg:first:pl-8 lg:last:pr-8"

const cell =
  "px-3 py-3.5 align-top text-sm first:pl-5 last:pr-5 sm:px-4 sm:first:pl-7 sm:last:pr-7 lg:first:pl-8 lg:last:pr-8"

export function MeetingSchedule() {
  return (
    <section
      aria-labelledby="harbor-schedule-heading"
      className="relative z-10 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-16 overflow-hidden rounded-lg border border-t-3 border-slate-200 border-t-(--gold) bg-white shadow-[0_12px_40px_-12px_rgba(11,37,69,0.35)] sm:-mt-20 lg:-mt-24">
          <div className="flex items-start gap-4 border-b border-slate-200 px-5 py-5 sm:px-7 lg:px-8">
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm"
            >
              <CalendarClock className="size-5" />
            </span>
            <div className="min-w-0">
              <h2
                id="harbor-schedule-heading"
                className="text-2xl font-semibold tracking-tight text-(--navy)"
              >
                Meeting schedule
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Regular meetings at a glance. Select a board for details.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <caption className="sr-only">
                Regular meeting times and places for each board
              </caption>
              <thead className="bg-slate-50">
                <tr className="border-b-2 border-(--navy)">
                  <th scope="col" className={columnHeading}>
                    Board
                  </th>
                  <th scope="col" className={columnHeading}>
                    When
                  </th>
                  <th
                    scope="col"
                    className={`hidden sm:table-cell ${columnHeading}`}
                  >
                    Where
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scheduled.map((board) => (
                  <tr
                    key={board.id}
                    className="transition-colors hover:bg-slate-50"
                  >
                    <th
                      scope="row"
                      className={`${cell} w-[45%] text-left font-semibold sm:w-[38%]`}
                    >
                      <a
                        href={`#${board.id}`}
                        className="group inline-flex items-start gap-2.5 rounded text-slate-900 hover:text-(--navy) focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-3 w-1 shrink-0 rounded-full bg-(--gold)"
                        />
                        <span className="underline decoration-transparent decoration-2 underline-offset-4 group-hover:decoration-(--gold)">
                          {board.name}
                        </span>
                      </a>
                    </th>
                    <td className={`${cell} text-slate-700`}>
                      {board.meets}
                      {board.where ? (
                        <span className="mt-1 block text-xs text-slate-600 sm:hidden">
                          {board.where}
                        </span>
                      ) : null}
                    </td>
                    <td
                      className={`${cell} hidden text-slate-600 sm:table-cell`}
                    >
                      {board.where}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
