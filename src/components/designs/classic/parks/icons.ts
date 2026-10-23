import {
  Baby,
  Bird,
  Bus,
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
  Store,
  Sun,
  Tent,
  Trees,
  Waves,
  type LucideIcon,
} from "lucide-react"

import type { parkAreas } from "@/content/parks"

/** Maps the icon name strings in `parks` to lucide components. */
export const parkIcons: Record<string, LucideIcon | undefined> = {
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

/** Shown if a park names an icon that isn't mapped above. */
export const fallbackParkIcon = Trees

/** Small markers for the area links in the jump list. */
export const areaIcons: Record<(typeof parkAreas)[number]["id"], LucideIcon> = {
  "beach-dunes": Sun,
  river: Waves,
  downtown: Store,
  nature: Trees,
  other: Handshake,
}

/** Icons for the "without a car" options, keyed by label. */
export const gettingThereIcons: Record<string, LucideIcon | undefined> = {
  "Ferry and dune climb": Ship,
  "John A. Woollam Trail": Footprints,
  "Interurban bus": Bus,
}
