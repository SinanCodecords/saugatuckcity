import { Announcements } from "@/components/designs/classic/announcements"
import { Departments } from "@/components/designs/classic/departments"
import { Hero } from "@/components/designs/classic/hero"
import { QuickLinks } from "@/components/designs/classic/quick-links"
import { ClassicShell } from "@/components/designs/classic/shell"

export const metadata = { title: "Classic" }

export default function ClassicPage() {
  return (
    <ClassicShell current="home">
      <Hero />
      <QuickLinks />
      <Announcements />
      <Departments />
    </ClassicShell>
  )
}
