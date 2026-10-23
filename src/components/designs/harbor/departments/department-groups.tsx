import { Building2, MapPinned } from "lucide-react"

import { departmentDirectory, departmentGroups } from "@/content/departments"

import { DepartmentCard } from "./department-card"

const groupIcons = {
  "city-hall": Building2,
  elsewhere: MapPinned,
} as const

export function DepartmentGroups() {
  return (
    <div className="bg-white pt-14 pb-14 lg:pt-20 lg:pb-20">
      <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:space-y-20 lg:px-8">
        {departmentGroups.map((group) => {
          const departments = departmentDirectory.filter(
            (department) => department.group === group.id
          )
          const GroupIcon = groupIcons[group.id]
          const headingId = `harbor-group-${group.id}-heading`

          return (
            <section key={group.id} aria-labelledby={headingId}>
              <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b-2 border-(--navy) pb-3">
                <div className="min-w-0">
                  <h2
                    id={headingId}
                    className="flex items-center gap-2.5 text-2xl font-semibold tracking-tight text-(--navy) sm:text-3xl"
                  >
                    <GroupIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-(--gold)"
                    />
                    {group.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    {group.description}
                  </p>
                </div>
                <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                  {departments.length} offices
                </p>
              </div>

              <ul className="mt-6 grid gap-5 lg:grid-cols-2 lg:gap-6">
                {departments.map((department) => (
                  <li key={department.id}>
                    <DepartmentCard department={department} />
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
