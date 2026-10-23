import Link from "next/link"
import { CreditCard } from "lucide-react"

import { mainNav } from "@/content/home"

import { BeaconMobileNav } from "./mobile-nav"
import { BeaconWordmark } from "./wordmark"

export function BeaconHeader() {
  return (
    <header className="sticky top-10 z-50 border-b border-[var(--beacon-ink-line)] bg-[var(--beacon-ink)] text-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="rounded-md focus-visible:ring-2 focus-visible:ring-[var(--beacon-amber)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--beacon-ink)] focus-visible:outline-none"
          aria-label="City of Saugatuck, Michigan — home"
        >
          <BeaconWordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href === "/" ? "#" : item.href}
                  className="group relative block rounded-md px-3 py-2 text-sm font-medium text-[var(--beacon-muted-dark)] transition-colors hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[var(--beacon-amber)] focus-visible:outline-none"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 scale-x-0 bg-[var(--beacon-amber)] transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden items-center gap-2 rounded-lg bg-[var(--beacon-amber)] px-4 py-2.5 text-sm font-bold text-[var(--beacon-ink)] transition-colors hover:bg-[var(--beacon-amber-deep)] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--beacon-ink)] focus-visible:outline-none sm:inline-flex"
          >
            <CreditCard className="size-4" aria-hidden="true" />
            Pay a bill
          </Link>
          <BeaconMobileNav />
        </div>
      </div>
    </header>
  )
}
