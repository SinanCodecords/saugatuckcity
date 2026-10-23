"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { siteConfig } from "@/config/site"
import { mainNav, navHref, type SitePage } from "@/content/home"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function DunesMobileNav({ current }: { current: SitePage }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="inline-flex size-10 items-center justify-center rounded-full text-(--dn-ink) transition-colors hover:bg-(--dn-bg-deep) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--dn-teal)"
      >
        <Menu className="size-5" strokeWidth={1.75} aria-hidden="true" />
      </SheetTrigger>

      <SheetContent
        side="left"
        showCloseButton={false}
        className="w-[86vw] gap-0 border-r border-(--dn-rule) bg-(--dn-bg) p-0 text-(--dn-ink) sm:max-w-sm"
      >
        <div className="flex h-16 items-center justify-between border-b border-(--dn-rule) px-5">
          <SheetTitle className="font-(family-name:--font-dunes-serif) text-[13px] font-semibold tracking-[0.22em] text-(--dn-ink) uppercase">
            City of Saugatuck
          </SheetTitle>
          <SheetDescription className="sr-only">
            Primary site navigation
          </SheetDescription>
          <SheetClose
            aria-label="Close menu"
            className="inline-flex size-10 items-center justify-center rounded-full text-(--dn-ink) transition-colors hover:bg-(--dn-bg-deep) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--dn-teal)"
          >
            <X className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </SheetClose>
        </div>

        <nav aria-label="Primary" className="flex-1 overflow-y-auto px-2 py-3">
          <ul>
            {mainNav.map((item, index) => (
              <li key={item.label}>
                <Link
                  href={navHref("dunes", item)}
                  aria-current={item.page === current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 rounded-md px-3 py-3 font-(family-name:--font-dunes-serif) text-xl text-(--dn-ink) transition-colors hover:bg-(--dn-bg-deep) focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-(--dn-teal) aria-[current=page]:text-(--dn-teal)"
                >
                  <span className="w-6 font-sans text-[11px] tracking-[0.12em] text-(--dn-ink-soft) tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-(--dn-rule) px-5 py-5 text-[13px] leading-relaxed text-(--dn-ink-soft)">
          <p className="font-medium text-(--dn-ink)">
            {siteConfig.contact.address}
          </p>
          <p>{siteConfig.contact.phone}</p>
          <p>{siteConfig.contact.hours}</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
