import Link from "next/link"
import { TriangleAlert } from "lucide-react"

import { alert, mainNav } from "@/content/home"

import { MobileNav } from "./mobile-nav"
import { container, focusRing } from "./styles"

export function SiteHeader() {
  const navItems = mainNav.filter(
    (item) => item.label !== "Home" && item.label !== "Contact"
  )

  return (
    <header className="sticky top-10 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/85">
      <div className={`${container} flex h-16 items-center gap-6`}>
        <Link
          href="/"
          className={`${focusRing} flex shrink-0 items-baseline gap-2 rounded-md`}
        >
          <span className="text-xl font-semibold tracking-tight text-slate-900">
            Saugatuck
          </span>
          <span className="hidden text-xs font-medium tracking-wide text-slate-500 sm:inline">
            City of &middot; Michigan
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`${focusRing} rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Link
            href="#"
            className={`${focusRing} inline-flex h-9 items-center rounded-full bg-(--lk-blue) px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-(--lk-blue-hover)`}
          >
            Contact
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export function AlertStrip() {
  return (
    <div
      role="region"
      aria-label="City notice"
      className="border-b border-amber-200 bg-amber-50 text-amber-900"
    >
      <div
        className={`${container} flex flex-col gap-1 py-2.5 text-sm sm:flex-row sm:items-center sm:gap-3`}
      >
        <span className="inline-flex items-center gap-2 font-semibold">
          <TriangleAlert
            className="size-4 shrink-0 text-amber-700"
            aria-hidden="true"
          />
          {alert.title}
        </span>
        <span className="text-amber-900/90">{alert.body}</span>
        <Link
          href="#"
          className={`${focusRing} rounded-sm font-medium underline underline-offset-4 hover:text-amber-950 sm:ml-auto sm:whitespace-nowrap`}
        >
          Details
        </Link>
      </div>
    </div>
  )
}
