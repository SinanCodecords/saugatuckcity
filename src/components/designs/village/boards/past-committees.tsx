import { Archive, CalendarCheck } from "lucide-react"

import { boardGroups } from "@/content/boards"
import { cn } from "@/lib/utils"

import { Container, heading } from "../shared"
import { sectionAnchor } from "../about/shared"
import { BoardIcon, boardsInGroup, groupAnchor } from "./shared"

const pastGroup = boardGroups.find((group) => group.id === "past")

/** Past committees: one soft, muted card with compact rounded tiles. */
export function VillagePastCommittees() {
  if (!pastGroup) return null
  const past = boardsInGroup("past")
  const titleId = `${groupAnchor(pastGroup.id)}-title`

  return (
    <section
      id={groupAnchor(pastGroup.id)}
      aria-labelledby={titleId}
      className={cn(sectionAnchor, "py-10 sm:py-14")}
    >
      <Container>
        <div className="rounded-[2rem] border border-(--v-line) bg-(--v-card)/70 p-5 sm:p-8">
          <div className="flex items-start gap-4 sm:items-center">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-(--v-bg) text-(--v-muted) ring-4 ring-white">
              <Archive className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p
                className={cn(
                  heading,
                  "text-xs font-bold tracking-wide text-(--v-muted) uppercase"
                )}
              >
                {pastGroup.title}
              </p>
              <h2
                id={titleId}
                className={cn(
                  heading,
                  "mt-0.5 text-2xl font-extrabold tracking-tight text-(--v-text) sm:text-3xl"
                )}
              >
                Groups that finished their work
              </h2>
              <p className="mt-1 text-[0.95rem] text-(--v-muted) sm:text-base">
                {pastGroup.description}
              </p>
            </div>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((board) => (
              <li key={board.id}>
                <article
                  id={board.id}
                  aria-labelledby={`${board.id}-title`}
                  className={cn(
                    sectionAnchor,
                    "flex h-full flex-col rounded-2xl bg-(--v-bg) p-4"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-(--v-muted)">
                      <BoardIcon board={board} className="size-4" />
                    </span>
                    <h3
                      id={`${board.id}-title`}
                      className={cn(
                        heading,
                        "min-w-0 text-base leading-snug font-bold text-(--v-text)"
                      )}
                    >
                      {board.name}
                    </h3>
                  </div>
                  <p className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-(--v-muted)">
                    <span
                      className={cn(
                        heading,
                        "rounded-full border border-(--v-line) bg-white px-2.5 py-0.5 text-xs font-bold text-(--v-muted)"
                      )}
                    >
                      Concluded
                    </span>
                    {board.concluded ? (
                      <span className="inline-flex items-center gap-1">
                        <CalendarCheck
                          className="size-3.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="sr-only">: </span>
                        {board.concluded}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-(--v-muted)">
                    {board.summary}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
