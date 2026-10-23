import { ArrowDown } from "lucide-react"

import { container, SectionHeading, serif } from "../about/shared"
import { groupedBoards } from "./shared"

const columnHead =
  "pb-3 text-left text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink-soft) uppercase"

/** Only boards with a regular schedule appear, grouped as they are below. */
const scheduled = groupedBoards
  .map((group) => ({
    ...group,
    boards: group.boards.filter((board) => board.meets),
  }))
  .filter((group) => group.boards.length > 0)

/**
 * An editorial timetable. Below `sm` each row stacks (name, then when, then
 * where) and the column headings move to small inline labels.
 */
export function DunesBoardsCalendar() {
  return (
    <section
      id="calendar"
      aria-labelledby="dn-boards-calendar"
      className="scroll-mt-56 border-t border-(--dn-rule) bg-(--dn-bg-deep)/40"
    >
      <div className={`${container} py-14 lg:py-20`}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <SectionHeading
              id="dn-boards-calendar"
              label="The calendar"
              title="Meeting schedule at a glance"
            />
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-(--dn-ink-soft) lg:col-span-4 lg:col-start-9">
            Regular meetings of every board that keeps a schedule. Select a
            board to read more about it.
          </p>
        </div>

        <table className="mt-8 w-full border-collapse max-sm:block lg:mt-12">
          <caption className="sr-only">When and where each board meets</caption>
          <thead className="max-sm:sr-only">
            <tr>
              <th scope="col" className={`${columnHead} sm:w-[42%] sm:pr-6`}>
                Board
              </th>
              <th scope="col" className={`${columnHead} sm:w-[33%] sm:pr-6`}>
                When
              </th>
              <th scope="col" className={columnHead}>
                Where
              </th>
            </tr>
          </thead>
          {scheduled.map((group) => (
            <tbody
              key={group.id}
              className="border-t border-(--dn-ink) max-sm:block"
            >
              <tr className="max-sm:block">
                <th
                  scope="rowgroup"
                  colSpan={3}
                  className="pt-4 pb-1 text-left text-[11px] font-semibold tracking-[0.22em] text-(--dn-terra) uppercase max-sm:block"
                >
                  {group.title}
                </th>
              </tr>
              {group.boards.map((board) => (
                <tr
                  key={board.id}
                  className="border-b border-(--dn-rule) last:border-b-0 max-sm:flex max-sm:flex-col max-sm:gap-1.5 max-sm:py-4"
                >
                  <th
                    scope="row"
                    className="text-left align-baseline font-normal sm:py-4 sm:pr-6"
                  >
                    <a
                      href={`#${board.id}`}
                      className={`group inline-flex items-baseline gap-2 rounded-sm ${serif} text-xl leading-snug text-(--dn-ink) transition-colors hover:text-(--dn-teal) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--dn-teal) sm:text-[22px]`}
                    >
                      {board.name}
                      <ArrowDown
                        className="size-3.5 shrink-0 self-center text-(--dn-terra) transition-transform duration-200 group-hover:translate-y-0.5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </a>
                  </th>
                  <td className="align-baseline text-[12px] tracking-[0.14em] text-(--dn-ink) uppercase tabular-nums sm:py-4 sm:pr-6">
                    <span
                      aria-hidden="true"
                      className="mr-2 font-semibold text-(--dn-ink-soft) sm:hidden"
                    >
                      When
                    </span>
                    {board.meets}
                  </td>
                  <td className="align-baseline text-[15px] leading-relaxed text-(--dn-ink-soft) sm:py-4">
                    <span
                      aria-hidden="true"
                      className="mr-2 text-[11px] font-semibold tracking-[0.14em] uppercase sm:hidden"
                    >
                      Where
                    </span>
                    {board.where}
                  </td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </section>
  )
}
