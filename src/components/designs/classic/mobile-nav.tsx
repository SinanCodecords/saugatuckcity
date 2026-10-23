"use client"

import { useState } from "react"
import { ChevronRight, Menu, Phone, Search } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import { mainNav, navHref, type SitePage } from "@/content/home"

export function MobileNav({ current }: { current: SitePage }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="inline-flex h-10 shrink-0 items-center gap-2 rounded-md border border-(--rule) bg-white px-2.5 text-sm font-semibold tracking-[0.18em] text-(--nav) uppercase transition-colors hover:border-(--blue) hover:text-(--blue-text) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none min-[360px]:px-3 xl:hidden"
        aria-label="Open main menu"
      >
        <Menu className="size-5" aria-hidden="true" />
        <span className="hidden min-[360px]:inline">Menu</span>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[88vw] gap-0 border-l border-(--rule) bg-white p-0 text-(--ink) sm:max-w-sm [&_[data-slot=sheet-close]]:text-(--ink) [&_[data-slot=sheet-close]]:hover:bg-(--band) [&_[data-slot=sheet-close]]:hover:text-(--ink) [&_[data-slot=sheet-close]]:focus-visible:ring-(--blue)"
      >
        <SheetHeader className="gap-1 border-b border-(--rule) bg-(--band) p-5">
          <SheetTitle className="flex items-center gap-3 font-sans text-base font-semibold text-(--ink)">
            <span
              aria-hidden="true"
              className="block h-6 w-11 rounded-[50%] bg-(--blue)"
            />
            City of Saugatuck
          </SheetTitle>
          <SheetDescription className="text-sm text-(--muted)">
            Michigan, est. 1868
          </SheetDescription>
        </SheetHeader>

        <div className="border-b border-(--rule) p-4">
          <form role="search" className="relative" action="#">
            <label htmlFor="classic-mobile-search" className="sr-only">
              Search the site
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-(--muted)"
            />
            <input
              id="classic-mobile-search"
              type="search"
              placeholder="Search services, forms, meetings"
              className="h-11 w-full rounded-md border border-(--rule) bg-white pr-3 pl-9 text-sm text-(--ink) placeholder:text-(--muted) focus-visible:border-(--blue) focus-visible:ring-2 focus-visible:ring-(--blue)/40 focus-visible:outline-none"
            />
          </form>
        </div>

        <nav aria-label="Main (mobile)" className="flex-1 overflow-y-auto">
          <ul className="divide-y divide-(--rule)">
            {mainNav.map((item) => (
              <li key={item.label}>
                <a
                  href={navHref("classic", item)}
                  onClick={() => setOpen(false)}
                  aria-current={item.page === current ? "page" : undefined}
                  className="flex items-center justify-between px-5 py-3.5 text-sm font-semibold tracking-[0.18em] text-(--nav) uppercase transition-colors hover:bg-(--band) hover:text-(--blue-text) focus-visible:bg-(--band) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none focus-visible:ring-inset aria-[current=page]:text-(--blue-text)"
                >
                  {item.label}
                  <ChevronRight
                    aria-hidden="true"
                    className="size-4 text-(--muted)"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-(--rule) bg-(--band) p-5 text-sm text-(--body)">
          <p className="flex items-center gap-2 font-medium text-(--ink)">
            <Phone aria-hidden="true" className="size-4 text-(--blue)" />
            <a
              href="#"
              className="hover:text-(--blue-text) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
            >
              {siteConfig.contact.phone}
            </a>
          </p>
          <p className="mt-1.5">{siteConfig.contact.hours}</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
