import { DunesExplore } from "@/components/designs/dunes/explore"
import { DunesHero } from "@/components/designs/dunes/hero"
import { DunesMeetings } from "@/components/designs/dunes/meetings"
import { DunesNews } from "@/components/designs/dunes/news"
import { DunesServices } from "@/components/designs/dunes/services"
import { DunesShell } from "@/components/designs/dunes/shell"

export const metadata = { title: "Dunes" }

export default function DunesPage() {
  return (
    <DunesShell current="home">
      <DunesHero />
      <DunesServices />
      <DunesNews />
      <DunesMeetings />
      <DunesExplore />
    </DunesShell>
  )
}
