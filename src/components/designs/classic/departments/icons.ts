import {
  Building2,
  Calculator,
  Flame,
  HardHat,
  Landmark,
  Map,
  ShieldCheck,
  Truck,
  Vote,
  Wallet,
  type LucideIcon,
} from "lucide-react"

/** Maps the icon name strings in `departmentDirectory` to lucide components. */
export const departmentIcons: Record<string, LucideIcon | undefined> = {
  Landmark,
  Vote,
  Wallet,
  Calculator,
  Map,
  Truck,
  HardHat,
  ShieldCheck,
  Flame,
}

/** Shown if a department names an icon that isn't mapped above. */
export const fallbackDepartmentIcon = Building2
