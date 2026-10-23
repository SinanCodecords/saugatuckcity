import Link from "next/link"
import {
  Anchor,
  ArrowUpRight,
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

import { container, SectionHeading, serif } from "./shared"

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

export function DunesAboutIndex() {
  const rows = Math.ceil(aboutSection.length / 2)

  return (
    <section
      aria-labelledby="dn-about-index"
      className="border-t border-(--dn-rule) bg-(--dn-bg-deep)/40"
    >
      <div className={`${container} py-14 sm:py-16 lg:py-24`}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <SectionHeading
              id="dn-about-index"
              label="In this section"
              title="Charters, codes and the everyday."
            />
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-(--dn-ink-soft) lg:col-span-4 lg:col-start-9">
            Everything that sits under About, from the City Charter to the trash
            calendar.
          </p>
        </div>

        {/* Reads down the first column, then the second, on desktop. */}
        <ol
          className="mt-8 grid grid-cols-1 border-t border-(--dn-ink) sm:mt-10 lg:mt-14 lg:grid-flow-col lg:grid-cols-2 lg:gap-x-12"
          style={{ gridTemplateRows: `repeat(${rows}, auto)` }}
        >
          {aboutSection.map((page, index) => {
            const Icon = icons[page.icon]
            const number = String(index + 1).padStart(2, "0")
            return (
              <li key={page.label} className="border-b border-(--dn-rule)">
                <Link
                  href="#"
                  className="group grid h-full grid-cols-[2.5rem_1fr_auto] items-start gap-x-3 rounded-sm py-5 transition-colors hover:bg-(--dn-bg-deep)/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-(--dn-teal) sm:grid-cols-[4rem_1fr_auto] sm:gap-x-4 sm:px-3 sm:py-7"
                >
                  <span
                    className={`${serif} text-2xl leading-none font-light text-(--dn-terra) tabular-nums sm:text-[2rem]`}
                  >
                    {number}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block ${serif} text-[22px] leading-snug text-(--dn-ink) transition-colors group-hover:text-(--dn-teal) sm:text-2xl`}
                    >
                      {page.label}
                    </span>
                    <span className="mt-1.5 flex items-start gap-2 text-[15px] leading-relaxed text-(--dn-ink-soft)">
                      <Icon
                        className="mt-1 size-4 shrink-0 text-(--dn-teal)"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      {page.description}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="mt-1 size-4 shrink-0 text-(--dn-ink-soft) transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-(--dn-teal)"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
