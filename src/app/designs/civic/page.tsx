import type { CSSProperties } from "react"

import { Departments } from "@/components/designs/civic/departments"
import { Hero } from "@/components/designs/civic/hero"
import { NewsCalendarLinks } from "@/components/designs/civic/news-calendar-links"
import { PopularServices } from "@/components/designs/civic/popular-services"
import { SiteFooter } from "@/components/designs/civic/site-footer"
import {
  AlertBar,
  MainNavBar,
  SiteHeader,
} from "@/components/designs/civic/site-header"

export const metadata = { title: "Civic" }

const palette = {
  "--civic-blue": "#1f4e8c",
  "--civic-blue-dark": "#173b6b",
  "--civic-blue-darker": "#112c50",
  "--civic-blue-tint": "#e8eff8",
  "--civic-gray": "#f3f4f6",
} as CSSProperties

export default function CivicPage() {
  return (
    <div
      style={palette}
      className="flex min-h-screen flex-col bg-white font-sans text-[17px] leading-relaxed text-slate-900 antialiased"
    >
      <a
        href="#civic-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-12 focus:left-4 focus:z-[200] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-(--civic-blue) focus:shadow-lg focus:ring-2 focus:ring-(--civic-blue) focus:outline-none"
      >
        Skip to main content
      </a>

      <SiteHeader />
      <MainNavBar />
      <AlertBar />

      <main id="civic-main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <NewsCalendarLinks />
        <PopularServices />
        <Departments />
      </main>

      <SiteFooter />
    </div>
  )
}
