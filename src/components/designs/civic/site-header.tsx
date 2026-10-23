import {
  Accessibility,
  Clock,
  Globe,
  Info,
  Mail,
  Phone,
  Search,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { alert, mainNav } from "@/content/home"

import { IWantToMenu } from "./i-want-to-menu"
import { MobileNav } from "./mobile-nav"

const utilityLink =
  "inline-flex items-center gap-1.5 rounded px-1 py-0.5 text-slate-700 hover:text-(--civic-blue) hover:underline focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"

export function SiteHeader() {
  return (
    <header className="relative z-40">
      {/* Utility bar */}
      <div className="border-b border-slate-200 bg-(--civic-gray)">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 text-sm sm:px-6 lg:px-8">
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className={utilityLink}>
                <Globe aria-hidden="true" className="size-4" />
                Translate
              </a>
            </li>
            <li>
              <a href="#" className={utilityLink}>
                <Accessibility aria-hidden="true" className="size-4" />
                Accessibility
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="#" className={utilityLink}>
                <Mail aria-hidden="true" className="size-4" />
                Contact Us
              </a>
            </li>
          </ul>
          <form
            role="search"
            action="#"
            className="hidden items-center md:flex"
          >
            <label htmlFor="civic-site-search" className="sr-only">
              Search this site
            </label>
            <input
              id="civic-site-search"
              type="search"
              placeholder="Search…"
              className="h-7 w-56 rounded-l-md border border-r-0 border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:border-(--civic-blue) focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-7 items-center gap-1 rounded-r-md bg-(--civic-blue) px-3 text-sm font-semibold text-white hover:bg-(--civic-blue-dark) focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:ring-offset-1 focus-visible:outline-none"
            >
              <Search aria-hidden="true" className="size-4" />
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#"
            className="flex items-center gap-3 rounded-md focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label="City of Saugatuck, Michigan — home"
          >
            <span
              aria-hidden="true"
              className="flex size-14 shrink-0 items-center justify-center rounded-full border-[3px] border-(--civic-blue-dark) bg-(--civic-blue) text-2xl font-bold text-white shadow-sm"
            >
              S
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                City of Saugatuck
              </span>
              <span className="text-sm text-slate-600">
                Michigan · Est. 1868
              </span>
            </span>
          </a>

          <div className="hidden flex-col items-end gap-1 text-sm text-slate-700 md:flex">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded text-base font-semibold text-(--civic-blue) hover:underline focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"
            >
              <Phone aria-hidden="true" className="size-4" />
              {siteConfig.contact.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock aria-hidden="true" className="size-4 text-slate-500" />
              City Hall hours: {siteConfig.contact.hours}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

/** Sticky blue navigation bar. Rendered as a sibling of the header so that
 *  `position: sticky` is not clipped by the header's box. */
export function MainNavBar() {
  return (
    <div className="sticky top-10 z-40 bg-(--civic-blue) shadow-md">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-stretch justify-between px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-stretch">
          <IWantToMenu />
          <ul className="hidden items-stretch lg:flex">
            {mainNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href === "/" ? "#" : item.href}
                  aria-current={item.label === "Home" ? "page" : undefined}
                  className="flex h-12 items-center px-3.5 text-[15px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-(--civic-blue-dark) focus-visible:bg-(--civic-blue-dark) focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-inset aria-[current=page]:shadow-[inset_0_-3px_0_0_white]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <MobileNav />
      </nav>
    </div>
  )
}

export function AlertBar() {
  return (
    <div
      role="region"
      aria-label="City alert"
      className="border-b border-amber-300 bg-amber-50 text-amber-950"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-3 text-[15px] sm:items-center sm:px-6 lg:px-8">
        <Info
          aria-hidden="true"
          className="mt-0.5 size-5 shrink-0 text-amber-700 sm:mt-0"
        />
        <p className="min-w-0 leading-relaxed">
          <strong className="font-bold">{alert.title}:</strong> {alert.body}{" "}
          <a
            href="#"
            className="font-semibold whitespace-nowrap text-amber-900 underline underline-offset-2 hover:text-amber-950 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none"
          >
            Read more
          </a>
        </p>
      </div>
    </div>
  )
}
