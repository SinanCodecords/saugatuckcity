import { VillageAboutHero } from "@/components/designs/village/about/about-hero"
import { VillageAboutFacts } from "@/components/designs/village/about/facts"
import { VillageAboutGovernment } from "@/components/designs/village/about/government"
import { VillageAboutHistory } from "@/components/designs/village/about/history"
import { VillageAboutSectionLinks } from "@/components/designs/village/about/section-links"
import { VillageAboutVisit } from "@/components/designs/village/about/visit-city-hall"
import { VillageShell } from "@/components/designs/village/shell"

export const metadata = { title: "About · Village" }

export default function VillageAboutPage() {
  return (
    <VillageShell current="about">
      <VillageAboutHero />
      <VillageAboutFacts />
      <VillageAboutSectionLinks />
      <VillageAboutGovernment />
      <VillageAboutHistory />
      <VillageAboutVisit />
    </VillageShell>
  )
}
