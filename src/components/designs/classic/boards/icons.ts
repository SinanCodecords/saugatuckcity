import {
  Anchor,
  Bike,
  BookOpen,
  Building,
  Bus,
  ClipboardCheck,
  Droplets,
  Flame,
  House,
  Landmark,
  Map,
  PawPrint,
  Recycle,
  Scale,
  SquareParking,
  Trees,
  UsersRound,
  Waves,
  type LucideIcon,
} from "lucide-react"

/** Maps the icon name strings in `boards` to lucide components. */
export const boardIcons: Record<string, LucideIcon | undefined> = {
  Landmark,
  Map,
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

/** Shown if a board names an icon that isn't mapped above. */
export const fallbackBoardIcon = UsersRound
