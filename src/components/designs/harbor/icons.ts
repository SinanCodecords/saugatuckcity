import {
  Briefcase,
  ClipboardCheck,
  CreditCard,
  FileText,
  SquareParking,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react"

/** Maps the icon name strings in `quickLinks` to lucide components. */
export const quickLinkIcons: Record<string, LucideIcon> = {
  CreditCard,
  FileText,
  ClipboardCheck,
  AlertTriangle: TriangleAlert,
  Briefcase,
  ParkingSquare: SquareParking,
}
