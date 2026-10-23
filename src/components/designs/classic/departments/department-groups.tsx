import { SectionHeading } from "../about/ui"
import { DepartmentPanel } from "./department-panel"
import { groupedDepartments, groupHeadingId } from "./utils"

/** The directory: one section per department group, each department a panel. */
export function DepartmentGroups() {
  return (
    <>
      {groupedDepartments.map((group) => (
        <section key={group.id} aria-labelledby={groupHeadingId(group.id)}>
          <SectionHeading
            id={groupHeadingId(group.id)}
            aside={`${group.departments.length} departments`}
          >
            {group.title}
          </SectionHeading>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-(--body)">
            {group.description}
          </p>

          <ul className="mt-6 space-y-6">
            {group.departments.map((department) => (
              <li key={department.id}>
                <DepartmentPanel department={department} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}
