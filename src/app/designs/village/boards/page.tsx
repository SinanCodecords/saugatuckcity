import { VillageAboutVisit } from "@/components/designs/village/about/visit-city-hall"
import { VillageBoardGroup } from "@/components/designs/village/boards/board-group"
import { VillageBoardsHero } from "@/components/designs/village/boards/boards-hero"
import { VillageJoinAndServe } from "@/components/designs/village/boards/join-and-serve"
import { VillagePastCommittees } from "@/components/designs/village/boards/past-committees"
import { VillageShell } from "@/components/designs/village/shell"
import { boardGroups } from "@/content/boards"

export const metadata = { title: "Boards & Committees · Village" }

export default function VillageBoardsPage() {
  return (
    <VillageShell current="boards">
      <VillageBoardsHero />
      {boardGroups.map((group) =>
        group.id === "past" ? (
          <VillagePastCommittees key={group.id} />
        ) : (
          <VillageBoardGroup key={group.id} group={group} />
        )
      )}
      <VillageJoinAndServe />
      <VillageAboutVisit />
    </VillageShell>
  )
}
