import {
  Calculator,
  Flame,
  HardHat,
  Landmark,
  Map as MapIcon,
  ShieldCheck,
  Truck,
  Vote,
  Wallet,
  type LucideIcon,
} from "lucide-react"

/** Maps the icon name strings in `departmentDirectory` to lucide components. */
export const departmentIcons: Record<string, LucideIcon> = {
  Landmark,
  Vote,
  Wallet,
  Calculator,
  Map: MapIcon,
  Truck,
  HardHat,
  ShieldCheck,
  Flame,
}
