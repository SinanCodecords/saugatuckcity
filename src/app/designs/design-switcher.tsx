"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { designs } from "./designs"

export function DesignSwitcher() {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-100 flex h-10 items-center gap-1 overflow-x-auto border-b border-zinc-800 bg-zinc-950 px-3 font-sans text-xs text-zinc-300">
      <Link
        href="/designs"
        className="mr-2 shrink-0 font-semibold text-white hover:underline"
      >
        Designs
      </Link>
      {designs.map((design, index) => {
        const href = `/designs/${design.slug}`
        const active = pathname === href
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
