import { ChevronDown, ChevronRight } from "lucide-react"

import { aboutSection } from "@/content/about"

import { aboutSectionIcons } from "./icons"

function SectionLinks() {
  return (
    <ul className="divide-y divide-(--rule)">
      {aboutSection.map((page) => {
        const Icon = aboutSectionIcons[page.icon]
        return (
          <li key={page.label}>
            <a
              href="#"
              className="group flex items-start gap-3 px-5 py-2.5 text-sm leading-snug font-medium text-(--ink) transition-colors hover:bg-(--blue-pale) hover:text-(--blue-text) focus-visible:bg-(--blue-pale) focus-visible:text-(--blue-text) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none focus-visible:ring-inset"
            >
              <Icon
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-(--blue)"
              />
              <span className="min-w-0 flex-1">{page.label}</span>
              <ChevronRight
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-(--muted) transition-colors group-hover:text-(--blue-text)"
              />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

/** Desktop sidebar version: always open, styled like the home page widgets. */
export function SectionNav() {
  return (
    <nav
      aria-labelledby="classic-about-section-nav"
      className="overflow-hidden rounded-md border border-(--rule) bg-white"
    >
      <h2
        id="classic-about-section-nav"
        className="border-b border-(--rule) bg-(--band) px-5 py-3 text-[11px] font-semibold tracking-[0.25em] text-(--ink) uppercase"
      >
        In this section
      </h2>
      <SectionLinks />
    </nav>
  )
}

/** Mobile version: the same links in a disclosure so they don't push content down. */
export function SectionNavDisclosure() {
  return (
    <details className="group overflow-hidden rounded-md border border-(--rule) bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 bg-(--band) px-5 py-3.5 text-[11px] font-semibold tracking-[0.25em] text-(--ink) uppercase group-open:border-b group-open:border-(--rule) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none focus-visible:ring-inset [&::-webkit-details-marker]:hidden">
        <span>
          In this section
          <span className="ml-2 font-medium tracking-normal text-(--muted) normal-case">
            ({aboutSection.length} pages)
          </span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className="size-4 shrink-0 text-(--blue-text) transition-transform group-open:rotate-180"
        />
      </summary>
      <nav aria-label="In this section">
        <SectionLinks />
      </nav>
    </details>
  )
}
