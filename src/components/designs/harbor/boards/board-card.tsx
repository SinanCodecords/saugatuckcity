import { Clock, ExternalLink, History, MapPin, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import type { Board } from "@/content/boards"

import { departmentAnchor, textLink } from "../departments/shared"
import { boardIcons } from "./icons"

const targetHighlight =
  "target:border-(--navy) target:ring-2 target:ring-(--gold)"

function websiteLabel(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
}

function WebsiteLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-sm break-all ${textLink}`}
    >
      Visit {websiteLabel(url)}
      <ExternalLink aria-hidden="true" className="size-3.5 shrink-0" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon
  label: string
  value: string
}) {
  return (
    <div className="flex gap-3">
      <span
        aria-hidden="true"
        className="flex size-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-(--navy) shadow-sm"
      >
        <Icon className="size-4" />
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm leading-snug text-slate-900">{value}</dd>
      </div>
    </div>
  )
}

export function BoardCard({ board }: { board: Board }) {
  const Icon = boardIcons[board.icon]
  const headingId = `${board.id}-heading`
  const { meets, where, members, website } = board

  return (
    <article
      id={board.id}
      aria-labelledby={headingId}
      className={`${departmentAnchor} flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm ${targetHighlight}`}
    >
      <div className="flex flex-1 items-start gap-4 p-5 sm:p-6">
        <span
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm"
        >
          {Icon ? <Icon className="size-6" /> : null}
        </span>
        <div className="min-w-0">
          <h3
            id={headingId}
            className="text-lg leading-snug font-semibold tracking-tight text-(--navy) sm:text-xl"
          >
            {board.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
            {board.summary}
          </p>
        </div>
      </div>

      {meets || where || members || website ? (
        <div className="space-y-4 border-t border-slate-200 bg-slate-50 p-5 sm:px-6">
          {meets || where || members ? (
            <dl className="space-y-3">
              {meets ? (
                <DetailRow icon={Clock} label="Meets" value={meets} />
              ) : null}
              {where ? (
                <DetailRow icon={MapPin} label="Where" value={where} />
              ) : null}
              {members ? (
                <DetailRow icon={Users} label="Members" value={members} />
              ) : null}
            </dl>
          ) : null}
          {website ? (
            <p>
              <WebsiteLink url={website} />
            </p>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}

/** Quieter, denser card for committees that have finished their work. */
export function PastBoardCard({ board }: { board: Board }) {
  const Icon = boardIcons[board.icon]
  const headingId = `${board.id}-heading`

  return (
    <article
      id={board.id}
      aria-labelledby={headingId}
      className={`${departmentAnchor} flex h-full gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 ${targetHighlight} target:bg-white`}
    >
      <span
        aria-hidden="true"
        className="flex size-9 shrink-0 items-center justify-center rounded-md bg-slate-200 text-slate-600"
      >
        {Icon ? <Icon className="size-4" /> : null}
      </span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h3
            id={headingId}
            className="text-base leading-snug font-semibold text-slate-800"
          >
            {board.name}
          </h3>
          <span className="rounded-full border border-slate-300 bg-white px-2 py-0.5 text-[0.6875rem] font-semibold tracking-wide text-slate-600 uppercase">
            Concluded
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {board.summary}
        </p>
        {board.concluded ? (
          <p className="mt-2 flex items-start gap-1.5 text-xs font-medium text-slate-600">
            <History aria-hidden="true" className="mt-px size-3.5 shrink-0" />
            {board.concluded}
          </p>
        ) : null}
        {board.website ? (
          <p className="mt-2">
            <WebsiteLink url={board.website} />
          </p>
        ) : null}
      </div>
    </article>
  )
}
