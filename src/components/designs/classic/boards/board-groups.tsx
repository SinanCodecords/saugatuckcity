import type { Board } from "@/content/boards"

import { SectionHeading } from "../about/ui"
import { BoardPanel } from "./board-panel"
import { boardIcons, fallbackBoardIcon } from "./icons"
import {
  countLabel,
  groupedBoards,
  groupHeadingId,
  pastSectionId,
} from "./utils"

/** A finished committee: one quiet row in the shared past-committees list. */
function PastCommittee({ board }: { board: Board }) {
  const Icon = boardIcons[board.icon] ?? fallbackBoardIcon
  return (
    <li id={board.id} className="flex scroll-mt-38 gap-3.5 px-5 py-4">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-(--rule) bg-(--band) text-(--muted)">
        <Icon aria-hidden="true" className="size-4" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
          <h3 className="text-sm leading-snug font-semibold text-(--body)">
            {board.name}
          </h3>
          <span className="rounded-sm border border-(--rule) bg-(--band) px-1.5 py-1 text-[11px] leading-none font-semibold tracking-[0.12em] text-(--muted) uppercase">
            Concluded
          </span>
        </div>
        {board.concluded ? (
          <p className="mt-1 text-xs font-medium text-(--muted)">
            {board.concluded}
          </p>
        ) : null}
        <p className="mt-1.5 text-sm leading-relaxed text-(--muted)">
          {board.summary}
        </p>
      </div>
    </li>
  )
}

/** The directory: one section per board group. Current boards are panels; past ones a single list. */
export function BoardGroups() {
  return (
    <>
      {groupedBoards.map((group) => {
        const isPast = group.id === "past"
        return (
          <section
            key={group.id}
            id={isPast ? pastSectionId : undefined}
            aria-labelledby={groupHeadingId(group.id)}
            className={isPast ? "scroll-mt-38" : undefined}
          >
            <SectionHeading
              id={groupHeadingId(group.id)}
              aside={
                isPast
                  ? countLabel(group.boards.length, "committee", "committees")
                  : countLabel(group.boards.length, "board", "boards")
              }
            >
              {group.title}
            </SectionHeading>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-pretty text-(--body)">
              {group.description}
            </p>

            {isPast ? (
              <ul className="mt-6 divide-y divide-(--rule) overflow-hidden rounded-md border border-(--rule) bg-white">
                {group.boards.map((board) => (
                  <PastCommittee key={board.id} board={board} />
                ))}
              </ul>
            ) : (
              <ul className="mt-6 space-y-6">
                {group.boards.map((board) => (
                  <li key={board.id}>
                    <BoardPanel board={board} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        )
      })}
    </>
  )
}
