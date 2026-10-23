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

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="inline-flex h-10 items-center gap-2 rounded-md border border-white/25 px-3 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-(--gold) focus-visible:ring-offset-2 focus-visible:ring-offset-(--navy) focus-visible:outline-none xl:hidden"
        aria-label="Open main menu"
      >
        <Menu className="size-5" aria-hidden="true" />
        Menu
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[88vw] gap-0 border-l border-(--navy-dark) bg-white p-0 text-slate-900 sm:max-w-sm [&_[data-slot=sheet-close]]:text-white [&_[data-slot=sheet-close]]:hover:bg-white/15 [&_[data-slot=sheet-close]]:hover:text-white"
      >
        <SheetHeader className="gap-1 bg-(--navy) p-5 text-white">
          <SheetTitle className="flex items-center gap-3 text-base font-semibold text-white">
            <span
              aria-hidden="true"
              className="flex size-9 items-center justify-center rounded-full border-2 border-(--gold) bg-(--navy-dark) text-sm font-bold text-white"
            >
              S
            </span>
            City of Saugatuck
          </SheetTitle>
          <SheetDescription className="text-sm text-slate-200">
            Michigan
          </SheetDescription>
        </SheetHeader>

        <div className="border-b border-slate-200 p-4">
          <form role="search" className="relative" action="#">
            <label htmlFor="harbor-mobile-search" className="sr-only">
              Search the site
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-500"
            />
            <input
              id="harbor-mobile-search"
              type="search"
              placeholder="Search services, forms, meetings"
              className="h-11 w-full rounded-md border border-slate-300 bg-white pr-3 pl-9 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:border-(--navy) focus-visible:ring-2 focus-visible:ring-(--navy)/30 focus-visible:outline-none"
            />
          </form>
        </div>

        <nav aria-label="Main (mobile)" className="flex-1 overflow-y-auto">
          <ul className="divide-y divide-slate-200">
            {mainNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href === "/" ? "#" : item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-5 py-3.5 text-base font-medium text-slate-900 transition-colors hover:bg-slate-50 hover:text-(--navy) focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none focus-visible:ring-inset"
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

        <div className="border-t border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="flex items-center gap-2 font-medium text-slate-900">
            <Phone aria-hidden="true" className="size-4 text-(--navy)" />
            <a
              href="#"
              className="hover:text-(--navy) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none"
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
