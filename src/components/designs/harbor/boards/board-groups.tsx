import { boardGroups, boards, type Board } from "@/content/boards"

import { balancedCell, balancedGrid } from "../card-grid"
import { BoardCard, PastBoardCard } from "./board-card"
import { boardGroupIcons } from "./icons"

const countNouns: Record<Board["group"], [string, string]> = {
  city: ["board", "boards"],
  "task-force": ["task force", "task forces"],
  shared: ["authority", "authorities"],
  past: ["committee", "committees"],
}

export function BoardGroups() {
  return (
    <div className="bg-white pt-14 pb-14 lg:pt-20 lg:pb-20">
      <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:space-y-20 lg:px-8">
        {boardGroups.map((group) => {
          const members = boards.filter((board) => board.group === group.id)
          const GroupIcon = boardGroupIcons[group.id]
          const headingId = `harbor-boards-group-${group.id}-heading`
          const isPast = group.id === "past"
          const [singular, plural] = countNouns[group.id]

          return (
            <section key={group.id} aria-labelledby={headingId}>
              <div
                className={`flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b-2 pb-3 ${
                  isPast ? "border-slate-300" : "border-(--navy)"
                }`}
              >
                <div className="min-w-0">
                  <h2
                    id={headingId}
                    className={`flex items-center gap-2.5 font-semibold tracking-tight ${
                      isPast
                        ? "text-xl text-slate-700 sm:text-2xl"
                        : "text-2xl text-(--navy) sm:text-3xl"
                    }`}
                  >
                    <GroupIcon
                      aria-hidden="true"
                      className={`size-6 shrink-0 ${
                        isPast ? "text-slate-400" : "text-(--gold)"
                      }`}
                    />
                    {group.title}
                  </h2>
                  <p className="mt-1 text-sm text-pretty text-slate-600">
                    {group.description}
                  </p>
                </div>
                <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                  {members.length} {members.length === 1 ? singular : plural}
                </p>
              </div>

              {isPast ? (
                <ul className={`mt-6 gap-3 ${balancedGrid("sm", "lg")}`}>
                  {members.map((board, index) => (
                    <li
                      key={board.id}
                      className={balancedCell(
                        index,
                        members.length,
                        "sm",
                        "lg"
                      )}
                    >
                      <PastBoardCard board={board} />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul
                  className={`mt-6 gap-5 lg:gap-6 ${balancedGrid("md", "xl")}`}
                >
                  {members.map((board, index) => (
                    <li
                      key={board.id}
                      className={balancedCell(
                        index,
                        members.length,
                        "md",
                        "xl"
                      )}
                    >
                      <BoardCard board={board} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}
