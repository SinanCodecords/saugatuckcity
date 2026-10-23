import {
  Clock,
  ExternalLink,
  MapPin,
  Users,
  type LucideIcon,
} from "lucide-react"

import type { Board } from "@/content/boards"
import { cn } from "@/lib/utils"

import { PillLink, heading } from "../shared"
import { cardShadow, sectionAnchor } from "../about/shared"
import { displayHost } from "../departments/shared"
import { BoardIcon, boardTint } from "./shared"

type Detail = {
  label: string
  value: string
  icon: LucideIcon
  pill: string
  iconTone: string
}

export function VillageBoardCard({ board }: { board: Board }) {
  const { id, name, summary, meets, where, members, website } = board
  const titleId = `${id}-title`

  const details = [
    meets && {
      label: "Meets",
      value: meets,
      icon: Clock,
      pill: "bg-(--v-mint)",
      iconTone: "text-(--v-primary)",
    },
    where && {
      label: "Where",
      value: where,
      icon: MapPin,
      pill: "bg-(--v-sky)",
      iconTone: "text-[#1f4f6b]",
    },
    members && {
      label: "Members",
      value: members,
      icon: Users,
      pill: "bg-(--v-peach)",
      iconTone: "text-[#8a4b12]",
    },
  ].filter((detail): detail is Detail => Boolean(detail))

  return (
    <article
      id={id}
      aria-labelledby={titleId}
      className={cn(
        sectionAnchor,
        cardShadow,
        "flex h-full flex-col rounded-3xl border border-(--v-line) bg-(--v-card) p-5 sm:p-7"
      )}
    >
      <div className="flex items-center gap-4">
        <span
          className={cn(
            "inline-flex size-14 shrink-0 items-center justify-center rounded-2xl",
            boardTint(board)
          )}
        >
          <BoardIcon board={board} className="size-6" />
        </span>
        <h3
          id={titleId}
          className={cn(
            heading,
            "min-w-0 text-xl leading-tight font-extrabold tracking-tight text-(--v-text) sm:text-2xl"
          )}
        >
          {name}
        </h3>
      </div>

      <p className="mt-4 text-[0.95rem] leading-relaxed text-(--v-muted) sm:text-base">
        {summary}
      </p>

      {details.length > 0 ? (
        <ul
          aria-label={`${name} details`}
          className="mt-5 flex flex-wrap gap-2"
        >
          {details.map((detail) => {
            const Icon = detail.icon
            return (
              <li
                key={detail.label}
                className={cn(
                  "inline-flex max-w-full items-start gap-1.5 rounded-2xl px-3 py-1.5 text-sm leading-snug font-semibold text-(--v-text)",
                  detail.pill
                )}
              >
                <Icon
                  className={cn("mt-0.5 size-3.5 shrink-0", detail.iconTone)}
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="sr-only">{detail.label}: </span>
                  {detail.value}
                </span>
              </li>
            )
          })}
        </ul>
      ) : null}

      {website ? (
        <div className="mt-auto pt-5">
          <PillLink
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            tone="secondary"
            className="focus-visible:ring-offset-(--v-card)"
          >
            Visit {displayHost(website)}
            <ExternalLink className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </PillLink>
        </div>
      ) : null}
    </article>
  )
}
