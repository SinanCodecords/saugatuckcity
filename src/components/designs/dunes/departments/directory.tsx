import { departmentDirectory, departmentGroups } from "@/content/departments"

import { container, SectionHeading } from "../about/shared"
import { DunesDepartmentEntry } from "./entry"

const partLabels = ["Part one", "Part two", "Part three"]

/** Departments in page order, so the 01–09 numbering runs across both groups. */
const ordered = departmentGroups.flatMap((group) =>
  departmentDirectory.filter((department) => department.group === group.id)
)

const groups = departmentGroups.map((group) => ({
  ...group,
  departments: ordered
    .map((department, index) => ({ department, number: index + 1 }))
    .filter(({ department }) => department.group === group.id),
}))

export function DunesDepartmentsDirectory() {
  return (
    <>
      {groups.map((group, groupIndex) => {
        const headingId = `dn-departments-${group.id}`
        const offices = group.departments.length
        return (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={headingId}
            className="scroll-mt-56 border-t border-(--dn-rule)"
          >
            <div className={`${container} py-14 lg:py-20`}>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end lg:gap-10">
                <div className="lg:col-span-7">
                  <SectionHeading
                    id={headingId}
                    label={`${partLabels[groupIndex] ?? `Part ${groupIndex + 1}`} · ${offices} ${offices === 1 ? "office" : "offices"}`}
                    title={group.title}
                  />
                </div>
                <p className="max-w-md text-[15px] leading-relaxed text-(--dn-ink-soft) lg:col-span-4 lg:col-start-9">
                  {group.description}
                </p>
              </div>

              <ol
                start={group.departments[0]?.number}
                className="mt-8 border-t border-(--dn-ink) lg:mt-12"
              >
                {group.departments.map(({ department, number }) => (
                  <li key={department.id}>
                    <DunesDepartmentEntry
                      department={department}
                      number={number}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )
      })}
    </>
  )
}
