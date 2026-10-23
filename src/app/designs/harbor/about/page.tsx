import { AtAGlance } from "@/components/designs/harbor/about/at-a-glance"
import { Government } from "@/components/designs/harbor/about/government"
import { History } from "@/components/designs/harbor/about/history"
import { AboutIntro } from "@/components/designs/harbor/about/intro"
import { AboutPageHeader } from "@/components/designs/harbor/about/page-header"
import { SectionLinks } from "@/components/designs/harbor/about/section-links"
import { VisitCityHall } from "@/components/designs/harbor/about/visit-city-hall"
import { HarborShell } from "@/components/designs/harbor/shell"

export const metadata = { title: "About · Harbor" }

export default function HarborAboutPage() {
  return (
    <HarborShell current="about">
      <AboutPageHeader />
      <AtAGlance />
      <AboutIntro />
      <SectionLinks />
      <Government />
      <History />
      <VisitCityHall />
    </HarborShell>
  )
}
