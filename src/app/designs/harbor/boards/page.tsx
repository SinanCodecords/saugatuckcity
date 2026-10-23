import { VisitCityHall } from "@/components/designs/harbor/about/visit-city-hall"
import { AttendAndServe } from "@/components/designs/harbor/boards/attend-and-serve"
import { BoardGroups } from "@/components/designs/harbor/boards/board-groups"
import { MeetingSchedule } from "@/components/designs/harbor/boards/meeting-schedule"
import { BoardsPageHeader } from "@/components/designs/harbor/boards/page-header"
import { HarborShell } from "@/components/designs/harbor/shell"

export const metadata = { title: "Boards & Committees · Harbor" }

export default function HarborBoardsPage() {
  return (
    <HarborShell current="boards">
      <BoardsPageHeader />
      <MeetingSchedule />
      <BoardGroups />
      <AttendAndServe />
      <VisitCityHall />
    </HarborShell>
  )
}
