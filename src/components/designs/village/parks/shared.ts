import { createElement } from "react"
import {
  Baby,
  Bird,
  Fish,
  Flower2,
  Footprints,
  Info,
  Landmark,
  Leaf,
  Mountain,
  Music,
  Palette,
  Ship,
  Sun,
  Tent,
  Trees,
  type LucideIcon,
} from "lucide-react"

import { parks, type Park } from "@/content/parks"

import { tint } from "../about/shared"

/** lucide icons named in `parks`, with a fallback for new ones. */
const icons: Record<string, LucideIcon> = {
  Sun,
  Mountain,
  Bird,
  Footprints,
  Ship,
  Music,
  Tent,
  Palette,
  Fish,
  Baby,
  Info,
  Flower2,
  Trees,
  Leaf,
  Landmark,
}

/** Renders a park's icon without creating a component during render. */
export function ParkIcon({
  park,
  className,
}: {
  park: Park
  className?: string
}) {
  return createElement(icons[park.icon] ?? Trees, {
    className,
    "aria-hidden": true,
  })
}

/** Each park keeps the same pastel everywhere it appears on the page. */
export function parkTint(park: Park) {
  return tint(parks.indexOf(park))
}

export function findPark(id: string) {
  return parks.find((park) => park.id === id)
}

export function parksInArea(area: Park["area"]) {
  return parks.filter((park) => park.area === area)
}

export const areaAnchor = (id: string) => `village-parks-area-${id}`
export const beachAnchor = "village-parks-beach"
export const gettingThereAnchor = "village-parks-getting-there"
export const findAnchor = "village-parks-find"
export const eventsAnchor = "village-parks-events"
export const rulesAnchor = "village-parks-rules"
export const reserveAnchor = "village-parks-reserve"
export const planAnchor = "village-parks-plan"
