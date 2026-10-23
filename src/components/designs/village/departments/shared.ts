import { createElement } from "react"
import {
  Building2,
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

import { departmentDirectory, type Department } from "@/content/departments"

import { tint } from "../about/shared"

/** lucide icons named in `departmentDirectory`, with a fallback for new ones. */
const icons: Record<string, LucideIcon> = {
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

export function departmentIcon(department: Department): LucideIcon {
  return icons[department.icon] ?? Building2
}

/** Renders a department's icon without creating a component during render. */
export function DepartmentIcon({
  department,
  className,
}: {
  department: Department
  className?: string
}) {
  return createElement(departmentIcon(department), {
    className,
    "aria-hidden": true,
  })
}

/** Each department keeps the same pastel everywhere it appears on the page. */
export function departmentTint(department: Department) {
  return tint(departmentDirectory.indexOf(department))
}

export function findDepartment(id: string) {
  return departmentDirectory.find((department) => department.id === id)
}

export function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "")
  return digits.length === 10 ? `tel:+1${digits}` : `tel:${digits}`
}

export function isEmergencyNote(note: string) {
  return /\b911\b/.test(note)
}

/** "https://www.saugatuckfire.org" → "saugatuckfire.org" */
export function displayHost(url: string) {
  return new URL(url).hostname.replace(/^www\./, "")
}
