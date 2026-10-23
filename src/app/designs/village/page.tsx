import type { CSSProperties } from "react"
import { Nunito } from "next/font/google"

import { VillageAlert } from "@/components/designs/village/alert-card"
import { VillageExplore } from "@/components/designs/village/explore-band"
import { VillageFooter } from "@/components/designs/village/footer"
import { VillageHeader } from "@/components/designs/village/header"
import { VillageHero } from "@/components/designs/village/hero"
import { VillageServices } from "@/components/designs/village/popular-services"
import { focusRing, heading } from "@/components/designs/village/shared"
import { VillageSignup } from "@/components/designs/village/signup-card"
import { VillageHappening } from "@/components/designs/village/whats-happening"
import { cn } from "@/lib/utils"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-village-heading",
  display: "swap",
})

export const metadata = { title: "Village" }

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

export default function VillagePage() {
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

      <VillageHeader />

      <main id="village-main" tabIndex={-1} className="flex-1 outline-none">
        <VillageHero />
        <VillageAlert />
        <VillageServices />
        <VillageHappening />
        <VillageExplore />
        <VillageSignup />
      </main>

      <VillageFooter />
    </div>
  )
}
