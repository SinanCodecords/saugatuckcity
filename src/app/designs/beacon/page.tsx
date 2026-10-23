import { Inter_Tight } from "next/font/google"

import { BeaconAlertBar } from "@/components/designs/beacon/alert-bar"
import { BeaconDepartments } from "@/components/designs/beacon/departments"
import { BeaconFooter } from "@/components/designs/beacon/footer"
import { BeaconHeader } from "@/components/designs/beacon/header"
import { BeaconHero } from "@/components/designs/beacon/hero"
import { BeaconMeetings } from "@/components/designs/beacon/meetings"
import { BeaconNews } from "@/components/designs/beacon/news"
import { BeaconQuickActions } from "@/components/designs/beacon/quick-actions"

export const metadata = { title: "Beacon" }

const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-beacon-display",
  weight: ["500", "600", "700", "800"],
})

export default function BeaconPage() {
  return (
    <div
      className={`${display.variable} bg-white font-sans text-[var(--beacon-ink)]`}
      style={
        {
          "--beacon-ink": "#0c0f14",
          "--beacon-ink-soft": "#161b24",
          "--beacon-ink-line": "#262d3a",
          "--beacon-amber": "#f5b400",
          "--beacon-amber-deep": "#d99d00",
          "--beacon-surface": "#f4f5f7",
          "--beacon-line": "#e2e5ea",
          "--beacon-muted": "#5b6472",
          "--beacon-muted-dark": "#aab2bf",
        } as React.CSSProperties
      }
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-12 focus:left-4 focus:z-[200] focus:rounded-md focus:bg-[var(--beacon-amber)] focus:px-4 focus:py-2 focus:font-semibold focus:text-[var(--beacon-ink)] focus:ring-4 focus:ring-white focus:outline-none"
      >
        Skip to main content
      </a>
      <BeaconHeader />
      <main id="main-content">
        <BeaconHero />
        <BeaconAlertBar />
        <BeaconQuickActions />
        <BeaconNews />
        <BeaconMeetings />
        <BeaconDepartments />
      </main>
      <BeaconFooter />
    </div>
  )
}
