import { VisitCityHall } from "@/components/designs/harbor/about/visit-city-hall"
import { BeachAndFerry } from "@/components/designs/harbor/parks/beach-and-ferry"
import { EventsAndRules } from "@/components/designs/harbor/parks/events-and-rules"
import { ParksFacts } from "@/components/designs/harbor/parks/facts"
import { GettingToTheBeach } from "@/components/designs/harbor/parks/getting-to-the-beach"
import { ParksPageHeader } from "@/components/designs/harbor/parks/page-header"
import { ParkAreas } from "@/components/designs/harbor/parks/park-areas"
import { HarborShell } from "@/components/designs/harbor/shell"

export const metadata = { title: "Parks & Recreation · Harbor" }

export default function HarborParksPage() {
  return (
    <HarborShell current="parks">
      <ParksPageHeader />
      <ParksFacts />
      <BeachAndFerry />
      <GettingToTheBeach />
      <ParkAreas />
      <EventsAndRules />
      <VisitCityHall />
    </HarborShell>
  )
}
