import { quickLinks } from "@/content/home"

import { quickLinkIcons } from "./icons"

export function QuickLinks() {
  return (
    <section
      aria-labelledby="classic-quick-links"
      className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8"
    >
      <h2
        id="classic-quick-links"
        className="text-center text-[11px] font-semibold tracking-[0.3em] text-(--muted) uppercase"
      >
        Quick Links
      </h2>

      {/* 1px gaps over a rule-colored background give thin dividers in any grid shape */}
      <ul className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-(--rule) bg-(--rule) sm:grid-cols-3 lg:grid-cols-6">
        {quickLinks.map((link) => {
          const Icon = quickLinkIcons[link.icon]
          return (
            <li key={link.label} className="bg-white">
              <a
                href="#"
                className="group flex h-full flex-col items-center gap-3 px-3 py-6 text-center transition-colors hover:bg-(--blue-pale) focus-visible:bg-(--blue-pale) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none focus-visible:ring-inset"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-(--band) text-(--blue-text) transition-colors group-hover:bg-(--blue) group-hover:text-white">
                  {Icon ? <Icon aria-hidden="true" className="size-6" /> : null}
                </span>
                <span className="text-sm leading-snug font-semibold text-(--ink) group-hover:text-(--blue-text)">
                  {link.label}
                </span>
                <span className="sr-only">{link.description}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
