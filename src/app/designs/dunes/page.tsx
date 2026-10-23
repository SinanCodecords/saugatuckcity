import type { CSSProperties } from "react"
import { Fraunces } from "next/font/google"

import { DunesExplore } from "@/components/designs/dunes/explore"
import { DunesFooter } from "@/components/designs/dunes/footer"
import { DunesHeader } from "@/components/designs/dunes/header"
import { DunesHero } from "@/components/designs/dunes/hero"
import { DunesMeetings } from "@/components/designs/dunes/meetings"
import { DunesNews } from "@/components/designs/dunes/news"
import { DunesServices } from "@/components/designs/dunes/services"

export const metadata = { title: "Dunes" }

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-dunes-serif",
  axes: ["opsz", "SOFT"],
  display: "swap",
})

/**
 * Palette is scoped to this wrapper so the variant renders identically
 * whether or not the root <html> carries the `.dark` class.
 */
const palette = {
  "--dn-bg": "#f6f1e8",
  "--dn-bg-deep": "#ede5d6",
  "--dn-ink": "#1f1d1a",
  "--dn-ink-soft": "#5c574f",
  "--dn-rule": "#d9d0c1",
  "--dn-teal": "#2a6f7a",
  "--dn-teal-deep": "#1f5560",
  "--dn-terra": "#a5452f",
  "--dn-cream-on-dark": "#f6f1e8",
  "--dn-muted-on-dark": "#b8b0a3",
} as CSSProperties

export default function DunesPage() {
  return (
    <div
      className={`${fraunces.variable} flex min-h-full flex-col bg-(--dn-bg) font-sans text-(--dn-ink) antialiased`}
      style={palette}
    >
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-sm bg-(--dn-ink) px-4 py-2 text-sm font-medium text-(--dn-cream-on-dark) focus:not-sr-only focus:fixed focus:top-12 focus:left-4 focus:outline-2 focus:outline-offset-2 focus:outline-(--dn-teal)"
      >
        Skip to main content
      </a>

      <DunesHeader />

      <main id="main-content" className="flex-1">
        <DunesHero />
        <DunesServices />
        <DunesNews />
        <DunesMeetings />
        <DunesExplore />
      </main>

      <DunesFooter />
    </div>
  )
}
