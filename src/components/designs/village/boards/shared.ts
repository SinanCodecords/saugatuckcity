import { createElement } from "react"
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
  Bus,
  Users,
  Waves,
  type LucideIcon,
} from "lucide-react"

import { boards, type Board } from "@/content/boards"

import { tint } from "../about/shared"

/** lucide icons named in `boards`, with a fallback for new ones. */
const icons: Record<string, LucideIcon> = {
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

/** Renders a board's icon without creating a component during render. */
export function BoardIcon({
  board,
  className,
}: {
  board: Board
  className?: string
}) {
  return createElement(icons[board.icon] ?? Users, {
    className,
    "aria-hidden": true,
  })
}

/** Each board keeps the same pastel everywhere it appears on the page. */
export function boardTint(board: Board) {
  return tint(boards.indexOf(board))
}

export function boardsInGroup(group: Board["group"]) {
  return boards.filter((board) => board.group === group)
}

/** "3rd Thursday of each month, 6:30 pm" → "3rd Thursday · 6:30 pm" */
export function shortWhen(meets: string) {
  return meets
    .replace(/ of each month/, "")
    .replace(/, (\d{1,2}:\d{2} [ap]m)$/, " · $1")
}

export const groupAnchor = (id: string) => `village-boards-group-${id}`
export const joinAnchor = "village-boards-join"
export const serveAnchor = "village-boards-serve"
