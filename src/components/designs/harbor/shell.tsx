import type { CSSProperties, ReactNode } from "react"

import type { SitePage } from "@/content/home"

import { SiteFooter } from "./site-footer"
import { SiteHeader } from "./site-header"

const palette = {
  "--navy": "#0b2545",
  "--navy-dark": "#071a33",
  "--gold": "#c9a227",
  "--gold-light": "#dbb64a",
} as CSSProperties

/** Palette, header and footer shared by every page in the Harbor variant. */
export function HarborShell({
  current,
  children,
}: {
  current: SitePage
  children: ReactNode
}) {
  return (
    <div
      style={palette}
      className="flex min-h-screen flex-col bg-white font-sans text-slate-900 antialiased"
    >
      <a
        href="#harbor-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-12 focus:left-4 focus:z-[200] focus:rounded-md focus:bg-(--gold) focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-(--navy-dark) focus:shadow-lg focus:ring-2 focus:ring-(--navy) focus:outline-none"
      >
        Skip to main content
      </a>

      <SiteHeader current={current} />

      <main id="harbor-main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>

      <SiteFooter />
    </div>
  )
}
