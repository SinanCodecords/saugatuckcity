import type { CSSProperties } from "react"

import { Departments } from "@/components/designs/harbor/departments"
import { Hero } from "@/components/designs/harbor/hero"
import { NewsAndMeetings } from "@/components/designs/harbor/news-meetings"
import { QuickLinks } from "@/components/designs/harbor/quick-links"
import { SiteFooter } from "@/components/designs/harbor/site-footer"
import { SiteHeader } from "@/components/designs/harbor/site-header"

export const metadata = { title: "Harbor" }

const palette = {
  "--navy": "#0b2545",
  "--navy-dark": "#071a33",
  "--gold": "#c9a227",
  "--gold-light": "#dbb64a",
} as CSSProperties

export default function HarborPage() {
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

      <SiteHeader />

      <main id="harbor-main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <QuickLinks />
        <NewsAndMeetings />
        <Departments />
      </main>

      <SiteFooter />
    </div>
  )
}
