import type { ReactNode } from "react"
import Image from "next/image"
import {
  ArrowDown,
  Handshake,
  MessageCircleQuestion,
  Sailboat,
  Store,
  Tent,
  Trees,
  Waves,
  type LucideIcon,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { parkAreas, parksImages, reservePark } from "@/content/parks"
import { cn } from "@/lib/utils"

import {
  Container,
  PillLink,
  heading,
  masonryItem,
  masonryList,
} from "../shared"
import { sectionAnchor } from "../about/shared"
import { CallPill } from "../departments/call-pill"
import { VillageParkCard } from "./park-card"
import { areaAnchor, parksInArea, reserveAnchor } from "./shared"

type Area = (typeof parkAreas)[number]

const areaStyle: Record<Area["id"], { icon: LucideIcon; tile: string }> = {
  "beach-dunes": {
    icon: Waves,
    tile: "bg-(--v-primary) text-white ring-4 ring-(--v-mint)",
  },
  river: {
    icon: Sailboat,
    tile: "bg-(--v-sky) text-[#1f4f6b] ring-4 ring-white",
  },
  downtown: {
    icon: Store,
    tile: "bg-(--v-peach) text-[#8a4b12] ring-4 ring-white",
  },
  nature: {
    icon: Trees,
    tile: "bg-(--v-mint) text-(--v-primary) ring-4 ring-white",
  },
  other: {
    icon: Handshake,
    tile: "bg-(--v-lavender) text-[#4a3a8a] ring-4 ring-white",
  },
}

export function VillageParkArea({ area }: { area: Area }) {
  const areaParks = parksInArea(area.id)
  const { icon: AreaIcon, tile } = areaStyle[area.id]
  const titleId = `${areaAnchor(area.id)}-title`

  return (
    <section
      id={areaAnchor(area.id)}
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
            <AreaIcon className="size-6 sm:size-7" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h2
              id={titleId}
              className={cn(
                heading,
                "text-3xl font-extrabold tracking-tight text-(--v-text) sm:text-4xl"
              )}
            >
              {area.title}
            </h2>
            <p className="mt-1 text-base text-(--v-muted) sm:text-lg">
              {area.description}
            </p>
          </div>
        </div>

        {/* Masonry columns so short park cards are not stretched to match. */}
        <ul className={masonryList}>
          {areaParks.map((park) => (
            <li key={park.id} className={masonryItem}>
              <VillageParkCard park={park} />
            </li>
          ))}
          {areaParks.length % 2 === 1 ? (
            <li className={cn(masonryItem, "hidden md:block")}>
              <FillerCard areaId={area.id} />
            </li>
          ) : null}
        </ul>
      </Container>
    </section>
  )
}

/** Fills the empty grid slot when an area has an odd number of parks. */
function FillerCard({ areaId }: { areaId: Area["id"] }) {
  if (areaId === "downtown") {
    return (
      <FillerShell
        icon={Tent}
        title={reservePark.title}
        body={reservePark.body}
      >
        <PillLink
          href={`#${reserveAnchor}`}
          tone="ghost"
          className="bg-white/70 focus-visible:ring-offset-(--v-mint)"
        >
          How to book
          <ArrowDown className="size-4" aria-hidden="true" />
        </PillLink>
      </FillerShell>
    )
  }

  if (areaId === "other") {
    const { phone } = siteConfig.contact
    return (
      <FillerShell
        icon={MessageCircleQuestion}
        title="Questions about a park?"
        body={`Call the front desk at City Hall on ${phone} and we’ll point you to the right person.`}
      >
        <CallPill
          phone={phone}
          who="City Hall"
          className="h-11 px-5 text-[0.95rem] focus-visible:ring-offset-(--v-mint)"
        />
      </FillerShell>
    )
  }

  const photo =
    areaId === "nature"
      ? { src: parksImages.woods, alt: "Autumn woods reflected in still water" }
      : { src: parksImages.water, alt: "A sailboat out on open water" }

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_24px_50px_-26px_rgba(29,92,74,0.6)]">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 768px) 100vw, 45vw"
        className="object-cover"
      />
    </div>
  )
}

function FillerShell({
  icon: Icon,
  title,
  body,
  children,
}: {
  icon: LucideIcon
  title: string
  body: string
  children: ReactNode
}) {
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
        {title}
      </p>
      <p className="mt-2 max-w-sm text-base leading-relaxed text-(--v-muted)">
        {body}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">{children}</div>
    </div>
  )
}
