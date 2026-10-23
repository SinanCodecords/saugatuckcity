import { CityHallWidget } from "@/components/designs/classic/about/city-hall"
import { BoardGroups } from "@/components/designs/classic/boards/board-groups"
import { GetInvolved } from "@/components/designs/classic/boards/get-involved"
import { JoinMeetingWidget } from "@/components/designs/classic/boards/join-meeting"
import {
  BoardsJumpNav,
  BoardsJumpNavDisclosure,
} from "@/components/designs/classic/boards/jump-nav"
import { BoardsPageHeader } from "@/components/designs/classic/boards/page-header"
import { MeetingSchedule } from "@/components/designs/classic/boards/schedule"
import { ClassicShell } from "@/components/designs/classic/shell"
import { boardsIntro } from "@/content/boards"

export const metadata = { title: "Boards & Committees · Classic" }

export default function ClassicBoardsPage() {
  return (
    <ClassicShell current="boards">
      <BoardsPageHeader />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start lg:gap-12">
          {/* Desktop sidebar. Below lg the same pieces appear inline in the main column. */}
          <aside
            aria-label="Page navigation, meeting access and City Hall"
            className="hidden space-y-6 lg:sticky lg:top-38 lg:block lg:max-h-[calc(100dvh-11rem)] lg:[scrollbar-width:thin] lg:overflow-x-hidden lg:overflow-y-auto lg:overscroll-contain"
          >
            <BoardsJumpNav />
            <JoinMeetingWidget id="classic-boards-join" />
            <CityHallWidget id="classic-boards-city-hall" />
          </aside>

          <div className="min-w-0 space-y-12 sm:space-y-14">
            <p className="max-w-3xl text-base leading-relaxed text-(--body)">
              {boardsIntro.body}
            </p>

            <div className="lg:hidden">
              <BoardsJumpNavDisclosure />
            </div>

            <MeetingSchedule />

            <div className="lg:hidden">
              <JoinMeetingWidget id="classic-boards-join-mobile" />
            </div>

            <BoardGroups />
            <GetInvolved />

            <div className="lg:hidden">
              <CityHallWidget id="classic-boards-city-hall-mobile" />
            </div>
          </div>
        </div>
      </div>
    </ClassicShell>
  )
}
