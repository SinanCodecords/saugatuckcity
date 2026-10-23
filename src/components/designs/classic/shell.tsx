import type { CSSProperties, ReactNode } from "react"
import { Caveat } from "next/font/google"

import type { SitePage } from "@/content/home"

import { SiteFooter } from "./site-footer"
import { SiteHeader } from "./site-header"

/** Script face used only for the "Saugatuck" wordmark in the logo placeholder. */
const script = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-script",
})

const palette = {
  "--ink": "#18181b",
  "--body": "#3f3f46",
  "--muted": "#52525b",
  "--nav": "#52525b",
  "--blue": "#3a8fd0",
  "--blue-text": "#1f6fb0",
  "--blue-pale": "#eef6fc",
  "--band": "#f4f4f5",
  "--rule": "#e4e4e7",
} as CSSProperties

/** Palette, header and footer shared by every page in the Classic variant. */
export function ClassicShell({
  current,
  children,
}: {
  current: SitePage
  children: ReactNode
}) {
  return (
    <div
      style={palette}
      className={`${script.variable} flex min-h-screen flex-col bg-white font-sans text-(--body) antialiased`}
    >
      <a
        href="#classic-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-12 focus:left-4 focus:z-[200] focus:rounded-md focus:bg-(--blue) focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:ring-2 focus:ring-(--ink) focus:outline-none"
      >
        Skip to main content
      </a>

      <SiteHeader current={current} />

      <main id="classic-main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>

      <SiteFooter />
    </div>
  )
}
