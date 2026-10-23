import { ArrowUpRight, Landmark } from "lucide-react"

import type { Board } from "@/content/boards"

import { serif } from "../about/shared"
import { columnLabel, phoneLink } from "../departments/entry"
import { boardIcons } from "./shared"

/**
 * Meets, Where and Members always read in this order. They fill the row from
 * the left, so a board with only one or two details never shows empty
 * columns before them.
 */
const details = [
  { key: "meets", label: "Meets" },
  { key: "where", label: "Where" },
  { key: "members", label: "Members" },
] as const

/** A current board: icon, serif name, standfirst, then one row of details. */
export function DunesBoardEntry({ board }: { board: Board }) {
  const Icon = boardIcons[board.icon] ?? Landmark
  const headingId = `dn-board-${board.id}`
  const present = details.filter((detail) => board[detail.key])

  return (
    <article
      id={board.id}
      aria-labelledby={headingId}
      className="scroll-mt-56 border-b border-(--dn-rule) py-8 sm:py-10"
    >
      <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-1 lg:pt-2">
          <Icon
            className="size-5 text-(--dn-teal) lg:size-6"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0 lg:col-span-11">
          <h3
            id={headingId}
            className={`${serif} text-[1.75rem] leading-[1.1] font-light tracking-[-0.015em] text-balance text-(--dn-ink) sm:text-4xl lg:text-[2.625rem]`}
          >
            {board.name}
          </h3>
          <p
            className={`mt-3 max-w-[44rem] ${serif} text-lg leading-snug font-light text-pretty text-(--dn-ink-soft) sm:text-xl lg:leading-[1.4]`}
          >
            {board.summary}
          </p>

          {present.length > 0 && (
            <dl className="mt-6 grid grid-cols-1 gap-x-10 gap-y-4 border-t border-(--dn-rule) pt-5 sm:grid-cols-3">
              {present.map((detail) => (
                <div key={detail.key} className="min-w-0">
                  <dt className={columnLabel}>{detail.label}</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-pretty text-(--dn-ink)">
                    {board[detail.key]}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {board.website && (
            <p className="mt-5 text-[15px]">
              <a
                href={board.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-1.5 font-medium ${phoneLink}`}
              >
                {new URL(board.website).hostname.replace(/^www\./, "")}
                <ArrowUpRight
                  className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

/** A past committee, set small: terra "Concluded" kicker, name, one line. */
export function DunesPastCommitteeEntry({ board }: { board: Board }) {
  const Icon = boardIcons[board.icon] ?? Landmark
  const headingId = `dn-board-${board.id}`

  return (
    <article
      id={board.id}
      aria-labelledby={headingId}
      className="flex h-full scroll-mt-56 flex-col py-5 sm:py-6"
    >
      {/* The heading comes first in reading order; the kicker sits above it visually. */}
      <h3
        id={headingId}
        className={`mt-2 flex items-start gap-2.5 ${serif} text-xl leading-snug text-(--dn-ink)`}
      >
        <Icon
          className="mt-1 size-4 shrink-0 text-(--dn-ink-soft)"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        {board.name}
      </h3>
      <p className="order-first text-[11px] leading-relaxed tracking-[0.18em] text-pretty text-(--dn-ink-soft) uppercase">
        <span className="font-semibold tracking-[0.22em] text-(--dn-terra)">
          Concluded
        </span>
        {board.concluded && (
          <>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <span className="sr-only">: </span>
            {board.concluded}
          </>
        )}
      </p>
      <p className="mt-1.5 pl-[1.625rem] text-[14px] leading-relaxed text-pretty text-(--dn-ink-soft)">
        {board.summary}
      </p>
    </article>
  )
}
