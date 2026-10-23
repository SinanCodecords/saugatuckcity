import type { CSSProperties } from "react"
import { Public_Sans } from "next/font/google"

import { CityHall } from "@/components/designs/federal/city-hall"
import { Hero } from "@/components/designs/federal/hero"
import { MeetingsTable } from "@/components/designs/federal/meetings-table"
import { MostRequested } from "@/components/designs/federal/most-requested"
import { NewsCollection } from "@/components/designs/federal/news-collection"
import { OfficialBanner } from "@/components/designs/federal/official-banner"
import { SiteAlert } from "@/components/designs/federal/site-alert"
import { SiteFooter } from "@/components/designs/federal/site-footer"
import { SiteHeader } from "@/components/designs/federal/site-header"

export const metadata = { title: "Federal" }

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

/** USWDS design tokens, scoped to this variant. */
const palette = {
  "--primary": "#005ea2",
  "--primary-dark": "#1a4480",
  "--primary-darker": "#162e51",
  "--primary-light": "#d9e8f6",
  "--ink": "#1b1b1b",
  "--gray-5": "#f0f0f0",
  "--gray-10": "#dfe1e2",
  "--gray-30": "#a9aeb1",
  "--gray-60": "#565c65",
  "--warning": "#ffbe2e",
  "--warning-light": "#faf3d1",
  "--focus": "#2491ff",
} as CSSProperties

export default function FederalPage() {
  return (
    <div
      id="federal-top"
      style={palette}
      className={`${publicSans.className} flex min-h-screen flex-col bg-white text-[17px] leading-[1.6] text-(--ink) antialiased`}
    >
      <a
        href="#federal-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-12 focus:left-4 focus:z-[200] focus:rounded-[4px] focus:bg-(--primary-dark) focus:px-4 focus:py-3 focus:text-[17px] focus:font-bold focus:text-white focus:outline-4 focus:outline-offset-2 focus:outline-(--focus)"
      >
        Skip to main content
      </a>

      <OfficialBanner />
      <SiteHeader />
      <SiteAlert />

      <main id="federal-main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <MostRequested />
        <NewsCollection />
        <MeetingsTable />
        <CityHall />
      </main>

      <SiteFooter />
    </div>
  )
}
