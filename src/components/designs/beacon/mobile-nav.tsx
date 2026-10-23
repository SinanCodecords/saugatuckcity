"use client"

import * as React from "react"
import Link from "next/link"
import { CreditCard, Menu, X } from "lucide-react"

import { mainNav } from "@/content/home"

export function BeaconMobileNav() {
  const [open, setOpen] = React.useState(false)
  const panelId = "beacon-mobile-nav"

  React.useEffect(() => {
    if (!open) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex size-11 items-center justify-center rounded-lg border border-[var(--beacon-ink-line)] text-white transition-colors hover:bg-[var(--beacon-ink-soft)] focus-visible:ring-2 focus-visible:ring-[var(--beacon-amber)] focus-visible:outline-none"
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-t border-[var(--beacon-ink-line)] bg-[var(--beacon-ink)] shadow-2xl"
      >
        <nav aria-label="Primary mobile" className="px-4 py-4 sm:px-6">
          <ul className="divide-y divide-[var(--beacon-ink-line)]">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href === "/" ? "#" : item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 text-base font-medium text-white transition-colors hover:text-[var(--beacon-amber)] focus-visible:text-[var(--beacon-amber)] focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--beacon-amber)] px-4 py-3 text-sm font-bold text-[var(--beacon-ink)] transition-colors hover:bg-[var(--beacon-amber-deep)] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:hidden"
          >
            <CreditCard className="size-4" aria-hidden="true" />
            Pay a bill
          </Link>
        </nav>
      </div>
    </div>
  )
}
