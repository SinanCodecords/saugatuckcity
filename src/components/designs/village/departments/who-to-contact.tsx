import { ChevronRight } from "lucide-react"

import { commonTasks } from "@/content/departments"
import { cn } from "@/lib/utils"

import { focusRing, heading } from "../shared"
import { DepartmentIcon, departmentTint, findDepartment } from "./shared"

/** The hero's "Who do I contact?" list, styled like the home "I want to…" card. */
export function VillageWhoToContact() {
  return (
    <div className="rounded-3xl border border-(--v-line) bg-(--v-card) p-3 shadow-[0_20px_45px_-24px_rgba(29,92,74,0.35)] sm:p-4">
      <h2
        id="village-contact-tasks-title"
        className={cn(
          heading,
          "px-3 pt-2 text-lg font-extrabold text-(--v-text) sm:text-xl"
        )}
      >
        Who do I contact?
      </h2>
      <p className="px-3 pt-0.5 pb-3 text-[0.95rem] text-(--v-muted)">
        Pick what you need and we&rsquo;ll take you to the right office.
      </p>
      <ul
        aria-labelledby="village-contact-tasks-title"
        className="flex flex-col gap-1"
      >
        {commonTasks.map((item) => {
          const department = findDepartment(item.department)
          if (!department) return null
          return (
            <li key={item.task}>
              <a
                href={`#${department.id}`}
                className={cn(
                  focusRing,
                  "group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-(--v-text) transition-colors hover:bg-(--v-mint)"
                )}
              >
                <span
                  className={cn(
                    "inline-flex size-10 shrink-0 items-center justify-center rounded-full",
                    departmentTint(department)
                  )}
                >
                  <DepartmentIcon department={department} className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      heading,
                      "block text-base leading-snug font-bold sm:text-[1.05rem]"
                    )}
                  >
                    {item.task}
                  </span>
                  <span className="block text-sm text-(--v-muted)">
                    <span className="sr-only">: </span>
                    {department.name}
                  </span>
                </span>
                <ChevronRight
                  className="size-5 shrink-0 text-(--v-muted) transition-transform group-hover:translate-x-0.5 group-hover:text-(--v-primary)"
                  aria-hidden="true"
                />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
