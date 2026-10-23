import { VillageAboutVisit } from "@/components/designs/village/about/visit-city-hall"
import { VillageBeachDay } from "@/components/designs/village/parks/beach-day"
import { VillageEventsAndRules } from "@/components/designs/village/parks/events-and-rules"
import { VillageParksFacts } from "@/components/designs/village/parks/facts"
import { VillageFindAPark } from "@/components/designs/village/parks/find-a-park"
import { VillageGettingThere } from "@/components/designs/village/parks/getting-there"
import { VillageHostAndPlan } from "@/components/designs/village/parks/host-and-plan"
import { VillageParkArea } from "@/components/designs/village/parks/park-area"
import { VillageParksHero } from "@/components/designs/village/parks/parks-hero"
import { VillageShell } from "@/components/designs/village/shell"
import { parkAreas } from "@/content/parks"

export const metadata = { title: "Parks & Recreation · Village" }

export default function VillageParksPage() {
  return (
    <VillageShell current="parks">
      <VillageParksHero />
      <VillageParksFacts />
      <VillageBeachDay />
      <VillageGettingThere />
      <VillageFindAPark />
      {parkAreas.map((area) => (
        <VillageParkArea key={area.id} area={area} />
      ))}
      <VillageEventsAndRules />
      <VillageHostAndPlan />
      <VillageAboutVisit />
    </VillageShell>
  )
}
