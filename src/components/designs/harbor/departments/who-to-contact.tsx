import { ArrowRight, MessageCircleQuestion } from "lucide-react"

import { commonTasks, departmentDirectory } from "@/content/departments"

const departmentNames = new Map(
  departmentDirectory.map((department) => [department.id, department.name])
)

export function WhoToContact() {
  return (
    <section
      aria-labelledby="harbor-who-heading"
      className="relative z-10 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-16 overflow-hidden rounded-lg border border-t-3 border-slate-200 border-t-(--gold) bg-white shadow-[0_12px_40px_-12px_rgba(11,37,69,0.35)] sm:-mt-20 lg:-mt-24">
          <div className="flex items-start gap-4 border-b border-slate-200 px-5 py-5 sm:px-7 lg:px-8">
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm"
            >
              <MessageCircleQuestion className="size-5" />
            </span>
            <div className="min-w-0">
              <h2
                id="harbor-who-heading"
                className="text-xl font-semibold tracking-tight text-(--navy) sm:text-2xl"
              >
                Who do I contact?
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Pick what you need and we&apos;ll take you to the right office.
              </p>
            </div>
          </div>

          <ul className="grid gap-x-8 px-3 py-3 sm:px-5 md:grid-cols-2 lg:px-6">
            {commonTasks.map((item) => (
              <li
                key={item.task}
                className="border-b border-slate-100 last:border-b-0 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
              >
                <a
                  href={`#${item.department}`}
                  className="group flex items-center justify-between gap-4 rounded-md px-2 py-3.5 transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none"
                >
                  <span className="flex min-w-0 flex-col">
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-(--navy) sm:text-base">
                      {item.task}
                    </span>
                    <span className="mt-0.5 text-xs text-slate-600">
                      {departmentNames.get(item.department)}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-5 shrink-0 text-(--gold) transition-transform group-hover:translate-x-0.5 group-hover:text-(--navy)"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
