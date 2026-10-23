import { ArrowRight, Info } from "lucide-react"

import { alert } from "@/content/home"
import { cn } from "@/lib/utils"

import { Container, focusRing, heading } from "./shared"

export function VillageAlert() {
  return (
    <section aria-labelledby="village-alert-title" className="py-6">
      <Container>
        <div
          role="status"
          className="flex flex-col gap-4 rounded-3xl border border-[#f1dfb0] bg-[#fff6e0] p-5 sm:flex-row sm:items-center sm:gap-5 sm:p-6"
        >
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#fbe6ad] text-[#7a5410]">
            <Info className="size-5" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <p
              className={cn(
                heading,
                "text-xs font-bold tracking-wide text-[#7a5410] uppercase"
              )}
            >
              Heads up
            </p>
            <h2
              id="village-alert-title"
              className={cn(
                heading,
                "text-lg font-extrabold text-[#3e2d08] sm:text-xl"
              )}
            >
              {alert.title}
            </h2>
            <p className="mt-1 text-[0.95rem] leading-relaxed text-[#5a4411]">
              {alert.body}
            </p>
          </div>
          <a
            href="#"
            className={cn(
              heading,
              focusRing,
              "inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 text-[0.95rem] font-bold text-[#7a5410] shadow-sm transition-colors hover:bg-[#fbe6ad] focus-visible:ring-offset-[#fff6e0]"
            )}
          >
            Detour map
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  )
}
