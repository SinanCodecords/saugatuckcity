import { DunesAboutVisit } from "@/components/designs/dunes/about/visit"
import { DunesBoardsCalendar } from "@/components/designs/dunes/boards/calendar"
import { DunesBoardsDirectory } from "@/components/designs/dunes/boards/directory"
import { DunesBoardsHeader } from "@/components/designs/dunes/boards/page-header"
import { DunesBoardsParticipate } from "@/components/designs/dunes/boards/participate"
import { DunesShell } from "@/components/designs/dunes/shell"

export const metadata = { title: "Boards & Committees · Dunes" }

export default function DunesBoardsPage() {
  return (
    <DunesShell current="boards">
      <DunesBoardsHeader />
      <DunesBoardsCalendar />
      <DunesBoardsDirectory />
      <DunesBoardsParticipate />
      <DunesAboutVisit />
    </DunesShell>
  )
}
