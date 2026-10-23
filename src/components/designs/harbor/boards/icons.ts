import {
  Anchor,
  Archive,
  Bike,
  BookOpen,
  Building,
  Bus,
  ClipboardCheck,
  ClipboardList,
  Droplets,
  Flame,
  Handshake,
  House,
  Landmark,
  Map as MapIcon,
  PawPrint,
  Recycle,
  Scale,
  SquareParking,
  Trees,
  Waves,
  type LucideIcon,
} from "lucide-react"

import type { Board } from "@/content/boards"

/** Maps the icon name strings in `boards` to lucide components. */
export const boardIcons: Record<string, LucideIcon> = {
  Landmark,
  Map: MapIcon,
  Scale,
  Building,
  ClipboardCheck,
  Trees,
  SquareParking,
  Anchor,
  Droplets,
  Bus,
  Flame,
  BookOpen,
  House,
  PawPrint,
  Recycle,
  Bike,
  Waves,
}

/** Icon shown beside each group heading. */
export const boardGroupIcons: Record<Board["group"], LucideIcon> = {
  city: Landmark,
  "task-force": ClipboardList,
  shared: Handshake,
  past: Archive,
}
