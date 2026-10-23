import { Clock, Globe, MapPin, Phone, Search } from "lucide-react"

import { siteConfig } from "@/config/site"
import {
  alert,
  mainNav,
  navHref,
  pageHref,
  type SitePage,
} from "@/content/home"

import { MobileNav } from "./mobile-nav"

const utilityLink =
  "inline-flex items-center gap-1.5 rounded px-1 py-1 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--gold)"

export function SiteHeader({ current }: { current: SitePage }) {
  return (
    <header className="relative z-40 text-white">
      {/* Utility bar */}
      <div className="border-b border-white/10 bg-(--navy-dark)">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-xs text-slate-200 sm:px-6 lg:px-8">
          <ul className="flex min-w-0 items-center gap-4 overflow-hidden whitespace-nowrap">
            <li className="hidden items-center gap-1.5 lg:flex">
              <MapPin aria-hidden="true" className="size-3.5 text-(--gold)" />
              <span className="truncate">{siteConfig.contact.address}</span>
            </li>
            <li>
              <a href="#" className={utilityLink}>
                <Phone aria-hidden="true" className="size-3.5 text-(--gold)" />
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="hidden items-center gap-1.5 md:flex">
              <Clock aria-hidden="true" className="size-3.5 text-(--gold)" />
              {siteConfig.contact.hours}
            </li>
          </ul>
          <ul className="flex shrink-0 items-center gap-3">
            <li>
              <a href="#" className={utilityLink}>
                <Globe aria-hidden="true" className="size-3.5" />
                Translate
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="#" className={utilityLink}>
                <Search aria-hidden="true" className="size-3.5" />
                Search
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-(--navy) shadow-[inset_0_-2px_0_0_var(--gold)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8 xl:py-0">
          <a
            href={pageHref("harbor", "home")}
            className="group flex items-center gap-3 rounded-md py-2 focus-visible:ring-2 focus-visible:ring-(--gold) focus-visible:ring-offset-2 focus-visible:ring-offset-(--navy) focus-visible:outline-none"
            aria-label="City of Saugatuck, Michigan — home"
          >
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-(--gold) bg-(--navy-dark) text-lg font-bold tracking-tight text-white shadow-sm lg:size-12"
            >
              S
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-tight whitespace-nowrap sm:text-lg">
                City of Saugatuck
              </span>
              <span className="text-[11px] font-medium tracking-[0.18em] text-(--gold) uppercase">
                Michigan
              </span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-stretch">
              {mainNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={navHref("harbor", item)}
                    aria-current={item.page === current ? "page" : undefined}
                    className="relative flex h-16 items-center px-3 text-sm font-medium whitespace-nowrap text-slate-100 transition-colors hover:bg-white/8 hover:text-white focus-visible:bg-white/8 focus-visible:text-white focus-visible:ring-2 focus-visible:ring-(--gold) focus-visible:outline-none focus-visible:ring-inset aria-[current=page]:text-white aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:bottom-0 aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-(--gold)"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <MobileNav current={current} />
        </div>
      </div>

      {/* Alert banner */}
      <div
        role="region"
        aria-label="City notice"
        className="border-b border-amber-300 bg-amber-50 text-amber-950"
      >
        <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-2.5 text-sm sm:items-center sm:px-6 lg:px-8">
          <span className="mt-0.5 inline-flex shrink-0 items-center rounded-sm bg-amber-700 px-1.5 py-0.5 text-[11px] font-bold tracking-wide text-white uppercase sm:mt-0">
            Notice
          </span>
          <p className="min-w-0">
            <strong className="font-semibold">{alert.title}:</strong>{" "}
            {alert.body}{" "}
            <a
              href="#"
              className="font-medium whitespace-nowrap text-amber-900 underline decoration-amber-700/60 underline-offset-2 hover:decoration-amber-900 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
            >
              Details
            </a>
          </p>
        </div>
      </div>
    </header>
  )
}
