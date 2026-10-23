import {
  Anchor,
  Bike,
  BookOpen,
  Building,
  ClipboardCheck,
  Droplets,
  Flame,
  House,
  Landmark,
  Map as MapIcon,
  PawPrint,
  Recycle,
  Scale,
  SquareParking,
  Trees,
  Waves,
  Bus,
  type LucideIcon,
} from "lucide-react"

import { boardGroups, boards } from "@/content/boards"

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

/** Groups in content order, each with its boards in content order. */
export const groupedBoards = boardGroups.map((group) => ({
  ...group,
  boards: boards.filter((board) => board.group === group.id),
}))
