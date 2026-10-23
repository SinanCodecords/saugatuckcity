import {
  ArrowDown,
  Building2,
  MapPinned,
  MessageCircleQuestion,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { departmentDirectory, departmentGroups } from "@/content/departments"
import { cn } from "@/lib/utils"

import {
  Container,
  PillLink,
  heading,
  masonryItem,
  masonryList,
} from "../shared"
import { sectionAnchor } from "../about/shared"
import { CallPill } from "./call-pill"
import { VillageDepartmentCard } from "./department-card"

type Group = (typeof departmentGroups)[number]

const groupStyle: Record<
  Group["id"],
  { icon: typeof Building2; tile: string }
> = {
  "city-hall": {
    icon: Building2,
    tile: "bg-(--v-primary) text-white ring-4 ring-(--v-mint)",
  },
  elsewhere: {
    icon: MapPinned,
    tile: "bg-(--v-sky) text-[#1f4f6b] ring-4 ring-white",
  },
}

export function VillageDepartmentGroup({ group }: { group: Group }) {
  const departments = departmentDirectory.filter(
    (department) => department.group === group.id
  )
  const { icon: GroupIcon, tile } = groupStyle[group.id]
  const titleId = `village-group-${group.id}-title`

  return (
    <section
      id={`village-group-${group.id}`}
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

        {/* Two masonry columns: cards differ a lot in length, so a row grid
            would leave tall empty gaps inside the shorter card of each pair. */}
        <ul className={masonryList}>
          {departments.map((department) => (
            <li key={department.id} className={masonryItem}>
              <VillageDepartmentCard department={department} />
            </li>
          ))}
          {departments.length % 2 === 1 ? (
            <li className={cn(masonryItem, "hidden md:block")}>
              <NotSureCard />
            </li>
          ) : null}
        </ul>
      </Container>
    </section>
  )
}

/** Fills the empty grid slot when a group has an odd number of departments. */
function NotSureCard() {
  const { phone } = siteConfig.contact

  return (
    <div className="flex h-full flex-col items-start justify-center rounded-3xl border-2 border-dashed border-(--v-mint-dark) bg-(--v-mint)/50 p-7">
      <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-white text-(--v-primary)">
        <MessageCircleQuestion className="size-6" aria-hidden="true" />
      </span>
      <p
        className={cn(
          heading,
          "mt-4 text-2xl font-extrabold tracking-tight text-(--v-text)"
        )}
      >
        Not sure who to ask?
      </p>
      <p className="mt-2 max-w-sm text-base leading-relaxed text-(--v-muted)">
        Call the front desk at City Hall on {phone} and we&rsquo;ll point you to
        the right person.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <CallPill
          phone={phone}
          who="City Hall"
          className="h-11 px-5 text-[0.95rem] focus-visible:ring-offset-(--v-mint)"
        />
        <PillLink
          href="#village-visit"
          tone="ghost"
          className="bg-white/70 focus-visible:ring-offset-(--v-mint)"
        >
          Visiting details
          <ArrowDown className="size-4" aria-hidden="true" />
        </PillLink>
      </div>
    </div>
  )
}
