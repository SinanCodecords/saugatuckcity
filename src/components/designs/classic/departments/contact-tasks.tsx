import { ArrowDown } from "lucide-react"

import { commonTasks, departmentDirectory } from "@/content/departments"

import { Widget } from "../about/ui"
import { tasksId } from "./utils"

/** "Who do I contact?": common tasks, each jumping to the department that handles it. */
export function ContactTasks() {
  return (
    <div id={tasksId} className="scroll-mt-32">
      <Widget
        id={`${tasksId}-title`}
        title="Who do I contact?"
        bodyClassName="p-0"
      >
        {/* 1px gaps over a rule-colored background give thin dividers in any grid shape */}
        <ul className="grid gap-px bg-(--rule) sm:grid-cols-2">
          {commonTasks.map((item) => {
            const department = departmentDirectory.find(
              (entry) => entry.id === item.department
            )
            return (
              <li key={item.task} className="bg-white">
                <a
                  href={`#${item.department}`}
                  className="group flex h-full items-start gap-3 px-5 py-3.5 transition-colors hover:bg-(--blue-pale) focus-visible:bg-(--blue-pale) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none focus-visible:ring-inset"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm leading-snug font-semibold text-(--ink) group-hover:text-(--blue-text) group-hover:underline">
                      {item.task}
                    </span>
                    {department ? (
                      <span className="mt-1 block text-xs text-(--muted)">
                        <span className="sr-only">: </span>
                        {department.name}
                      </span>
                    ) : null}
                  </span>
                  <ArrowDown
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-(--muted) transition-colors group-hover:text-(--blue-text)"
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </Widget>
    </div>
  )
}
