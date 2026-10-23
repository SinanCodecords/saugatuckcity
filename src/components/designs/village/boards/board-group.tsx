import {
  ArrowDown,
  HandHeart,
  Handshake,
  Landmark,
  ListChecks,
  Video,
} from "lucide-react"

import { boardGroups, getInvolved, publicMeetings } from "@/content/boards"
import { cn } from "@/lib/utils"

import { Container, PillLink, heading } from "../shared"
import { sectionAnchor } from "../about/shared"
import { VillageBoardCard } from "./board-card"
import { boardsInGroup, groupAnchor, joinAnchor, serveAnchor } from "./shared"

type Group = Exclude<(typeof boardGroups)[number], { id: "past" }>

const groupStyle: Record<Group["id"], { icon: typeof Landmark; tile: string }> =
  {
    city: {
      icon: Landmark,
      tile: "bg-(--v-primary) text-white ring-4 ring-(--v-mint)",
    },
    "task-force": {
      icon: ListChecks,
      tile: "bg-(--v-butter) text-[#6b5410] ring-4 ring-white",
    },
    shared: {
      icon: Handshake,
      tile: "bg-(--v-sky) text-[#1f4f6b] ring-4 ring-white",
    },
  }

export function VillageBoardGroup({ group }: { group: Group }) {
  const groupBoards = boardsInGroup(group.id)
  const { icon: GroupIcon, tile } = groupStyle[group.id]
  const titleId = `${groupAnchor(group.id)}-title`

  return (
    <section
      id={groupAnchor(group.id)}
      aria-labelledby={titleId}
      className={cn(sectionAnchor, "py-10 sm:py-14")}
    >
      <Container>
        <div className="flex items-start gap-4 sm:items-center sm:gap-5">
          <span
            className={cn(
              "inline-flex size-14 shrink-0 items-center justify-center rounded-full sm:size-16",
              tile
            )}
          >
            <GroupIcon className="size-6 sm:size-7" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h2
              id={titleId}
              className={cn(
                heading,
                "text-3xl font-extrabold tracking-tight text-(--v-text) sm:text-4xl"
              )}
            >
              {group.title}
            </h2>
            <p className="mt-1 text-base text-(--v-muted) sm:text-lg">
              {group.description}
            </p>
          </div>
        </div>

        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {groupBoards.map((board) => (
            <li key={board.id}>
              <VillageBoardCard board={board} />
            </li>
          ))}
          {groupBoards.length % 2 === 1 ? (
            <li className="hidden md:block">
              <FillerCard groupId={group.id} />
            </li>
          ) : null}
        </ul>
      </Container>
    </section>
  )
}

/** Fills the empty grid slot when a group has an odd number of boards. */
function FillerCard({ groupId }: { groupId: Group["id"] }) {
  const filler =
    groupId === "shared"
      ? {
          icon: HandHeart,
          title: getInvolved.title,
          body: "Curious about joining a board? The City Clerk can tell you what’s open.",
          href: `#${serveAnchor}`,
          cta: "How to get involved",
        }
      : {
          icon: Video,
          title: publicMeetings.title,
          body: "Come along to City Hall, or join from home on Zoom.",
          href: `#${joinAnchor}`,
          cta: "How to join",
        }
  const Icon = filler.icon

  return (
    <div className="flex h-full flex-col items-start justify-center rounded-3xl border-2 border-dashed border-(--v-mint-dark) bg-(--v-mint)/50 p-7">
      <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-white text-(--v-primary)">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <p
        className={cn(
          heading,
          "mt-4 text-2xl font-extrabold tracking-tight text-(--v-text)"
        )}
      >
        {filler.title}
      </p>
      <p className="mt-2 max-w-sm text-base leading-relaxed text-(--v-muted)">
        {filler.body}
      </p>
      <div className="mt-5">
        <PillLink
          href={filler.href}
          tone="ghost"
          className="bg-white/70 focus-visible:ring-offset-(--v-mint)"
        >
          {filler.cta}
          <ArrowDown className="size-4" aria-hidden="true" />
        </PillLink>
      </div>
    </div>
  )
}
