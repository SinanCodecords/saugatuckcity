import {
  AlertTriangle,
  ArrowRight,
  Briefcase,
  ClipboardCheck,
  CreditCard,
  FileText,
  ParkingSquare,
  type LucideIcon,
} from "lucide-react"

import { quickLinks } from "@/content/home"
import { cn } from "@/lib/utils"

import {
  Container,
  PillLink,
  SectionHeading,
  focusRing,
  heading,
} from "./shared"

const icons: Record<(typeof quickLinks)[number]["icon"], LucideIcon> = {
  CreditCard,
  FileText,
  ClipboardCheck,
  AlertTriangle,
  Briefcase,
  ParkingSquare,
}

const tints = [
  "bg-(--v-mint) text-(--v-primary)",
  "bg-(--v-sky) text-[#1f4f6b]",
  "bg-(--v-peach) text-[#8a4b12]",
  "bg-(--v-rose) text-[#8a2e3c]",
  "bg-(--v-lavender) text-[#4a3a8a]",
  "bg-(--v-butter) text-[#6b5410]",
]

export function VillageServices() {
  return (
    <section
      aria-labelledby="village-services-title"
      className="py-12 sm:py-16"
    >
      <Container>
        <SectionHeading
          id="village-services-title"
          eyebrow="Popular services"
          title="Things people come here to do"
          description="The requests City Hall hears about most, all in one place."
          action={
            <PillLink href="#" tone="secondary">
              All services
              <ArrowRight className="size-4" aria-hidden="true" />
            </PillLink>
          }
        />

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {quickLinks.map((link, index) => {
            const Icon = icons[link.icon]
            return (
              <li key={link.label}>
                <a
                  href="#"
                  className={cn(
                    focusRing,
                    "group flex h-full items-center gap-4 rounded-3xl border border-(--v-line) bg-(--v-card) p-4 shadow-[0_14px_32px_-22px_rgba(29,92,74,0.4)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-(--v-primary)/30 hover:shadow-[0_22px_40px_-22px_rgba(29,92,74,0.5)] sm:flex-col sm:items-start sm:p-6"
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex size-12 shrink-0 items-center justify-center rounded-full sm:size-13",
                      tints[index % tints.length]
                    )}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        heading,
                        "block text-lg font-extrabold text-(--v-text) group-hover:text-(--v-primary)"
                      )}
                    >
                      {link.label}
                    </span>
                    <span className="mt-0.5 block text-[0.95rem] leading-snug text-(--v-muted) sm:mt-1 sm:leading-relaxed">
                      {link.description}
                    </span>
                  </span>
                  <ArrowRight
                    className="size-5 shrink-0 text-(--v-primary) transition-transform group-hover:translate-x-0.5 sm:hidden"
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      heading,
                      "hidden items-center gap-1 text-sm font-bold text-(--v-primary) sm:inline-flex"
                    )}
                  >
                    Go
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
