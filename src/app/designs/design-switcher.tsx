"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { designs } from "./designs"

export function DesignSwitcher() {
  const pathname = usePathname()
  // Stay on the same page when switching, e.g. /designs/harbor/about -> /designs/dunes/about.
  const [, , currentSlug, ...subpath] = pathname.split("/")
  const suffix = subpath.length > 0 ? `/${subpath.join("/")}` : ""

  return (
    <nav
      aria-label="Design options"
      className="sticky top-0 z-100 flex h-10 items-center gap-1 overflow-x-auto border-b border-zinc-800 bg-zinc-950 px-3 font-sans text-xs text-zinc-300"
    >
      <Link
        href="/designs"
        className="mr-1 inline-flex h-8 shrink-0 items-center rounded-md px-1.5 font-semibold text-white hover:underline focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
      >
        Designs
      </Link>
      {designs.map((design, index) => {
        const href = `/designs/${design.slug}${suffix}`
        const active = currentSlug === design.slug
        return (
          <Link
            key={design.slug}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex h-8 shrink-0 items-center rounded-md px-2.5 transition-colors hover:bg-zinc-800 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none",
              active &&
                "bg-white text-zinc-950 hover:bg-white hover:text-zinc-950"
            )}
          >
            {index + 1}. {design.name}
          </Link>
        )
      })}
    </nav>
  )
}
