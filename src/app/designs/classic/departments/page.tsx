import { CityHallWidget } from "@/components/designs/classic/about/city-hall"
import { ContactTasks } from "@/components/designs/classic/departments/contact-tasks"
import { DepartmentGroups } from "@/components/designs/classic/departments/department-groups"
import {
  JumpNav,
  JumpNavDisclosure,
} from "@/components/designs/classic/departments/jump-nav"
import { DepartmentsPageHeader } from "@/components/designs/classic/departments/page-header"
import { ClassicShell } from "@/components/designs/classic/shell"
import { departmentsIntro } from "@/content/departments"

export const metadata = { title: "Departments · Classic" }

export default function ClassicDepartmentsPage() {
  return (
    <ClassicShell current="departments">
      <DepartmentsPageHeader />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start lg:gap-12">
          {/* Desktop sidebar. Below lg the same pieces appear inline in the main column. */}
          <aside
            aria-label="Page navigation and City Hall"
            className="hidden space-y-6 lg:sticky lg:top-38 lg:block lg:max-h-[calc(100dvh-11rem)] lg:[scrollbar-width:thin] lg:overflow-x-hidden lg:overflow-y-auto lg:overscroll-contain"
          >
            <JumpNav />
            <CityHallWidget id="classic-departments-city-hall" />
          </aside>

          <div className="min-w-0 space-y-12 sm:space-y-14">
            <p className="max-w-3xl text-base leading-relaxed text-(--body)">
              {departmentsIntro.body}
            </p>

            <div className="lg:hidden">
              <JumpNavDisclosure />
            </div>

            <ContactTasks />
            <DepartmentGroups />

            <div className="lg:hidden">
              <CityHallWidget id="classic-departments-city-hall-mobile" />
            </div>
          </div>
        </div>
      </div>
    </ClassicShell>
  )
}
