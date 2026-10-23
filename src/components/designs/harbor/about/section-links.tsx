import { aboutSection } from "@/content/about"

import { aboutSectionIcons } from "./icons"

export function SectionLinks() {
  return (
    <section
      aria-labelledby="harbor-in-section-heading"
      className="bg-white pb-14 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b-2 border-(--navy) pb-3">
          <h2
            id="harbor-in-section-heading"
            className="text-2xl font-semibold tracking-tight text-(--navy)"
          >
            In this section
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Everything filed under About, in one place.
          </p>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {aboutSection.map((page) => {
            const Icon = aboutSectionIcons[page.icon]
            return (
              <li key={page.label}>
                <a
                  href="#"
                  className="group flex h-full flex-row items-start gap-4 rounded-md border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-0.5 hover:border-(--navy) hover:bg-white hover:shadow-md focus-visible:border-(--navy) focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:ring-offset-2 focus-visible:outline-none lg:flex-col lg:gap-3"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm transition-colors group-hover:bg-(--navy-dark)">
                    {Icon ? (
                      <Icon aria-hidden="true" className="size-5" />
                    ) : null}
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-(--navy)">
                      {page.label}
                    </span>
                    <span className="text-xs leading-relaxed text-slate-600">
                      {page.description}
                    </span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
