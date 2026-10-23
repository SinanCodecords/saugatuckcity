import { ArrowRight } from "lucide-react"

import { quickLinks } from "@/content/home"

import { quickLinkIcons } from "./icons"

export function QuickLinks() {
  return (
    <section
      aria-labelledby="harbor-help-heading"
      className="relative z-10 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-10 rounded-lg border border-slate-200 bg-white p-5 shadow-[0_12px_40px_-12px_rgba(11,37,69,0.35)] sm:p-7 lg:-mt-14 lg:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <h2
                id="harbor-help-heading"
                className="text-2xl font-semibold tracking-tight text-(--navy)"
              >
                How can we help?
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                The services residents ask for most.
              </p>
            </div>
            <a
              href="#"
              className="-my-1 inline-flex items-center gap-1 rounded py-1 text-sm font-medium text-(--navy) underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none"
            >
              All services
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {quickLinks.map((link) => {
              const Icon = quickLinkIcons[link.icon]
              return (
                <li key={link.label}>
                  <a
                    href="#"
                    className="group flex h-full flex-row items-start gap-4 rounded-md border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-0.5 hover:border-(--navy) hover:bg-white hover:shadow-md focus-visible:border-(--navy) focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:ring-offset-2 focus-visible:outline-none xl:flex-col xl:gap-3"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm transition-colors group-hover:bg-(--navy-dark)">
                      {Icon ? (
                        <Icon aria-hidden="true" className="size-5" />
                      ) : null}
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-slate-900 group-hover:text-(--navy)">
                        {link.label}
                      </span>
                      <span className="text-xs leading-relaxed text-slate-600">
                        {link.description}
                      </span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
