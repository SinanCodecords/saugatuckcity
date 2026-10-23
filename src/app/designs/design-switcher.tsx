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
    <div className="sticky top-0 z-100 flex h-10 items-center gap-1 overflow-x-auto border-b border-zinc-800 bg-zinc-950 px-3 font-sans text-xs text-zinc-300">
      <Link
        href="/designs"
        className="mr-2 shrink-0 font-semibold text-white hover:underline"
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
            className={cn(
              "shrink-0 rounded-md px-2.5 py-1 transition-colors hover:bg-zinc-800 hover:text-white",
              active &&
                "bg-white text-zinc-950 hover:bg-white hover:text-zinc-950"
            )}
          >
            {index + 1}. {design.name}
          </Link>
        )
      })}
    </div>
  )
}
