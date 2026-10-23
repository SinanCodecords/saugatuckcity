import { Departments } from "@/components/designs/harbor/departments"
import { Hero } from "@/components/designs/harbor/hero"
import { NewsAndMeetings } from "@/components/designs/harbor/news-meetings"
import { QuickLinks } from "@/components/designs/harbor/quick-links"
import { HarborShell } from "@/components/designs/harbor/shell"

export const metadata = { title: "Harbor" }

export default function HarborPage() {
  return (
    <HarborShell current="home">
      <Hero />
      <QuickLinks />
      <NewsAndMeetings />
      <Departments />
    </HarborShell>
  )
}
