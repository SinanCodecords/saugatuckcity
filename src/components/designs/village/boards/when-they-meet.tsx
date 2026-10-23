import { ChevronRight, MapPin } from "lucide-react"

import { boards } from "@/content/boards"
import { cn } from "@/lib/utils"

import { focusRing, heading } from "../shared"
import { BoardIcon, boardTint, shortWhen } from "./shared"

/** The hero's meeting schedule, styled like the "Who do I contact?" card. */
export function VillageWhenTheyMeet() {
  const scheduled = boards.filter((board) => board.meets)

  return (
    <div className="rounded-3xl border border-(--v-line) bg-(--v-card) p-3 shadow-[0_20px_45px_-24px_rgba(29,92,74,0.35)] sm:p-4">
      <h2
        id="village-boards-schedule-title"
        className={cn(
          heading,
          "px-3 pt-2 text-lg font-extrabold text-(--v-text) sm:text-xl"
        )}
      >
        When they meet
      </h2>
      <p className="px-3 pt-0.5 pb-3 text-[0.95rem] text-(--v-muted)">
        The meeting schedule at a glance. Pick one to learn more.
      </p>
      <ul
        aria-labelledby="village-boards-schedule-title"
        className="flex flex-col gap-1"
      >
        {scheduled.map((board) => (
          <li key={board.id}>
            <a
              href={`#${board.id}`}
              className={cn(
                focusRing,
                "group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-(--v-text) transition-colors hover:bg-(--v-mint) focus-visible:ring-offset-(--v-card)"
              )}
            >
              <span
                className={cn(
                  "inline-flex size-10 shrink-0 items-center justify-center rounded-full",
                  boardTint(board)
                )}
              >
                <BoardIcon board={board} className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className={cn(
                    heading,
                    "block text-base leading-snug font-bold sm:text-[1.05rem]"
                  )}
                >
                  {board.name}
                </span>
                <span className="block text-sm leading-snug font-semibold text-(--v-text)">
                  <span className="sr-only">, meets </span>
                  {shortWhen(board.meets ?? "")}
                </span>
                {board.where ? (
                  <span className="mt-0.5 flex items-start gap-1 text-sm leading-snug text-(--v-muted)">
                    <MapPin
                      className="mt-0.5 size-3.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="sr-only">, at </span>
                      {board.where}
                    </span>
                  </span>
                ) : null}
              </span>
              <ChevronRight
                className="size-5 shrink-0 text-(--v-muted) transition-transform group-hover:translate-x-0.5 group-hover:text-(--v-primary)"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
