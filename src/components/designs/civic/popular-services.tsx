import { ChevronRight } from "lucide-react"

import { quickLinks } from "@/content/home"

import { quickLinkIcons } from "./icons"

export function PopularServices() {
  return (
    <section
      aria-labelledby="civic-services-heading"
      className="bg-white py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-[3px] border-(--civic-blue) pb-3">
          <h2
            id="civic-services-heading"
            className="text-2xl font-bold text-slate-900"
          >
            Popular Services
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-[15px] font-semibold text-(--civic-blue) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"
          >
            All services
            <ChevronRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => {
            const Icon = quickLinkIcons[link.icon]
            return (
              <li key={link.label}>
                <a
                  href="#"
                  className="group flex h-full items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-(--civic-blue) hover:bg-(--civic-blue-tint) focus-visible:ring-4 focus-visible:ring-(--civic-blue) focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-12 shrink-0 items-center justify-center rounded-md bg-(--civic-blue-tint) text-(--civic-blue) group-hover:bg-(--civic-blue) group-hover:text-white"
                  >
                    {Icon ? (
                      <Icon className="size-6" strokeWidth={1.75} />
                    ) : null}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[17px] font-bold text-(--civic-blue) group-hover:underline">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-base leading-relaxed text-slate-700">
                      {link.description}
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
