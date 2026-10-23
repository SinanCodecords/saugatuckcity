import { Archive, CalendarDays, ChevronDown, HandHeart } from "lucide-react"

import { boards, getInvolved } from "@/content/boards"

import { Chevron, linkClass } from "../departments/jump-nav"
import { boardIcons, fallbackBoardIcon } from "./icons"
import {
  countLabel,
  getInvolvedId,
  groupedBoards,
  pastSectionId,
  scheduleId,
} from "./utils"

/**
 * The jump list, grouped the same way as the main column. Past committees get
 * a single link to keep the sticky sidebar short. `idPrefix` keeps ids unique per copy.
 */
function JumpLinks({ idPrefix }: { idPrefix: string }) {
  return (
    <ul>
      <li className="border-b border-(--rule)">
        <a href={`#${scheduleId}`} className={linkClass}>
          <CalendarDays
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-(--blue)"
          />
          <span className="min-w-0 flex-1">Meeting schedule</span>
          <Chevron />
        </a>
      </li>
      {groupedBoards.map((group) => {
        if (group.id === "past") {
          return (
            <li key={group.id} className="border-b border-(--rule)">
              <a href={`#${pastSectionId}`} className={linkClass}>
                <Archive
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-(--muted)"
                />
                <span className="min-w-0 flex-1">
                  {group.title}
                  <span className="ml-1.5 text-xs font-normal text-(--muted)">
                    ({group.boards.length})
                  </span>
                </span>
                <Chevron />
              </a>
            </li>
          )
        }

        const labelId = `${idPrefix}-${group.id}`
        return (
          <li key={group.id} className="border-b border-(--rule)">
            <p
              id={labelId}
              className="px-5 pt-3.5 pb-1 text-[11px] font-semibold tracking-[0.2em] text-(--muted) uppercase"
            >
              {group.title}
            </p>
            <ul aria-labelledby={labelId} className="pb-1.5">
              {group.boards.map((board) => {
                const Icon = boardIcons[board.icon] ?? fallbackBoardIcon
                return (
                  <li key={board.id}>
                    <a href={`#${board.id}`} className={linkClass}>
                      <Icon
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-(--blue)"
                      />
                      <span className="min-w-0 flex-1">{board.name}</span>
                      <Chevron />
                    </a>
                  </li>
                )
              })}
            </ul>
          </li>
        )
      })}
      <li>
        <a href={`#${getInvolvedId}`} className={linkClass}>
          <HandHeart
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-(--blue)"
          />
          <span className="min-w-0 flex-1">{getInvolved.title}</span>
          <Chevron />
        </a>
      </li>
    </ul>
  )
}

/** Desktop sidebar version: always open, styled like the home page widgets. */
export function BoardsJumpNav() {
  return (
    <nav
      aria-labelledby="classic-boards-jump-nav"
      className="overflow-hidden rounded-md border border-(--rule) bg-white"
    >
      <h2
        id="classic-boards-jump-nav"
        className="border-b border-(--rule) bg-(--band) px-5 py-3 text-[11px] font-semibold tracking-[0.25em] text-(--ink) uppercase"
      >
        On this page
      </h2>
      <JumpLinks idPrefix="classic-boards-jump" />
    </nav>
  )
}

/** Mobile version: the same links in a disclosure so they don't push content down. */
export function BoardsJumpNavDisclosure() {
  return (
    <details className="group overflow-hidden rounded-md border border-(--rule) bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 bg-(--band) px-5 py-3.5 text-[11px] font-semibold tracking-[0.25em] text-(--ink) uppercase group-open:border-b group-open:border-(--rule) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none focus-visible:ring-inset [&::-webkit-details-marker]:hidden">
        <span>
          On this page
          <span className="ml-2 font-medium tracking-normal text-(--muted) normal-case">
            ({countLabel(boards.length, "board", "boards")})
          </span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className="size-4 shrink-0 text-(--blue-text) transition-transform group-open:rotate-180"
        />
      </summary>
      <nav aria-label="On this page">
        <JumpLinks idPrefix="classic-boards-jump-mobile" />
      </nav>
    </details>
  )
}
