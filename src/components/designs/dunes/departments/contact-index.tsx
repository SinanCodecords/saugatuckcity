import { ArrowDown } from "lucide-react"

import { commonTasks, departmentDirectory } from "@/content/departments"

import { container, SectionHeading, serif } from "../about/shared"

const departmentName = new Map(
  departmentDirectory.map((department) => [department.id, department.name])
)

export function DunesDepartmentsContactIndex() {
  const rows = Math.ceil(commonTasks.length / 2)

  return (
    <section
      id="who-to-contact"
      aria-labelledby="dn-departments-contact"
      className="scroll-mt-56 border-t border-(--dn-rule) bg-(--dn-bg-deep)/40"
    >
      <div className={`${container} py-14 lg:py-20`}>
        <SectionHeading
          id="dn-departments-contact"
          label="Common tasks"
          title="Who do I contact?"
        />

        {/* Reads down the first column, then the second, on desktop. */}
        <ul
          className="mt-8 grid grid-cols-1 border-t border-(--dn-ink) lg:mt-12 lg:grid-flow-col lg:grid-cols-2 lg:gap-x-12"
          style={{ gridTemplateRows: `repeat(${rows}, auto)` }}
        >
          {commonTasks.map((item) => (
            <li key={item.task} className="border-b border-(--dn-rule)">
              <a
                href={`#${item.department}`}
                className="group grid h-full grid-cols-[1fr_auto] items-start gap-x-4 rounded-sm py-5 transition-colors hover:bg-(--dn-bg-deep)/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-(--dn-teal) sm:px-3 sm:py-6"
              >
                <span className="min-w-0">
                  <span
                    className={`block ${serif} text-xl leading-snug text-(--dn-ink) transition-colors group-hover:text-(--dn-teal) sm:text-2xl`}
                  >
                    {item.task}
                  </span>
                  <span className="mt-1.5 block text-[11px] tracking-[0.18em] text-(--dn-ink-soft) uppercase">
                    <span className="sr-only">Contact: </span>
                    {departmentName.get(item.department)}
                  </span>
                </span>
                <ArrowDown
                  className="mt-1.5 size-4 shrink-0 text-(--dn-terra) transition-transform duration-200 group-hover:translate-y-0.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
