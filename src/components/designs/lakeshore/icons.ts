import {
  Briefcase,
  ClipboardCheck,
  CreditCard,
  FileText,
  SquareParking,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react"

import type { quickLinks } from "@/content/home"

type QuickLinkIcon = (typeof quickLinks)[number]["icon"]

export const quickLinkIcons: Record<QuickLinkIcon, LucideIcon> = {
  CreditCard,
  FileText,
  ClipboardCheck,
  AlertTriangle: TriangleAlert,
  Briefcase,
  ParkingSquare: SquareParking,
}
