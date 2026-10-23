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
import { mainNav } from "@/content/home"

import { iWantToGroups } from "./i-want-to-data"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="inline-flex h-12 items-center gap-2 px-4 text-[15px] font-semibold text-white transition-colors hover:bg-(--civic-blue-dark) focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-inset lg:hidden"
        aria-label="Open main menu"
      >
        <Menu className="size-5" aria-hidden="true" />
        Menu
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[88vw] gap-0 border-l border-slate-200 bg-white p-0 text-slate-900 sm:max-w-sm [&_[data-slot=sheet-close]]:text-white [&_[data-slot=sheet-close]]:hover:bg-white/15 [&_[data-slot=sheet-close]]:hover:text-white [&_[data-slot=sheet-close]]:focus-visible:ring-white"
      >
        <SheetHeader className="gap-1 bg-(--civic-blue) p-5 text-white">
          <SheetTitle className="flex items-center gap-3 text-base font-bold text-white">
            <span
              aria-hidden="true"
              className="flex size-9 items-center justify-center rounded-full border-2 border-white/80 bg-(--civic-blue-dark) text-sm font-bold text-white"
            >
              S
            </span>
            City of Saugatuck
          </SheetTitle>
          <SheetDescription className="text-sm text-blue-100">
            Michigan · Est. 1868
          </SheetDescription>
        </SheetHeader>

        <div className="border-b border-slate-200 p-4">
          <form role="search" className="relative" action="#">
            <label htmlFor="civic-mobile-search" className="sr-only">
              Search the site
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-500"
            />
            <input
              id="civic-mobile-search"
              type="search"
              placeholder="Search this site"
              className="h-11 w-full rounded-md border border-slate-300 bg-white pr-3 pl-9 text-base text-slate-900 placeholder:text-slate-500 focus-visible:border-(--civic-blue) focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"
            />
          </form>
        </div>

        <div className="flex-1 overflow-y-auto">
          <nav aria-label="Main (mobile)">
            <ul className="divide-y divide-slate-200 border-b border-slate-200">
              {mainNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href === "/" ? "#" : item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-5 py-3.5 text-base font-semibold text-slate-900 transition-colors hover:bg-(--civic-gray) hover:text-(--civic-blue) focus-visible:bg-(--civic-gray) focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none focus-visible:ring-inset"
                  >
                    {item.label}
                    <ChevronRight
                      aria-hidden="true"
                      className="size-4 text-slate-400"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="I Want To (mobile)" className="bg-(--civic-gray)">
            <h2 className="px-5 pt-5 pb-2 text-sm font-bold text-slate-900">
              I Want To…
            </h2>
            {iWantToGroups.map((group) => (
              <div key={group.heading} className="px-5 pb-4">
                <h3 className="mb-1 text-xs font-bold tracking-wider text-(--civic-blue) uppercase">
                  {group.heading}
                </h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        onClick={() => setOpen(false)}
                        className="block rounded py-1.5 text-[15px] text-slate-800 hover:text-(--civic-blue) hover:underline focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-200 bg-white p-5 text-sm text-slate-700">
          <p className="flex items-center gap-2 font-semibold text-slate-900">
            <Phone aria-hidden="true" className="size-4 text-(--civic-blue)" />
            <a
              href="#"
              className="hover:text-(--civic-blue) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"
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
