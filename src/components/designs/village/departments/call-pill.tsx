import { Phone } from "lucide-react"

import { cn } from "@/lib/utils"

import { focusRing, heading } from "../shared"
import { telHref } from "./shared"

/** Small "Call" pill; the accessible name says who and which number. */
export function CallPill({
  phone,
  who,
  className,
}: {
  phone: string
  who: string
  className?: string
}) {
  return (
    <a
      href={telHref(phone)}
      aria-label={`Call ${who} at ${phone}`}
      className={cn(
        heading,
        focusRing,
        "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-(--v-primary) px-4 text-sm font-bold whitespace-nowrap text-white shadow-[0_6px_16px_-8px_rgba(29,92,74,0.6)] transition-colors hover:bg-(--v-primary-dark) focus-visible:ring-offset-(--v-card)",
        className
      )}
    >
      <Phone className="size-3.5" aria-hidden="true" />
      Call
    </a>
  )
}
