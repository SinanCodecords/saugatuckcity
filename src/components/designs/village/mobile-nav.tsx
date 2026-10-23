"use client"

import * as React from "react"
import { Menu, Phone, X } from "lucide-react"

import { cn } from "@/lib/utils"

import { focusRing, heading } from "./shared"

type NavItem = {
  readonly label: string
  readonly href: string
  readonly current?: boolean
}

export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = React.useState(false)
  const panelId = "village-mobile-nav"

  React.useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          focusRing,
          "inline-flex size-11 items-center justify-center rounded-full text-(--v-primary) transition-colors hover:bg-(--v-mint)"
        )}
      >
        {open ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <Menu className="size-6" aria-hidden="true" />
        )}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-3xl border border-(--v-line) bg-white p-3 shadow-[0_24px_48px_-20px_rgba(29,92,74,0.35)]"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    heading,
                    focusRing,
                    "flex items-center rounded-2xl px-4 py-3 text-base font-bold text-(--v-text) transition-colors hover:bg-(--v-mint) hover:text-(--v-primary) aria-[current=page]:bg-(--v-mint) aria-[current=page]:text-(--v-primary)"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#"
          onClick={() => setOpen(false)}
          className={cn(
            heading,
            focusRing,
            "mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-(--v-primary) text-base font-bold text-white hover:bg-(--v-primary-dark)"
          )}
        >
          <Phone className="size-4" aria-hidden="true" />
          Contact City Hall
        </a>
      </div>
    </div>
  )
}
