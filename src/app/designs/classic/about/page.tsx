import { CityHallWidget } from "@/components/designs/classic/about/city-hall"
import { AboutFacts } from "@/components/designs/classic/about/facts"
import { AboutGovernment } from "@/components/designs/classic/about/government"
import { AboutHistory } from "@/components/designs/classic/about/history"
import { AboutPageHeader } from "@/components/designs/classic/about/page-header"
import {
  SectionNav,
  SectionNavDisclosure,
} from "@/components/designs/classic/about/section-nav"
import { ClassicShell } from "@/components/designs/classic/shell"
import { aboutIntro } from "@/content/about"

export const metadata = { title: "About · Classic" }

export default function ClassicAboutPage() {
  return (
    <ClassicShell current="about">
      <AboutPageHeader />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start lg:gap-12">
          {/* Desktop sidebar. Below lg the same pieces appear inline in the main column. */}
          <aside
            aria-label="Section navigation and City Hall"
            className="hidden space-y-6 lg:sticky lg:top-32 lg:block lg:max-h-[calc(100dvh-9.5rem)] lg:[scrollbar-width:thin] lg:overflow-x-hidden lg:overflow-y-auto lg:overscroll-contain"
          >
            <SectionNav />
            <CityHallWidget id="classic-about-city-hall" />
          </aside>

          <div className="min-w-0 space-y-12 sm:space-y-14">
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-(--body)">
              {aboutIntro.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="lg:hidden">
              <SectionNavDisclosure />
            </div>

            <AboutFacts />
            <AboutGovernment />
            <AboutHistory />

            <div className="lg:hidden">
              <CityHallWidget id="classic-about-city-hall-mobile" />
            </div>
          </div>
        </div>
      </div>
    </ClassicShell>
  )
}
