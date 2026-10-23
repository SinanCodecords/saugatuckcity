import {
  Anchor,
  Baby,
  Bird,
  Building2,
  Fish,
  Flower2,
  Footprints,
  Handshake,
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
  Waves,
  type LucideIcon,
} from "lucide-react"

import type { Park } from "@/content/parks"

/** Maps the icon name strings in `parks` to lucide components. */
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

/** Icon shown beside each park area heading and jump pill. */
export const parkAreaIcons: Record<Park["area"], LucideIcon> = {
  "beach-dunes": Waves,
  river: Anchor,
  downtown: Building2,
  nature: Trees,
  other: Handshake,
}
