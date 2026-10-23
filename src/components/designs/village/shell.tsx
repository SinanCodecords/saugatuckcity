import type { CSSProperties, ReactNode } from "react"
import { Nunito } from "next/font/google"

import type { SitePage } from "@/content/home"
import { cn } from "@/lib/utils"

import { VillageFooter } from "./footer"
import { VillageHeader } from "./header"
import { focusRing, heading } from "./shared"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-village-heading",
  display: "swap",
})

/**
 * Palette is scoped to this variant with CSS variables so it renders the same
 * whether or not the root <html> carries the `.dark` class.
 */
const palette = {
  "--v-bg": "#f3f8f6",
  "--v-card": "#fffdf9",
  "--v-text": "#1b2a26",
  "--v-muted": "#53655f",
  "--v-line": "#dbe7e2",
  "--v-primary": "#1d5c4a",
  "--v-primary-dark": "#164839",
  "--v-secondary": "#5aa9d6",
  "--v-mint": "#dff0e8",
  "--v-mint-dark": "#c9e4d7",
  "--v-sky": "#dceff9",
  "--v-peach": "#fde4d2",
  "--v-rose": "#fbdfe3",
  "--v-lavender": "#e6e2f8",
  "--v-butter": "#fbeec9",
} as CSSProperties

/** Palette, header and footer shared by every page in the Village variant. */
export function VillageShell({
  current,
  children,
}: {
  current: SitePage
  children: ReactNode
}) {
  return (
    <div
      style={palette}
      className={cn(
        nunito.variable,
        "flex min-h-full flex-col bg-(--v-bg) font-sans text-(--v-text) antialiased selection:bg-(--v-mint) selection:text-(--v-primary)"
      )}
    >
      <a
        href="#village-main"
        className={cn(
          heading,
          focusRing,
          "sr-only rounded-full bg-(--v-primary) px-5 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:top-14 focus:left-4 focus:z-100"
        )}
      >
        Skip to main content
      </a>

      <VillageHeader current={current} />

      <main id="village-main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>

      <VillageFooter />
    </div>
  )
}
