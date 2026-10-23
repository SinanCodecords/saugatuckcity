import { VillageAlert } from "@/components/designs/village/alert-card"
import { VillageExplore } from "@/components/designs/village/explore-band"
import { VillageHero } from "@/components/designs/village/hero"
import { VillageServices } from "@/components/designs/village/popular-services"
import { VillageShell } from "@/components/designs/village/shell"
import { VillageSignup } from "@/components/designs/village/signup-card"
import { VillageHappening } from "@/components/designs/village/whats-happening"

export const metadata = { title: "Village" }

export default function VillagePage() {
  return (
    <VillageShell current="home">
      <VillageHero />
      <VillageAlert />
      <VillageServices />
      <VillageHappening />
      <VillageExplore />
      <VillageSignup />
    </VillageShell>
  )
}
