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

import { parkAreas, parks } from "@/content/parks"

export const parkIcons: Record<string, LucideIcon> = {
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

/** Parks in page order, so the 01–15 numbering runs across every area. */
const ordered = parkAreas.flatMap((area) =>
  parks.filter((park) => park.area === area.id)
)

/** Areas in content order, each with its parks and their running numbers. */
export const gazetteer = parkAreas.map((area) => ({
  ...area,
  parks: ordered
    .map((park, index) => ({ park, number: index + 1 }))
    .filter(({ park }) => park.area === area.id),
}))

export function padNumber(number: number) {
  return String(number).padStart(2, "0")
}
