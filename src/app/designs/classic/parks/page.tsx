import { CityHallWidget } from "@/components/designs/classic/about/city-hall"
import {
  ChainFerryPanel,
  GettingToTheBeach,
  OvalBeachPanel,
} from "@/components/designs/classic/parks/beach-and-ferry"
import { OvalBeachTodayWidget } from "@/components/designs/classic/parks/beach-today"
import { ParksFacts } from "@/components/designs/classic/parks/facts"
import {
  ParksJumpNav,
  ParksJumpNavDisclosure,
} from "@/components/designs/classic/parks/jump-nav"
import { ParksPageHeader } from "@/components/designs/classic/parks/page-header"
import { ParkAreas } from "@/components/designs/classic/parks/park-areas"
import {
  ParkCallouts,
  ParkEvents,
  ParkRules,
} from "@/components/designs/classic/parks/park-info"
import { ClassicShell } from "@/components/designs/classic/shell"
import { parksIntro } from "@/content/parks"

export const metadata = { title: "Parks & Recreation · Classic" }

export default function ClassicParksPage() {
  return (
    <ClassicShell current="parks">
      <ParksPageHeader />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start lg:gap-12">
          {/* Desktop sidebar. Below lg the jump list and City Hall appear inline in the main column. */}
          <aside
            aria-label="Page navigation, Oval Beach and City Hall"
            className="hidden space-y-6 lg:sticky lg:top-38 lg:block lg:max-h-[calc(100dvh-11rem)] lg:[scrollbar-width:thin] lg:overflow-x-hidden lg:overflow-y-auto lg:overscroll-contain"
          >
            <ParksJumpNav />
            <OvalBeachTodayWidget id="classic-parks-beach-today" />
            <CityHallWidget id="classic-parks-city-hall" />
          </aside>

          <div className="min-w-0 space-y-12 sm:space-y-14">
            <p className="max-w-3xl text-base leading-relaxed text-(--body)">
              {parksIntro.body}
            </p>

            <div className="lg:hidden">
              <ParksJumpNavDisclosure />
            </div>

            <ParksFacts />

            {/* The two landmarks get full panels; the car-free routes tie them together */}
            <div className="space-y-6">
              <OvalBeachPanel />
              <ChainFerryPanel />
              <GettingToTheBeach />
            </div>

            <ParkAreas />
            <ParkEvents />
            <ParkRules />
            <ParkCallouts />

            <div className="lg:hidden">
              <CityHallWidget id="classic-parks-city-hall-mobile" />
            </div>
          </div>
        </div>
      </div>
    </ClassicShell>
  )
}
