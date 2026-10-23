import { DunesAboutVisit } from "@/components/designs/dunes/about/visit"
import { DunesDepartmentsContactIndex } from "@/components/designs/dunes/departments/contact-index"
import { DunesDepartmentsDirectory } from "@/components/designs/dunes/departments/directory"
import { DunesDepartmentsHeader } from "@/components/designs/dunes/departments/page-header"
import { DunesShell } from "@/components/designs/dunes/shell"

export const metadata = { title: "Departments · Dunes" }

export default function DunesDepartmentsPage() {
  return (
    <DunesShell current="departments">
      <DunesDepartmentsHeader />
      <DunesDepartmentsContactIndex />
      <DunesDepartmentsDirectory />
      <DunesAboutVisit />
    </DunesShell>
  )
}
