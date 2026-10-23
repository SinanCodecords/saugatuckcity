"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import { mainNav } from "@/content/home"

import { focusRing } from "./styles"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={`${focusRing} inline-flex size-10 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 md:hidden`}
        aria-label="Open menu"
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[88vw] max-w-sm gap-0 border-l border-slate-200 bg-white p-0 font-sans text-slate-900"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <SheetTitle className="font-sans text-base font-semibold tracking-tight text-slate-900">
              Saugatuck
            </SheetTitle>
            <SheetDescription className="text-xs text-slate-600">
              City of &middot; Michigan
            </SheetDescription>
          </div>
          <SheetClose
            className={`${focusRing} inline-flex size-9 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900`}
            aria-label="Close menu"
          >
            <X className="size-5" aria-hidden="true" />
          </SheetClose>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-3">
          <ul className="flex flex-col">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`${focusRing} flex items-center rounded-lg px-3 py-3 text-[15px] font-medium text-slate-800 transition-colors hover:bg-slate-100 hover:text-slate-900`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^\d]/g, "")}`}
            className={`${focusRing} inline-flex items-center gap-2 rounded-md font-medium text-slate-900 hover:underline`}
          >
            <Phone className="size-4 text-(--lk-blue)" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
          <p className="mt-1.5 text-xs leading-5 text-slate-600">
            {siteConfig.contact.hours}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
