import { DunesAboutVisit } from "@/components/designs/dunes/about/visit"
import { DunesParksBeach } from "@/components/designs/dunes/parks/beach"
import {
  DunesParksEvents,
  DunesParksPlanning,
  DunesParksRules,
} from "@/components/designs/dunes/parks/closing"
import { DunesParksGazetteer } from "@/components/designs/dunes/parks/gazetteer"
import { DunesParksGettingThere } from "@/components/designs/dunes/parks/getting-there"
import {
  DunesParksFacts,
  DunesParksIntro,
} from "@/components/designs/dunes/parks/intro"
import { DunesParksHeader } from "@/components/designs/dunes/parks/page-header"
import { DunesShell } from "@/components/designs/dunes/shell"

export const metadata = { title: "Parks & Recreation · Dunes" }

export default function DunesParksPage() {
  return (
    <DunesShell current="parks">
      <DunesParksHeader />
      <DunesParksIntro />
      <DunesParksFacts />
      <DunesParksBeach />
      <DunesParksGettingThere />
      <DunesParksGazetteer />
      <DunesParksEvents />
      <DunesParksRules />
      <DunesParksPlanning />
      <DunesAboutVisit />
    </DunesShell>
  )
}
