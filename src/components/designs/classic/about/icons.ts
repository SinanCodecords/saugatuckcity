import {
  Anchor,
  Briefcase,
  Building2,
  House,
  Landmark,
  MapPinned,
  Recycle,
  Scale,
  Sprout,
  Waves,
  type LucideIcon,
} from "lucide-react"

import type { aboutSection } from "@/content/about"

type AboutIcon = (typeof aboutSection)[number]["icon"]

/** Maps the icon name strings in `aboutSection` to lucide components. */
export const aboutSectionIcons: Record<AboutIcon, LucideIcon> = {
  Landmark,
  Scale,
  Briefcase,
  Waves,
  Anchor,
  Building2,
  Sprout,
  House,
  MapPinned,
  Recycle,
}
