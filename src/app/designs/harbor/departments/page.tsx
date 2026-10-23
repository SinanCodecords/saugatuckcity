import { VisitCityHall } from "@/components/designs/harbor/about/visit-city-hall"
import { DepartmentGroups } from "@/components/designs/harbor/departments/department-groups"
import { DepartmentsPageHeader } from "@/components/designs/harbor/departments/page-header"
import { WhoToContact } from "@/components/designs/harbor/departments/who-to-contact"
import { HarborShell } from "@/components/designs/harbor/shell"

export const metadata = { title: "Departments · Harbor" }

export default function HarborDepartmentsPage() {
  return (
    <HarborShell current="departments">
      <DepartmentsPageHeader />
      <WhoToContact />
      <DepartmentGroups />
      <VisitCityHall />
    </HarborShell>
  )
}
