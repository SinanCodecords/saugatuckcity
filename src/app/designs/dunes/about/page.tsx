import { DunesAboutGovernment } from "@/components/designs/dunes/about/government"
import { DunesAboutHistory } from "@/components/designs/dunes/about/history"
import {
  DunesAboutFacts,
  DunesAboutIntro,
} from "@/components/designs/dunes/about/intro"
import { DunesAboutHeader } from "@/components/designs/dunes/about/page-header"
import { DunesAboutIndex } from "@/components/designs/dunes/about/section-index"
import { DunesAboutVisit } from "@/components/designs/dunes/about/visit"
import { DunesShell } from "@/components/designs/dunes/shell"

export const metadata = { title: "About · Dunes" }

export default function DunesAboutPage() {
  return (
    <DunesShell current="about">
      <DunesAboutHeader />
      <DunesAboutIntro />
      <DunesAboutFacts />
      <DunesAboutIndex />
      <DunesAboutGovernment />
      <DunesAboutHistory />
      <DunesAboutVisit />
    </DunesShell>
  )
}
