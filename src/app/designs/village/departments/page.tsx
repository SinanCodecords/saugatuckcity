import { VillageAboutVisit } from "@/components/designs/village/about/visit-city-hall"
import { VillageDepartmentGroup } from "@/components/designs/village/departments/department-group"
import { VillageDepartmentsHero } from "@/components/designs/village/departments/departments-hero"
import { VillageShell } from "@/components/designs/village/shell"
import { departmentGroups } from "@/content/departments"

export const metadata = { title: "Departments · Village" }

export default function VillageDepartmentsPage() {
  return (
    <VillageShell current="departments">
      <VillageDepartmentsHero />
      {departmentGroups.map((group) => (
        <VillageDepartmentGroup key={group.id} group={group} />
      ))}
      <VillageAboutVisit />
    </VillageShell>
  )
}
