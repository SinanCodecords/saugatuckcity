import {
  Anchor,
  ArrowRight,
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

import { aboutSection } from "@/content/about"
import { cn } from "@/lib/utils"

import { Container, SectionHeading, focusRing, heading } from "../shared"
import { cardShadow, tint } from "./shared"

const icons: Record<(typeof aboutSection)[number]["icon"], LucideIcon> = {
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

export function VillageAboutSectionLinks() {
  return (
    <section aria-labelledby="village-pages-title" className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)] lg:gap-12">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <SectionHeading
              id="village-pages-title"
              eyebrow="In this section"
              title="Find your way around"
              description={`${aboutSection.length} pages about how Saugatuck works, from the City Charter to trash day.`}
            />
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {aboutSection.map((page, index) => {
              const Icon = icons[page.icon]
              return (
                <li key={page.label}>
                  <a
                    href="#"
                    className={cn(
                      focusRing,
                      cardShadow,
                      "group flex h-full items-start gap-4 rounded-3xl border border-(--v-line) bg-(--v-card) p-5 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-(--v-primary)/30 hover:shadow-[0_22px_40px_-22px_rgba(29,92,74,0.5)]"
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex size-12 shrink-0 items-center justify-center rounded-full",
                        tint(index)
                      )}
                    >
                      <Icon className="size-5.5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          heading,
                          "block text-[1.05rem] leading-snug font-extrabold text-(--v-text) group-hover:text-(--v-primary)"
                        )}
                      >
                        {page.label}
                      </span>
                      <span className="mt-1 block text-[0.95rem] leading-relaxed text-(--v-muted)">
                        {page.description}
                      </span>
                    </span>
                    <ArrowRight
                      className="mt-1 size-4 shrink-0 text-(--v-muted) transition-transform group-hover:translate-x-0.5 group-hover:text-(--v-primary)"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
