import { Clock, Globe, Info, Phone, Search } from "lucide-react"

import { siteConfig } from "@/config/site"
import { alert, mainNav, navHref, type SitePage } from "@/content/home"

import { ClassicLogo } from "./logo"
import { MobileNav } from "./mobile-nav"

const stripLink =
  "inline-flex items-center gap-1.5 rounded px-1 py-1.5 text-(--body) hover:text-(--blue-text) hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--blue)"

export function SiteHeader({ current }: { current: SitePage }) {
  return (
    <>
      {/* Top strip */}
      <div className="relative z-30 border-b border-(--rule) bg-(--band)">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:px-6 lg:px-8">
          <ul className="flex min-w-0 items-center gap-4 overflow-hidden whitespace-nowrap">
            <li>
              <a href="#" className={stripLink}>
                <Phone aria-hidden="true" className="size-3.5 text-(--blue)" />
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="hidden items-center gap-1.5 text-(--body) md:flex">
              <Clock aria-hidden="true" className="size-3.5 text-(--blue)" />
              {siteConfig.contact.hours}
            </li>
          </ul>

          <div className="flex shrink-0 items-center gap-3">
            <a href="#" className={stripLink}>
              <Globe aria-hidden="true" className="size-3.5" />
              Translate
            </a>
            <form
              role="search"
              action="#"
              className="hidden items-center sm:flex"
            >
              <label htmlFor="classic-site-search" className="sr-only">
                Search the site
              </label>
              <input
                id="classic-site-search"
                type="search"
                placeholder="Search"
                className="h-7 w-36 rounded-l-md border border-(--rule) bg-white px-2.5 text-xs text-(--ink) placeholder:text-(--muted) focus-visible:relative focus-visible:z-10 focus-visible:border-(--blue) focus-visible:ring-2 focus-visible:ring-(--blue)/40 focus-visible:outline-none md:w-48"
              />
              <button
                type="submit"
                aria-label="Search"
                className="inline-flex h-7 w-8 items-center justify-center rounded-r-md border border-l-0 border-(--rule) bg-white text-(--body) transition-colors hover:bg-(--blue) hover:text-white focus-visible:relative focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
              >
                <Search aria-hidden="true" className="size-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Logo and menu bar, sticky below the 40px design switcher */}
      <header className="sticky top-10 z-40 border-b border-(--rule) bg-white">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:h-[84px] sm:px-6 lg:px-8">
          <ClassicLogo layout="inline" />

          <nav aria-label="Main" className="hidden self-stretch xl:block">
            <ul className="flex h-full items-stretch">
              {mainNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={navHref("classic", item)}
                    aria-current={item.page === current ? "page" : undefined}
                    className="relative flex h-full items-center px-2.5 text-[13px] font-semibold tracking-[0.12em] whitespace-nowrap text-(--nav) uppercase transition-colors hover:text-(--blue-text) focus-visible:text-(--blue-text) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none focus-visible:ring-inset aria-[current=page]:text-(--blue-text) aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-2.5 aria-[current=page]:after:bottom-0 aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-(--blue)"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <MobileNav current={current} />
        </div>
      </header>

      {/* Alert strip */}
      <div
        role="region"
        aria-label="City notice"
        className="border-b border-(--blue)/30 bg-(--blue-pale) text-(--ink)"
      >
        <div className="mx-auto flex max-w-6xl items-start gap-3 px-4 py-2.5 text-sm sm:items-center sm:px-6 lg:px-8">
          <Info
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-(--blue-text) sm:mt-0"
          />
          <p className="min-w-0">
            <strong className="font-semibold">{alert.title}:</strong>{" "}
            {alert.body}{" "}
            <a
              href="#"
              className="font-medium whitespace-nowrap text-(--blue-text) underline underline-offset-2 hover:text-(--ink) focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
            >
              Details
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
