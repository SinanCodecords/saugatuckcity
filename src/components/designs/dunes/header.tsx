import Link from "next/link"
import { Search } from "lucide-react"

import {
  alert,
  mainNav,
  navHref,
  pageHref,
  type SitePage,
} from "@/content/home"

import { DunesMobileNav } from "./mobile-nav"

export function DunesHeader({ current }: { current: SitePage }) {
  return (
    <header className="sticky top-10 z-40 border-b border-(--dn-rule) bg-(--dn-bg)/95 backdrop-blur supports-backdrop-filter:bg-(--dn-bg)/85">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Wordmark row */}
        <div className="relative flex h-16 items-center justify-between gap-3 lg:h-20 lg:justify-center">
          <div className="shrink-0 lg:hidden">
            <DunesMobileNav current={current} />
          </div>

          <Link
            href={pageHref("dunes", "home")}
            className="group inline-flex min-w-0 flex-col items-center rounded-sm text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--dn-teal)"
          >
            <span className="font-(family-name:--font-dunes-serif) text-[13px] font-semibold tracking-[0.2em] whitespace-nowrap uppercase sm:text-sm sm:tracking-[0.22em] lg:text-[15px]">
              City of Saugatuck
              <span className="hidden sm:inline">
                <span aria-hidden="true" className="mx-2 text-(--dn-terra)">
                  ·
                </span>
                Michigan
              </span>
            </span>
            {/* On phones the state drops to its own small line so the wordmark never wraps. */}
            <span className="mt-0.5 text-[11px] tracking-[0.22em] text-(--dn-ink-soft) uppercase sm:hidden">
              Michigan
            </span>
            <span className="mt-1 hidden text-[11px] tracking-[0.18em] text-(--dn-ink-soft) uppercase sm:block">
              Est. 1868 · On the Kalamazoo Harbor
            </span>
          </Link>

          <button
            type="button"
            aria-label="Search the site"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-(--dn-ink) transition-colors hover:bg-(--dn-bg-deep) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--dn-teal) lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2"
          >
            <Search
              className="size-[18px]"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Centered nav (desktop) */}
        <nav
          aria-label="Primary"
          className="hidden items-center justify-center border-t border-(--dn-rule) lg:flex"
        >
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={navHref("dunes", item)}
                  aria-current={item.page === current ? "page" : undefined}
                  className="group relative inline-flex h-11 items-center px-3.5 text-[13px] font-medium tracking-[0.06em] text-(--dn-ink) transition-colors hover:text-(--dn-teal) focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-(--dn-teal) aria-[current=page]:text-(--dn-teal)"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3.5 bottom-0 h-px scale-x-0 bg-(--dn-teal) transition-transform duration-200 group-hover:scale-x-100 group-aria-[current=page]:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Thin alert line */}
      <div
        role="status"
        className="border-t border-(--dn-rule) bg-(--dn-bg-deep)"
      >
        <div className="mx-auto flex w-full max-w-7xl items-baseline gap-3 px-5 py-2 text-[13px] leading-snug sm:px-8">
          <span className="shrink-0 font-semibold tracking-[0.14em] text-(--dn-terra) uppercase">
            Notice
          </span>
          <p className="min-w-0 text-(--dn-ink)">
            <span className="font-medium">{alert.title}.</span>{" "}
            <span className="text-(--dn-ink-soft)">{alert.body}</span>{" "}
            <Link
              href="#"
              className="font-medium whitespace-nowrap text-(--dn-terra) underline decoration-(--dn-terra)/40 underline-offset-[3px] transition-colors hover:decoration-(--dn-terra) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--dn-terra)"
            >
              Details
            </Link>
          </p>
        </div>
      </div>
    </header>
  )
}
