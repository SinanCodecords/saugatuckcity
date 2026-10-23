import type { Metadata } from "next"
import type { CSSProperties } from "react"

import { CityHall } from "@/components/designs/lakeshore/city-hall"
import { SiteFooter } from "@/components/designs/lakeshore/footer"
import { AlertStrip, SiteHeader } from "@/components/designs/lakeshore/header"
import { Hero } from "@/components/designs/lakeshore/hero"
import { UpcomingMeetings } from "@/components/designs/lakeshore/meetings"
import { LatestNews } from "@/components/designs/lakeshore/news"
import { Services } from "@/components/designs/lakeshore/services"

export const metadata: Metadata = { title: "Lakeshore" }

/**
 * Lakeshore palette, scoped to this variant so it renders identically
 * whether or not the root <html> carries the `.dark` class.
 */
const palette = {
  "--lk-blue": "#0d6aef",
  "--lk-blue-hover": "#0a58c9",
  "--lk-blue-text": "#0a58c9",
  "--lk-blue-tint": "#e8f0fe",
  "--lk-surface": "#f1f5f9",
} as CSSProperties

export default function LakeshorePage() {
  return (
    <div
      style={palette}
      className="min-h-full bg-white font-sans text-slate-900 antialiased selection:bg-(--lk-blue-tint) selection:text-slate-900"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-12 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-(--lk-blue) focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-white"
      >
        Skip to main content
      </a>

      <SiteHeader />
      <AlertStrip />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <Services />
        <LatestNews />
        <UpcomingMeetings />
        <CityHall />
      </main>

      <SiteFooter />
    </div>
  )
}
